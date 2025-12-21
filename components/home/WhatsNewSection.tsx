'use client';

export default function WhatsNewSection() {
  const updates = [
    {
      id: 1,
      category: 'elections',
      title: 'Delhi Assembly Elections 2025',
      date: '2025-01-15',
    },
    {
      id: 2,
      category: 'research',
      title: 'New Voter Behavior Study',
      date: '2025-01-10',
    },
    {
      id: 3,
      category: 'technology',
      title: 'Enhanced Analytics Dashboard',
      date: '2025-01-05',
    },
    {
      id: 4,
      category: 'elections',
      title: 'West Bengal Panchayat Polls',
      date: '2024-12-28',
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
          <h2 className="text-xl lg:text-2xl md:text-4xl font-bold text-neutral-900 mb-2">What&apos;s New</h2>
          <p className="text-sm lg:text text-neutral-600 max-w-2xl mx-auto">
            Stay updated with our latest election analysis, research findings, and platform improvements
          </p>
        </div>

        <div className="relative flex-1 overflow-hidden bg-white/60 backdrop-blur-sm rounded-lg border border-neutral-200">
          <div className="absolute inset-0">
            <div className="animate-marquee-vertical space-y-3">
              {/* Duplicate items for seamless loop */}
              {[...updates, ...updates].map((update, index) => (
                <div
                  key={`${update.id}-${index}`}
                  className="flex items-center justify-between px-4 py-2 border-b border-neutral-100 hover:bg-white/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        update.category === 'elections'
                          ? 'bg-info/20 text-info'
                          : update.category === 'research'
                          ? 'bg-warning/20 text-warning'
                          : 'bg-success/20 text-success'
                      }`}
                    >
                      {update.category.charAt(0).toUpperCase() + update.category.slice(1)}
                    </span>
                    <span className="text-sm lg:text-base font-medium text-neutral-900">{update.title}</span>
                  </div>
                  <span className="text-xs lg:text-sm text-neutral-500">{formatDate(update.date)}</span>
                </div>
              ))}
            </div>
          </div>
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
          animation: marquee-vertical 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
