'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  format: 'vertical' | 'horizontal';
  thumbnail: string;
  videoUrl: string;
  size?: 'regular' | 'large';
  position?: 'left' | 'right' | 'center';
}

interface WatchSectionProps {
  videos?: VideoItem[];
}

const DEFAULT_VIDEOS: VideoItem[] = [
  {
    id: 'video1',
    title: 'Key Mood w/ Glowal & Massano',
    description: 'Warmup for Massano & Glowal at Hangar 33, 2024.',
    format: 'vertical',
    thumbnail: '/media/fotos/LECH1676.jpg',
    videoUrl: '/media/videos/8.mp4',
    position: 'left'
  },
  {
    id: 'video2',
    title: 'Key w/ Solomun',
    description: 'Warmup for Solomun at Hangar 33, 2023.',
    format: 'horizontal',
    thumbnail: '/media/fotos/@matijara-08886.jpg',
    videoUrl: '/media/videos/SolomunWarmup.mp4',
    size: 'large',
    position: 'right'
  },
  {
    id: 'video3',
    title: 'Kaminevox perfomance at Otro Mundo',
    description: 'Getting the dance floor pumped up',
    format: 'horizontal',
    thumbnail: '/media/fotos/DanzeriaKaminevox.jpg',
    videoUrl: '/media/videos/OtroMundoClip.mp4',
    position: 'left'
  },
  {
    id: 'video4',
    title: 'Black Coffee at Arenas Magnum',
    description: 'Closing for Black Coffee in Arenas Magnum, Punta del este 2022.',
    format: 'horizontal',
    thumbnail: '/media/fotos/BlackCoffee.jpg',
    videoUrl: '/media/videos/BlackCoffee.mp4',
    size: 'regular',
    position: 'right'
  },
];

