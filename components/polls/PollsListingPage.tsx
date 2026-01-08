'use client';

import ElectionResults from '../home/ElectionResults';
import Navigation from '../home/Navigation';

export default function PollsListingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100">
      <Navigation />
      <main className="pt-16">
        <section className="page-header">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Election <span className="text-blue-400">Polls</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore our election survey results and predictions across Indian states
            </p>
          </div>
        </section>
        <ElectionResults showTitle={false} />
      </main>
    </div>
  );
}
