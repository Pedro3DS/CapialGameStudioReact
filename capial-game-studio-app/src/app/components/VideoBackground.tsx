// app/components/VideoBackground.tsx
'use client'
export default function VideoBackground() {
    return (
        <video
        id="backVideo"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
            className="fixed top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none select-none"
        >
            <source src="/Videos/BgVideo.mp4" type="video/mp4" />
        </video>
    )
}
