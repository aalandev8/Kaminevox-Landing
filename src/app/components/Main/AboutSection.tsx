'use client';

import React, { useState } from 'react';
import Image from 'next/image';

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
  const content = language === 'es' ? ES_CONTENT : EN_CONTENT;

  return (
    <section
      id='about'
      className="w-full py-16 min-h-screen flex flex-col md:flex-row items-center bg-black overflow-hidden relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Main texture background */}
        <div className="absolute w-full h-full">
          <Image
            src="/Textura_Negro.png"
            alt="Background texture"
            fill
            className="object-cover"
            sizes="100vw"
            priority={true}
          />
        </div>

        {/* Left side background detail */}
        <div className="absolute left-0 top-0 w-1/3 h-full opacity-50 hidden md:block">
          <Image
            src="/media/fotos/BackgroundDetails.png"
            alt="Background detail left"
            fill
            className="object-contain object-left-top"
            sizes="33vw"
            priority={true}
          />
        </div>

        {/* Right side background detail - mirror of the left one */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-50 hidden md:block">
          <Image
            src="/media/fotos/BackgroundDetails.png"
            alt="Background detail right"
            fill
            className="object-contain object-right-top scale-x-[-1]"
            sizes="33vw"
            priority={true}
          />
        </div>
      </div>
      <div className="md:absolute md:left-8 md:top-0 md:bottom-0 flex items-center justify-center w-full md:w-auto mb-8 md:mb-0">
        <div className="flex flex-col items-center">
          <div
            className="text-red-600 text-5xl font-bold md:hidden mb-6 mt-4"
          >
            {content.sectionTitle}
          </div>
          <div
            className="text-red-600 text-7xl transform rotate-180 opacity-85 ml-20 hidden md:block font-cartograph font-bold"
            style={{
              writingMode: 'vertical-rl',
              fontSize: '6rem',
              letterSpacing: '0.2em',
              // Puedes quitar fontWeight: 'bold' ya que lo definimos en la clase
            }}
          >
            {content.sectionTitle}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-24 relative z-10">
        <div className="flex justify-center md:justify-end items-center mb-8 md:mb-12">
          <div className="flex items-center rounded-lg overflow-hidden border border-white">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 transition-colors ${language === 'en' ? 'bg-white text-black font-medium' : 'text-white hover:bg-gray-800'}`}
            >
              ENG
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-4 py-2 transition-colors ${language === 'es' ? 'bg-white text-black font-medium' : 'text-white hover:bg-gray-800'}`}
            >
              ES
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative md:ml-16">
          <div className="md:col-span-2 font-mono text-base leading-relaxed pr-0 md:pr-8 md:border-r border-gray-300 text-white text-left">
            <p className="mb-8 text-lg leading-relaxed animate-fade-down animate-once">
              {content.paragraph1}
            </p>
            <p className="text-lg mb-8 leading-relaxed animate-fade-right animate-once">
              {content.paragraph2}
            </p>
            <p className="text-lg leading-relaxed animate-fade-left animate-once">
              {content.paragraph3}
            </p>
          </div>
          <div className="font-mono text-base pl-0 md:pl-8 text-white mt-8 md:mt-0 animate-fade-left animate-once text-left">
            <div className="mb-8 p-0">
              <p className="mb-3 text-xl font-bold text-left">{content.supportedByTitle}</p>
              <ul className="text-left p-0 m-0">
                {supportedBy.map((name, index) => (
                  <li
                    key={index}
                    className="flex mb-2 transition-all hover:translate-x-1 duration-300 text-left pl-0"
                  >
                    <span className="mr-2 text-red-600 font-bold">_</span>
                    <span className="text-lg">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-0 mt-8">
              <p className="mb-3 text-xl font-bold text-left">{content.playedWithTitle}</p>
              <ul className="text-left p-0 m-0">
                {playedWith.map((name, index) => (
                  <li
                    key={index}
                    className="flex mb-2 transition-all hover:translate-x-1 duration-300 text-left pl-0"
                  >
                    <span className="mr-2 text-red-600 font-bold">_</span>
                    <span className="text-lg">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}