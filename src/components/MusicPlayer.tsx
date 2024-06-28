import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/MusicPlayer.module.css';

interface Track {
  id: number;
  title: string;
  artist: string;
  src: string;
  img: string;
}

const tracks: Track[] = [
  { id: 1, title: "Inferno Overture", artist: "Dante Alighieri", src: "/ListMusic/a-sinister-power-rising-epic-dark-gothic-soundtrack-15021.mp3", img: "/images/da-song-1.png" },
  { id: 2, title: "Limbo Lament", artist: "Virgil", src: "/ListMusic/where-the-brave-may-live-forever-viking-background-music-109867.mp3", img: "/images/da-song-2.png" },
  { id: 3, title: "Circles of Hell", artist: "Beatrice", src: "/ListMusic/middle-ages-147373.mp3", img: "/images/da-song-3.png" },
  { id: 4, title: "Swirl together", artist: "Beatrice", src: "/ListMusic/calm-fantasy-harp-and-strings-197736.mp3", img: "/images/da-song-4.png" },
  { id: 5, title: "Midway", artist: "Beatrice", src: "/ListMusic/medieval-background-196571.mp3", img: "/images/da-song-5.png" },
  { id: 6, title: "Vestige", artist: "IdesofIdeas", src: "/ListMusic/medieval-star-188280.mp3", img: "/images/da-song-6.png" },
  { id: 7, title: "8 Bit Circle", artist: "OathMakr", src: "/ListMusic/8bitcircle.mp3", img: "/images/da-song-7.png" },
];

interface MusicPlayerProps {
  onClose: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ onClose }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  useEffect(() => {
    if (!audioContextRef.current) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
    }

    const audio = audioRef.current;
    if (audio && !sourceRef.current) {
      const source = audioContextRef.current!.createMediaElementSource(audio);
      source.connect(analyserRef.current!);
      analyserRef.current!.connect(audioContextRef.current!.destination);
      sourceRef.current = source;
    }

    if (audio) {
      audio.src = tracks[currentTrack].src;
      audio.load();
    }
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.play();
        animationRef.current = requestAnimationFrame(updateSpectrum);
      } else {
        audio.pause();
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      }
    }
  }, [isPlaying]);

  const togglePlayPause = (): void => setIsPlaying(!isPlaying);

  const handlePrevTrack = (): void => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const handleNextTrack = (): void => {
    setCurrentTrack((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleTimeUpdate = (): void => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = (): void => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const updateSpectrum = (): void => {
    const audio = audioRef.current;
    const canvas = canvasRef.current;
    if (!audio || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const analyser = analyserRef.current!;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = canvas.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height;
        ctx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();
  };

  return (
    <div className={styles.musicPlayer}>
      <button className={styles.closeButton} onClick={onClose}>X</button>
      <img src={tracks[currentTrack].img} alt={tracks[currentTrack].title} className={styles.albumArt} />
      <div className={styles.trackInfo}>
        <h2>{tracks[currentTrack].title}</h2>
        <p>{tracks[currentTrack].artist}</p>
      </div>
      <div className={styles.controls}>
        <button onClick={handlePrevTrack}>Previous</button>
        <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={handleNextTrack}>Next</button>
      </div>
      <div className={styles.volumeControl}>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className={styles.volumeSlider}
        />
      </div>
      <div className={styles.trackProgress}>
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
      <canvas ref={canvasRef} className={styles.spectrum}></canvas>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNextTrack}
      ></audio>
    </div>
  );
};

export default MusicPlayer;
