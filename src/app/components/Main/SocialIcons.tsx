import { Instagram } from 'lucide-react';
import { SoundcloudSVG, SpotifySVG } from '../assets';
import { LucideIcon } from 'lucide-react';
import React, { ComponentType } from 'react';

interface SocialIconsProps {
  iconSize?: number;
}

interface CustomIconProps {
  width?: string;
  height?: string;
  fill?: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

type SocialIconType = LucideIcon | ComponentType<CustomIconProps>;

interface SocialLink {
  icon: SocialIconType;
  href: string;
  label: string;
  isCustom?: boolean;
  fill?: string;
  height?: string;
  width?: string;
}

export default function SocialIcons({ iconSize = 20 }: SocialIconsProps) {
  const socialLinks: SocialLink[] = [
    {
      icon: Instagram,
      href: 'https://instagram.com/kaminevox',
      label: 'Instagram',
      isCustom: false
    },
    {
      icon: SoundcloudSVG,
      href: 'https://soundcloud.com/kaminevox',
      label: 'Soundcloud',
      isCustom: true,
      fill: "currentColor",
      width: iconSize.toString(),
      height: iconSize.toString()
    },
    {
      icon: SpotifySVG,
      href: 'https://open.spotify.com/intl-es/artist/05fyMRreuzeIkWEU9ROIYu',
      label: 'Spotify',
      isCustom: true,
      fill: "currentColor",
      width: iconSize.toString(),
      height: iconSize.toString()
    }
  ];

  return (
    <div className="flex space-x-6 items-center">
      {socialLinks.map((link, index) => {
        if (link.isCustom) {
          const CustomIcon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              className="hover:opacity-70 duration-300 text-white"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomIcon
                width={link.width}
                height={link.height}
                fill={link.fill}
              />
            </a>
          );
        } else {
          const Icon = link.icon as LucideIcon;
          return (
            <a
              key={index}
              href={link.href}
              className="hover:opacity-70 transition-opacity duration-300 text-white"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={iconSize} />
            </a>
          );
        }
      })}
    </div>
  );
}