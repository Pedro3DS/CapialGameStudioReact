'use client'
import VideoBackground from './components/VideoBackground';
import StickyNavbar from './components/StickyNavbar';
import AboutUs from './components/AboutUs';
import RotatingText from './TextAnimations/RotatingText/RotatingText';
import GradientText from './TextAnimations/GradientText/GradientText';
import Instagram from './components/Instagram';


export default function Home() {
  return (
    <main className="relative min-h-screen text-white font-montserrat" >
      <VideoBackground />

      <div className="relative z-10">
        <section className="flex flex-col md:flex-row items-center justify-center h-[75vh] md:h-[88vh] px-6 md:px-20 bg-gradient-to-t from-[#333333]/100 from-2% to-black/20 backdrop-blur-sm text-white relative">

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
                texts={["Á", "To", "A", "À"]}
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
              <div className="group relative inline-block">
                <a className="focus:outline-none" href='https://www.instagram.com/capialgamestudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                  target='_blank'>
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-instagram transform transition-transform duration-300 hover:scale-125 hover:text-linear-65 from-purple-500 to-pink-500"
                    fill="currentColor"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"

                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                    ></path>
                  </svg>
                </a>
                <span
                  className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
                >Instagram</span>
              </div>
              <div className="group relative inline-block">
                <a className="focus:outline-none" href='https://www.instagram.com/capialgamestudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                  target='_blank'>
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-youtube transform transition-transform duration-300 hover:scale-125 hover:text-linear-65 from-purple-500 to-pink-500"
                    fill="currentColor"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"

                  >

                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />

                  </svg>
                </a>
                <span
                  className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
                >YouTube</span>
              </div>


            </div>
          </div>
          

        </section>



        <StickyNavbar />
        <AboutUs />

        <Instagram />
        <AboutUs />
        <AboutUs />
      </div>
    </main>
  );
}
