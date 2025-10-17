'use client'

import { useEffect } from "react"
import ScrollVelocity from "../TextAnimations/ScrollVelocity/ScrollVelocity"
import HoverUnderline from "./HoverUnderline"
import Image from "next/image"
import Image1 from "../../../public/GateballBrasilDirect.jpg";
import Image2 from "../../../public/TwoGirls.jpg";
import Image3 from "../../../public/TwoGuys.jpg";
import Image4 from "../../../public/TeamImage.jpg";
import Image5 from "../../../public/Gamescom 1.jpg";
import Image6 from "../../../public/Gamescom 2.jpg";
import Image7 from "../../../public/Gamescom 3.jpg";
import Image8 from "../../../public/Gamescom 4.jpg";

export default function Instagram() {

    return (
        <section id="instagram" className="w-full bg-black text-white">
            <ScrollVelocity
                texts={['Follow ✦ Us ✦']}
                velocity={100}
                className="custom-scroll-text "
            />
            <div className="flex">
                <Image
                    src={Image1}
                    alt="Capial Logo"
                    priority
                    className={`w-50 h-50 cursor-pointer  `}
                />
                <Image
                    src={Image2}
                    alt="Capial Logo"
                    priority
                    className={`w-50 h-50 cursor-pointer  `}
                />
                <Image
                    src={Image3}
                    alt="Capial Logo"
                    priority
                    className={`w-50 h-50 cursor-pointer  `}
                />
                <Image
                    src={Image4}
                    alt="Capial Logo"
                    priority
                    className={`w-50 h-50 cursor-pointer  `}
                />
                <Image
                    src={Image5}
                    alt="Capial Logo"
                    priority
                    className={`w-50 h-50 cursor-pointer  `}
                />
                <Image
                    src={Image6}
                    alt="Capial Logo"
                    priority
                    className={`w-50 h-50 cursor-pointer  `}
                />
                <Image
                    src={Image7}
                    alt="Capial Logo"
                    priority
                    className={`w-50 h-50 cursor-pointer  `}
                />
                <Image
                    src={Image8}
                    alt="Capial Logo"
                    priority
                    className={`w-50 h-50 cursor-pointer  `}
                />
            </div>
            <ScrollVelocity
                texts={['On ✦ Instagram ✦']}
                velocity={100}
                
                className="custom-scroll-text"
            />
        </section>
    )
}
