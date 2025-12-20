'use client';

import Image from 'next/image';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ElectionResults from './ElectionResults';

const carouselImages = [
  'https://indianpac.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/05/21113732/IMPACT_Delhi_2.webp',
  'https://indianpac.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/05/14132551/IMPACT_WB.webp',
  'https://indianpac.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/07/our-impact-tn.webp',
  'https://indianpac.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/07/our-impact-mh.webp',
  'https://indianpac.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/07/our-impact-up.webp',
];

export default function HomeSection() {
  const swiperRef = useRef(null);

  return (
    <section id="home" className="min-h-screen flex flex-col pt-16">
      {/* Top Section - 20% height */}
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

            {/* Right side - Leader Photo */}
            <div className="flex-shrink-0 order-1 md:order-2">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <Image src="/assets/images/kmohanrao.jpeg" alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - 80% height with Carousel */}
      <div className="lg:h-[calc(80vh-4rem)] h-60 relative bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.swiper-prev',
            nextEl: '.swiper-next',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          className="h-full"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="absolute inset-0 bg-black/40" />
              <Image src={image} alt={`Carousel slide ${index + 1}`} fill className="object-cover p-0 lg:p-16" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Carousel Controls */}
        <button className="swiper-prev absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-800/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-neutral-700 transition-colors z-10 cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="swiper-next absolute right-4 top-1/2 -translate-y-1/2 bg-neutral-800/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-neutral-700 transition-colors z-10 cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="swiper-pagination absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10" />

        {/* Call to Action Overlay */}
        {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center z-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-lg"
            >
              Learn More
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-600 text-purple-400 rounded-lg font-medium hover:bg-purple-900/30 transition-colors shadow-lg backdrop-blur-sm"
            >
              Get Started
            </button>
          </div>
        </div> */}
      </div>

      {/* Election Results Section */}
      <div className="bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100">
        <ElectionResults />
      </div>
    </section>
  );
}
