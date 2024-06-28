// pages/intro.tsx

import Link from 'next/link';
import Image from 'next/image';

const IntroPage = () => {
  const ringSizes = [70, 71, 72, 73, 74, 75, 76]; // Sizes for the rings

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <div className="relative z-10">
        <Link href="/">
          <button className="w-20 h-20 flex items-center justify-center text-xl font-bold text-white bg-red-600 rounded-full hover:bg-red-700 hover:shadow-lg transition-all duration-300">
            Enter
          </button>
        </Link>
      </div>
      {ringSizes.map((size, index) => (
        <div
          key={index}
          className={`absolute`}
          style={{
            width: `${size}rem`,
            height: `${size}rem`,
            animation: `spin ${20 + index * 2}s linear infinite`,
            animationDelay: `${index * 0.5}s`
          }}
        >
          <Image
            src={`/images/circle${index + 1}-icon${index + 1}.png`}
            alt={`Concentric ring ${index + 1}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes spin {
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
      `}</style>
    </div>
  );
};

export default IntroPage;
