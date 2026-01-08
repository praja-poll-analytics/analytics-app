'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { electionData, stateStats } from '../polls/data';
import IndiaMapChart from '../polls/maps/IndiaMapChart';
import { StateStats } from '../polls/types';
import StateStatsCard from './StateStatsCard';

const MAP_COLORS = {
  upcomingElection: '#020953',
  recentElection: '#AD74DF',
  selectedState: '#EC5528',
};

const stateColorMapping: Record<string, string> = {
  Bihar: MAP_COLORS.upcomingElection,
  'Andhra Pradesh': MAP_COLORS.recentElection,
  'Uttar Pradesh': MAP_COLORS.recentElection,
};

export default function ElectionResults() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedStateStats, setSelectedStateStats] = useState<StateStats | null>(null);

  const onStateSelected = (stateName: string) => {
    setSelectedState(stateName);
    if (stateName) {
      const key = stateName.toLowerCase().replaceAll(' ', '');
      setSelectedStateStats(stateStats[key] || null);
    } else {
      setSelectedStateStats(null);
    }
  };

  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6">
        <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Explore States
        </h2>
        <p className="text-sm lg:text-base text-gray-600 mb-4">Click to see election results</p>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(electionData).map(([key, data]) => (
            <Link
              key={key}
              href={`/polls/states/${key}`}
              className="px-4 py-2 text-sm font-medium rounded border border-primary text-primary transition-colors hover:bg-primary hover:!text-white"
            >
              {data.stateName}
            </Link>
          ))}
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
          <StateStatsCard stats={selectedStateStats} stateName={selectedState} />
        </div>
      </div>
    </section>
  );
}
