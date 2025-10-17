'use client'

import Image from "next/image"
import ScrollVelocity from "../TextAnimations/ScrollVelocity/ScrollVelocity"
import Image1 from "../../../public/GateballBrasilDirect.jpg"
import Image2 from "../../../public/TwoGirls.jpg"
import Image4 from "../../../public/TeamImage.jpg"
import Image5 from "../../../public/Gamescom 1.jpg"
import Image6 from "../../../public/Gamescom 2.jpg"
import Image8 from "../../../public/Gamescom 4.jpg"

export default function Instagram() {
  const images = [Image4, Image5, Image1, Image2, Image6, Image8]

  return (
    <section id="instagram" className="w-full bg-black text-white py-16">
      <ScrollVelocity
        texts={['Follow ✦ Us ✦']}
        velocity={100}
        className="custom-scroll-text"
      />

      {/* GRID RESPONSIVO (sem scroll) */}
      <div className="grid grid-cols-3 md:grid-cols-6 w-full h-[40vh]">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-full overflow-hidden group"
          >
            <Image
              src={img}
              alt={`Instagram image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>

      <ScrollVelocity
        texts={['On ✦ Instagram ✦']}
        velocity={100}
        className="custom-scroll-text"
      />
    </section>
  )
}
