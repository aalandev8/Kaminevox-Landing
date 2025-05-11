'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ListenSectionProps {
  soundcloudUrls?: string[];
  youtubeUrls?: string[];
}

const convertYouTubeUrl = (url: string) => {
  let videoId = '';
  if (url.includes('youtube.com/watch')) {
    const urlParams = new URL(url).searchParams;
    videoId = urlParams.get('v') || '';

    const timestamp = urlParams.get('t') || '';
    const startParam = timestamp ? `&start=${timestamp.replace('s', '')}` : '';

    return `https://www.youtube.com/embed/${videoId}?rel=0${startParam}`;
  }
  else if (url.includes('youtu.be')) {
    const parts = url.split('/');
    videoId = parts[parts.length - 1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}?rel=0`;
  }
  if (url.includes('/embed/')) {
    return url;
  }
  return url;
};

export default function ListenSection({
  soundcloudUrls = [
    "https://soundcloud.com/terranovarecords/kamine-vox-uruguay-terranova-podcasts-16-150923?si=6e62f6f340b948a692d5b25b1cdf4f47&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    "https://soundcloud.com/kaminevox/kamine-vox-closing-for-black-coffee-arenas-magnum-punta-del-este?si=4e4b196982ce45c08283cdba5aa962f2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  ],
  youtubeUrls = [
    "https://www.youtube.com/watch?v=_q5MzsACRJQ&t=6567s",
    "https://www.youtube.com/watch?v=PNb54t9KMGs"
  ]
}: ListenSectionProps) {
  const [contentLoaded, setContentLoaded] = useState(false);

  // Simula un tiempo de carga para las animaciones de entrada
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="listen"
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
            className="object-cover"
            sizes="100vw"
            priority={true}
          />
        </motion.div>

        {/* Detalles del fondo con animación flotante */}
        <motion.div
          className="absolute left-0 top-0 w-1/3 h-full opacity-50 hidden md:block"
          animate={{
            y: [0, 10, 0],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/media/fotos/BackgroundDetails.png"
            alt="Background detail left"
            fill
            className="object-cover bg-no-zoom"
            sizes="33vw"
            priority={true}
          />
        </motion.div>

        {/* Detalle derecho con animación flotante inversa */}
        <motion.div
          className="absolute right-0 top-0 w-1/3 h-full opacity-50 hidden md:block"
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{
            duration: 12,
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
          className="absolute inset-0 opacity-15"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '70px 70px'
          }}
        />
      </div>

      {/* Título con animación de entrada */}
      <div className="container relative z-10 w-full">
        <motion.div
          className="flex justify-end mb-8 md:mb-12"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-red-600 text-5xl md:text-7xl font-bold mr-4 md:mr-8 mt-4 font-aileron relative">
            [ LISTEN ]
            <motion.div
              className="absolute -bottom-2 right-0 w-0 h-1 bg-red-600"
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Contenedor principal con animaciones */}
      <div className="container mx-auto px-4 md:px-24 relative z-10">
        <AnimatePresence>
          {contentLoaded && (
            <>
              {/* Sección Soundcloud con animación */}
              <motion.div
                className="mb-16"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <motion.h2
                  className="font-mono text-xl text-white mb-6 border-l-2 border-red-600 pl-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Sets & Podcasts
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {soundcloudUrls.map((url, index) => (
                    <motion.div
                      key={`soundcloud-${index}`}
                      className="bg-black bg-opacity-70 p-1 rounded shadow-lg"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + (index * 0.15),
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)"
                      }}
                    >
                      <iframe
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff0000&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true`}
                        className="rounded"
                      ></iframe>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Sección YouTube con animación */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <motion.h2
                  className="font-mono text-xl text-white mb-6 border-l-2 border-red-600 pl-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Live Performances
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {youtubeUrls.map((url, index) => {
                    const embedUrl = convertYouTubeUrl(url);
                    return (
                      <motion.div
                        key={`youtube-${index}`}
                        className="bg-black bg-opacity-70 p-1 rounded shadow-lg aspect-video"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + (index * 0.15),
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)"
                        }}
                      >
                        <iframe
                          width="100%"
                          height="100%"
                          src={embedUrl}
                          title={`YouTube video ${index + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded aspect-video"
                        ></iframe>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Elemento decorativo que flota en el fondo */}
      <div className="fixed w-full h-full pointer-events-none top-0 left-0 z-0">
        <motion.div
          className="absolute w-1/3 h-1/3 rounded-full opacity-10 bg-gradient-to-r from-red-600 to-transparent blur-3xl"
          style={{ top: '25%', right: '15%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute w-1/4 h-1/4 rounded-full opacity-10 bg-gradient-to-l from-red-400 to-transparent blur-3xl"
          style={{ bottom: '20%', left: '10%' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03],
            x: [0, 15, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3
          }}
        />
      </div>
    </section>
  );
}