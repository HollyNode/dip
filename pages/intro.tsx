// pages/intro.tsx

import Link from 'next/link';
import Image from 'next/image';

const IntroPage = () => {
  const ringSizes = [70, 71, 72, 73, 74, 75, 76]; // Sizes for the rings

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <div className="relative z-10">
        <Link href="/">
          <button className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-lg sm:text-xl font-bold text-white bg-red-600 rounded-full hover:bg-red-700 hover:shadow-lg transition-all duration-300 animate-fadeIn">
            Enter
          </button>
        </Link>
      </div>
      {ringSizes.map((size, index) => (
        <div
          key={index}
          className={`absolute animate-fadeIn animate-spinSlow`}
          style={{
            width: `${size * 0.7}rem`, // Scale down for mobile
            height: `${size * 0.7}rem`,
            animation: `fadeIn 0.8s ease-out ${index * 0.3}s both, spinSlow ${20 + index * 2}s linear infinite ${index * 0.5}s`
          }}
        >
          <div 
            className="w-full h-full transform scale-50 sm:scale-75 md:scale-90 lg:scale-100 xl:scale-110"
          >
            <Image
              src={`/images/circle${index + 1}-icon${index + 1}.png`}
              alt={`Concentric ring ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 70vw, (max-width: 1024px) 90vw, 100vw"
              priority={index < 3} // Prioritize loading first 3 rings
            />
          </div>
        </div>
      ))}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes spinSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .hover\:bg-red-700:hover {
          background-color: #b71c1c;
        }
        
        .hover\:shadow-lg:hover {
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
        }

        /* Responsive adjustments for very small screens */
        @media (max-width: 320px) {
          button {
            width: 3.5rem;
            height: 3.5rem;
            font-size: 0.9rem;
          }
        }

        /* Ensure rings don't overflow on very large screens */
        @media (min-width: 1920px) {
          .absolute {
            max-width: 90vmin;
            max-height: 90vmin;
          }
        }

        /* Handle landscape orientation on mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .absolute {
            transform: scale(0.6);
          }
        }
      `}</style>
    </div>
  );
};

export default IntroPage;