'use client';

import React from 'react';
import { Mail, Instagram, MapPin } from 'lucide-react';
import Link from 'next/link';
import { SoundcloudSVG, SpotifySVG } from '../assets';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact information */}
          <div>
            <h3 className="font-mono uppercase tracking-widest text-xl mb-4">CONTACT</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-600" />
                <a href="mailto:contactkaminevox@gmail.com" className="hover:text-red-500 transition-colors">
                  contactkaminevox@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-red-600" />
                <a href="https://www.instagram.com/kaminevox/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                  Kaminevox
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-600" />
                <span>Based in Montevideo, Uruguay</span>
              </li>
            </ul>
          </div>

          {/* Music & Events */}
          <div>
            <h3 className="font-mono uppercase tracking-widest text-xl mb-4">MUSIC</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <SoundcloudSVG fill="#b60012" height="20px" width="20px"/>
                <a href="https://soundcloud.com/kaminevox" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                  SoundCloud
                </a>
              </li>
              <li className="flex items-center gap-3">
                <SpotifySVG fill="#b60012" height="20px" width="20px" />
                <Link href="https://open.spotify.com/intl-es/artist/05fyMRreuzeIkWEU9ROIYu" className="hover:text-red-500 transition-colors">
                  Spotify
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with horizontal line */}
        <div className="mt-8 border-t border-gray-800">
          {/* Copyright - left aligned on small screens, center on medium/large */}
          <div className="text-left md:text-center text-sm text-gray-500 mt-6">
            <p>© {currentYear} Kaminevox. All rights reserved.</p>
          </div>

          {/* Designer credit */}
          <div className="text-left md:text-center text-sm text-gray-500 mt-4">
            <p>
              Website designed by
              <a href="mailto:aalan.dev8@gmail.com" className="text-red-600 ml-1 hover:underline">
                aalan.dev8@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}