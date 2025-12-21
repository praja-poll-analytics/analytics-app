import Footer from '@/components/home/Footer';
import Navigation from '@/components/home/Navigation';
import StateDetailPage from '@/components/polls/StateDetailPage';
import { notFound } from 'next/navigation';

interface StateData {
  id: string;
  name: string;
  electionName: string;
}

const statesData: StateData[] = [
  { id: 'uttarpradesh', name: 'Uttar Pradesh', electionName: 'Assembly Elections 2027' },
  { id: 'gujarat', name: 'Gujarat', electionName: 'Assembly Elections 2027' },
  { id: 'punjab', name: 'Punjab', electionName: 'Assembly Elections 2027' },
  { id: 'rajasthan', name: 'Rajasthan', electionName: 'Assembly Elections 2028' },
  { id: 'karnataka', name: 'Karnataka', electionName: 'Assembly Elections 2028' },
];

export default async function StatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const state = statesData.find((s) => s.id === id);

  if (!state) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <StateDetailPage state={state} />
      <Footer />
    </div>
  );
}
