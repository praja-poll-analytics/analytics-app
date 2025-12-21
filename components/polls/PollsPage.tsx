'use client';

import Footer from '@/components/home/Footer';
import Navigation from '@/components/home/Navigation';
import { useRouter } from 'next/navigation';
import IndiaMapChart from './maps/IndiaMapChart';

interface StateData {
  id: string;
  name: string;
  electionName: string;
  mapPlaceholder: string;
}

const statesData: StateData[] = [
  {
    id: 'uttarpradesh',
    name: 'Uttar Pradesh',
    electionName: 'Assembly Elections 2027',
    mapPlaceholder: 'UP Map',
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    electionName: 'Assembly Elections 2027',
    mapPlaceholder: 'Gujarat Map',
  },
  {
    id: 'punjab',
    name: 'Punjab',
    electionName: 'Assembly Elections 2027',
    mapPlaceholder: 'Punjab Map',
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    electionName: 'Assembly Elections 2028',
    mapPlaceholder: 'Rajasthan Map',
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    electionName: 'Assembly Elections 2028',
    mapPlaceholder: 'Karnataka Map',
  },
];

export default function PollsPage() {
  const router = useRouter();

  const onStateSelected = (stateName: string) => {
    const id = statesData.find((state) => state.name === stateName)?.id;
    if (id) {
      router.push(`/polls/states/${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100">
      <Navigation />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">State Polls Analysis</h1>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Explore comprehensive poll analytics and predictions for upcoming state elections across India
            </p>
          </div>
          <IndiaMapChart onEntrySelected={onStateSelected} height={500} scale={800} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
