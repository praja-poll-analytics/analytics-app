'use client';

import { ReactSVG } from 'react-svg';
import Footer from '../home/Footer';
import Navigation from '../home/Navigation';

const whatWeDoItems = [
  'Act as a specialized agency in capturing and analysing public opinion on critical aspects of governance, public policy, legal, constitutional and socio-economic political issues.',
  'To provide consultancy services in political and public opinion research to political parties, government bodies, media organizations, academic institutions and other stakeholders.',
  'Meticulously design surveys, data driven methodologies, intended to provide insights into voters preferences, electoral trends and citizens sentiments towards government performance.',
  'Conducting surveys, research, data collection and analysis in relations to elections, political preferences, public opinion, voter behaviour and related socio-economic trends.',
  'To design and implement methodologies for opinion polls and exit polls.',
  'To publish, disseminate and present findings through digital, print and other media.',
];

const objectives = [
  {
    title: 'Public Opinion Analysis',
    description:
      'Act as a specialized agency in capturing and analysing public opinion on critical aspects of governance, public policy, legal, constitutional and socio-economic political issues.',
    iconSrc: '/assets/icons/search.svg',
  },
  {
    title: 'Comprehensive Consultancy',
    description:
      'To provide consultancy services in political and public opinion research to political parties, government bodies, media organizations, academic institutions and other stakeholders.',
    iconSrc: '/assets/icons/objectives.svg',
  },
  {
    title: 'Data-Driven Insights',
    description:
      'Meticulously design surveys, data driven methodologies, intended to provide insights into voters preferences, electoral trends and citizens sentiments towards government performance.',
    iconSrc: '/assets/icons/methodology.svg',
  },
  {
    title: 'Electoral Research & Analysis',
    description:
      'Conducting surveys, research, data collection and analysis in relations to elections, political preferences, public opinion, voter behaviour and related socio-economic trends.',
    iconSrc: '/assets/icons/state-analysis.svg',
  },
  {
    title: 'Robust Poll Methodologies',
    description: 'To design and implement methodologies for opinion polls and exit polls.',
    iconSrc: '/assets/icons/specialization.svg',
  },
  {
    title: 'Knowledge Dissemination',
    description: 'To publish, disseminate and present findings through digital, print and other media.',
    iconSrc: '/assets/icons/media-coverage.svg',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100">
      <Navigation />
      <main className="pt-16">
        <section className="page-header">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white py-4">
              About <span className="text-blue-400">Praja Poll Analytics</span>
            </h1>
          </div>
        </section>
        <section id="objectives" className="py-10 bg-white/80 backdrop-blur-sm border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-4">Our Objectives</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {objectives.map((objective, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-neutral-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent ring-1 ring-primary/15 flex items-center justify-center">
                      <ReactSVG src={objective.iconSrc} className="text-primary size-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 tracking-tight">{objective.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-600">{objective.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/10 to-neutral-100 p-8 rounded-lg border border-neutral-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Objectives</h3>
              <ul className="space-y-3 text-neutral-600">
                {whatWeDoItems.map((item, idx) => (
                  <li key={idx} className="flex flex-ro items-start justify-center gap-2">
                    <div className="min-w-5 min-h-5 bg-primary rounded-full flex items-center justify-center">
                      <ReactSVG src="/assets/icons/check.svg" className="size-3 text-white" />
                    </div>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
