'use client';

import Link from 'next/link';
import { ReactSVG } from 'react-svg';

export default function ExpertiseSection() {
  const expertiseItems = [
    {
      id: 1,
      title: 'About Us',
      description: 'Our story and mission',
      icon: '/assets/icons/objectives.svg',
      color: 'from-slate-500 to-slate-600',
      link: '/about?tab=who-we-are#about-us',
    },
    {
      id: 2,
      title: 'Leadership',
      description: 'Our experienced team',
      icon: '/assets/icons/leadership.svg',
      color: 'from-indigo-500 to-indigo-600',
      link: '/about?tab=who-we-are#leadership',
    },
    {
      id: 3,
      title: 'Objectives',
      description: 'Strategic goals and mission',
      icon: '/assets/icons/objectives.svg',
      color: 'from-blue-500 to-blue-600',
      link: '/about?tab=who-we-are#objectives',
    },
    {
      id: 4,
      title: 'Methodology',
      description: 'Scientific approach',
      icon: '/assets/icons/methodology.svg',
      color: 'from-green-500 to-green-600',
      link: '/about?tab=our-work#methodology',
    },
    {
      id: 5,
      title: 'Specialization',
      description: 'Focused expertise',
      icon: '/assets/icons/specialization.svg',
      color: 'from-rose-500 to-rose-600',
      link: '/about?tab=our-work#specialization',
    },
    {
      id: 6,
      title: 'Election Surveys',
      description: 'Track record of success',
      icon: '/assets/icons/state-analysis.svg',
      color: 'from-amber-500 to-amber-600',
      link: '/polls',
    },
    {
      id: 7,
      title: 'Media Coverage',
      description: 'Press and video coverage',
      icon: '/assets/icons/media-coverage.svg',
      color: 'from-teal-500 to-teal-600',
      link: '/about?tab=media-coverage#media-coverage',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-purple-50 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r text-primary bg-clip-text text-transparent mb-2">
            Explore Our Expertise
          </h2>
          <p className="text-sm lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive capabilities across political research, analysis, and strategic consulting
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 transform -translate-y-1/2 rounded-full"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 relative">
            {expertiseItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="group relative flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer"
              >
                <div className="items-center relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-3 sm:p-4 border-2 border-gray-200 hover:border-gray-300 w-full h-full flex flex-col justify-between">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 bg-white shadow-lg mb-2 sm:mb-3 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <ReactSVG src={item.icon} className="text-black size-5 sm:size-6" />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xs sm:text-sm font-semibold text-black">{item.title}</h3>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-500`}
                  ></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
