'use client'

import Image from "next/image"
import CapialImage from "../../../public/Icon-removebg-preview.png"
export default function AboutUs() {
  return (
    <section id="aboutUs" className="w-full bg-black text-white pt-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-[7vh] md:text-[20vh] lg:text-[20vh] 2xl:text-[10vh] 3xl:text-[2vh] font-bold text-center md:text-left mb-8 uppercase ">SOBRE NÓS</h1>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={CapialImage}
              alt="Capial Logo"
              priority
              className={`w-50 h-50 md:w-100 md:h-100 object-cover rounded-full transition-all ease-in `}
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4 text-lg text-justify ">
            <p>
              A Capial Games é um estúdio indie de desenvolvimento de jogos do Mato Grosso do Sul, fundado por
              Mauricio de Souza e Gabriel Ferreira Medeiros. Com uma equipe multidisciplinar, o estúdio cria jogos
              educacionais e culturais que valorizam a identidade regional.
            </p>
            <p>
              Apesar das dificuldades de se trabalhar com desenvolvimento de jogos em cidades mais interioranas e
              tradicionais como a nossa, o estúdio Capial tem ganhado espaço em editais e oportunidades que vêm
              surgindo no estado do agro!
            </p>
            <p>
              A Capial Games une inovação, educação e cultura para transformar o cenário dos games no Brasil. Nosso
              objetivo é preservar e divulgar as várias facetas da diversidade cultural do Brasil, não só para o
              brasileiro mas também para todo o mundo!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
