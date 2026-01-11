'use client';

import { useRouter } from 'next/navigation';
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
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
        </div>
        <p className="text-blue-600 font-medium">Click on a state to view statistics</p>
      </div>
    );
  }

  const key = getKeyFromStateName(stateName);
  const stats = stateStats[key];

  const navigateToStatePolls = (type: ElectionType) => {
    const availableElectionIndex = electionData[key]?.availableElections.findIndex(
      (election) => election.type === type
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
