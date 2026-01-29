'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GoldHeart } from '@/components/GoldHeart';

const SOUNDCLOUD_EMBED_BASE = 'https://w.soundcloud.com/player/?url=';

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
  const [waveformTick, setWaveformTick] = useState(0);

  const isSoundCloud = url.includes('soundcloud.com');
  const embedSrc = isSoundCloud
    ? `${SOUNDCLOUD_EMBED_BASE}${encodeURIComponent(url)}&color=ff5500&auto_play=false&hide_related=true&show_comments=false&visual=true`
    : url;

  // Animate waveform bars when playing (decorative; iframe controls its own playback)
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

      {/* SoundCloud / embed – iframe so it loads and plays without react-player */}
      <div className="rounded-lg overflow-hidden bg-gray-800/50 mb-6" style={{ minHeight: 166 }}>
        <iframe
          src={embedSrc}
          title={`Play: ${title}`}
          width="100%"
          height={166}
          allow="autoplay"
          className="w-full border-0"
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

      {/* Controls – play/pause toggles waveform animation; use iframe above for playback */}
      <div className="flex items-center gap-4">
        <Button
          size="lg"
          onClick={handlePlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          className="bg-amber-500 hover:bg-amber-600 text-black rounded-full w-14 h-14 p-0 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
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
