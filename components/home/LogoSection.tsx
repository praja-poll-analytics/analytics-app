'use client';

import Image from 'next/image';

export default function LogoSection() {
  return (
    <div className="w-full py-6 lg:py-12 px-2 sm:px-4 lg:px-8 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4 lg:mb-6">
            <Image
              src="/assets/logo.svg"
              alt="Praja Poll Analytics"
              width={80}
              height={80}
              className="rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-xl lg:text-3xl md:text-4xl font-bold text-neutral-900 mb-2 lg:mb-4">
            Praja Poll Analytics
          </h2>
          <p className="text-sm lg:text-lg text-neutral-600 max-w-2xl mx-auto">
            Your trusted partner for political research, opinion polls, and strategic campaign consulting
          </p>
        </div>
      </div>
    </div>
  );
}
