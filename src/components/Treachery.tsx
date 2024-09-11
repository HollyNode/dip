import React from 'react';
import Link from 'next/link';
import { DesktopIcon } from '@/components/DesktopIcon'; // Import the DesktopIcon component if needed
import { LinkPreview } from '@/components/ui/link-preview';

const circlesOfHell = [
  { name: 'Lust', imgSrc: '/images/lust-sm-icon.png', link: '/canto5', color: 'red-900' },
  { name: 'Gluttony', imgSrc: '/images/gluttony-sm-icon.png', link: '/canto6', color: 'red-800' },
  { name: 'Greed', imgSrc: '/images/greed-sm-icon.png', link: '/canto7', color: 'red-700' },
  { name: 'Wrath', imgSrc: '/images/wrath-sm-icon.png', link: '/canto8', color: 'red-600' },
  { name: 'Heresy', imgSrc: '/images/heresy-sm-icon.png', link: '/canto10', color: 'red-500' },
  { name: 'Violence', imgSrc: '/images/violence-sm-icon.png', link: '/canto11', color: 'red-400' },
  { name: 'Fraud', imgSrc: '/images/fraud-sm-icon.png', link: '/fraud', color: 'blue-600' },
  { name: 'Treachery', imgSrc: '/images/treachery-sm-icon.png', link: '/treachery', color: 'blue-500' },
];

const cantos = [
  { name: 'CANTO 31', link: '/canto31', imgSrc: '/Folder.png', previewSrc: '/images/canto31-bg.png' },
  { name: 'CANTO 32', link: '/canto32', imgSrc: '/Folder.png', previewSrc: '/images/canto32-bg.png' },
  { name: 'CANTO 33', link: '/canto33', imgSrc: '/Folder.png', previewSrc: '/images/canto33-bg.png' },
  { name: 'CANTO 34', link: '/canto34', imgSrc: '/Folder.png', previewSrc: '/images/canto34-bg.png' },
  
 
  
  // ... Add other cantos
];

const Limbo = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar: Adjust padding and width responsively */}
      <div className="w-16 md:w-64 bg-gray-800 p-2 md:p-5 flex flex-col">
        <div className="flex flex-col items-center md:items-start mb-4">
          <Link href="/">
            <div className="text-white mb-2 flex items-center transition-transform duration-200 transform hover:scale-105 cursor-pointer">
              <img src="/images/home-sm-icon.png" alt="Home Icon" className="mr-2" /> Home
            </div>
          </Link>
          <Link href="/gallery">
            <div className="text-gray-400 mb-2 flex items-center transition-transform duration-200 transform hover:scale-105 cursor-pointer">
              <img src="/images/gallery-sm-icon.png" alt="Gallery Icon" className="mr-2" /> Gallery
            </div>
          </Link>
          {/* Other navigation items */}
        </div>
        <hr className="border-gray-700" />
        <div className="mt-4 flex-grow">
          {circlesOfHell.map(circle => (
            <Link key={circle.name} href={circle.link}>
              <div className={`text-${circle.color} mb-2 flex items-center transition-transform duration-200 transform hover:scale-105 cursor-pointer`}>
                <img src={circle.imgSrc} alt={`${circle.name} Icon`} className="mr-2" /> {circle.name}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Main content area: Use flex-grow for responsiveness */}
      <div className="flex-grow p-4 md:p-10 overflow-y-auto">
        {/* Cantos as folder icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {cantos.map(canto => (
            <LinkPreview
              key={canto.name}
              url={canto.link}
              imageSrc={canto.previewSrc}
              isStatic
              className="font-bold"
            >
              <DesktopIcon
                name={canto.name}
                link={canto.link}
                imgSrc={canto.imgSrc} // Updated to use Folder.png
              />
            </LinkPreview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Limbo;
