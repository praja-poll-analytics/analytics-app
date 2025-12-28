'use client';

import { useRouter } from 'next/navigation';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { electionData } from '../polls/data';
import IndiaMapChart from '../polls/maps/IndiaMapChart';

export default function ElectionResults() {
  const router = useRouter();
  const onStateSelected = (stateName: string) => {
    const key = stateName.toLowerCase().replaceAll(' ', '');
    if (!!electionData[key]) {
      router.push(`/polls/states/${key}`);
    }
  };

  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6">
        <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Latest Results
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="lg:w-180">
          <IndiaMapChart
            onEntrySelected={onStateSelected}
            width={500}
            height={500}
            scale={800}
            defaultColorMapping={{ 'Andhra Pradesh': '#243073', Bihar: '#243073', 'Uttar Pradesh': '#243073' }}
          />
          <Tooltip id="map-tooltip" />
        </div>
      </div>
    </section>
  );
}
