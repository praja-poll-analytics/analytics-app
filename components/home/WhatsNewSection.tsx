'use client';

export default function WhatsNewSection() {
  const updates: { id: number; category: string; title: string; date?: string }[] = [
    {
      id: 1,
      category: 'upcoming',
      title: 'BMC Election Survey Results',
    },
    {
      id: 2,
      category: 'upcoming',
      title: 'Tamil Nadu Election Survey Results',
    },
    {
      id: 3,
      category: 'upcoming',
      title: 'West Bengal Election Survey Results',
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
                {[...updates].map((update, index) => (
                  <div
                    key={`${update.id}-${index}`}
                    className="flex items-center justify-between px-4 py-2 border-b border-neutral-100 hover:bg-white/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <p
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={
                          update.category === 'upcoming'
                            ? { backgroundColor: 'rgba(8, 145, 178, 0.2)', color: '#0891b2' }
                            : update.category === 'research'
                            ? { backgroundColor: 'rgba(217, 119, 6, 0.2)', color: '#d97706' }
                            : { backgroundColor: 'rgba(5, 150, 105, 0.2)', color: '#059669' }
                        }
                      >
                        {update.category.charAt(0).toUpperCase() + update.category.slice(1)}
                      </p>
                      <span className="text-sm lg:text-base font-medium text-neutral-900">{update.title}</span>
                    </div>
                    {update.date && (
                      <span className="text-xs lg:text-sm text-neutral-500">{formatDate(update.date)}</span>
                    )}
                  </div>
                ))}
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
      `}</style>
    </div>
  );
}
