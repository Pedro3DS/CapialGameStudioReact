'use client'

import { useEffect } from "react"
import ScrollVelocity from "../TextAnimations/ScrollVelocity/ScrollVelocity"
import HoverUnderline from "./HoverUnderline"

export default function Instagram() {

    return (
        <section id="instagram" className="w-full bg-black text-white">
            <ScrollVelocity
                texts={['Follow Us', 'On Instagram']}
                velocity={100}
                className="custom-scroll-text"
            />
            <div className="max-w-6xl mx-auto px-6">
                <HoverUnderline />

                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* <div className="w-full md:w-1/2 flex justify-center">
                            <div className="w-48 h-48 bg-gray-700 rounded-full"></div>
                        </div>

                        <div className="w-full md:w-1/2 space-y-4 text-lg">
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
                        </div> */}
                </div>
            </div>
        </section>
    )
}
