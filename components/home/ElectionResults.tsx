'use client';

import { Tooltip } from 'react-tooltip';
import { statesMapping } from '../polls/maps/data';
import IndiaMapChart from '../polls/maps/IndiaMapChart';

import 'react-tooltip/dist/react-tooltip.css';
export default function ElectionResults() {
  const onStateSelected = (state: string) => {
    console.log(state);
  };

  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6">
        <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Latest Results
        </h2>
      </div>
      <div className="flex-col lg:flex-row">
        <div className="lg:w-180">
          <IndiaMapChart
            distinctStates={Object.entries(statesMapping).map((state) => state[0])}
            onStateSelected={onStateSelected}
            width={500}
            height={500}
            scale={800}
            defaultColorMapping={{ Maharashtra: 'red', Bihar: 'green' }}
          />
          <Tooltip id="map-tooltip" />
        </div>
      </div>
    </section>
  );
}
