'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutSectionProps {
  supportedBy?: string[];
  playedWith?: string[];
  initialLanguage?: 'es' | 'en';
}

const ES_CONTENT = {
  sectionTitle: "[ ABOUT ]",
  paragraph1: "Kamine Vox es el proyecto del productor y DJ uruguayo Emiliano Zapata, una evolución artística que nace tras una etapa previa bajo el alias El Bastardo. El cambio de nombre no fue solo una decisión estética, sino una afirmación de libertad creativa y de búsqueda profunda: una nueva voz, sin etiquetas, que canaliza todo lo vivido hasta ahora.",
  paragraph2: "Kamine Vox construye una narrativa sonora donde las melodías ocupan un lugar central, tejidas con ritmos intensos y una energía expansiva. Busca el equilibrio entre sensibilidad y potencia, entre lo que emociona y lo que mueve.",
  paragraph3: "En sus sets, muchos de los tracks son propios, inéditos o intervenidos en vivo con instrumentos. Más que un DJ, es un narrador de emociones. El nombre Kamine Vox puede traducirse como \"voz bastarda\", una síntesis conceptual que define su propuesta: arte sin etiquetas, que resuena con quienes vibran desde lo genuino.",
  supportedByTitle: "Respaldado por:",
  playedWithTitle: "He tocado con:"
};

const EN_CONTENT = {
  sectionTitle: "[ ABOUT ]",
  paragraph1: "Kamine Vox is the project of Uruguayan producer and DJ Emiliano Zapata, an artistic evolution born after a previous stage under the alias El Bastardo. The name change was not just an aesthetic decision, but an affirmation of creative freedom and deep exploration: a new voice, without labels, that channels everything experienced so far.",
  paragraph2: "Kamine Vox builds a sonic narrative where melodies occupy a central place, woven with intense rhythms and expansive energy. He seeks the balance between sensitivity and power, between what moves emotionally and what moves physically.",
  paragraph3: "In his sets, many of the tracks are his own, unreleased or performed live with instruments. More than a DJ, he is a narrator of emotions. The name Kamine Vox can be translated as \"bastard voice\", a conceptual synthesis that defines his proposal: art without labels, that resonates with those who vibrate from the genuine.",
  supportedByTitle: "Supported by:",
  playedWithTitle: "Played with:"
};

