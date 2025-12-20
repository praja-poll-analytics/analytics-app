'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-white py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Praja Poll Analytics</h3>
            <p className="text-neutral-400">Decoding Democracy with Data</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/polls" className="hover:text-primary transition-colors">
                  Polls
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-center">
                <ReactSVG src="/assets/icons/email.svg" className="size-4 mr-2 text-neutral-400" />
                prajapollsanalytics@gmail.com
              </li>
              <li className="flex items-center">
                <ReactSVG src="/assets/icons/phone.svg" className="size-4 mr-2 text-neutral-400" />
                +91 99811 92939
              </li>
              <li className="flex items-center">
                <ReactSVG src="/assets/icons/location.svg" className="min-w-4 mr-2 text-neutral-400" />
                <p>126, SLV Green Meadows, Near IRR, Ramavarappadu, Vijayawada, NTR District, Andhra Pradesh, India</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                <Image
                  src="/assets/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="text-neutral-400"
                />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                <Image
                  src="/assets/icons/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="text-neutral-400"
                />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                <Image
                  src="/assets/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="text-neutral-400"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; 2025 Praja Poll Analytics. All rights reserved.</p>
          <p className="italic text-sm">
            Disclaimer: All predictions are based on statistical analysis and may vary from actual results.
          </p>
        </div>
      </div>
    </footer>
  );
}
