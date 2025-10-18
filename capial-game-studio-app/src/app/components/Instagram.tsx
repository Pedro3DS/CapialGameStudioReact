'use client'

import Image from "next/image"
import ScrollVelocity from "../TextAnimations/ScrollVelocity/ScrollVelocity"
import Image1 from "../../../public/GateballBrasilDirect.jpg"
import Image2 from "../../../public/TwoGirls.jpg"
import Image4 from "../../../public/Gamescom 3.jpg"
import Image5 from "../../../public/Gamescom 1.jpg"
import Image6 from "../../../public/Gamescom 2.jpg"
import Image8 from "../../../public/Gamescom 4.jpg"
import InstagramIcon from "../../../public/icons8-instagram-512.png"
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
  const { idioma, setIdioma, textos } = useLanguage()
  const t = textos.instagram

  return (
    <section id="instagram" className="w-full bg-black text-white py-16">
      <ScrollVelocity
        texts={[t.scrollText1]}
        velocity={100}
        className="custom-scroll-text"
      />

      {/* GRID RESPONSIVO (sem scroll) */}
      <div className="grid grid-cols-3 md:grid-cols-6 w-full h-[40vh]">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-full overflow-hidden group"
          >
            <a
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-transparent backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-800 z-10"
            >
              <Image
                src={InstagramIcon}
                alt="Instagram"
                width={60}
                height={60}
                className=""
              />
            </a>

            {/* Foto real */}
            <Image
              src={img}
              alt={`Instagram image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-101 transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>

      <ScrollVelocity
        texts={[t.scrollText2]}
        velocity={100}
        className="custom-scroll-text"
      />
    </section>
  )
}
