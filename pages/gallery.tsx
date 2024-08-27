import React from 'react';
import { EmbedPDF } from '@simplepdf/react-embed-pdf';
import Image from 'next/image';

const Gallery = () => {
  return (
    <div className=" mx-auto p-4 bg-black">
      <div className="text-center mb-8">
        <Image
          src="/images/gallery-title.png"
          alt="Gallery"
          width={500}
          height={100}
          className="mx-auto"
        />
      </div>
      <div className="pdf-container flex flex-col items-center justify-center">
        <EmbedPDF
          mode="inline"
          style={{ width: '100%', height: '800px' }}
          documentURL="/images/DA_Inferno2.pdf"
        />
      </div>
    </div>
  );
};

export default Gallery;
