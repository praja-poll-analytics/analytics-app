import Image from 'next/image';
import { useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const carouselImages = [
  ...Array.from({ length: 5 }, (_, i) => `/assets/images/carousel/carousel_${i + 1}.jpeg`),
  '/assets/images/coverage/newspaper2.jpeg',
];

export const ImageCarousel = () => {
  const swiperRef = useRef(null);
  return (
    <div className="h-full relative bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100">
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
            <div className="absolute inset-0 bg-white" />
            <Image src={image} alt={`Carousel slide ${index + 1}`} fill className="object-contain p-0" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Carousel Controls */}
      <button className="swiper-prev absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-neutral-800/80 backdrop-blur-sm text-white p-2 lg:p-3 rounded-full hover:bg-neutral-700 transition-colors z-10 cursor-pointer">
        <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="swiper-next absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-neutral-800/80 backdrop-blur-sm text-white p-2 lg:p-3 rounded-full hover:bg-neutral-700 transition-colors z-10 cursor-pointer">
        <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Indicators */}
      <div className="swiper-pagination absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-1 lg:gap-2 z-10" />
    </div>
  );
};
