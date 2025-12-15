'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { name: 'Home', sectionId: 'home' },
  { name: 'About', href: '/about' },
  { name: 'Services', sectionId: 'services' },
  { name: 'Contact Us', sectionId: 'contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex flex-row items-center gap-4">
            <Image src="/assets/logo.svg" alt="Praja Poll Analytics" width={50} height={50} className="rounded" />
            <h1 className="text-2xl font-bold text-purple-400">Praja Poll Analytics</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) =>
                item.href ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.sectionId}
                    onClick={() => scrollToSection(item.sectionId!)}
                    className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-purple-400 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-purple-400 px-3 py-2 text-base font-medium w-full text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId!)}
                  className="block text-gray-300 hover:text-purple-400 px-3 py-2 text-base font-medium w-full text-left"
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
