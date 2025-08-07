// DesktopIcon.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface DesktopIconProps {
  name: string;
  imgSrc: string;
  link?: string;
  onClick?: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ name, imgSrc, link, onClick }) => {
  const renderContent = () => (
    <div
      className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition-colors duration-300"
      onClick={onClick}
    >
      <div className="relative w-16 h-16">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-contain"
          sizes="64px"
        />
      </div>
      <span className="mt-2 text-sm text-gray-300">{name}</span>
    </div>
  );

  // If a link is provided, wrap the content with the Link component
  // Note: We're directly passing the renderContent as a child to Link without <a>
  if (link) {
    return (
      <Link href={link} passHref>
        {renderContent()}
      </Link>
    );
  }

  // If no link is provided, just render the content
  return renderContent();
};