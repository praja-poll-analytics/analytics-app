'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { electionData, partyColorMapping } from '../polls/data';
import IndiaMapChart from '../polls/maps/IndiaMapChart';
import { ElectionConfig, ElectionType } from '../polls/types';
import StateStatsCard from './StateStatsCard';

const MAP_COLORS = {
  upcomingElection: '#020953',
  recentElection: '#AD74DF',
  selectedState: '#EC5528',
};

const getStateColor = (election: ElectionConfig) => {
  const bgColor = election.rulingParty ? partyColorMapping[election.rulingParty]?.bg : MAP_COLORS.upcomingElection;
  const fgColor = election.rulingParty ? partyColorMapping[election.rulingParty]?.fg : '#FFFFFF';
  return { bgColor, fgColor };
};

export default function ElectionResults({ showTitle = true }: { showTitle?: boolean }) {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const stateColorMapping = Object.entries(electionData).reduce((acc, [, data]) => {
    const latestElection = data.availableElections[0];
    const color = getStateColor(latestElection).bgColor;
    acc[data.stateName] = color;
    return acc;
  }, {} as Record<string, string>);

  const onStateSelected = (stateName: string) => {
    setSelectedState(stateName);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6">
        {showTitle && (
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent mb-2">
            Explore States
          </h2>
        )}
        <p className="text-sm lg:text-base text-gray-600 mb-4">For detailed analysis, click on states below.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(electionData).flatMap(([key, data]) =>
            data.availableElections.map((election, index) => {
              const year = election.isUpcoming
                ? 'Upcoming'
                : election.surveyDate?.split('-').pop() || election.name.match(/\d{4}/)?.[0] || '';
              const shortName = election.type === ElectionType.Assembly ? 'Assembly' : 'Lok Sabha';
              const { bgColor, fgColor } = getStateColor(election);
              return (
                <Link
                  key={`${key}-${index}`}
                  href={`/polls/states/${key}?election=${index}`}
                  style={{ backgroundColor: bgColor, color: fgColor }}
                  className="rounded-lg overflow-hidden text-white transition-all hover:shadow-lg hover:scale-105 hover:-translate-y-1 min-w-[160px] border-2"
                >
                  <div className="px-4 py-3 text-center">
                    <div className="text-lg font-semibold">{data.stateName}</div>
                    <div className="text-sm opacity-90">{shortName}</div>
                  </div>
                  <div className="text-sm font-semibold py-2 bg-white text-center text-gray-800 border-t border-gray-200">
                    {year}
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-6">
        <div className="lg:w-180 relative">
          <div className="absolute top-0 right-0 lg:top-10 lg:right-15 z-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-3 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: MAP_COLORS.upcomingElection }}></div>
              <span className="text-xs text-gray-600">Upcoming Election</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: MAP_COLORS.recentElection }}></div>
              <span className="text-xs text-gray-600">Recent Election</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: MAP_COLORS.selectedState }}></div>
              <span className="text-xs text-gray-600">Selected State</span>
            </div>
          </div>
          <IndiaMapChart
            onEntrySelected={onStateSelected}
            width={500}
            height={500}
            scale={800}
            defaultColorMapping={stateColorMapping}
            selectedState={selectedState}
            selectedStateColor={MAP_COLORS.selectedState}
          />
          <Tooltip id="map-tooltip" />
        </div>
        <div className="lg:w-172">
          <StateStatsCard stateName={selectedState} />
        </div>
      </div>
    </section>
  );
}
