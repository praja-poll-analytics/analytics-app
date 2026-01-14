'use client';
import { ReactSVG } from 'react-svg';
import { ElectionConfig, ElectionType } from './types';

export const ElectionSelector = ({
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
                      : election.type === ElectionType.LokSabha
                      ? 'bg-green-100 text-green-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}
                >
                  {election.type === ElectionType.Assembly
                    ? 'Assembly'
                    : election.type === ElectionType.LokSabha
                    ? 'Lok Sabha'
                    : 'Municipal'}
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
