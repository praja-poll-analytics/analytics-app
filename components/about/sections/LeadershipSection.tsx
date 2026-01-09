import Image from 'next/image';
import { ReactSVG } from 'react-svg';
import { leadershipTeam, advisoryBoard } from '../data';

const LeadershipSection = () => {
  return (
    <section
      id="leadership"
      className="py-16 bg-gradient-to-br from-indigo-50 via-white to-indigo-50/30 border-b border-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-50 border-2 border-indigo-200 shadow-lg flex items-center justify-center">
            <ReactSVG src="/assets/icons/leadership.svg" className="text-indigo-600 size-8" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
            Our Leadership
          </h2>
        </div>

        {/* Leadership Team */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {leadershipTeam.map((member, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-indigo-100 p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-1">{member.name}</h3>
              <p className="text-sm text-indigo-600 text-center mb-3">{member.position}</p>
              <p className="text-sm text-gray-600 text-center mb-4 line-clamp-3">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-1">
                {member.tags.slice(0, 3).map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2 py-0.5 text-xs bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Think Tank / Advisory Board */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-indigo-100 p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            Think Tank / Advisory Board
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advisoryBoard.map((member, idx) => (
              <div
                key={idx}
                className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 hover:bg-indigo-50 transition-colors flex gap-4"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-100 flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 mb-1">{member.name}</h4>
                  <p className="text-sm text-indigo-600 mb-1 line-clamp-2">{member.title}</p>
                  <p className="text-sm text-gray-600">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
