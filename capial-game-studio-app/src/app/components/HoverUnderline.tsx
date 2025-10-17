'use client'

export default function HoverUnderline() {
    return (
        <div className="flex justify-center items-center">
            <span
                className="
          relative inline-block text-3xl text-white
          before:content-[''] before:absolute before:left-0 before:top-[-5px]
          before:w-full before:h-[2px]
          before:bg-gradient-to-r before:from-[#ff0000] before:to-[#00ffff]
          before:scale-x-0 before:origin-left before:transition-transform before:duration-400

          after:content-[''] after:absolute after:left-0 after:bottom-[-5px]
          after:w-full after:h-[2px]
          after:bg-gradient-to-r after:from-[#ff0000] after:to-[#00ffff]
          after:scale-x-0 after:origin-right after:transition-transform after:duration-400

          hover:before:scale-x-100 hover:after:scale-x-100
        "
            >
                Hover for underline
            </span>
        </div>
    )
}
