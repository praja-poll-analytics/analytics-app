import Footer from '@/components/home/Footer';
import Navigation from '@/components/home/Navigation';
import StateDetailPage from '@/components/polls/StateDetailsPage';
import { notFound } from 'next/navigation';

const availableStates = ['uttarpradesh', 'bihar', 'andhrapradesh'];

export default async function StatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!availableStates.includes(id)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <StateDetailPage stateId={id} />
      <Footer />
    </div>
  );
}
