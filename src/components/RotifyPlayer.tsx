import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface RotifyPlayerProps {
  onClose: () => void;
}

interface MusicListItem {
  title: string;
  srcMusic: string;
  imgSrc: string;
}

const RotifyPlayer: React.FC<RotifyPlayerProps> = ({ onClose }) => {
  const initialMusicList: MusicListItem[] = [
    { title: "SinPow", srcMusic: "/ListMusic/a-sinister-power-rising-epic-dark-gothic-soundtrack-15021.mp3", imgSrc: "/images/101_idesofideas_album_cover_16-bit_adaptation_of_dantes_inferno_b87cb3c6-8ee9-4dd7-9888-bd753b71d723.png" },
    { title: "Woods", srcMusic: "/ListMusic/calm-fantasy-harp-and-strings-197736.mp3", imgSrc: "/images/101_idesofideas_album_cover_16-bit_adaptation_of_dantes_inferno_b0653427-8280-47c5-9a4b-a1f5ac36a04d.png" },
    { title: "Midway", srcMusic: "/ListMusic/medieval-background-196571.mp3", imgSrc: "/path/to/image2.jpg" },
    { title: "Canto", srcMusic: "/ListMusic/medieval-fantasy-142837.mp3", imgSrc: "/images/101_idesofideas_album_cover_16-bit_adaptation_of_dantes_inferno_b0653427-8280-47c5-9a4b-a1f5ac36a04d.png" },
    { title: "Beatrice", srcMusic: "/ListMusic/medieval-star-188280.mp3", imgSrc: "/path/to/image2.jpg" },
    { title: "Virgil", srcMusic: "/ListMusic/middle-ages-147373.mp3", imgSrc: "/images/101_idesofideas_album_cover_16-bit_adaptation_of_dantes_inferno_b0653427-8280-47c5-9a4b-a1f5ac36a04d.png" },
    { title: "Woe", srcMusic: "/ListMusic/where-the-brave-may-live-forever-viking-background-music-109867.mp3", imgSrc: "/path/to/image2.jpg" },
    // Add more items as needed
  ];

  const [musicList] = useState<MusicListItem[]>(initialMusicList);
  const [playList] = useState<MusicListItem[]>(musicList);
  const [currentSong, setCurrentSong] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioPlayer = useRef<HTMLAudioElement | null>(null);

  // Ensure currentSong is always a valid index
  useEffect(() => {
    if (currentSong < 0 || currentSong >= playList.length) {
      setCurrentSong(0);
    }
  }, [currentSong, playList]);

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.src = playList[currentSong].srcMusic;
      if (isPlaying) {
        audioPlayer.current.play().catch(error => console.log("Error playing audio:", error));
      }
    }
  }, [currentSong, isPlaying, playList]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioPlayer.current?.pause();
    } else {
      audioPlayer.current?.play().catch(error => console.log("Error playing audio:", error));
    }
  };

  const playNextTrack = () => {
    setCurrentSong((prev) => (prev + 1) % playList.length);
  };

  const playPreviousTrack = () => {
    setCurrentSong((prev) => (prev - 1 + playList.length) % playList.length);
  };

  const currentMusic = playList[currentSong];

  return (
    <div className="relative w-96 h-96 p-5 rounded-lg shadow-lg bg-gradient-to-br from-black to-gray-800 backdrop-blur-lg">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 via-red-500 to-black flex items-center justify-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6L18 18M6 18L18 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {currentMusic ? (
        <>
          <audio ref={audioPlayer} />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-32 h-32 bg-black rounded-full">
              <Image
                className="rounded-full"
                loading="lazy"
                src={currentMusic.imgSrc}
                alt={currentMusic.title}
                width={128}
                height={128}
              />
            </div>
          </div>
          <div className="absolute bottom-28 left-5 right-5 flex flex-col items-center">
            <input type="range" className="w-full h-1 bg-red-500" />
            <input type="range" className="w-full h-1 bg-red-300 mt-2" />
          </div>
          <div className="absolute bottom-16 left-5 right-5 flex justify-center items-center text-red-500 animate-pulse">
            {currentMusic.title}
          </div>
          <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-4">
            <button onClick={playPreviousTrack} className="w-12 h-12 bg-gradient-to-br from-yellow-500 via-red-500 to-black rounded-full flex justify-center items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 18V6L4 12L11 18ZM18 18V6L11 12L18 18Z" fill="currentColor" />
              </svg>
            </button>
            <button onClick={togglePlayPause} className="w-12 h-12 bg-gradient-to-br from-yellow-500 via-red-500 to-black rounded-full flex justify-center items-center">
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="currentColor" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                </svg>
              )}
            </button>
            <button onClick={playNextTrack} className="w-12 h-12 bg-gradient-to-br from-yellow-500 via-red-500 to-black rounded-full flex justify-center items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 18V6L20 12L13 18ZM6 18V6L13 12L6 18Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <p className="text-white">No song available</p>
      )}
    </div>
  );
};

export default RotifyPlayer;
