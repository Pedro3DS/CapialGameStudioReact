// app/components/VideoBackground.tsx
'use client'


export default function ImageBackgroundGames({ image }) {
    return (
        <img src={image} alt="" className="  fixed top-0 left-0 w-full h-full object-cover object-center -z-10 pointer-events-none select-none" />
    )
}
