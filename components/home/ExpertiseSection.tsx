'use client';

import { ReactSVG } from 'react-svg';

export default function ExpertiseSection() {
  const expertiseItems = [
    {
      id: 1,
      title: 'Objectives',
      description: 'Strategic goals and mission-driven approach',
      icon: '/assets/icons/objectives.svg',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Leadership',
      description: 'Experienced team with vision and expertise',
      icon: '/assets/icons/leadership.svg',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconBg: 'bg-purple-500',
    },
    {
      id: 3,
      title: 'Methodology',
      description: 'Scientific approach with proven techniques',
      icon: '/assets/icons/methodology.svg',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconBg: 'bg-green-500',
    },
    {
      id: 4,
      title: 'Specialization',
      description: 'Focused expertise in political analytics',
      icon: '/assets/icons/specialization.svg',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      iconBg: 'bg-yellow-500',
    },
    {
      id: 5,
      title: 'Media Coverage',
      description: 'Extensive presence across media platforms',
      icon: '/assets/icons/media-coverage.svg',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconBg: 'bg-red-500',
    },
    {
      id: 6,
      title: 'State Analysis',
      description: 'Comprehensive regional insights and data',
      icon: '/assets/icons/state-analysis.svg',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      iconBg: 'bg-indigo-500',
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-purple-50 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-6">
          <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Explore Our Expertise
          </h2>
          <p className="text-sm lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive capabilities across political research, analysis, and strategic consulting
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 transform -translate-y-1/2 rounded-full"></div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 relative">
            {expertiseItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer"
              >
                <div
                  className={`items-center relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-3 sm:p-6 border-2 border-gray-200 hover:border-gray-300 w-full h-full flex flex-col justify-between`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-gray-300 bg-white shadow-lg mb-2 sm:mb-4 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}
                  >
                    <ReactSVG src={item.icon} className="text-black size-6 sm:size-8" />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-sm sm:text-lg font-semibold text-black mb-1 sm:mb-2">{item.title}</h3>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-500`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 transform -translate-y-1/2 rounded-full -z-10"></div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </section>
  );
}
