import Footer from '../home/Footer';
import Navigation from '../home/Navigation';
import { leadershipTeam } from './data';
import LeadershipTile from './LeadershipTile';

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

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Data-Driven Insights</h3>
                <p className="text-neutral-600">
                  Get real-time analytics and comprehensive reports to make informed decisions based on actual data.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">User-Friendly Interface</h3>
                <p className="text-neutral-600">
                  Intuitive design that makes creating and managing polls simple for everyone, regardless of technical
                  expertise.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Real-Time Results</h3>
                <p className="text-neutral-600">
                  Watch responses come in live and get instant feedback from your audience with our real-time polling
                  system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Our Mission</h2>
                <p className="text-lg text-neutral-600 mb-6">
                  At Praja Poll Analytics, we believe in the power of data to transform decision-making. Our mission is
                  to provide cutting-edge polling and analytics solutions that help political parties, organizations,
                  and individuals understand public opinion and make informed strategic decisions.
                </p>
                <p className="text-lg text-neutral-600 mb-6">
                  We combine advanced statistical methods with user-friendly technology to deliver insights that matter.
                  Whether you&apos;re conducting political research, market analysis, or organizational surveys, our
                  tools are designed to give you the competitive edge you need.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-neutral-100 p-8 rounded-lg border border-neutral-200">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Expert team with decades of experience in political analytics</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Proprietary algorithms for accurate sentiment analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>24/7 support and dedicated account management</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Customizable solutions tailored to your specific needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/80 backdrop-blur-sm border-b border-neutral-200">
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
