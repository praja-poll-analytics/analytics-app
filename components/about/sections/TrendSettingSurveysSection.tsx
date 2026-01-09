import { ReactSVG } from 'react-svg';

const TrendSettingSurveysSection = () => {
  return (
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
  );
};

export default TrendSettingSurveysSection;
