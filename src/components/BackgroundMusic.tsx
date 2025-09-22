import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 bg-white/20 backdrop-blur-lg rounded-full p-4 shadow-lg border border-white/30 z-50">
      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="p-2 bg-pink-500 hover:bg-pink-600 rounded-full text-white transition-colors"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="p-1 text-white hover:text-pink-300 transition-colors"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      <audio
        ref={audioRef}
        loop
        onEnded={() => setIsPlaying(false)}
      >
        {/* You can add your birthday song URL here */}
        {/* <source src="path-to-birthday-song.mp3" type="audio/mpeg" /> */}
      </audio>
    </div>
  );
};

export default BackgroundMusic;