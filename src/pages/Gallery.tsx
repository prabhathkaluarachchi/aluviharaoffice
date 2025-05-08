// src/pages/GalleryPage.tsx
import TimelessHeritage from '../components/gallery/TimelessHeritage';
import DiscoverHighlights from '../components/gallery/DiscoverHighlights';
import GalleryGrid from '../components/gallery/GalleryGrid';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from '@/components/gallery/Hero';
export default function Gallery() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <TimelessHeritage />
      <DiscoverHighlights />
      <GalleryGrid />
      <Footer/>
    </main>
  );
}
