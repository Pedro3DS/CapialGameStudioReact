'use client'

import Gateball from "/GateballImage1.jpeg"
import PantanalCode from "/PantanalCode.jpeg"
import CerradoVivo from "/CerradoVivo.jpeg"
import { useLanguage } from "../i18n/LanguageContext"
import { href } from "react-router-dom"

export default function Projects() {

  const {textos } = useLanguage()
  const t = textos.projects

  // Dados dos projetos
  const projects = [
    {
      image: PantanalCode,
      name: "Pantanal Code",
      color: "#10566A", // cor principal
      link: "https://capialgamestudio.com/PantanalCode/", // link do botão
    },
    {
      image: Gateball,
      name: "Gateball",
      color: "#A00030",
      link: "https://capialgamestudio.com/Gateball/",
    },
    {
      image: CerradoVivo,
      name: "Cerrado Vivo",
      color: "#78AE3A",
      link: "https://capialgamestudio.com/CerradoVivo/",
    },
  ]

  return (
    <section id="projects" className="w-full bg-gradient-to-b from-black via-[#222] to-[#333] text-white pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-1 w-[50%] bg-linear-65 from-red-500 via-amber-400 to-red-200"></div>
        <h1 className="w-full text-[7vh] md:text-[20vh] lg:text-[20vh] 2xl:text-[10vh] 3xl:text-[2vh] font-bold text-center  uppercase ">{t.title}</h1>

        <div className="h-1 w-[50%] ms-[50%] bg-linear-65 from-red-200 via-amber-400 to-red-500"></div>

        {/* GRID */}
        <div className="flex flex-col md:flex-row items-center gap-10 mt-16">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative group w-full md:w-1/3 flex justify-center transition-all duration-700 ease-out cursor-pointer overflow-hidden rounded-xl hover:-translate-y-3"
              style={{ boxShadow: `0 0 20px ${p.color}60` }}
              onClick={() => window.open(p.link)}
            >
              {/* IMAGEM */}
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-auto rounded-xl object-cover transition-all duration-700 ease-out transform group-hover:scale-[1.05]"
              />

              {/* CARD DE INFORMAÇÃO */}
              <div
                className="absolute bottom-0 w-full flex flex-row justify-between items-end p-6 text-left opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out"
                style={{
                  background: `linear-gradient(to top, ${p.color}dd 15%, transparent 80%)`,
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  maskImage: "linear-gradient(to top, black 70%, transparent 100%)",
                }}
                // onClick={() => window.open(p.link, "_blank")}
              >
                <h2 className="text-2xl font-bold text-white drop-shadow-lg">{p.name}</h2>

                {/* BOTÃO ESTILIZADO */}
                <a
                  href={p.link}
                  className="p-1 rounded-full backdrop-blur-lg bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer group relative overflow-hidden"
                  style={{
                    border: `1px solid ${p.color}60`,
                    boxShadow: `0 0 10px ${p.color}60`,
                  }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                  ></div>

                  <div className="relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill={p.color}
                      className="bi bi-instagram w-7 h-7 transition-colors duration-300 group-hover:brightness-150"
                      viewBox="0 0 16 16"
                    >
                      <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* BRILHO SUTIL */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-all duration-700 ease-out pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 80%, ${p.color}40 0%, transparent 70%)`,
                  mixBlendMode: "screen",
                }}
              ></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
