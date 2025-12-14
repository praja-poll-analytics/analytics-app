import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/home/Footer';
import HomeSection from '@/components/home/HomeSection';
import Navigation from '@/components/home/Navigation';
import ServicesSection from '@/components/home/ServicesSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
