'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { mediaCoverage } from '../data';

// Helper to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const MediaCoverageSection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  // Handle Escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxImage) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, closeLightbox]);

  const videos = mediaCoverage.filter((item) => item.type === 'video');
  const pressItems = mediaCoverage.filter((item) => item.type === 'press');

  return (
    <section id="media-coverage" className="py-16 bg-gradient-to-br from-teal-50 via-white to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 border-2 border-teal-200 shadow-lg flex items-center justify-center">
            <ReactSVG src="/assets/icons/media-coverage.svg" className="text-teal-600 size-8" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
            Media Coverage & Analysis
          </h2>
        </div>

        <div className="space-y-8">
          {/* Video Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-teal-100 p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 border border-teal-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              Video Analysis
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((item, idx) => {
                const videoId = item.youtubeUrl ? getYouTubeVideoId(item.youtubeUrl) : null;
                return (
                  <div
                    key={idx}
                    className="bg-teal-50/50 rounded-xl border border-teal-100 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* YouTube Embed or Placeholder */}
                    <div className="aspect-video bg-gray-900 relative">
                      {videoId ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={item.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                          <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          <span className="text-sm">Video coming soon</span>
                        </div>
                      )}
                    </div>
                    {/* Video Info */}
                    <div className="p-4">
                      <h4 className="font-medium text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Press Coverage */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-teal-100 p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 border border-teal-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v11.75A2.75 2.75 0 0016.75 18h-12A2.75 2.75 0 012 15.25V3.5zm3.75 7a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM5 5.75A.75.75 0 015.75 5h4.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-4.5A.75.75 0 015 8.25v-2.5z"
                    clipRule="evenodd"
                  />
                  <path d="M16.5 6.5h-1v8.75a1.25 1.25 0 102.5 0V8a1.5 1.5 0 00-1.5-1.5z" />
                </svg>
              </div>
              Press Coverage
            </h3>
            <p className="text-sm text-gray-700 mb-6">
              Our election predictions and analysis have been featured in leading newspapers and media outlets
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-teal-50/50 rounded-xl border border-teal-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Press Image or Placeholder */}
                  <div
                    className={`aspect-[4/3] bg-gray-100 relative ${item.image ? 'cursor-pointer' : ''}`}
                    onClick={() => item.image && setLightboxImage(item.image)}
                  >
                    {item.image ? (
                      <>
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                          <div className="bg-white/90 rounded-full p-2">
                            <svg
                              className="w-6 h-6 text-gray-700"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                        <svg className="w-12 h-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                        <span className="text-sm">Image coming soon</span>
                      </div>
                    )}
                  </div>
                  {/* Press Info */}
                  <div className="p-4">
                    <h4 className="font-medium text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage}
              alt="Press coverage"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaCoverageSection;
