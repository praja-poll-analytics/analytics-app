import { ReactSVG } from 'react-svg';

const MethodologySection = () => {
  return (
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
  );
};

export default MethodologySection;
