'use client';

import { ReactSVG } from 'react-svg';
import Footer from '../home/Footer';
import Navigation from '../home/Navigation';

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

        {/* About Us Section */}
        <section
          id="about-us"
          className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50/30 border-b border-slate-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 border-2 border-slate-200 shadow-lg flex items-center justify-center">
                <ReactSVG src="/assets/icons/objectives.svg" className="text-slate-600 size-8" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">
                About Us
              </h2>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 p-8 shadow-lg">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Praja Poll Analytics LLP (PPA)</strong> was incorporated as a LLP in 2025 as a specialized
                  agency in conducting surveys / opinion polls / advising political parties on strategies to be adopted
                  in gaining voters confidence in winning elections in the ever changing voting behaviour of Indian
                  voters.
                </p>
                <p>
                  LLP has two partners, a think tank consisting of retired bureaucrats / political persons /
                  academicians and a specialized team for collecting data; Specialized team for analysis and
                  predictions.
                </p>
                <p>
                  Having an office at 126, SLV Green Meadows, Near IRR, Ramavarappadu, Vijayawada, NTR district, Andhra
                  Pradesh.
                </p>
                <p>
                  Before incorporating this company called Praja Poll LLP, this agency had done election surveys under
                  the banner <strong>&quot;Society for Global Enlightenment and Development (S-GED)&quot;</strong>;
                  conducted election surveys in Uttar Pradesh Assembly 2017 and Andhra Pradesh assembly in 2024.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section
          id="objectives"
          className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 border-b border-blue-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-200 shadow-lg flex items-center justify-center">
                <ReactSVG src="/assets/icons/objectives.svg" className="text-blue-600 size-8" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Our Objectives
              </h2>
            </div>
            <div className="grid gap-4">
              {[
                'Act as a specialized agency in capturing and analysing public opinion on critical aspects of governance, public policy, legal, constitutional and socio-economic political issues.',
                'To provide consultancy services in political and public opinion research to political parties, government bodies, media organizations, academic institutions and other stakeholders.',
                'Meticulously design surveys, data driven methodologies, intended to provide insights into voters preferences, electoral trends and citizens sentiments towards government performance.',
                'Conducting surveys, research, data collection and analysis in relations to elections, political preferences, public opinion, voter behaviour and related socio-economic trends.',
                'To design and implement methodologies for opinion polls and exit polls.',
                'To publish, disseminate and present findings through digital, print and other media.',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all hover:-translate-y-0.5"
                >
                  <div className="min-w-6 min-h-6 mt-1 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                    <ReactSVG src="/assets/icons/check.svg" className="size-3 text-blue-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section
          id="methodology"
          className="py-16 bg-gradient-to-br from-green-50 via-white to-green-50/30 border-b border-green-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-100 to-green-50 border-2 border-green-200 shadow-lg flex items-center justify-center">
                <ReactSVG src="/assets/icons/methodology.svg" className="text-green-600 size-8" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Our Methodology
              </h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-green-100 p-8 shadow-lg mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our methodology involves collection of data, analysis and interpretation of that data to infer
                conclusions. Our experience showed that if you follow a systematic methodology, surveys can provide
                accurate and reliable insights into the attitudes and behaviours of population.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Steps Involved
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-green-100 p-6 hover:shadow-lg hover:border-green-200 transition-all">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Survey Methods</h4>
                  <p className="text-gray-600">
                    Whether to adopt online, phone, in person or mail depending upon the type of activity. In our
                    approach most of our data collected is by contacting people personally.
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-green-100 p-6 hover:shadow-lg hover:border-green-200 transition-all">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Define Target Group & Sample Size</h4>
                  <p className="text-gray-600">
                    What are the target groups of survey: male / female / professionals / students and working people
                    (labour both industrial and agricultural) and others.
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-green-100 p-6 hover:shadow-lg hover:border-green-200 transition-all">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Sample Size Selection</h4>
                  <p className="text-gray-600">
                    If it is an assembly constituency, near about 5000 to 7000 people. Sometimes we may need to increase
                    sample size till we form an opinion.
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-green-100 p-6 hover:shadow-lg hover:border-green-200 transition-all">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Data Collection Methods</h4>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside">
                    <li>Direct interaction with voters / target group</li>
                    <li>Observation of target groups</li>
                    <li>Probability sampling</li>
                    <li>Non-probability sampling</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-green-100 p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Election Survey Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                Survey of political behaviour of human beings is a specialized area. Praja Poll Analytics (PPA) is a
                specialized agency in this field and never gone wrong in its earlier estimates. Election survey shapes
                campaign strategies, helps in understanding voters behaviour, provides insights into public opinion on
                key issues and helps in providing feedback mechanism so that candidates can make their campaign
                strategies effective.
              </p>
            </div>
          </div>
        </section>

        {/* Trend Setting Surveys Section */}
        <section
          id="trend-setting-surveys"
          className="py-16 bg-gradient-to-br from-purple-50 via-white to-purple-50/30 border-b border-purple-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 border-2 border-purple-200 shadow-lg flex items-center justify-center">
                <ReactSVG src="/assets/icons/leadership.svg" className="text-purple-600 size-8" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                Trend Setting Surveys
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="px-2 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-200 flex items-center justify-center">
                    <span className="text-purple-600 font-bold">2017</span>
                  </div>
                  Uttar Pradesh Assembly Elections
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Previously the survey work was done under the banner S-GED (Society for Global Enlightenment and
                  Development). The first survey was done in 2017 for Uttar Pradesh assembly elections. Before 2017, all
                  surveys by agencies on election results in India were based on exit polls and total number of seats to
                  be won by a particular party but never gave constituency wise result and predicting which party and
                  which candidate will win with what majority.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>For the first time in India</strong>, our agency gave for 153 constituencies of Uttar Pradesh
                  assembly, which party, which candidate will win with what majority. From 2017 onwards now all survey
                  agencies give constituency wise, party wise, and candidate wise results - it became an{' '}
                  <strong>all India trend</strong>.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="px-2 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-200 flex items-center justify-center">
                    <span className="text-purple-600 font-bold">2024</span>
                  </div>
                  Andhra Pradesh Assembly Elections
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  In 2024, our agency (S-GED) conducted survey and predicted in Andhra Pradesh that Telugu Desam will
                  win 149 seats and they got around 160 seats. The <strong>new trend setting</strong> in this survey
                  was: we predicted in all assembly constituencies which party / candidate will win and with what
                  majority.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  In many cases we were correct to a large extent. Most probably in future, most of the survey agencies
                  in India will try to predict at least approximately the number of votes a particular candidate may get
                  per constituency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Election Surveys Conducted Section */}
        <section
          id="election-surveys"
          className="py-16 bg-gradient-to-br from-amber-50 via-white to-amber-50/30 border-b border-amber-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-200 shadow-lg flex items-center justify-center">
                <ReactSVG src="/assets/icons/state-analysis.svg" className="text-amber-600 size-8" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                Election Surveys Conducted So Far
              </h2>
            </div>

            <div className="grid gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-amber-100 p-6 hover:shadow-lg hover:border-amber-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-lg">UP</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Uttar Pradesh Assembly Elections 2017</h3>
                    <p className="text-gray-600 text-sm">
                      Conducted survey for 153 seats out of 404 total strength. For the first time in India,
                      constituency wise, candidate wise and expected votes for a candidate was done. What we predicted
                      came 100% true as far as total seats was concerned, and in many constituencies candidate&apos;s
                      votes also matched with our assessment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-amber-100 p-6 hover:shadow-lg hover:border-amber-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-lg">AP</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Andhra Pradesh Assembly Elections 2024</h3>
                    <p className="text-gray-600 text-sm">
                      Our prediction came true. Our estimates as far as candidate wise predicted votes also to some
                      extent were correct. In some constituencies we did village wise survey wherein we assessed the
                      strengths and weakness of a particular party / candidate in a village.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-amber-100 p-6 hover:shadow-lg hover:border-amber-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">MH</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Brihad Mumbai Municipal Corporation Ward Elections 2025
                    </h3>
                    <p className="text-gray-600 text-sm">Conducted a preliminary survey for ward elections.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Specialization Section */}
        <section id="specialization" className="py-16 bg-gradient-to-br from-rose-50 via-white to-rose-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-50 border-2 border-rose-200 shadow-lg flex items-center justify-center">
                <ReactSVG src="/assets/icons/specialization.svg" className="text-rose-600 size-8" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">
                Our Specialization
              </h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-rose-100 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="min-w-5 min-h-5 mt-1 rounded-full bg-gradient-to-br from-rose-100 to-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0">
                    <ReactSVG src="/assets/icons/check.svg" className="size-3 text-rose-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    With confidence we can claim that we may not go wrong in any of our predictions. Our approach and
                    method of data collection and the team&apos;s analytical abilities are such that we would predict
                    correctly.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="min-w-5 min-h-5 mt-1 rounded-full bg-gradient-to-br from-rose-100 to-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0">
                    <ReactSVG src="/assets/icons/check.svg" className="size-3 text-rose-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Village-wise surveys:</strong> In some constituencies of Andhra Pradesh we did village wise
                    survey wherein we assessed the strengths and weakness of a particular party / candidate in a
                    village.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="min-w-5 min-h-5 mt-1 rounded-full bg-gradient-to-br from-rose-100 to-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0">
                    <ReactSVG src="/assets/icons/check.svg" className="size-3 text-rose-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Advance planning:</strong> If survey done in advance (1.5-2 years before elections), we can
                    provide block / mandal / tahsil wise or even village wise strengths, weakness of a party / candidate
                    and the actions / measures to overcome any shortcomings and improve their winning chances.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="min-w-5 min-h-5 mt-1 rounded-full bg-gradient-to-br from-rose-100 to-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0">
                    <ReactSVG src="/assets/icons/check.svg" className="size-3 text-rose-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Accuracy guarantee:</strong> Even a year before we can predict the number of seats in a
                    party and votes for a candidate with a variation of +/- 20% and we are even open to return some
                    percentage if we go wrong; but there are no chances of going wrong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
