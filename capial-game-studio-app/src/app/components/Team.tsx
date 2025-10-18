'use client'

import Image from "next/image"
import Mauricio from "../../../public/mauricio.jpg"
import Felipe from "../../../public/felipe.jpeg"
import Gabriel from "../../../public/gabriel.jpg"
import PedroImg from "../../../public/pedro.webp"
import Barba from "../../../public/barba.webp"
import InstagramIcon from "../../../public/icons8-instagram-512.png"
import { useEffect, useState } from "react"
import TextType from "../TextAnimations/TextType/TextType"
import { useLanguage } from "../i18n/LanguageContext"


export default function Team() {
    const { idioma, setIdioma, textos } = useLanguage()
    const t = textos.team
    const team = [
        {
            name: "Mauricio de Souza Estevam",
            role: t.mauricio.role,
            description: t.mauricio.description,
                // "Programador e especialista em game design com vasta experiência no desenvolvimento de soluções tecnológicas inovadoras. Fundador da Capial, lidera projetos que integram criatividade e excelência técnica. Professor de jogos digitais, combina sua paixão por jogos com um compromisso em formar talentos e impulsionar o setor.",
            image: Mauricio,
            instagram: "https://www.instagram.com/mauriiciosouza/",
            username: "mauriiciosouza",
            color: "text-[#F59E0B]"
        },
        {
            name: "Gabriel Medeiros",
            role: t.gabriel.role,
            description: t.gabriel.description,
                // "Profissional multifacetado com expertise em design gráfico, interfaces e ambientes. Especialista em VFX, combina criatividade e precisão técnica para criar visuais impactantes. Líder em projetos artísticos, entrega experiências imersivas e inovadoras.",
            image: Gabriel,
            instagram: "https://www.instagram.com/biel_dc/",
            username: "biel_dc",
            color: "text-[#EA910B]"
        },
        {
            name: "Pedro Diniz",
            role: t.pedro.role,
            description: t.pedro.description,
                // "Programador versátil com expertise em Unity e desenvolvimento web. Cria sistemas robustos para web e jogos, garantindo alta performance. Entrega resultados consistentes que impulsionam qualidade e funcionalidade em diversos ambientes tecnológicos.",
            image: PedroImg,
            instagram: "https://www.instagram.com/pedro_3ds/",
            username: "pedro_3ds",
            color: "text-[#D4780A]"
        },
        {
            name: "Gabriel Barberiz",
            role: t.barba.role,
            description: t.barba.description,
                // "Responsável por criar experiências imersivas e narrativas cativantes. Une escrita criativa e design de jogo para construir universos ricos e envolventes.",
            image: Barba,
            instagram: "https://www.instagram.com/barba_game/",
            username: "barba_game",
            color: "text-[#C0610A]"
        },
        {
            name: "Felipe Dôza",
            role: t.felipe.role,
            description: t.felipe.description,
                // "Especializado em design de cenários, efeitos visuais e HUD, com foco na experiência do jogador. Cria visuais envolventes e funcionais que elevam a narrativa e imersão em projetos digitais.",
            image: Felipe,
            instagram: "https://www.instagram.com/felipe_dozaa/",
            username: "felipe_dozaa",
            color: "text-[#CD700A]"
        },

    ]

    useEffect(() => {
        const scrollContainer = document.querySelector('.horizontal-scroll')
        if (!scrollContainer) return

        const handleWheel = (e: WheelEvent) => {

            e.preventDefault()
            scrollContainer.scrollLeft += e.deltaY
        }

        const disableVerticalScroll = () => {
            window.addEventListener("wheel", handleWheel, { passive: false })
        }

        const enableVerticalScroll = () => {
            window.removeEventListener("wheel", handleWheel)
        }

        scrollContainer.addEventListener("mouseenter", disableVerticalScroll)
        scrollContainer.addEventListener("mouseleave", enableVerticalScroll)

        return () => {
            scrollContainer.removeEventListener("mouseenter", disableVerticalScroll)
            scrollContainer.removeEventListener("mouseleave", enableVerticalScroll)
            window.removeEventListener("wheel", handleWheel)
        }
    }, [])

    return (
        <section id="team" className="w-full bg-linear-to-b from-[#333] to-[#222] text-white py-20">

            <div className="max-w-6xl mx-auto px-6 h-auto">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="flex w-1/4 flex-col md:flex-row items-center justify-center mb-10">
                        <div className="hidden md:flex flex-col text-[20vh] font-bold uppercase leading-[1]">
                            <span>E</span>
                            <span>qui</span>
                            <span>pe</span>
                        </div>
                        <h1 className="md:hidden text-6xl font-bold uppercase text-center">
                            {t.title}
                        </h1>
                    </div>

                    <div className="horizontal-scroll w-full md:w-auto h-auto gap-6 ps-6 py-2 flex space-y-4 text-lg text-justify overflow-x-auto">
                        {team.map((member, i) => (
                            <div
                                key={i}
                                className="w-full md:min-w-[300px] md:max-w-[350px] h-[85vh] bg-white/5 border border-white/10 rounded-2xl p-4 flex-shrink-0 hover:scale-[1.02] transition-all duration-300 backdrop-blur-md shadow-md"
                            >
                                <div className="relative group w-full overflow-hidden rounded-xl">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        className="rounded-xl object-cover w-full h-[300px]"
                                    />
                                    <a
                                        href={member.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute w-full h-full inset-0 bg-gradient-to-br from-[#4f5bd5]/30 via-[#d62976]/30   to-[#feda75]/30 filter backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <Image
                                            src={InstagramIcon}
                                            alt="Instagram"
                                            width={60}
                                            height={60}
                                            className=" mb-2"
                                        />
                                        <TextType
                                            text={[`@${member.username}`]}
                                            typingSpeed={75}
                                            pauseDuration={300}
                                            showCursor={true}
                                            cursorCharacter="|"

                                        />

                                    </a>
                                </div>
                                <div className="mt-4 text-left space-y-2">
                                    <h3 className={`text-lg font-bold ${member.color}`}>{member.name}</h3>
                                    <p className="text-sm font-semibold text-gray-300">{member.role}</p>
                                    <p className="text-[2vh] text-gray-400 text-justify">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
