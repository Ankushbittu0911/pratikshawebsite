import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import AboutSection from '@/components/sections/AboutSection';
import ClientsSection from '@/components/sections/ClientsSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      {/* Fixed navbar — transparent over hero, solid on scroll */}
      <Navbar transparent />

      {/* Cinematic hero scroll section */}
      <HeroSection />

      {/* All homepage sections */}
      <ProductsSection />
      <AboutSection />
      <ClientsSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
