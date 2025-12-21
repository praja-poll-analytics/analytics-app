'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ImageCarousel } from './ImageCarousel';
import LogoSection from './LogoSection';
import WhatsNewSection from './WhatsNewSection';

export default function HomePage() {
  return (
    <section id="home" className="min-h-screen flex flex-col pt-16">
      <div className="min-h-[calc(20vh-4rem)] flex items-center bg-gradient-to-r from-neutral-50 to-primary/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            {/* Left side - Name and Description */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2 md:mb-3">
                Welcome to <span className="text-primary">Praja Poll Analytics</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 max-w-full md:max-w-2xl">
                Specialized agency in conducting surveys, opinion polls, and advising political parties on strategies to
                gain voters&apos; confidence in winning elections
              </p>
            </div>

            <div className="flex-shrink-0 order-1 md:order-2">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <Image src="/assets/images/kmohanrao.jpeg" alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center lg:h-[calc(80vh-4rem)] min-h-[400px] bg-white">
        <div className="w-full lg:w-[40%] h-100 lg:h-full">
          <ImageCarousel />
        </div>

        <div className="w-full lg:flex-1 py-4 lg:py-0">
          <LogoSection />
        </div>

        <div className="w-full lg:w-[40%] h-100 lg:h-full">
          <WhatsNewSection />
        </div>
      </div>
    </section>
  );
}
