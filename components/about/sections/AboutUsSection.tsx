import { ReactSVG } from 'react-svg';

const AboutUsSection = () => {
  return (
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
  );
};

export default AboutUsSection;
