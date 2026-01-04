'use client';

import axios from 'axios';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { Tooltip } from 'react-tooltip';
import PartyVoteDistributionChart from './charts/PartyVoteDistributionChart';
import { electionData } from './data';
import StateMapChart from './maps/StateMapChart';
import { ResultTable } from './tables/ResultsTable';
import { getTableData } from './tables/columns';
import { getChartData, mapCSV } from './tables/utils/csvMapper';
import { CSVData, ElectionConfig, ElectionType } from './types';

export default function StateDetailPage({ stateId }: { stateId: string }) {
  const [partyWiseData, setPartyWiseData] = useState<CSVData | null>(null);
  const [constituencyWiseData, setConstituencyWiseData] = useState<CSVData | null>(null);
  const [loading, setLoading] = useState(true);
  const config = electionData[stateId];
  const [currentElection, setCurrentElection] = useState(config?.availableElections[0]);
  const electionKey = !!currentElection
    ? currentElection.type === ElectionType.Assembly
      ? 'assembly'
      : 'loksabha'
    : null;

  const fetchPartyWiseData = useCallback(async () => {
    try {
      const response = await axios.get(`/data/${stateId}/${electionKey}-party-wise.csv`);
      const text = response.data;
      const data = mapCSV(text, currentElection?.mergeColumns);
      setPartyWiseData(data);
    } catch (error) {
      console.log('Error fetching party-wise data:', error);
    }
  }, [stateId, electionKey, currentElection?.mergeColumns]);

  const fetchConstituencyWiseData = useCallback(async () => {
    try {
      const response = await axios.get(`/data/${stateId}/${electionKey}-constituency-wise.csv`);
      const text = response.data;
      const data = mapCSV(text, currentElection?.mergeColumns);
      setConstituencyWiseData(data);
    } catch (error) {
      console.log('Error fetching constituency-wise data:', error);
    }
  }, [stateId, electionKey, currentElection?.mergeColumns]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      await Promise.all([fetchPartyWiseData(), fetchConstituencyWiseData()]);
    } finally {
      setLoading(false);
    }
  }, [fetchPartyWiseData, fetchConstituencyWiseData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleElectionChange = (election: (typeof config.availableElections)[0]) => {
    setCurrentElection(election);
  };

  if (!currentElection) {
    return null;
  }

  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div>
          <Link
            href="/polls"
            className="inline-flex items-center text-primary hover:text-primary-light mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Polls
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">{config.stateName}</h1>
          <p className="text-neutral-600 text-lg mb-6">{currentElection.name}</p>
        </div>

        {/* Election Type Selector */}
        {config.availableElections.length > 1 && (
          <ElectionSelector
            availableElections={config.availableElections}
            currentElection={currentElection}
            onElectionChange={handleElectionChange}
          />
        )}
        {loading && (
          <div className="flex items-center justify-center h-screen">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}
        {partyWiseData && <ResultTable {...getTableData(partyWiseData)} />}
        {partyWiseData && (
          <PartyVoteDistributionChart
            data={getChartData(partyWiseData, currentElection.estimatedColumn, currentElection.actualColumn)}
          />
        )}
        {constituencyWiseData && <ResultTable {...getTableData(constituencyWiseData)} scrollable />}
        <StateMapChart name={stateId} height={300} scale={2000} onEntrySelected={console.log} />
        <Tooltip id="district-tooltip" />
      </div>
    </main>
  );
}

const ElectionSelector = ({
  availableElections,
  currentElection,
  onElectionChange,
}: {
  availableElections: ElectionConfig[];
  currentElection: ElectionConfig;
  onElectionChange: (election: ElectionConfig) => void;
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-neutral-800 mb-4">Select Election Type</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableElections.map((election) => (
          <div
            key={election.name}
            onClick={() => onElectionChange(election)}
            className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              currentElection.name === election.name
                ? 'border-primary bg-primary/5 shadow-lg scale-105'
                : 'border-neutral-200 bg-white hover:border-primary/50 hover:shadow-md'
            }`}
          >
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    election.type === ElectionType.Assembly
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {election.type === ElectionType.Assembly ? 'Assembly' : 'Lok Sabha'}
                </span>
                {currentElection.name === election.name && (
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <ReactSVG src="/assets/icons/check.svg" className="size-3 text-white" />
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">{election.name}</h3>
              {election.surveyDate && <p className="text-sm text-neutral-600">Survey Date: {election.surveyDate}</p>}
              {election.electionDate && (
                <p className="text-sm text-neutral-600">Election Date: {election.electionDate}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
