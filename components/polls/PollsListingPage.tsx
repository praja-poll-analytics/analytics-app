'use client';

import Footer from '@/components/home/Footer';
import Navigation from '@/components/home/Navigation';
import { useRouter } from 'next/navigation';
import { electionData } from './data';
import IndiaMapChart from './maps/IndiaMapChart';

export default function PollsListingPage() {
  const router = useRouter();

  const onStateSelected = (stateName: string) => {
    const key = stateName.toLowerCase().replaceAll(' ', '');
    if (!!electionData[key]) {
      router.push(`/polls/states/${key}`);
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
