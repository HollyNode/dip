import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from '../styles/MusicPlayer.module.css';

interface Track {
  id: number;
  title: string;
  artist: string;
  src: string;
  img: string;
  circle: string;
}

const tracks: Track[] = [
  { id: 1, title: "A Sinister Power Rising", artist: "Epic Dark Gothic", src: "/ListMusic/a-sinister-power-rising-epic-dark-gothic-soundtrack-15021.mp3", img: "/da-song-1.png", circle: "Limbo" },
  { id: 2, title: "Where The Brave May Live Forever", artist: "Viking Spirits", src: "/ListMusic/where-the-brave-may-live-forever-viking-background-music-109867.mp3", img: "/da-song-2.png", circle: "Lust" },
  { id: 3, title: "Middle Ages Symphony", artist: "Medieval Echoes", src: "/ListMusic/middle-ages-147373.mp3", img: "/da-song-3.png", circle: "Gluttony" },
  { id: 4, title: "Calm Fantasy Harp", artist: "Celestial Strings", src: "/ListMusic/calm-fantasy-harp-and-strings-197736.mp3", img: "/da-song-4.png", circle: "Greed" },
  { id: 5, title: "Medieval Background", artist: "Ancient Winds", src: "/ListMusic/medieval-background-196571.mp3", img: "/images/101_idesofideas_Create_an_image_inspired_by_the_first_Canto_of__af201c5c-9370-48b1-9732-8039a7acf69f.png", circle: "Wrath" },
  { id: 6, title: "Medieval Star", artist: "Stellar Crusade", src: "/ListMusic/medieval-star-188280.mp3", img: "/images/101_idesofideas_Create_an_image_based_on_the_second_Canto_of_Da_d78b713d-cb80-463f-b8dd-d36f58105d72.png", circle: "Heresy" },
  { id: 7, title: "8 Bit Circle", artist: "Digital Inferno", src: "/ListMusic/8bitcircle.mp3", img: "/images/101_idesofideas_album_cover_16-bit_adaptation_of_dantes_inferno_b0653427-8280-47c5-9a4b-a1f5ac36a04d.png", circle: "Violence" },
  { id: 8, title: "Medieval Fantasy", artist: "Eternal Journey", src: "/ListMusic/medieval-fantasy-142837.mp3", img: "/images/101_idesofideas_album_cover_16-bit_adaptation_of_dantes_inferno_b87cb3c6-8ee9-4dd7-9888-bd753b71d723.png", circle: "Fraud" },
];

