'use client';

import Footer from '../home/Footer';
import Navigation from '../home/Navigation';
import {
  AboutUsSection,
  ElectionSurveysSection,
  LeadershipSection,
  MediaCoverageSection,
  MethodologySection,
  ObjectivesSection,
  SpecializationSection,
  TrendSettingSurveysSection,
} from './sections';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100">
      <Navigation />
      <main className="pt-16">
        {/* Header Section */}
        <section className="page-header">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white py-4">
              About <span className="text-blue-400">Praja Poll Analytics</span>
            </h1>
            <p className="text-lg text-white/90 mt-2">
              India&apos;s trusted partner in political research and opinion polling
            </p>
          </div>
        </section>

        <AboutUsSection />
        <ObjectivesSection />
        <LeadershipSection />
        <MethodologySection />
        <TrendSettingSurveysSection />
        <ElectionSurveysSection />
        <SpecializationSection />
        <MediaCoverageSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
