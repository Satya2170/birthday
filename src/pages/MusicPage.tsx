import React, { useState } from 'react';
import { Music, Play, Pause, Heart, Volume2 } from 'lucide-react';
import NextButton from '../components/NextButton';

interface MusicPageProps {
  onNext?: () => void;
}

const MusicPage: React.FC<MusicPageProps> = ({ onNext }) => {
  const [currentSong, setCurrentSong] = useState<number | null>(null);

  const playlist = [
    {
      id: 1,
      title: "Happy Birthday Song",
      artist: "Classic Birthday Tune",
      mood: "Celebratory",
      color: "from-pink-400 to-rose-500",
      description: "The timeless birthday classic that never gets old!"
    },
    {
      id: 2,
      title: "Celebration",
      artist: "Kool & The Gang",
      mood: "Joyful",
      color: "from-yellow-400 to-orange-500",
      description: "Let's celebrate your special day with this upbeat anthem!"
    },
    {
      id: 3,
      title: "Good as Hell",
      artist: "Lizzo",
      mood: "Empowering",
      color: "from-purple-400 to-indigo-500",
      description: "Because you're amazing and deserve to feel it!"
    },
    {
      id: 4,
      title: "Can't Stop the Feeling",
      artist: "Justin Timberlake",
      mood: "Uplifting",
      color: "from-blue-400 to-cyan-500",
      description: "Pure happiness in musical form - just like you!"
    },
    {
      id: 5,
      title: "Dancing Queen",
      artist: "ABBA",
      mood: "Fun",
      color: "from-green-400 to-emerald-500",
      description: "You're the dancing queen of our hearts!"
    },
    {
      id: 6,
      title: "Best Day of My Life",
      artist: "American Authors",
      mood: "Optimistic",
      color: "from-indigo-400 to-purple-500",
      description: "Today is YOUR best day - celebrate it!"
    }
  ];

  const toggleSong = (id: number) => {
    setCurrentSong(currentSong === id ? null : id);
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Music className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Birthday Playlist
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A special collection of songs to make your birthday even more magical! 🎵
          </p>
        </div>

        <div className="space-y-6">
          {playlist.map((song) => (
            <div
              key={song.id}
              className={`bg-gradient-to-r ${song.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
              onClick={() => toggleSong(song.id)}
            >
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-lg rounded-full p-3">
                    {currentSong === song.id ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{song.title}</h3>
                    <p className="text-white/80">{song.artist}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white/20 backdrop-blur-lg rounded-full px-3 py-1 mb-2">
                    <span className="text-sm font-medium">{song.mood}</span>
                  </div>
                  <Heart className="w-5 h-5 ml-auto animate-pulse" />
                </div>
              </div>
              <p className="text-white/90 mt-4 text-lg">{song.description}</p>
              
              {currentSong === song.id && (
                <div className="mt-4 bg-white/10 backdrop-blur-lg rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/80 text-sm">Now Playing</span>
                    <Volume2 className="w-4 h-4 text-white/80" />
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                    <div className="bg-white h-2 rounded-full w-1/3 animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-white/60 text-xs">
                    <span>1:23</span>
                    <span>3:45</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50">
            <Music className="w-12 h-12 text-purple-500 mx-auto mb-4 animate-spin" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Music & Memories
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Music has a way of capturing moments and emotions like nothing else can. 
              These songs are chosen specially for you because they represent the joy, 
              energy, and beautiful spirit you bring to everyone around you. Dance, 
              sing, and celebrate - today is all about you! 🎶
            </p>
          </div>
          
          <NextButton onClick={() => onNext?.()} text="Back to Home" disabled={!onNext} />
        </div>
      </div>
    </div>
  );
};

export default MusicPage;