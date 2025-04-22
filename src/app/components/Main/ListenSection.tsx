'use client';

import React from 'react';

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
  return (
    <section
      id="listen"
      className="w-full py-16 min-h-screen flex items-center bg-black overflow-hidden border-b border-gray-300"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="font-mono uppercase tracking-widest text-3xl mb-12 text-white">
          LISTEN
        </div>

        {/* Soundcloud Embed Section */}
        <div className="mb-16">
          <h2 className="font-mono text-xl text-white mb-6 border-l-2 border-red-600 pl-4">Sets & Podcasts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {soundcloudUrls.map((url, index) => (
              <div
                key={`soundcloud-${index}`}
                className="bg-black bg-opacity-70 p-1 rounded shadow-lg"
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
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Embed Section */}
        <div>
          <h2 className="font-mono text-xl text-white mb-6 border-l-2 border-red-600 pl-4">Live Performances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {youtubeUrls.map((url, index) => {
              const embedUrl = convertYouTubeUrl(url);
              return (
                <div
                  key={`youtube-${index}`}
                  className="bg-black bg-opacity-70 p-1 rounded shadow-lg aspect-video"
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}