'use client'

import Image from "next/image"
import CapialImage from "../../../public/TeamImage.jpg"
import { useLanguage } from "../i18n/LanguageContext"

export default function AboutUs() {
  const { idioma, setIdioma, textos } = useLanguage()
  const t = textos.aboutUs

  return (
    <section id="aboutUs" className="w-full bg-black text-white pt-26">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-[7vh] md:text-[10vh] font-bold text-center md:text-left mb-8 uppercase">
          {t.title}
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={CapialImage}
              alt="Capial Logo"
              priority
              className="w-70 h-70 md:w-120 md:h-120 duration-300 object-cover
                rounded-lg hover:rounded-2xl transition-all ease-in hover:scale-105"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4 text-lg text-justify">
            <p>{t.text1}</p>
            <p>{t.text1}</p>
            <p>{t.text1}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
