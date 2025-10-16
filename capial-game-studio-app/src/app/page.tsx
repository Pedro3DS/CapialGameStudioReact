import Image from 'next/image'
import VideoBackground from './components/VideoBackground';
import StickyNavbar from './components/StickyNavbar';
import AboutUs from './components/AboutUs';
import RotatingText from './TextAnimations/RotatingText/RotatingText';
import TextType from './TextAnimations/TextType/TextType';


export default function Home() {
  return (
    <main className="relative min-h-screen text-white " >
      <VideoBackground />

      <div className="relative z-10">
        <section className="flex flex-col md:flex-row items-center justify-center h-[90vh] px-6 md:px-20 bg-gradient-to-t from-[#333333]/50 to-black/70 backdrop-blur-sm text-white relative">

          <div className="flex flex-col justify-center w-full md:w-4/5 lg:w-3/4 xl:w-2/3 space-y-6">
            {/* Texto Rotativo Circular */}
            <RotatingText
              texts={['Bem-Vindo!', 'Welcome!', '¡Bienvenido!', 'Bienvenue!']}
              mainClassName="text-5xl font-bold bg-[#333333]/50 text-white px-4 py-2 rounded-lg inline-block"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />

            {/* Linha com texto digitado + nome */}
            <div className="flex items-baseline text-2xl md:text-3xl font-semibold text-white">
              <RotatingText
                texts={["Á", "TO", "A", "À"]}
                mainClassName="font-bold text-white rounded-lg inline-block"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
              <span className="ml-2 text-amber-400">Capial Game Studio</span>
              
            </div>

            {/* Ícones Sociais */}
            <div className="flex space-x-6 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.75 2.25h8.5A5.25 5.25 0 0121.5 7.5v8.5a5.25 5.25 0 01-5.25 5.25h-8.5A5.25 5.25 0 012.5 16V7.5A5.25 5.25 0 017.75 2.25z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h.008v.008H16.5V7.5zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  fill="currentColor" className="w-8 h-8">
                  <path d="M19.615 3.184a3.012 3.012 0 012.122 2.122c.24.89.263 2.744.263 5.694s-.023 4.804-.263 5.694a3.012 3.012 0 01-2.122 2.122c-.89.24-2.744.263-5.694.263s-4.804-.023-5.694-.263a3.012 3.012 0 01-2.122-2.122c-.24-.89-.263-2.744-.263-5.694s.023-4.804.263-5.694a3.012 3.012 0 012.122-2.122C7.196 2.944 9.05 2.921 12 2.921s4.804.023 5.694.263zM10 15.5l6-3.5-6-3.5v7z" />
                </svg>
              </a>
            </div>
          </div>

        </section>



        <StickyNavbar />
        <AboutUs />
        <AboutUs />
      </div>
    </main>
  );
}
