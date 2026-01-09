import { ReactSVG } from 'react-svg';

const surveys = [
  {
    code: 'UP',
    title: 'Uttar Pradesh Assembly Elections 2017',
    description:
      "Conducted survey for 153 seats out of 404 total strength. For the first time in India, constituency wise, candidate wise and expected votes for a candidate was done. What we predicted came 100% true as far as total seats was concerned, and in many constituencies candidate's votes also matched with our assessment.",
  },
  {
    code: 'AP',
    title: 'Andhra Pradesh Assembly Elections 2024',
    description:
      'Our prediction came true. Our estimates as far as candidate wise predicted votes also to some extent were correct. In some constituencies we did village wise survey wherein we assessed the strengths and weakness of a particular party / candidate in a village.',
  },
  {
    code: 'MH',
    title: 'Brihad Mumbai Municipal Corporation Ward Elections 2025',
    description: 'Conducted a preliminary survey for ward elections.',
  },
];

const ElectionSurveysSection = () => {
  return (
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
          {surveys.map((survey, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-amber-100 p-6 hover:shadow-lg hover:border-amber-200 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 font-bold text-sm">{survey.code}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{survey.title}</h3>
                  <p className="text-gray-600 text-sm">{survey.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectionSurveysSection;
