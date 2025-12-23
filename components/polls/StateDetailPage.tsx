'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import PartyVoteDistributionChart from './charts/PartyVoteDistributionChart';
import StateMapChart from './maps/StateMapChart';
import { PartyVoteDistributionTable } from './tables/PartyWiseDistributionTable';
import { PartyWiseEntry } from './tables/types';

interface ConstituencyWiseResult {
  constituencyName: string;
  party: string;
  predictedVotes: string;
  actualVotes: string;
  winnerMargin: string;
  totalVotes: string;
  turnoutPercentage: string;
}

interface StateData {
  id: string;
  name: string;
  electionName: string;
}

export default function StateDetailPage({ state }: { state: StateData }) {
  const [partyWiseData, setPartyWiseData] = useState<PartyWiseEntry[]>([]);
  const [constituencyWiseData, setConstituencyWiseData] = useState<ConstituencyWiseResult[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPartyWiseData = useCallback(async () => {
    try {
      const response = await fetch(`/data/${state.id}-party-wise.csv`);
      const text = await response.text();
      const lines = text.split('\n').filter((line) => line.trim());
      const data = lines.slice(1).map((line) => {
        const values = line.split(',');
        return {
          partyName: values[0],
          estimatedSeatsBefore: values[1],
          estimatedPlusMinus: values[2],
          estimatedSeatsAfter: values[3],
          actualSeatsReceived: values[4],
        };
      });
      setPartyWiseData(data);
    } catch (error) {
      console.error('Error fetching party-wise data:', error);
    }
  }, [state.id]);

  const fetchConstituencyWiseData = useCallback(async () => {}, [state.id]);

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

  if (loading) {
    return (
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-neutral-600">Loading election data...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/polls"
            className="inline-flex items-center text-primary hover:text-primary-light mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Polls
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">{state.name}</h1>
          <p className="text-neutral-600 text-lg">{state.electionName}</p>
        </div>
        <PartyVoteDistributionTable partyWiseData={partyWiseData} />
        <StateMapChart name={state.id} height={300} scale={2000} onEntrySelected={console.log} />
        <Tooltip id="district-tooltip" />

        <PartyVoteDistributionChart partyWiseData={partyWiseData} />
      </div>
    </main>
  );
}
