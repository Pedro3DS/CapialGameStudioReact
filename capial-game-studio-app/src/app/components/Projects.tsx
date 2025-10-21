'use client'

import Image from "next/image"
import Gateball from "../../../public/GateballImage1.jpeg"
import PantanalCode from "../../../public/PantanalCode.jpeg"
import CerradoVivo from "../../../public/CerradoVivo.jpeg"
import { useLanguage } from "../i18n/LanguageContext"

export default function Projects() {

  const { idioma, setIdioma, textos } = useLanguage()
  const t = textos.projects
  return (
    <section id="projects" className="w-full bg-gradient-to-b from-black via-[#222] to-[#333] text-white pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-1 w-[50%] bg-linear-65 from-red-500 via-amber-400 to-red-200"></div>
        <h1 className="w-full text-[7vh] md:text-[20vh] lg:text-[20vh] 2xl:text-[10vh] 3xl:text-[2vh] font-bold text-center  uppercase ">{t.title}</h1>

        <div className="h-1 w-[50%] ms-[50%] bg-linear-65 from-red-200 via-amber-400 to-red-500"></div>

        <div className="flex flex-col md:flex-row items-center gap-10 mt-18">
          <div className="w-full md:w-1/3 flex justify-center relative group">
            <Image
              src={PantanalCode}
              alt="Capial Logo"
              priority
              className={` object-cover transition-all ease-in rounded-xl duration-300 cursor-pointer drop-shadow-xl drop-shadow-[#10566A]/50  hover:drop-shadow-2xl hover:drop-shadow-[#10566A]/100`}
            />

            {/* <!-- From Uiverse.io by Javierrocadev -->
            <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 group-hover:border-rose-300 group-hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 group-hover:duration-500 underline underline-offset-2 group-hover:after:-right-8 group-hover:before:right-12 group-hover:before:-bottom-8 group-hover:before:blur group-hover:underline group-hover:underline-offset-4  origin-left group-hover:decoration-2 group-hover:text-rose-300 absolute bg-neutral-800 h-10 w-40 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg -bottom-10 -right-10">
              Cerrado Vivo
            </button> */}








          </div>
          <div className="w-full md:w-1/3 flex justify-center md:mb-15">

            <Image
              src={Gateball}
              alt="Capial Logo"
              priority
              className={` object-cover transition-all ease-in rounded-xl duration-300 cursor-pointer drop-shadow-xl drop-shadow-[#A00030]/50  hover:drop-shadow-2xl hover:drop-shadow-[#A00030]/100 `}
            />
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={CerradoVivo}
              alt="Capial Logo"
              priority
              className={` object-cover transition-all ease-in rounded-xl duration-300 cursor-pointer drop-shadow-xl drop-shadow-[#D4D8A0]/50  hover:drop-shadow-2xl hover:drop-shadow-[#D4D8A0]/100`}
            />
          </div>


        </div>
      </div>
    </section>
  )
}
