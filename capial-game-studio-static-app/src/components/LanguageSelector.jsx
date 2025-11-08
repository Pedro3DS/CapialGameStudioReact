'use client'
import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";;
import BRFlag from "../assets/icon-language/brasil.png";
import USFlag from "../assets/icon-language/estados-unidos.png";
import ESFlag from "../assets/icon-language/ES.webp";
import FRFlag from "../assets/icon-language/FR.webp";

export default function LanguageSelector({ isUp }) {
  const { textos, idioma, setIdioma } = useLanguage();

  const languages = [
    { code: "pt", label: textos.navLanguage.text1, flag: BRFlag },
    { code: "en", label: textos.navLanguage.text2, flag: USFlag },
    { code: "es", label: textos.navLanguage.text3, flag: ESFlag },
    { code: "fr", label: textos.navLanguage.text4, flag: FRFlag },
  ];

  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  useEffect(() => {
    const lang = languages.find((l) => l.code === idioma);
    if (lang) setCurrentLang(lang);
  }, [idioma]);

  const handleSelect = (lang) => {
    setCurrentLang(lang);
    setIdioma(lang.code);
    setOpen(false);
  };

  return (
    <div className="absolute top-1/2 right-5 -translate-y-1/2 z-21">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-row justify-center items-center mx-auto space-x-2 p-2 rounded transition hover:bg-gray-500/20 relative"
      >
        <img
          src={currentLang.flag}
          alt={currentLang.label}
          className="w-auto h-7 mx-auto"
        />
      </button>

      {open && (
        <div
          className={`absolute right-0 mt-6 ${
            isUp ? "top-10" : "bottom-20"
          } bg-gradient-to-t from-black/80 to-[#333333]/80 shadow-lg rounded z-21 w-40`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex items-center justify-start align-middle my-1 px-5 mx-auto hover:bg-white/10 w-full text-left z-21"
            >
              <img
                src={lang.flag}
                alt={lang.label}
                className="w-6 h-auto me-1"
              />
              <span className="text-white w-25">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
