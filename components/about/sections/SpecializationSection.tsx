import { ReactSVG } from 'react-svg';

const specializations = [
  "With confidence we can claim that we may not go wrong in any of our predictions. Our approach and method of data collection and the team's analytical abilities are such that we would predict correctly.",
  {
    title: 'Village-wise surveys:',
    content:
      'In some constituencies of Andhra Pradesh we did village wise survey wherein we assessed the strengths and weakness of a particular party / candidate in a village.',
  },
  {
    title: 'Advance planning:',
    content:
      'If survey done in advance (1.5-2 years before elections), we can provide block / mandal / tahsil wise or even village wise strengths, weakness of a party / candidate and the actions / measures to overcome any shortcomings and improve their winning chances.',
  },
  {
    title: 'Accuracy guarantee:',
    content:
      'Even a year before we can predict the number of seats in a party and votes for a candidate with a variation of +/- 20% and we are even open to return some percentage if we go wrong; but there are no chances of going wrong.',
  },
];

const SpecializationSection = () => {
  return (
    <section id="specialization" className="py-16 bg-gradient-to-br from-rose-50 via-white to-rose-50/30 border-b border-rose-100">
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
            {specializations.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="min-w-5 min-h-5 mt-1 rounded-full bg-gradient-to-br from-rose-100 to-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0">
                  <ReactSVG src="/assets/icons/check.svg" className="size-3 text-rose-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <>
                      <strong>{item.title}</strong> {item.content}
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;
