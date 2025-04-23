'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  supportedBy?: string[];
  playedWith?: string[];
  initialLanguage?: 'es' | 'en';
}

const ES_CONTENT = {
  sectionTitle: "ACERCA DE",
  paragraph1: "Kamine Vox es el proyecto del productor y DJ uruguayo Emiliano Zapata, una evolución artística que nace tras una etapa previa bajo el alias El Bastardo. El cambio de nombre no fue solo una decisión estética, sino una afirmación de libertad creativa y de búsqueda profunda: una nueva voz, sin etiquetas, que canaliza todo lo vivido hasta ahora.",
  paragraph2: "Kamine Vox construye una narrativa sonora donde las melodías ocupan un lugar central, tejidas con ritmos intensos y una energía expansiva. Busca el equilibrio entre sensibilidad y potencia, entre lo que emociona y lo que mueve.",
  paragraph3: "En sus sets, muchos de los tracks son propios, inéditos o intervenidos en vivo con instrumentos. Más que un DJ, es un narrador de emociones. El nombre Kamine Vox puede traducirse como \"voz bastarda\", una síntesis conceptual que define su propuesta: arte sin etiquetas, que resuena con quienes vibran desde lo genuino.",
  supportedByTitle: "Respaldado por:",
  playedWithTitle: "He tocado con:"
};

const EN_CONTENT = {
  sectionTitle: "ABOUT",
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
      className="w-full py-16 min-h-screen flex items-center border-t border-b border-gray-300 bg-black overflow-hidden relative"
    >
        <div className="absolute right-0 top-0 w-1/2 md:w-1/3 h-full opacity-30 blur-xs">
          <Image
            src="/media/fotos/BackgroundDetails.jpg"
            alt="Background detail"
            fill
            className="object-contain object-right-top"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={true}
          />
        </div>
      {/* Background image container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* La imagen */}
        <div className="absolute left-0 top-90 w-1/2 md:w-1/3 h-full opacity-30 blur-xs">
          <Image
            src="/media/fotos/BackgroundDetails.jpg"
            alt="Background detail"
            fill
            className="object-contain object-right-top"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div className="uppercase tracking-widest text-3xl text-white">
            {content.sectionTitle}
          </div>
          <div className="flex items-center rounded-lg overflow-hidden border border-white">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 transition-colors ${language === 'en' ? 'bg-white text-black font-medium' : 'text-white hover:bg-gray-500'}`}
            >
              ENG
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 transition-colors ${language === 'es' ? 'bg-white text-black font-medium' : 'text-white hover:bg-gray-500'}`}
            >
              ES
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          <div className="md:col-span-2 font-mono text-sm leading-relaxed pr-8 md:border-r border-gray-300 text-white text-left">
            <p className="mb-6 text-base animate-fade-down animate-once">
              {content.paragraph1}
            </p>
            <p className="text-base mb-6 animate-fade-right animate-once">
              {content.paragraph2}
            </p>
            <p className="text-base animate-fade-left animate-once">
              {content.paragraph3}
            </p>
          </div>
          <div className="font-mono text-sm pl-0 md:pl-8 text-white mt-8 md:mt-0 animate-fade-left animate-once text-left">
            <div className="mb-6 p-0">
              <p className="mb-1 text-lg text-left">{content.supportedByTitle}</p>
              <ul className="text-left p-0 m-0">
                {supportedBy.map((name, index) => (
                  <li
                    key={index}
                    className="flex mb-1 transition-all hover:translate-x-1 duration-300 text-left pl-0"
                  >
                    <span className="mr-2 text-red-600">_</span>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-0 mt-6">
              <p className="mb-1 text-lg text-left">{content.playedWithTitle}</p>
              <ul className="text-left p-0 m-0">
                {playedWith.map((name, index) => (
                  <li
                    key={index}
                    className="flex mb-1 transition-all hover:translate-x-1 duration-300 text-left pl-0"
                  >
                    <span className="mr-2 text-red-600">_</span>
                    <span>{name}</span>
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