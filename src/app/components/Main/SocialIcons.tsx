import { Instagram } from 'lucide-react';
import { SoundcloudSVG, SpotifySVG } from '../assets';
import { LucideIcon } from 'lucide-react';
import React, { ElementType } from 'react';

interface SocialIconsProps {
  iconSize?: number;
}
// Estructura para ícono de Lucide
interface LucideSocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
  type: 'lucide';
}

// Estructura para SVG personalizado
interface CustomSocialLink {
  icon: ElementType; // Usar ElementType en lugar de ComponentType<CustomIconProps>
  href: string;
  label: string;
  type: 'custom';
  fill?: string;
  height?: string;
  width?: string;
}

type SocialLink = LucideSocialLink | CustomSocialLink;

export default function SocialIcons({ iconSize = 20 }: SocialIconsProps) {
  const socialLinks: SocialLink[] = [
    {
      icon: Instagram,
      href: 'https://instagram.com/kaminevox',
      label: 'Instagram',
      type: 'lucide'
    },
    {
      icon: SoundcloudSVG,
      href: 'https://soundcloud.com/kaminevox',
      label: 'Soundcloud',
      type: 'custom',
      fill: "currentColor",
      width: iconSize.toString(),
      height: iconSize.toString()
    },
    {
      icon: SpotifySVG,
      href: 'https://open.spotify.com/intl-es/artist/05fyMRreuzeIkWEU9ROIYu',
      label: 'Spotify',
      type: 'custom',
      fill: "currentColor",
      width: iconSize.toString(),
      height: iconSize.toString()
    }
  ];

  return (
    <div className="flex space-x-6 items-center">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;

        return (
          <a
            key={index}
            href={link.href}
            className="hover:opacity-70 duration-300 text-white"
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.type === 'custom' ? (
              <Icon
                width={link.width}
                height={link.height}
                fill={link.fill}
              />
            ) : (
              <Icon size={iconSize} />
            )}
          </a>
        );
      })}
    </div>
  );
}