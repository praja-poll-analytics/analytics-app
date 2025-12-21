import Footer from '@/components/home/Footer';
import HomePage from '@/components/home/HomePage';
import Navigation from '@/components/home/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100">
      <Navigation />
      <HomePage />
      {/* <AboutSection /> */}
      <Footer />
    </div>
  );
}
