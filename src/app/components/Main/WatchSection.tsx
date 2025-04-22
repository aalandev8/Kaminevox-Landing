'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause, X } from 'lucide-react';
import Image from 'next/image';

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
    title: 'Club showcase',
    description: 'Live performance',
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
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section id="watch" className="w-full py-16 bg-black text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="font-mono uppercase tracking-widest text-3xl mb-12">
          WATCH
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full md:w-1/3 h-96">
            <div
              className="h-full relative overflow-hidden rounded-lg group cursor-pointer hover:shadow-lg"
              onClick={() => handleVideoClick(firstRow[0])}
            >
              <div className="w-full h-full relative">
                <Image
                  src={firstRow[0].thumbnail}
                  alt={firstRow[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={true}
                  className="object-cover"
                  quality={80}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4">
                <div className="flex items-center justify-center absolute inset-0">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white">{firstRow[0].title}</h3>
                  <p className="text-sm text-gray-200">{firstRow[0].description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 h-96 mt-4 md:mt-0">
            <div
              className="h-full relative overflow-hidden rounded-lg group cursor-pointer hover:shadow-lg"
              onClick={() => handleVideoClick(firstRow[1])}
            >
              <div className="w-full h-full relative">
                <Image
                  src={firstRow[1].thumbnail}
                  alt={firstRow[1].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  priority={true}
                  className="object-cover"
                  quality={80}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4">
                <div className="flex items-center justify-center absolute inset-0">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white">{firstRow[1].title}</h3>
                  <p className="text-sm text-gray-200">{firstRow[1].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full md:w-2/3 h-72">
            <div
              className="h-full relative overflow-hidden rounded-lg group cursor-pointer hover:shadow-lg"
              onClick={() => handleVideoClick(secondRow[0])}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4">
                <div className="flex items-center justify-center absolute inset-0">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white">{secondRow[0].title}</h3>
                  <p className="text-sm text-gray-200">{secondRow[0].description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-72 mt-4 md:mt-0">
            <div
              className="h-full relative overflow-hidden rounded-lg group cursor-pointer hover:shadow-lg"
              onClick={() => handleVideoClick(secondRow[1])}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4">
                <div className="flex items-center justify-center absolute inset-0">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white">{secondRow[1].title}</h3>
                  <p className="text-sm text-gray-200">{secondRow[1].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {thirdRow.length > 0 && (
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 h-96">
              <div
                className="h-full relative overflow-hidden rounded-lg group cursor-pointer hover:shadow-lg"
                onClick={() => handleVideoClick(thirdRow[0])}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-center absolute inset-0">
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white">{thirdRow[0].title}</h3>
                    <p className="text-sm text-gray-200">{thirdRow[0].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className={`relative max-w-screen-lg mx-auto ${selectedVideo.format === 'vertical' ? 'max-h-screen w-4/5 md:w-2/5' : 'w-full'}`}>
            <button
              className="absolute -top-12 right-0 text-white p-2 z-10 hover:text-red-500"
              onClick={handleCloseModal}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                src={selectedVideo.videoUrl}
                poster={selectedVideo.thumbnail}
                className={`w-full h-full ${selectedVideo.format === 'vertical' ? 'object-contain' : 'object-cover'}`}
                onClick={togglePlayPause}
                preload="metadata"
                playsInline
              />
              <div
                className={`absolute inset-0 flex items-center justify-center ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-black bg-opacity-30'}`}
                onClick={togglePlayPause}
              >
                <div className="w-20 h-20 rounded-full bg-red-600 bg-opacity-80 flex items-center justify-center">
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-white" />
                  ) : (
                    <Play className="w-10 h-10 text-white" />
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4 text-white">
              <h2 className="text-2xl font-bold">{selectedVideo.title}</h2>
              <p className="text-gray-300">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}