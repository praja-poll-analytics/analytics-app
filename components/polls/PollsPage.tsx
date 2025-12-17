'use client';

import Footer from '@/components/home/Footer';
import Navigation from '@/components/home/Navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import IndiaMapChart from './maps/IndiaMapChart';
import { statesMapping } from './maps/data';

interface StateData {
  id: string;
  name: string;
  electionName: string;
  mapPlaceholder: string;
}

const statesData: StateData[] = [
  {
    id: 'up',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">State Polls Analysis</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore comprehensive poll analytics and predictions for upcoming state elections across India
            </p>
          </div>

          <IndiaMapChart
            distinctStates={Object.entries(statesMapping).map((state) => state[0])}
            onStateSelected={onStateSelected}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statesData.map((state) => (
              <Link key={state.id} href={`/polls/states/${state.id}`}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer">
                  {/* Map Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-3 bg-slate-700 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">{state.mapPlaceholder}</p>
                    </div>
                  </div>

                  {/* State Information */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">{state.name}</h2>
                    <p className="text-gray-300 mb-4">{state.electionName}</p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <span className="inline-flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                          Analysis Available
                        </span>
                      </div>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
                        View Analysis
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
