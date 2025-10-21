'use client'

import Balatro from "../Backgrounds/Balatro/Balatro"
import { useLanguage } from "../i18n/LanguageContext"
import TextType from "../TextAnimations/TextType/TextType"


export default function Contact() {
    const { idioma, setIdioma, textos } = useLanguage()
    const t = textos.contact
    return (
        <section id="contact" className="relative w-full text-white pt-16 h-[700px] md:h-[600px]">
            {/* BACKGROUND */}
            <Balatro
                color1="#0F0F0F"
                color3="#162325"
                color2="#B45309"
                isRotate={false}
                mouseInteraction={true}
                pixelFilter={700}
                className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#222] from-[0.5vh] via-transparent to-[#111]"></div>

            {/* CONTEÚDO */}
            <div className="relative max-w-6xl mx-auto z-10 justify-center gap-10 h-full ">
                <div className="w-full bg-[#0F0F0F]/60 rounded-2xl backdrop-blur-sm text-center p-[60px]">
                    <TextType
                        text={["Olá !", "Hello !", "Hola !", "Bonjour !"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-[5vh] md:text-[20vh] lg:text-[5vh] 2xl:text-[5vh] 3xl:text-[2vh] font-bold text-center uppercase "
                    />
                    {/* <h3 className="text-[5vh] md:text-[20vh] lg:text-[5vh] 2xl:text-[10vh] 3xl:text-[2vh] font-bold text-center uppercase ">Olá</h3> */}
                    <h3 className="text-[3vh] md:text-[20vh] lg:text-[5vh] 2xl:text-[5vh] 3xl:text-[2vh] font-bold text-center uppercase text-[#d97706] text-shadow-2xs text-shadow-sky-300" style={{
                        textShadow: "0 0 15px rgba(255, 155, 40, 0.8)",
                    }}>{t.subtitle}</h3>

                    <div className="w-full flex flex-row justify-center items-center my-10">

                        <div className="h-1 w-1/3 bg-linear-65 from-red-500 via-amber-400 to-red-200"></div>
                        <h1 className="text-[5vh] mx-3 w-auto font-bold text-center uppercase ">{t.title}</h1>
                        <div className="h-1 w-1/3 bg-linear-65 from-red-200 via-amber-400 to-red-500"></div>
                    </div>
                    <div className="w-full space-y-4 text-lg text-justify md:flex gap-10 items-center justify-center">
                        <div className="w-full md:w-1/4 ">
                            <p className="text-center md:text-justify text-xl">{t.text1}</p>

                        </div>
                        <div className="w-full md:w-1/6 flex justify-center items-center">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at w-auto h-8 md:h-10 bold" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                            </svg>
                        </div>
                        <div className="w-full md:w-1/4 text-center md:text-justify">

                            <a href="mailto:contato@capialgamestudio.com.br" className="underline   ">contato@capialgamestudio.com.br</a>
                            <h1 className="mt-5">Campo Grande, MS – Brasil</h1>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