export default function WatchSection({ videos = DEFAULT_VIDEOS }: WatchSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videosLoaded, setVideosLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Este efecto simulará un tiempo de carga para las animaciones de entrada
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideosLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsPlaying(true);

    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.play()
          .catch(err => {
            console.error("Video playback error:", err);
            setIsPlaying(false);
          });
      }
    });
  };

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play()
          .catch(err => {
            console.error("Video playback error:", err);
          });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const firstRow = videos.slice(0, 2);
  const secondRow = videos.slice(2, 4);
  const thirdRow = videos.slice(4);

  return (
    <section
      id="watch"
      className="w-full py-16 min-h-screen flex flex-col items-center bg-black overflow-hidden relative"
    >
      {/* Background con texturas y detalles animados */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/Textura_Negro.png"
            alt="Background texture"
            fill
            className="object-cover bg-no-zoom"
            sizes="100vw"
            priority={true}
          />
        </motion.div>

        {/* Detalles del fondo con animación flotante */}
        <motion.div
          className="absolute left-0 top-0 w-1/3 h-full opacity-50 hidden md:block"
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/media/fotos/BackgroundDetails.png"
            alt="Background detail left"
            fill
            className="object-contain object-left-top"
            sizes="33vw"
            priority={true}
          />
        </motion.div>

        {/* Detalle derecho con animación flotante inversa */}
        <motion.div
          className="absolute right-0 top-0 w-1/3 h-full opacity-50 hidden md:block"
          animate={{
            y: [0, 10, 0],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Image
            src="/media/fotos/BackgroundDetails.png"
            alt="Background detail right"
            fill
            className="object-contain object-right-top scale-x-[-1]"
            sizes="33vw"
            priority={true}
          />
        </motion.div>

        {/* Partículas flotantes adicionales para profundidad */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Título con animación de entrada */}
      <div className="container relative z-10 w-full">
        <motion.div
          className="flex justify-start mb-8 md:mb-12"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-red-600 text-5xl md:text-7xl font-bold ml-4 md:ml-8 mt-4 font-aileron relative">
            [ WATCH ]
            <motion.div
              className="absolute -bottom-2 left-0 w-0 h-1 bg-red-600"
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Contenedor principal */}
      <div className="container mx-auto px-4 md:px-24 relative z-10">
        <AnimatePresence>
          {videosLoaded && (
            <>
              {/* Primera fila */}
              <motion.div
                className="flex flex-col md:flex-row gap-4 mb-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {/* Primer video vertical con tamaño ajustado */}
                <div className="w-full md:w-2/5 h-[520px] sm:h-[560px] md:h-[480px]">
                  <motion.div
                    className="h-full relative overflow-hidden rounded-lg group cursor-pointer hover:shadow-lg"
                    onClick={() => handleVideoClick(firstRow[0])}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src={firstRow[0].thumbnail}
                        alt={firstRow[0].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority={true}
                        className="object-cover"
                        quality={80}
                      />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4"
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-center justify-center absolute inset-0">
                        <motion.div
                          className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Play className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                      <div className="relative z-10">
                        <motion.h3
                          className="text-lg font-bold text-white"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {firstRow[0].title}
                        </motion.h3>
                        <motion.p
                          className="text-sm text-gray-200"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {firstRow[0].description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Segundo video horizontal modificado */}
                <div className="w-full md:w-3/5 h-[480px] mt-4 md:mt-0">
                  <motion.div
                    className="h-full relative overflow-hidden rounded-lg group cursor-pointer hover:shadow-lg"
                    onClick={() => handleVideoClick(firstRow[1])}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src={firstRow[1].thumbnail}
                        alt={firstRow[1].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        priority={true}
                        className="object-cover"
                        quality={80}
                      />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4"
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-center justify-center absolute inset-0">
                        <motion.div
                          className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Play className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                      <div className="relative z-10">
                        <motion.h3
                          className="text-lg font-bold text-white"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {firstRow[1].title}
                        </motion.h3>
                        <motion.p
                          className="text-sm text-gray-200"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {firstRow[1].description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Segunda fila */}
              <motion.div
                className="flex flex-col md:flex-row gap-4 mb-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-full md:w-2/3 h-72">
                  <motion.div
                    className="h-full relative overflow-hidden rounded-lg group cursor-pointer hover:shadow-lg"
                    onClick={() => handleVideoClick(secondRow[0])}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src={secondRow[0].thumbnail}
                        alt={secondRow[0].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 66vw"
                        className="object-cover"
                        loading="lazy"
                        quality={80}
                      />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4"
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-center justify-center absolute inset-0">
                        <motion.div
                          className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Play className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                      <div className="relative z-10">
                        <motion.h3
                          className="text-lg font-bold text-white"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {secondRow[0].title}
                        </motion.h3>
                        <motion.p
                          className="text-sm text-gray-200"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {secondRow[0].description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                <div className="w-full md:w-1/3 h-72 mt-4 md:mt-0">
                  <motion.div
                    className="h-full relative overflow-hidden rounded-lg group cursor-pointer hover:shadow-lg"
                    onClick={() => handleVideoClick(secondRow[1])}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src={secondRow[1].thumbnail}
                        alt={secondRow[1].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                        quality={80}
                      />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4"
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-center justify-center absolute inset-0">
                        <motion.div
                          className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Play className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                      <div className="relative z-10">
                        <motion.h3
                          className="text-lg font-bold text-white"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {secondRow[1].title}
                        </motion.h3>
                        <motion.p
                          className="text-sm text-gray-200"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {secondRow[1].description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Tercera fila si existe */}
              {thirdRow.length > 0 && (
                <motion.div
                  className="flex justify-center"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-full md:w-1/2 h-96">
                    <motion.div
                      className="h-full relative overflow-hidden rounded-lg group cursor-pointer hover:shadow-lg"
                      onClick={() => handleVideoClick(thirdRow[0])}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full relative">
                        <Image
                          src={thirdRow[0].thumbnail}
                          alt={thirdRow[0].title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                          loading="lazy"
                          quality={80}
                        />
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4"
                        transition={{ duration: 0.4 }}
                      >
                        <div className="flex items-center justify-center absolute inset-0">
                          <motion.div
                            className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Play className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>
                        <div className="relative z-10">
                          <motion.h3
                            className="text-lg font-bold text-white"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            {thirdRow[0].title}
                          </motion.h3>
                          <motion.p
                            className="text-sm text-gray-200"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            {thirdRow[0].description}
                          </motion.p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Modal de video con animaciones */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {selectedVideo.format === 'vertical' ? (
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                <motion.button
                  className="absolute top-4 right-4 text-white p-2 z-10 hover:text-red-500"
                  onClick={handleCloseModal}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-8 h-8" />
                </motion.button>

                <motion.div
                  className="h-[80vh] max-w-[90vw] sm:max-w-[70vw] md:max-w-[40vw] relative bg-black rounded-lg overflow-hidden shadow-2xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <video
                    ref={videoRef}
                    src={selectedVideo.videoUrl}
                    poster={selectedVideo.thumbnail}
                    className="h-full w-full object-contain"
                    onClick={togglePlayPause}
                    preload="metadata"
                    playsInline
                  />
                  <motion.div
                    className={`absolute inset-0 flex items-center justify-center ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-black bg-opacity-30'}`}
                    onClick={togglePlayPause}
                    animate={{ opacity: isPlaying ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-red-600 bg-opacity-80 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(220, 38, 38, 0.7)',
                          '0 0 0 10px rgba(220, 38, 38, 0)',
                          '0 0 0 0 rgba(220, 38, 38, 0)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    >
                      {isPlaying ? (
                        <Pause className="w-10 h-10 text-white" />
                      ) : (
                        <Play className="w-10 h-10 text-white" />
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="mt-4 text-white text-center max-w-md"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h2 className="text-xl font-bold">{selectedVideo.title}</h2>
                  <p className="text-gray-300 text-sm">{selectedVideo.description}</p>
                </motion.div>
              </div>
            ) : (
              <div className="relative max-w-screen-lg mx-auto p-4 sm:p-8">
                <motion.button
                  className="absolute top-2 right-2 sm:top-0 sm:right-0 text-white p-2 z-10 hover:text-red-500"
                  onClick={handleCloseModal}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.button>
                <motion.div
                  className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mx-auto my-4 sm:my-0"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <video
                    ref={videoRef}
                    src={selectedVideo.videoUrl}
                    poster={selectedVideo.thumbnail}
                    className="w-full h-full object-contain sm:object-cover"
                    onClick={togglePlayPause}
                    preload="metadata"
                    playsInline
                  />
                  <motion.div
                    className={`absolute inset-0 flex items-center justify-center ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-black bg-opacity-30'}`}
                    onClick={togglePlayPause}
                    animate={{ opacity: isPlaying ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 bg-opacity-80 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(220, 38, 38, 0.7)',
                          '0 0 0 10px rgba(220, 38, 38, 0)',
                          '0 0 0 0 rgba(220, 38, 38, 0)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      ) : (
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="mt-4 text-white text-center sm:text-left"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h2 className="text-xl sm:text-2xl font-bold">{selectedVideo.title}</h2>
                  <p className="text-gray-300 text-sm sm:text-base">{selectedVideo.description}</p>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Elemento decorativo que flota en el fondo */}
      <div className="fixed w-full h-full pointer-events-none top-0 left-0 z-0">
        <motion.div
          className="absolute w-1/2 h-1/2 rounded-full opacity-10 bg-gradient-to-r from-red-600 to-transparent blur-3xl"
          style={{ top: '15%', left: '10%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute w-1/3 h-1/3 rounded-full opacity-10 bg-gradient-to-l from-red-400 to-transparent blur-3xl"
          style={{ bottom: '15%', right: '5%' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03],
            x: [0, -10, 0],
            y: [0, 10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5
          }}
        />
      </div>
    </section>
  );
}