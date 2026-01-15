'use client';

import Link from 'next/link';

type Update = {
  id: number;
  category: string;
  title: string;
  date?: string;
  link?: string | null;
};

export default function WhatsNewSection() {
  const updates: Update[] = [
    {
      id: 1,
      category: 'latest',
      title: 'BMC Election Survey Results',
      link: '/polls/states/bmc',
    },
    {
      id: 2,
      category: 'upcoming',
      title: 'Tamil Nadu Election Survey Results',
      link: null,
    },
    {
      id: 3,
      category: 'upcoming',
      title: 'West Bengal Election Survey Results',
      link: null,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="w-full h-full py-3 lg:py-4 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col h-full">
        <div className="mb-4">
          <h2 className="text-xl lg:text-2xl md:text-4xl font-bold text-neutral-900 mb-2 text-center">UPDATES</h2>
          <p className="text-sm lg:text text-neutral-600 max-w-2xl mx-auto text-center">
            Stay updated with our latest election analysis, research findings, and platform improvements
          </p>
        </div>

        <div className="relative flex-1 overflow-hidden bg-white/60 backdrop-blur-sm rounded-lg border border-neutral-200">
          {updates.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-sm lg:text-base text-neutral-500">No updates available at the moment.</p>
            </div>
          ) : (
            <div className="absolute inset-0">
              <div className="animate-marquee-vertical space-y-3">
                {/* Duplicate items for seamless loop */}
                {[...updates].map((update, index) => {
                  const content = (
                    <>
                      <div className="flex items-center gap-3">
                        <p
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            update.category === 'latest' ? 'animate-pulse-glow' : ''
                          }`}
                          style={
                            update.category === 'latest'
                              ? { backgroundColor: 'rgba(168, 85, 247, 0.2)', color: '#9333ea' }
                              : update.category === 'upcoming'
                              ? { backgroundColor: 'rgba(8, 145, 178, 0.2)', color: '#0891b2' }
                              : update.category === 'research'
                              ? { backgroundColor: 'rgba(217, 119, 6, 0.2)', color: '#d97706' }
                              : { backgroundColor: 'rgba(5, 150, 105, 0.2)', color: '#059669' }
                          }
                        >
                          {update.category.charAt(0).toUpperCase() + update.category.slice(1)}
                        </p>
                        <span
                          className={`text-sm lg:text-base font-medium ${
                            update.link ? 'text-purple-700 group-hover:text-purple-900' : 'text-neutral-900'
                          }`}
                        >
                          {update.title}
                          {update.link && <span className="ml-1 text-xs">→</span>}
                        </span>
                      </div>
                      {update.date && (
                        <span className="text-xs lg:text-sm text-neutral-500">{formatDate(update.date)}</span>
                      )}
                    </>
                  );

                  return update.link ? (
                    <Link
                      key={`${update.id}-${index}`}
                      href={update.link}
                      className="group flex items-center justify-between px-4 py-2 border-b border-neutral-100 hover:bg-purple-50/60 transition-colors cursor-pointer"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div
                      key={`${update.id}-${index}`}
                      className="flex items-center justify-between px-4 py-2 border-b border-neutral-100 hover:bg-white/40 transition-colors"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-vertical {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-marquee-vertical {
          animation: marquee-vertical 5s linear infinite;
        }

        @keyframes pulse-glow {
          0%,
          100% {
            background-color: rgba(168, 85, 247, 0.2);
            box-shadow: 0 0 4px rgba(168, 85, 247, 0.4);
          }
          50% {
            background-color: rgba(168, 85, 247, 0.4);
            box-shadow: 0 0 12px rgba(168, 85, 247, 0.6);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
