'use client'

export default function MainContent() {
  return (
    <div className="relative w-full h-[93vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="/media/videos/SolomunWarmup.mp4"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <div className="glitch-container">
          <h1
            className="animate-fade animate-once text-3xl sm:text-4xl md:text-7xl font-bold tracking-widest text-white mb-10
                     transition-all duration-700 drop-shadow-lg"
          >
            [ KAMINEVOX ]
          </h1>
        </div>
      </div>
    </div>
  );
}