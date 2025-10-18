'use client'
import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext"
import Image from "next/image";
import BRFlag from "../../../public/icon-language/brasil.png";
import USFlag from "../../../public/icon-language/estados-unidos.png";
import ESFlag from "../../../public/icon-language/ES.webp";
import FRFlag from "../../../public/icon-language/FR.webp";
// import { LanguageProvider } from "../i18n/LanguageContext";

interface Language {
    code: "pt" | "en" | "es" | "fr";
    label: string;
    flag: any;
}

interface LanguageSelectorProps {
    isUp: boolean;
}

export default function LanguageSelector({ isUp }: LanguageSelectorProps) {
    const { textos } = useLanguage()
    const languages: Language[] = [
        { code: "pt", label: textos.navLanguage.text1, flag: BRFlag },
        { code: "en", label: textos.navLanguage.text2, flag: USFlag },
        { code: "es", label: textos.navLanguage.text3, flag: ESFlag },
        { code: "fr", label: textos.navLanguage.text4, flag: FRFlag },
    ];
    const { idioma, setIdioma } = useLanguage(); // 🔥 conecta com o contexto
    const [open, setOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState<Language>(languages[0]);

    useEffect(() => {
        const lang = languages.find(l => l.code === idioma);
        if (lang) setCurrentLang(lang);
    }, [idioma]);

    const handleSelect = (lang: Language) => {
        setCurrentLang(lang);
        setIdioma(lang.code); // ✅ muda idioma global
        setOpen(false);
    };



    return (
        <div className="absolute top-1/2 right-5 -translate-y-1/2  z-21">
            <button
                onClick={() => setOpen(!open)}
                className="flex flex-row justify-center items-center mx-auto space-x-2 p-2 rounded transition hover:bg-gray-500/20"
            >
                <Image src={currentLang.flag} alt={currentLang.label} className="w-auto h-7 mx-auto" />
            </button>

            {open && (
                <div className={`absolute right-0 mt-6 ${isUp ? "top-12" : "bottom-12"} bg-gradient-to-t from-black/80 to-[#333333]/80 shadow-lg rounded  z-21`}>
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => handleSelect(lang)}
                            className="flex items-center justify-start align-middle my-1 px-3 hover:bg-white/10 w-full text-left  z-21"
                        >
                            <Image src={lang.flag} alt={lang.label} className="w-6 h-auto me-1" />
                            <span className="text-white w-25">{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