export default function AboutSection({
  supportedBy = [
    "Solomun",
    "Hernan Cattaneo",
    "Tomy from A&B",
    "and more"
  ],
  playedWith = [
    "Solomun",
    "Artbat",
    "Black Coffee",
    "and more"
  ],
  initialLanguage = 'en'
}: AboutSectionProps) {
  const [language, setLanguage] = useState<'es' | 'en'>(initialLanguage);
  const [contentLoaded, setContentLoaded] = useState(false);
  const content = language === 'es' ? ES_CONTENT : EN_CONTENT;

  // Simula un tiempo de carga para las animaciones de entrada
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Variantes para animaciones de contenido
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + (custom * 0.1),
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      id='about'
      className="w-full py-16 min-h-screen flex flex-col md:flex-row items-center bg-black overflow-hidden relative"
    >
      {/* Background elements con animaciones */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Main texture background */}
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

        {/* Left side background detail con animación flotante */}
        <motion.div
          className="absolute left-0 top-0 w-1/3 h-full opacity-50 hidden md:block"
          animate={{
            y: [0, -12, 0],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{
            duration: 11,
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

        {/* Right side background detail con animación flotante */}
        <motion.div
          className="absolute right-0 top-0 w-1/3 h-full opacity-50 hidden md:block"
          animate={{
            y: [0, 12, 0],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
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
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Título vertical animado */}
      <motion.div
        className="md:absolute md:left-8 md:top-0 md:bottom-0 flex items-center justify-center w-full md:w-auto mb-8 md:mb-0"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            className="text-red-600 text-5xl font-bold md:hidden mb-6 mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {content.sectionTitle}
            <motion.div
              className="h-1 bg-red-600 mt-2 w-0"
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>
          <motion.div
            className="text-red-600 text-7xl transform rotate-180 opacity-85 ml-20 hidden md:block font-cartograph font-bold"
            style={{
              writingMode: 'vertical-rl',
              fontSize: '6rem',
              letterSpacing: '0.2em',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            {content.sectionTitle}
            <motion.div
              className="w-1 bg-red-600 absolute left-0 top-0 h-0"
              animate={{ height: '100%' }}
              transition={{ duration: 1.5, delay: 1 }}
              style={{ left: '-10px' }}
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-24 relative z-10">
        {/* Selector de idioma con animación */}
        <motion.div
          className="flex justify-center md:justify-end items-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            className="flex items-center rounded-lg overflow-hidden border border-white"
            whileHover={{ boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)" }}
          >
            <motion.button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 transition-colors ${language === 'en' ? 'bg-white text-black font-medium' : 'text-white hover:bg-gray-800'}`}
              whileHover={{ backgroundColor: language === 'en' ? "#ffffff" : "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.97 }}
            >
              ENG
            </motion.button>
            <motion.button
              onClick={() => setLanguage('es')}
              className={`px-4 py-2 transition-colors ${language === 'es' ? 'bg-white text-black font-medium' : 'text-white hover:bg-gray-800'}`}
              whileHover={{ backgroundColor: language === 'es' ? "#ffffff" : "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.97 }}
            >
              ES
            </motion.button>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {contentLoaded && (
            <motion.div
              key={language}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative md:ml-16"
            >
              <div className="md:col-span-2 font-mono text-base leading-relaxed pr-0 md:pr-8 md:border-r border-gray-300 text-white text-left">
                <motion.p
                  className="mb-8 text-lg leading-relaxed"
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                >
                  {content.paragraph1}
                </motion.p>
                <motion.p
                  className="text-lg mb-8 leading-relaxed"
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                >
                  {content.paragraph2}
                </motion.p>
                <motion.p
                  className="text-lg leading-relaxed"
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                >
                  {content.paragraph3}
                </motion.p>
              </div>
              <motion.div
                className="font-mono text-base pl-0 md:pl-8 text-white mt-8 md:mt-0 text-left"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <motion.div
                  className="mb-8 p-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.p
                    className="mb-3 text-xl font-bold text-left"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    {content.supportedByTitle}
                  </motion.p>
                  <ul className="text-left p-0 m-0">
                    {supportedBy.map((name, index) => (
                      <motion.li
                        key={index}
                        className="flex mb-2 transition-all hover:translate-x-1 duration-300 text-left pl-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.8 + (index * 0.1)
                        }}
                        whileHover={{
                          x: 10,
                          color: "#f87171",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.span
                          className="mr-2 text-red-600 font-bold"
                          animate={{
                            opacity: [0.6, 1, 0.6],
                            x: [0, 2, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.5
                          }}
                        >
                          _
                        </motion.span>
                        <span className="text-lg">{name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  className="p-0 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.p
                    className="mb-3 text-xl font-bold text-left"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    {content.playedWithTitle}
                  </motion.p>
                  <ul className="text-left p-0 m-0">
                    {playedWith.map((name, index) => (
                      <motion.li
                        key={index}
                        className="flex mb-2 transition-all hover:translate-x-1 duration-300 text-left pl-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 1.0 + (index * 0.1)
                        }}
                        whileHover={{
                          x: 10,
                          color: "#f87171",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.span
                          className="mr-2 text-red-600 font-bold"
                          animate={{
                            opacity: [0.6, 1, 0.6],
                            x: [0, 2, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: index * 0.5 + 1
                          }}
                        >
                          _
                        </motion.span>
                        <span className="text-lg">{name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="fixed w-full h-full pointer-events-none top-0 left-0 z-0">
        <motion.div
          className="absolute w-1/3 h-1/3 rounded-full opacity-10 bg-gradient-to-r from-red-600 to-transparent blur-3xl"
          style={{ top: '20%', left: '5%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
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
          className="absolute w-1/4 h-1/4 rounded-full opacity-10 bg-gradient-to-l from-red-400 to-transparent blur-3xl"
          style={{ bottom: '25%', right: '10%' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.07, 0.03],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>
    </section>
)};