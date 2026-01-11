'use client';

import Image from 'next/image';

export default function LogoSection() {
  return (
    <div className="size-full relative overflow-hidden">
      <Image
        src="/assets/images/india_map.jpg"
        alt="India Map"
        fill
        className="absolute inset-0 opacity-55 object-contain"
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-blue-50/90 rounded-2xl " />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full gap-6 text-center justify-center items-center px-2 sm:px-4 lg:px-8">
        <Image
          src="/assets/logo.svg"
          alt="Praja Poll Analytics"
          width={80}
          height={80}
          className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-140 cursor-pointer"
        />
        <h2 className="text-xl lg:text-3xl font-bold text-neutral-900 mb-2 lg:mb-4">Praja Poll Analytics</h2>
      </div>
    </div>
  );
}
