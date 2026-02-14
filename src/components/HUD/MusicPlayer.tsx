import { useEffect, useRef, useState, useCallback } from 'react';

const BASE = import.meta.env.BASE_URL;

const TRACKS = [
  { src: `${BASE}track01.mp3`, name: 'Track 01' },
  { src: `${BASE}track02.mp3`, name: 'Track 02' },
];

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const [ready, setReady] = useState(false);

  // Create audio element once
  useEffect(() => {
    const audio = new Audio(TRACKS[0].src);
    audio.loop = false;
    audio.volume = 0.4;
    audioRef.current = audio;

    audio.addEventListener('canplaythrough', () => setReady(true));
    audio.addEventListener('ended', () => {
      // Auto-next
      setTrackIdx((prev) => {
        const next = (prev + 1) % TRACKS.length;
        audio.src = TRACKS[next].src;
        audio.play();
        return next;
      });
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [playing]);

  const nextTrack = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setTrackIdx((prev) => {
      const next = (prev + 1) % TRACKS.length;
      audio.src = TRACKS[next].src;
      if (playing) {
        audio.play().catch(() => {});
      }
      return next;
    });
  }, [playing]);

  return (
    <div className="flex items-center gap-2 md:gap-3">
      {/* Equalizer bars */}
      <div className="flex items-end gap-[2px] h-4">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-[3px] rounded-full bg-neon-blue/80"
            style={{
              animation: playing ? `eq-bar 0.${4 + i * 2}s ease-in-out infinite alternate` : 'none',
              height: playing ? undefined : '3px',
              animationDelay: `${i * 0.08}s`,
            }}
          />
        ))}
      </div>

      {/* Track name */}
      <span className="text-[10px] md:text-[11px] text-gray-400 font-mono whitespace-nowrap">
        {TRACKS[trackIdx].name}
      </span>

      {/* Play/Pause */}
      <button
        onClick={togglePlay}
        disabled={!ready}
        className="w-7 h-7 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:scale-90 transition-all cursor-pointer text-white text-xs"
        title={playing ? 'Пауза' : 'Играть'}
      >
        {playing ? '⏸' : '▶'}
      </button>

      {/* Next */}
      <button
        onClick={nextTrack}
        className="w-7 h-7 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:scale-90 transition-all cursor-pointer text-white text-[10px]"
        title="Следующий трек"
      >
        ⏭
      </button>
    </div>
  );
}
