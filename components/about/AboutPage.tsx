'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';
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

type TabId = 'who-we-are' | 'media-coverage' | 'our-work';

interface Tab {
  id: TabId;
  label: string;
  icon: string;
}

const tabs: Tab[] = [
  {
    id: 'who-we-are',
    label: 'Who We Are',
    icon: '/assets/icons/team.svg',
  },
  {
    id: 'our-work',
    label: 'Our Work',
    icon: '/assets/icons/chart.svg',
  },
  {
    id: 'media-coverage',
    label: 'Media Coverage',
    icon: '/assets/icons/video.svg',
  },
];

const validTabs: TabId[] = ['who-we-are', 'media-coverage', 'our-work'];

const AboutPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get initial tab from URL or default to 'who-we-are'
  const tabParam = searchParams.get('tab') as TabId | null;
  const initialTab = tabParam && validTabs.includes(tabParam) ? tabParam : 'who-we-are';

  const [activeTab, setActiveTab] = useState<TabId>(initialTab);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    // Update URL without full page reload
    router.push(`/about?tab=${tabId}`, { scroll: false });
  };

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

        {/* Tab Navigation */}
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex gap-1 py-2 overflow-x-auto justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-lg cursor-pointer whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <ReactSVG src={tab.icon} className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[50vh]">
          {activeTab === 'who-we-are' && (
            <>
              <AboutUsSection />
              <ObjectivesSection />
              <LeadershipSection />
            </>
          )}

          {activeTab === 'media-coverage' && <MediaCoverageSection />}

          {activeTab === 'our-work' && (
            <>
              <MethodologySection />
              <TrendSettingSurveysSection />
              <ElectionSurveysSection />
              <SpecializationSection />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
