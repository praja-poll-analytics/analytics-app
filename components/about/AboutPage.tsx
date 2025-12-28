'use client';

import { ReactSVG } from 'react-svg';
import Footer from '../home/Footer';
import Navigation from '../home/Navigation';

const whatWeDoItems = [
  'Conduct comprehensive election surveys and opinion polls across constituencies and regions.',
  'Help political parties understand voter sentiment, preferences, and priorities.',
  'Provide strategic insights to design effective campaign plans and voter outreach programs.',
  'Offer data-backed feedback mechanisms that enable candidates to refine campaign messages and connect better with the electorate.',
  'Deliver research reports and analysis on public opinion trends and key political issues shaping governance.',
];

const objectives = [
  {
    title: 'Public Opinion Analysis',
    description:
      'Serve as a specialized agency dedicated to capturing and analyzing public opinion on key aspects of governance, public policy, legal, constitutional, and socio-political issues.',
    iconSrc: '/assets/icons/search.svg',
  },
  {
    title: 'Comprehensive Consultancy',
    description:
      'Provide comprehensive consultancy services in political and public opinion research to political parties, government institutions, media organizations, academic institutions, and other relevant stakeholders.',
    iconSrc: '/assets/icons/objectives.svg',
  },
  {
    title: 'Data-Driven Insights',
    description:
      "Design and implement data-driven survey methodologies that deliver accurate insights into voter preferences, electoral trends, and citizens' perceptions of government performance.",
    iconSrc: '/assets/icons/methodology.svg',
  },
  {
    title: 'Electoral Research & Analysis',
    description:
      'Conduct surveys, research, data collection, and analysis pertaining to elections, political preferences, public opinion, voter behavior, and related socio-economic factors.',
    iconSrc: '/assets/icons/state-analysis.svg',
  },
  {
    title: 'Robust Poll Methodologies',
    description:
      'Develop and execute robust methodologies for conducting opinion polls and exit polls that ensure accuracy, reliability, and representativeness in all our research endeavors.',
    iconSrc: '/assets/icons/specialization.svg',
  },
  {
    title: 'Knowledge Dissemination',
    description:
      'Publish, disseminate, and present findings through digital, print, and other media platforms to promote informed decision-making and enhance public discourse.',
    iconSrc: '/assets/icons/media-coverage.svg',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-white/80 backdrop-blur-sm border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">About Praja Poll Analytics</h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Praja Poll Analytics LLP (PPA), incorporated in April 2025, is a specialized research and analytics
                agency dedicated to conducting surveys, opinion polls, and political consultancy. We assist political
                parties in developing effective strategies to build voter confidence and achieve success in elections —
                backed by a deep understanding of the ever-evolving behavior of Indian voters.
              </p>
            </div>

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

                    <h3 className="text-lg font-semibold text-neutral-900 tracking-tight mb-2">{objective.title}</h3>
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-600">{objective.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Our Mission</h2>
                <p className="text-lg text-neutral-600 mb-6">
                  At Praja Poll Analytics, we specialize in the study of political behavior and voter dynamics. Our team
                  brings extensive experience in electoral research, survey design, and data-driven analysis —
                  consistently delivering accurate and actionable insights. Before establishing PPA, our survey work was
                  conducted under the banner of the Society for Global Enlightenment and Development (S-GED), where we
                  successfully executed several state-level election studies.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-neutral-100 p-8 rounded-lg border border-neutral-200">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">What we do</h3>
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
          </div>
        </section>

        {/* <section className="py-20 bg-white/80 backdrop-blur-sm border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Leadership Team</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Meet the experts behind Praja Poll Analytics, bringing decades of experience in political research and
                data analytics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((member) => (
                <LeadershipTile key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
