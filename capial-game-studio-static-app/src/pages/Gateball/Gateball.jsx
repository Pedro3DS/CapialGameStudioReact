'use client'

import { Scripts } from "react-router-dom";
import TextPressure from "../../blocks/TextAnimations/TextPressure/TextPressure";
import Footer from "../../components/Footer";
import FooterGamePages from "../components/FooterGamePages";
import ImageBackgroundGames from "../components/ImageBackgroundGames";

import imageBG from "/GateballImage1.jpeg";
import imageBG2 from "/GateballImage2.jpeg";
import imageBG3 from "/Gateball.jpeg";
import capialImage from "/CapialLogoSquare-removebg-preview.png";
import logo from "/GateballLogo.jpeg";
import { LanguageProvider } from "../../i18n/LanguageContext";
import Balatro from "../../blocks/Backgrounds/Balatro/Balatro";

import video from "/Videos/BgVideo.mp4";

export default function Gateball() {
    return (
        <main className="relative min-h-screen text-[#F6F6F6] font-montserrat overflow-x-hidden">
            <LanguageProvider>
                {/* BG */}
                <ImageBackgroundGames image={imageBG} />


                {/* Overlay */}
                <div className="fixed inset-0 bg-linear-to-b from-[#333]/60 via-[#333]/80 to-[#990100]/40 backdrop-blur-sm -z-10" />

                {/* NAVBAR */}
                <nav className="fixed w-full z-50 py-1  backdrop-blur-md">
                    <div className="max-w-4xl mx-auto flex items-center justify-center">
                        <a href="">Summary</a>
                        <a href="">Target</a>
                        <img
                            src={logo}
                            alt="Gateball Logo"
                            className="w-15 h-15 rounded-full object-cover shadow-xl border border-white/20"

                        />
                        <a href="">Gameplay</a>
                        <a href="">SUmmary</a>
                    </div>
                </nav>

                {/* HEADER */}
                <header className="max-w-8xl mx-auto  h-[75vh] flex flex-col justify-center items-center text-center px-4">
                    <div className="w-full h-full pt-20">
                        <TextPressure
                            text="Gateball"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={false}
                            italic={true}
                            textColor="#B90504"
                            strokeColor="#ffffff"
                            minFontSize={156}

                        />
                    </div>

                    <p className="font-bold text-2xl md:text-5xl pb-20 uppercase tracking-[0.25em]" style={{ textShadow: "0 0 15px rgba(185, 005, 004, 0.8)" }}>
                        Memuro Championship
                    </p>
                </header>

                {/* By */}
                {/* <div className=" w-full h-10 flex justify-center items-center bg-[#333333] mt-15">
                    <div className="max-w-6xl mx-auto flex flex-row justify-center items-center -translate-y-5">
                        <h1 className="w-full h-full text-6xl font-bold text-center">From</h1>
                        <a href="" className="w-full  h-full" >

                            <img src={capialImage} alt="" className="w-35 h-35 object-contain"/>
                        </a>
                    </div>
                </div> */}

                {/* CONTENT */}
                <div className="relative z-10 " id="Home">

                    {/* SECTION TEMPLATE */}
                    <section className="w-full py-10 bg-[#333333]">
                        <h1 className="text-[10vh] text-center font-extrabold mb-6 tracking-[0.25em]">Summary</h1>
                        <div className="max-w-6xl mx-auto text-justify">

                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <img
                                    src={imageBG}
                                    className="rounded-xl shadow-lg object-cover w-full md:w-1/2"
                                />
                                <div>
                                    <p className="text-lg leading-relaxed mb-5">
                                        O jogo será projetado para ser acessível a todas as faixas etárias. A ideia é que ele seja livre para qualquer público, mas com um foco especial em tornar a experiência acessível para a terceira idade, garantindo uma interface intuitiva, controles simples e um ritmo de jogo adequado.
                                    </p>
                                    <p className="text-lg leading-relaxed mt-5">
                                        Além disso, o design e os elementos visuais incluirão características que despertem o interesse de crianças e jovens, tornando o jogo atrativo para um público mais amplo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="relative w-full py-10 bg-linear-to-b from-[#333333] from-5% to-[#990100] ">

                        <div className="relative max-w-6xl mx-auto text-justify">

                            <h1 className="text-6xl font-extrabold mb-6 ">Target Audience</h1>
                            <div className="bg-[#990100] w-[60%] h-1 mt-5 mb-8"></div>
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                                <img
                                    src={imageBG2}
                                    className="rounded-xl shadow-lg object-cover w-full md:w-1/2"
                                />
                                <div>
                                    <p className="text-lg leading-relaxed mb-5">
                                        Este é um jogo de Gateball multiplayer local para computador, com um estilo visual cartunesco e vibrante, utilizando gráficos estilizados em cell shading. O cenário será fortemente influenciado pela cultura japonesa, incorporando elementos tradicionais ao ambiente.
                                    </p>
                                    <p className="text-lg leading-relaxed mt-5">
                                        A jogabilidade seguirá as regras clássicas do Gateball, proporcionando uma experiência autêntica e dinâmica para os jogadores. O foco será em partidas rápidas e competitivas, incentivando a estratégia e a precisão nos movimentos.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="relative w-full h-[80vh] py-10 flex justify-center items-center">
                        <Balatro
                            color1="#333333"
                            color3="#162325"
                            color2="#990100"
                            isRotate={false}
                            mouseInteraction={true}
                            pixelFilter={700}
                            className="absolute inset-0 w-full h-full pointer-events-none"
                        />
                        <div className="relative max-w-6xl mx-auto">
                            <div className="w-full flex justify-center items-center mb-5">

                                <div className="bg-red-600 w-full h-1"></div>
                                <h1 className="text-6xl font-extrabold mb-6 text-center w-full uppercase px-15">Gameplay Mechanics</h1>
                                <div className="bg-red-600 w-full h-1"></div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <video
                                    id="backVideo"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls={true}
                                    className="rounded-xl shadow-lg object-cover w-full md:w-1/2"
                                >
                                    <source src={video} type="video/mp4" />
                                </video>
                                <p className="text-lg leading-relaxed whitespace-pre-line">
                                    1. Composição das equipes…
                                    {"\n\n"}
                                    2. Objetivo do jogo…
                                </p>
                            </div>
                        </div>
                    </section>
                    <FooterGamePages />
                </div>
            </LanguageProvider>


        </main>
    );
}
