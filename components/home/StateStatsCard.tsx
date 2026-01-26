'use client';

import { useRouter } from 'next/navigation';
import { ReactSVG } from 'react-svg';
import { electionData, stateStats } from '../polls/data';
import { getKeyFromStateName } from '../polls/maps/data';
import StateMapChart from '../polls/maps/StateMapChart';
import { ElectionType } from '../polls/types';

interface StateStatsCardProps {
  stateName: string | null;
}

export default function StateStatsCard({ stateName }: StateStatsCardProps) {
  const router = useRouter();

  if (!stateName) {
    return (
      <div className="bg-blue-50 rounded-2xl p-6 shadow-lg h-full flex flex-col justify-center items-center text-center min-h-[400px] border border-blue-100">
        <div className="text-blue-300 mb-2">
          <ReactSVG src="/assets/icons/map.svg" className="w-16 h-16 mx-auto" />
        </div>
        <p className="text-blue-600 font-medium">Click on a state to view statistics</p>
      </div>
    );
  }

  const key = getKeyFromStateName(stateName);
  const stats = stateStats[key];
  if (!stats) {
    return (
      <div className="bg-blue-50 rounded-2xl p-6 shadow-lg h-full flex flex-col justify-center items-center text-center min-h-[400px] border border-blue-100">
        <div className="text-blue-300 mb-2">
          <ReactSVG src="/assets/icons/map.svg" className="w-16 h-16 mx-auto" />
        </div>
        <p className="text-blue-600 font-medium">No stats available for {stateName}</p>
      </div>
    );
  }

  const navigateToStatePolls = (type: ElectionType) => {
    const availableElectionIndex = electionData[key]?.availableElections.findIndex(
      (election) => election.type === type,
    );
    if (availableElectionIndex !== -1 && availableElectionIndex !== undefined) {
      const url = `/polls/states/${key}?election=${availableElectionIndex}`;
      router.push(url);
    }
  };

  const onMLAClick = () => {
    navigateToStatePolls(ElectionType.Assembly);
  };

  const onMPClick = () => {
    navigateToStatePolls(ElectionType.LokSabha);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center rounded-2xl p-6 shadow-lg min-h-[400px] border border-blue-100">
      {/* State Name */}
      <div className="flex flex-col lg:flex-row w-full items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-3xl font-black text-gray-900 mb-6 text-center tracking-tight">
            {stateName.toUpperCase()}
          </h3>
          {/* Top Stats Row - MLAs, MPs, ULBs */}
          <div className="flex justify-center gap-3 mb-4">
            <div className="text-center cursor-pointer" onClick={onMLAClick}>
              <p className="text-sm font-semibold text-gray-600 mb-1">MLAs:</p>
              <div className="bg-primary text-white px-4 py-3 rounded-lg min-w-[70px]">
                <span className="text-2xl font-bold">{stats.mlas}</span>
              </div>
            </div>
            <div className="text-center cursor-pointer" onClick={onMPClick}>
              <p className="text-sm font-semibold text-gray-600 mb-1">MPs:</p>
              <div className="bg-primary text-white px-4 py-3 rounded-lg min-w-[70px]">
                <span className="text-2xl font-bold">{stats.mpsLokSabha}</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 mb-1">ULBs:</p>
              <div className="bg-primary text-white px-4 py-3 rounded-lg min-w-[70px]">
                <span className="text-2xl font-bold">{stats.ulbs}</span>
              </div>
            </div>
          </div>
        </div>
        <StateMapChart name={key} width={500} height={300} scale={100} />
      </div>

      {/* Bottom Stats - Rajya Sabha & Legislative Council */}
      <div className="space-y-2 mt-4 w-full">
        <div className="bg-primary text-white px-4 py-3 rounded-lg flex justify-between items-center">
          <span className="font-semibold uppercase text-sm tracking-wide">Rajya Sabha Members:</span>
          <span className="text-xl font-bold">{stats.rajyaSabha}</span>
        </div>

        {stats.legislativeCouncil > 0 && (
          <div className="bg-primary text-white px-4 py-3 rounded-lg flex justify-between items-center">
            <span className="font-semibold uppercase text-sm tracking-wide">Legislative Council:</span>
            <span className="text-xl font-bold">{stats.legislativeCouncil}</span>
          </div>
        )}
      </div>
    </div>
  );
}
