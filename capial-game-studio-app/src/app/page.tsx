import Image from 'next/image'
import VideoBackground from './components/VideoBackground';
import StickyNavbar from './components/StickyNavbar';
import AboutUs from './components/AboutUs';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <VideoBackground />

      <div className="relative z-10">
        <section className="flex items-center justify-center h-[85vh]">
          <h1 className="text-5xl font-bold drop-shadow-lg">Bem-vindo ao site!</h1>
        </section>

        <StickyNavbar />
        <AboutUs />
        <AboutUs />
      </div>
    </main>
  );
}