interface MusicPlayerProps {
  onClose: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ onClose }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.7);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  const initializeAudioContext = useCallback(() => {
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
  }, []);

  useEffect(() => {
    initializeAudioContext();
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [initializeAudioContext]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      setIsLoading(true);
      audio.src = tracks[currentTrack].src;
      audio.volume = volume;
      audio.load();
      
      const handleCanPlayThrough = () => {
        setIsLoading(false);
        if (isPlaying) {
          audio.play().catch(console.error);
        }
      };
      
      audio.addEventListener('canplaythrough', handleCanPlayThrough);
      return () => audio.removeEventListener('canplaythrough', handleCanPlayThrough);
    }
  }, [currentTrack, volume, isPlaying]);

  const updateSpectrum = useCallback((): void => {
    const audio = audioRef.current;
    const canvas = canvasRef.current;
    if (!audio || !canvas || !analyserRef.current || !isPlaying) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const analyser = analyserRef.current;
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      if (!isPlaying) return;
      
      analyser.getByteFrequencyData(dataArray);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#1a0a0a');
      gradient.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2;
      let x = 0;

      // Create fire/hellish effect
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height * 0.8;
        
        // Create flame-like gradient for each bar
        const barGradient = ctx.createLinearGradient(0, canvas.height - barHeight, 0, canvas.height);
        const intensity = dataArray[i] / 255;
        
        if (intensity > 0.7) {
          barGradient.addColorStop(0, '#fff200'); // White hot
          barGradient.addColorStop(0.3, '#ff6600'); // Orange
          barGradient.addColorStop(1, '#cc0000'); // Deep red
        } else if (intensity > 0.4) {
          barGradient.addColorStop(0, '#ff9900'); // Orange
          barGradient.addColorStop(0.5, '#ff3300'); // Red-orange
          barGradient.addColorStop(1, '#990000'); // Dark red
        } else {
          barGradient.addColorStop(0, '#ff6666'); // Light red
          barGradient.addColorStop(1, '#660000'); // Dark red
        }
        
        ctx.fillStyle = barGradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);
        
        // Add glow effect for higher frequencies
        if (intensity > 0.5) {
          ctx.shadowColor = '#ff3300';
          ctx.shadowBlur = 10;
          ctx.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);
          ctx.shadowBlur = 0;
        }
        
        x += barWidth + 1;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && !isLoading) {
      if (isPlaying) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            updateSpectrum();
          }).catch(console.error);
        }
      } else {
        audio.pause();
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      }
    }
  }, [isPlaying, isLoading, updateSpectrum]);

  const togglePlayPause = useCallback((): void => {
    if (!isLoading) {
      setIsPlaying(prev => !prev);
    }
  }, [isLoading]);

  const handlePrevTrack = useCallback((): void => {
    if (!isLoading) {
      setCurrentTrack(prev => (prev === 0 ? tracks.length - 1 : prev - 1));
      setCurrentTime(0);
      setProgress(0);
      setIsPlaying(true);
    }
  }, [isLoading]);

  const handleNextTrack = useCallback((): void => {
    if (!isLoading) {
      setCurrentTrack(prev => (prev === tracks.length - 1 ? 0 : prev + 1));
      setCurrentTime(0);
      setProgress(0);
      setIsPlaying(true);
    }
  }, [isLoading]);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, []);

  const handleTimeUpdate = useCallback((): void => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setCurrentTime(current);
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  }, []);

  const handleLoadedMetadata = useCallback((): void => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setIsLoading(false);
    }
  }, []);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    if (audioRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      const newTime = percentage * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress(percentage * 100);
    }
  }, [duration]);

  const formatTime = useCallback((time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  const toggleMinimize = useCallback((): void => {
    setIsMinimized(prev => !prev);
  }, []);

  return (
    <div className={`${styles.musicPlayer} ${isMinimized ? styles.minimized : ''}`}>
      {/* Header with controls */}
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <span className={styles.infernalIcon}>🔥</span>
          <span>Infernal Symphony</span>
        </div>
        <div className={styles.headerControls}>
          <button 
            className={styles.minimizeButton} 
            onClick={toggleMinimize}
            title={isMinimized ? 'Maximize Player' : 'Minimize Player'}
          >
            {isMinimized ? '🔼' : '🔽'}
          </button>
          <button 
            className={styles.closeButton} 
            onClick={onClose}
            title="Close Player"
          >
            ✕
          </button>
        </div>
      </div>

      {isMinimized ? (
        <div className={styles.minimizedContent}>
          <div className={styles.miniAlbumArt}>
            <Image
              src={tracks[currentTrack].img}
              alt={tracks[currentTrack].title}
              fill
              className="object-cover"
              sizes="50px"
            />
          </div>
          <div className={styles.miniTrackInfo}>
            <div className={styles.miniTitle}>{tracks[currentTrack].title}</div>
            <div className={styles.miniArtist}>{tracks[currentTrack].artist}</div>
          </div>
          <div className={styles.miniControls}>
            <button onClick={handlePrevTrack} disabled={isLoading}>⏮</button>
            <button onClick={togglePlayPause} disabled={isLoading}>
              {isLoading ? '⏳' : (isPlaying ? '⏸' : '▶')}
            </button>
            <button onClick={handleNextTrack} disabled={isLoading}>⏭</button>
          </div>
        </div>
      ) : (
        <div className={styles.fullContent}>
          {/* Album Art Section */}
          <div className={styles.albumSection}>
            <div className={styles.albumArt}>
              <div className={styles.albumBorder}>
                <Image
                  src={tracks[currentTrack].img}
                  alt={tracks[currentTrack].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 320px"
                />
                {isLoading && (
                  <div className={styles.loadingOverlay}>
                    <div className={styles.loadingSpinner}>🔥</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Track Information */}
          <div className={styles.trackInfo}>
            <h2 className={styles.trackTitle}>{tracks[currentTrack].title}</h2>
            <p className={styles.trackArtist}>{tracks[currentTrack].artist}</p>
            <p className={styles.trackCircle}>Circle: {tracks[currentTrack].circle}</p>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressSection}>
            <div className={styles.timeDisplay}>
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div 
              className={styles.progressBar}
              onClick={handleSeek}
            >
              <div 
                className={styles.progressFill} 
                style={{ width: `${progress}%` }}
              ></div>
              <div 
                className={styles.progressHandle} 
                style={{ left: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Main Controls */}
          <div className={styles.controls}>
            <button 
              className={styles.controlButton} 
              onClick={handlePrevTrack}
              disabled={isLoading}
              title="Previous Track"
            >
              ⏮
            </button>
            <button 
              className={`${styles.controlButton} ${styles.playButton}`}
              onClick={togglePlayPause}
              disabled={isLoading}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isLoading ? '⏳' : (isPlaying ? '⏸' : '▶')}
            </button>
            <button 
              className={styles.controlButton}
              onClick={handleNextTrack}
              disabled={isLoading}
              title="Next Track"
            >
              ⏭
            </button>
          </div>

          {/* Volume Control */}
          <div className={styles.volumeSection}>
            <span className={styles.volumeIcon}>🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className={styles.volumeSlider}
              title={`Volume: ${Math.round(volume * 100)}%`}
            />
            <span className={styles.volumePercent}>{Math.round(volume * 100)}%</span>
          </div>

          {/* Spectrum Visualizer */}
          <div className={styles.spectrumSection}>
            <canvas 
              ref={canvasRef} 
              className={styles.spectrum}
              width="400"
              height="120"
            ></canvas>
            <div className={styles.spectrumLabel}>
              {isPlaying ? 'Flames of Hell Dancing' : 'Silence in the Abyss'}
            </div>
          </div>

          {/* Track List */}
          <div className={styles.trackList}>
            <h3 className={styles.trackListTitle}>Circles of Hell</h3>
            <div className={styles.trackListItems}>
              {tracks.map((track, index) => (
                <button
                  key={track.id}
                  className={`${styles.trackListItem} ${index === currentTrack ? styles.activeTrack : ''}`}
                  onClick={() => {
                    setCurrentTrack(index);
                    setIsPlaying(true);
                  }}
                  disabled={isLoading}
                >
                  <span className={styles.trackNumber}>{track.id}</span>
                  <span className={styles.trackDetails}>
                    <span className={styles.trackName}>{track.title}</span>
                    <span className={styles.trackMeta}>{track.artist} - {track.circle}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNextTrack}
        preload="metadata"
      />
    </div>
  );
};

export default MusicPlayer;