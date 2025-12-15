'use client';

import Image from 'next/image';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Praja Poll Analytics</h3>
            <p className="text-gray-400">Decoding Democracy with Data</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-purple-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Image
                  src="/assets/icons/email.svg"
                  alt="Email"
                  width={16}
                  height={16}
                  className="mr-2 text-gray-400"
                />
                prajapollsanalytics@gmail.com
              </li>
              <li className="flex items-center">
                <Image
                  src="/assets/icons/phone.svg"
                  alt="Phone"
                  width={16}
                  height={16}
                  className="mr-2 text-gray-400"
                />
                +91 99811 92939
              </li>
              <li className="flex items-center">
                <Image
                  src="/assets/icons/location.svg"
                  alt="Location"
                  width={16}
                  height={16}
                  className="mr-2 text-gray-400"
                />
                <p>126, SLV Green Meadows, Near IRR, Ramavarappadu, Vijayawada, NTR District, Andhra Pradesh, India</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Image
                  src="/assets/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="text-gray-400"
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Image src="/assets/icons/twitter.svg" alt="Twitter" width={24} height={24} className="text-gray-400" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Image
                  src="/assets/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="text-gray-400"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Praja Poll Analytics. All rights reserved.</p>
          <p className="italic text-sm">
            Disclaimer: All predictions are based on statistical analysis and may vary from actual results.
          </p>
        </div>
      </div>
    </footer>
  );
}
