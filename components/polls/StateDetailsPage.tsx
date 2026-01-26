'use client';

import axios from 'axios';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { Button } from '../ui/button';
import ConstituencyDetailModal from './ConstituencyDetailModal';
import { ElectionSelector } from './ElectionSelector';
import { Methodology } from './Methodology';
import PartyPredictionGrid from './PartyPredictionGrid';
import PartyVoteDistributionChart from './charts/PartyVoteDistributionChart';
import { electionData } from './data';
import StateMapChart from './maps/StateMapChart';
import { ResultTable } from './tables/ResultsTable';
import { getTableColumns } from './tables/columns';
import { getChartData, mapCSV, recalculateMergeCells } from './tables/utils/csvMapper';
import { CSVData, ElectionType } from './types';

export default function StateDetailPage({ stateId }: { stateId: string }) {
  const defaultQueryElectionType = useSearchParams().get('election');
  const [partyWiseData, setPartyWiseData] = useState<CSVData | null>(null);
  const [constituencyWiseData, setConstituencyWiseData] = useState<CSVData | null>(null);
  const [currentDistrictData, setCurrentDistrictData] = useState<CSVData | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedConstituency, setSelectedConstituency] = useState<Record<string, string> | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const config = electionData[stateId];
  const [currentElection, setCurrentElection] = useState(
    config?.availableElections[defaultQueryElectionType ? parseInt(defaultQueryElectionType) : 0]
  );
  const electionKey = !!currentElection
    ? currentElection.type === ElectionType.Assembly
      ? 'assembly'
      : currentElection.type === ElectionType.LokSabha
      ? 'loksabha'
      : 'municipal'
    : null;

  const fetchPartyWiseData = useCallback(async () => {
    try {
      const response = await axios.get(`/data/${stateId}/${electionKey}-party-wise.csv`);
      const text = response.data;
      const data = mapCSV(text, currentElection);
      setPartyWiseData(data);
    } catch (error) {
      console.log('Error fetching party-wise data:', error);
    }
  }, [stateId, electionKey, currentElection]);

  const fetchConstituencyWiseData = useCallback(async () => {
    try {
      const key = currentElection?.type === ElectionType.Municipal ? 'ward' : 'constituency';
      const response = await axios.get(`/data/${stateId}/${electionKey}-${key}-wise.csv`);
      const text = response.data;
      const data = mapCSV(text, currentElection);
      setConstituencyWiseData(data);
      setCurrentDistrictData(data);
    } catch (error) {
      console.log('Error fetching constituency-wise data:', error);
    }
  }, [stateId, electionKey, currentElection]);

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

  const handleDistrictSelection = (district: string) => {
    if (selectedDistrict === district) {
      setSelectedDistrict(null);
      return;
    }
    if (constituencyWiseData && constituencyWiseData.headers.includes('District')) {
      setSelectedDistrict(district);
    }
  };

  const handleClearDistrictSelection = () => {
    setSelectedDistrict(null);
    setCurrentDistrictData(constituencyWiseData);
  };

  const handleConstituencyClick = (row: Record<string, string>) => {
    if (currentElection?.constituencyModalConfig) {
      setSelectedConstituency(row);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedConstituency(null);
  };

  useEffect(() => {
    if (constituencyWiseData && constituencyWiseData.headers.includes('District')) {
      if (selectedDistrict) {
        const districtData = constituencyWiseData?.data.filter((entry) =>
          entry['District'].toLowerCase().startsWith(selectedDistrict.toLowerCase())
        );
        const updatedMergeCells = recalculateMergeCells(districtData, currentElection?.mergeColumns);

        setCurrentDistrictData({
          ...constituencyWiseData,
          data: districtData,
          mergeCells: updatedMergeCells,
        });
      } else {
        setCurrentDistrictData(constituencyWiseData);
      }
    }
  }, [selectedDistrict, constituencyWiseData, currentElection]);

  const DistrictSelector = () => {
    return (
      <div className="flex flex-col">
        {selectedDistrict && (
          <div className="flex flex-row items-center mb-4 gap-4">
            <p className="text-neutral-600">
              Showing results for: <span className="font-semibold text-primary">{selectedDistrict}</span>
            </p>
            <Button onClick={handleClearDistrictSelection}>
              <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear Selection
            </Button>
          </div>
        )}
        <StateMapChart
          name={stateId}
          height={300}
          scale={2000}
          onHoverStateChange={() => {}}
          onEntrySelected={handleDistrictSelection}
          selectedDistrict={selectedDistrict}
        />
      </div>
    );
  };

  if (!currentElection) {
    return null;
  }

  return (
    <div className="py-16">
      <section className="page-header mb-6 px-6 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/polls"
            className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Polls
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{config.stateName}</h1>
          <p className="text-white/80 text-lg">{currentElection.name}</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-6 lg:px-0">
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
        {partyWiseData && (
          <PartyPredictionGrid
            csvData={partyWiseData}
            estimatedColumn={currentElection.estimatedColumn}
            actualColumn={currentElection.actualColumn}
            title="Party-wise Prediction Analysis"
          />
        )}
        {partyWiseData && (
          <ResultTable
            csvData={partyWiseData}
            columns={getTableColumns(partyWiseData)}
            title="Detailed Party-wise Data"
            totalConfig={currentElection.totalConfig}
          />
        )}
        {partyWiseData && (
          <PartyVoteDistributionChart
            data={getChartData(partyWiseData, currentElection.estimatedColumn, currentElection.actualColumn)}
          />
        )}
        {['bihar', 'bmc'].includes(stateId) && <Methodology stateId={stateId} />}
        <div className="">
          {currentDistrictData && (
            <ResultTable
              csvData={currentDistrictData}
              columns={getTableColumns(currentDistrictData)}
              scrollable
              title={
                currentElection.type === ElectionType.Municipal
                  ? 'Ward-wise Survey Report'
                  : 'Constituency-wise Survey Report'
              }
              subComponent={<DistrictSelector />}
              onRowClick={currentElection.constituencyModalConfig ? handleConstituencyClick : undefined}
            />
          )}
        </div>
        <Tooltip id="district-tooltip" />

        {/* Constituency Detail Modal */}
        {currentElection.constituencyModalConfig && (
          <ConstituencyDetailModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            data={selectedConstituency}
            modalConfig={currentElection.constituencyModalConfig}
          />
        )}
      </div>
    </div>
  );
}
