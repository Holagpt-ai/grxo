'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GoldHeart } from '@/components/GoldHeart';

// Dynamically import react-player (SoundCloud, Spotify, etc.) to avoid SSR issues
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface MusicPlayerProps {
  url: string;
  title?: string;
  artist?: string;
  year?: string;
}

export function MusicPlayer({ url, title = 'Latin House Fusion Mix', artist = 'Goldie XO', year = '2024' }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [waveformTick, setWaveformTick] = useState(0);
  const playerRef = useRef<any>(null);

  // Animate waveform bars when playing
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => setWaveformTick((t) => t + 1), 120);
    return () => clearInterval(id);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      setVolume(0.7);
    } else {
      setIsMuted(true);
    }
  };

  const handleProgress = (state: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number }) => {
    setPlayed(state.played);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTo = parseFloat(e.target.value);
    setPlayed(seekTo);
    if (playerRef.current) {
      playerRef.current.seekTo(seekTo);
    }
  };

  return (
    <div className="bg-gray-900 rounded-xl p-8 border border-amber-500/30 shadow-lg">
      {/* Player Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <GoldHeart size={40} />
        </div>
        <div className="flex-1 text-left">
          <h4 className="text-white font-bold text-lg">{title}</h4>
          <p className="text-gray-400 text-sm">{artist} • {year}</p>
        </div>
      </div>

      {/* Real SoundCloud / Spotify embed – visible so it loads and plays */}
      <div className="rounded-lg overflow-hidden bg-gray-800/50 mb-6" style={{ minHeight: 166 }}>
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={isPlaying}
          volume={isMuted ? 0 : volume}
          onReady={() => setIsReady(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onProgress={handleProgress}
          onDuration={handleDuration}
          width="100%"
          height={166}
          config={{
            soundcloud: {
              options: {
                visual: true,
                show_artwork: true,
              },
            },
          }}
        />
      </div>

      {/* Waveform visualization – animates when playing */}
      <div className="mb-6 flex items-center justify-center gap-0.5 h-12" aria-hidden="true">
        {Array.from({ length: 48 }).map((_, i) => {
          const baseHeight = Math.sin((i + waveformTick) * 0.15) * 35 + 45;
          const height = isPlaying ? baseHeight + Math.sin((waveformTick + i) * 0.3) * 12 : 20 + (i % 3) * 8;
          return (
            <div
              key={i}
              className="w-1 bg-amber-500/40 rounded-full transition-all duration-150"
              style={{
                height: `${Math.max(8, Math.min(100, height))}%`,
                opacity: isPlaying ? 0.9 : 0.4,
              }}
            />
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={played}
          onChange={handleSeek}
          aria-label="Seek position"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(played * 100)}
          className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          style={{
            background: `linear-gradient(to right, rgb(251, 191, 36) 0%, rgb(251, 191, 36) ${played * 100}%, rgb(31, 41, 55) ${played * 100}%, rgb(31, 41, 55) 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{formatTime(played * duration)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <Button
          size="lg"
          onClick={handlePlayPause}
          disabled={!isReady}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          className="bg-amber-500 hover:bg-amber-600 text-black rounded-full w-14 h-14 p-0 shadow-[0_0_20px_rgba(251,191,36,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPlaying ? <Pause size={24} aria-hidden="true" /> : <Play size={24} aria-hidden="true" />}
        </Button>

        {/* Volume Control */}
        <div className="flex items-center gap-2 flex-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleMute}
            aria-label={isMuted ? 'Unmute volume' : 'Mute volume'}
            className="text-gray-400 hover:text-white p-2"
          >
            {isMuted ? <VolumeX size={20} aria-hidden="true" /> : <Volume2 size={20} aria-hidden="true" />}
          </Button>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="flex-1 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            style={{
              background: `linear-gradient(to right, rgb(251, 191, 36) 0%, rgb(251, 191, 36) ${(isMuted ? 0 : volume) * 100}%, rgb(31, 41, 55) ${(isMuted ? 0 : volume) * 100}%, rgb(31, 41, 55) 100%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
