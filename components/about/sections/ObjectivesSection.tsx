import { ReactSVG } from 'react-svg';

const objectives = [
  'Act as a specialized agency in capturing and analysing public opinion on critical aspects of governance, public policy, legal, constitutional and socio-economic political issues.',
  'To provide consultancy services in political and public opinion research to political parties, government bodies, media organizations, academic institutions and other stakeholders.',
  'Meticulously design surveys, data driven methodologies, intended to provide insights into voters preferences, electoral trends and citizens sentiments towards government performance.',
  'Conducting surveys, research, data collection and analysis in relations to elections, political preferences, public opinion, voter behaviour and related socio-economic trends.',
  'To design and implement methodologies for opinion polls and exit polls.',
  'To publish, disseminate and present findings through digital, print and other media.',
];

const ObjectivesSection = () => {
  return (
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
          {objectives.map((item, idx) => (
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
  );
};

export default ObjectivesSection;
