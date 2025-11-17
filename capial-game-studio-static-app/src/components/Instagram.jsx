'use client'

import ScrollVelocity from "../blocks/TextAnimations/ScrollVelocity/ScrollVelocity"
import Image1 from "/GateballBrasilDirect.jpg"
import Image2 from "/TwoGirls.jpg"
import Image4 from "/Gamescom 3.jpg"
import Image5 from "/Gamescom 1.jpg"
import Image6 from "/Gamescom 2.jpg"
import Image8 from "/Gamescom 4.jpg"
import InstagramIcon from "/icons8-instagram-512.png"
import { useLanguage } from "../i18n/LanguageContext"

export default function Instagram() {
  const images = [Image4, Image5, Image1, Image2, Image6, Image8]
  const links = [
    "https://www.instagram.com/p/DJRd5FnxRMk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/DJRd5FnxRMk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/DIehlvtOVNM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/DIE9CMdSLRJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/DJRd5FnxRMk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/DJRd5FnxRMk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  ]
  const { textos } = useLanguage()
  const t = textos.instagram

  // Cores individuais das sombras
  const hoverColors = [
    'rgba(255, 0, 128, 0.5)',   // rosa
    'rgba(0, 128, 255, 0.5)',   // azul
    'rgba(255, 255, 0, 0.5)',   // amarelo
    'rgba(0, 255, 128, 0.5)',   // verde
    'rgba(255, 128, 0, 0.5)',   // laranja
    'rgba(128, 0, 255, 0.5)'    // roxo
  ]

  return (
    <section id="instagram" className="w-full bg-black text-white py-16">

      <div className="w-full flex justify-between items-center mb-8">
        <div className="h-1 w-full bg-amber-400"></div>
        <h2 className="text-4xl w-full items-center text-center font-bold">{t.scrollText1}</h2>
        <div className="h-1 w-full bg-amber-400"></div>
        </div>
      {/* Grade de imagens */}
      {/* <div className="grid grid-cols-3 md:grid-cols-6 gap-3 w-full px-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group transition-all duration-500 ease-out"
          >
         
            <a
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="h-10 w-10"
              />
            </a>

    
            <img
              src={img}
              alt={`Instagram image ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl border border-gray-700 transition-transform duration-500 ease-out group-hover:scale-105"
              style={{
                transition: 'all 0.5s ease-out',
                boxShadow: '0 0 0 transparent',
                border: '2px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 20px ${hoverColors[index]}`
                e.currentTarget.style.borderColor = hoverColors[index]
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 0 0 transparent'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            />
          </div>
        ))}
      </div> */}
      {/* Loop contínuo dos cards do Instagram */}
      <div className="relative overflow-hidden w-full py-4">
        <div
          className="flex min-w-min animate-loop-scroll gap-3"
          style={{
            animationDuration: "40s", // ajuste de velocidade
          }}
        >
          {/* Bloco original + duplicado */}
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group transition-all duration-500 ease-out min-w-[200px] md:min-w-[220px]"
            >
              <a
                href={links[index % images.length]}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl"
              >
                <img src={InstagramIcon} alt="Instagram" className="h-10 w-10" />
              </a>

              <img
                src={img}
                alt={`Instagram image ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl border border-gray-700 transition-transform duration-500 ease-out group-hover:scale-105"
                style={{
                  transition: 'all 0.5s ease-out',
                  boxShadow: '0 0 0 transparent',
                  border: '2px solid rgba(255,255,255,0.1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${hoverColors[index % hoverColors.length]}`
                  e.currentTarget.style.borderColor = hoverColors[index % hoverColors.length]
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 0 0 transparent'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                }}
              />
            </div>
          ))}
        </div>
      </div>



    </section>
  )
}
