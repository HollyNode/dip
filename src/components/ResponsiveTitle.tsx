import React from 'react';

const ResponsiveTitle = () => (
  <div className="w-full text-center lg:text-right lg:absolute lg:bottom-10 lg:right-10 p-4 mt-8 lg:mt-0">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      <span className="text-red-500">DANTE&apos;S</span>{' '}
      <span className="text-red-700">INFERNO</span>
    </h1>
  </div>
);

export default ResponsiveTitle;