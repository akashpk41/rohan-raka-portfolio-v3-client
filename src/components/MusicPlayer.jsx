import React, { useState, useEffect, useRef } from 'react';
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
  FaStepForward,
  FaStepBackward,
  FaRandom,
  FaRedo,
  FaHeadphones,
  FaHeart,
  FaBrain,
  FaLeaf,
  FaMoon,
  FaSun
} from 'react-icons/fa';

const MusicPlayer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState('focus');
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Mood-based playlists
  const playlists = {
    focus: {
      name: 'Focus & Study',
      icon: FaBrain,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-500/30',
      description: 'Enhance concentration during medical studies',
      tracks: [
        { name: 'Deep Focus - Medical Study', artist: 'Healthcare Sounds', duration: '4:32', mood: 'Concentration' },
        { name: 'Ambient Hospital Calm', artist: 'Healing Tones', duration: '3:45', mood: 'Peaceful' },
        { name: 'Study Session Flow', artist: 'Focus Music', duration: '5:12', mood: 'Productive' },
        { name: 'Medical Mind Clarity', artist: 'Brain Waves', duration: '4:18', mood: 'Clear Thinking' }
      ]
    },
    healing: {
      name: 'Healing & Recovery',
      icon: FaHeart,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30',
      description: 'Soothing sounds for patient care moments',
      tracks: [
        { name: 'Gentle Healing Touch', artist: 'Recovery Sounds', duration: '6:22', mood: 'Healing' },
        { name: 'Patient Care Ambience', artist: 'Medical Harmony', duration: '4:55', mood: 'Compassionate' },
        { name: 'Recovery Room Peace', artist: 'Wellness Audio', duration: '5:33', mood: 'Restorative' },
        { name: 'Healing Frequencies', artist: 'Therapeutic Music', duration: '7:11', mood: 'Therapeutic' }
      ]
    },
    meditation: {
      name: 'Meditation & Mindfulness',
      icon: FaLeaf,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      description: 'Mindful moments for healthcare professionals',
      tracks: [
        { name: 'Nurse Mindfulness Session', artist: 'Zen Healthcare', duration: '8:45', mood: 'Mindful' },
        { name: 'Meditation for Caregivers', artist: 'Peace Sounds', duration: '6:30', mood: 'Calming' },
        { name: 'Inner Peace Protocol', artist: 'Mindful Medicine', duration: '9:15', mood: 'Centered' },
        { name: 'Healthcare Hero Rest', artist: 'Serenity Audio', duration: '7:42', mood: 'Peaceful' }
      ]
    },
    nightshift: {
      name: 'Night Shift',
      icon: FaMoon,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-500/10 to-purple-500/10',
      borderColor: 'border-indigo-500/30',
      description: 'Gentle accompaniment for overnight care',
      tracks: [
        { name: 'Night Shift Serenity', artist: 'Midnight Care', duration: '12:34', mood: 'Gentle' },
        { name: 'Overnight Ward Ambience', artist: 'Night Sounds', duration: '15:22', mood: 'Subtle' },
        { name: 'Quiet Hours Comfort', artist: 'Peaceful Nights', duration: '11:18', mood: 'Soothing' },
        { name: 'Dawn Preparation', artist: 'Morning Transition', duration: '8:55', mood: 'Hopeful' }
      ]
    },
    energy: {
      name: 'Energy & Motivation',
      icon: FaSun,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-500/30',
      description: 'Uplifting music for active care moments',
      tracks: [
        { name: 'Healthcare Hero Energy', artist: 'Motivation Music', duration: '3:28', mood: 'Energetic' },
        { name: 'Active Care Rhythm', artist: 'Upbeat Medical', duration: '4:12', mood: 'Dynamic' },
        { name: 'Shift Start Boost', artist: 'Energy Waves', duration: '3:45', mood: 'Motivating' },
        { name: 'Positive Patient Care', artist: 'Uplifting Sounds', duration: '4:33', mood: 'Inspiring' }
      ]
    }
  };

  const currentPlaylistData = playlists[currentPlaylist];
  const currentTrackData = currentPlaylistData.tracks[currentTrack];

  // Simulate audio progress
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          const trackDuration = 300; // 5 minutes in seconds
          setDuration(trackDuration);
          setProgress((newTime / trackDuration) * 100);

          if (newTime >= trackDuration) {
            handleNext();
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (isShuffling) {
      setCurrentTrack(Math.floor(Math.random() * currentPlaylistData.tracks.length));
    } else {
      setCurrentTrack((prev) =>
        prev === currentPlaylistData.tracks.length - 1 ? 0 : prev + 1
      );
    }
    setCurrentTime(0);
    setProgress(0);
  };

  const handlePrevious = () => {
    setCurrentTrack((prev) =>
      prev === 0 ? currentPlaylistData.tracks.length - 1 : prev - 1
    );
    setCurrentTime(0);
    setProgress(0);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  const handleProgressChange = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width) * 100;
    setProgress(newProgress);
    setCurrentTime((newProgress / 100) * duration);
  };

  const getVolumeIcon = () => {
    if (volume === 0) return FaVolumeMute;
    if (volume < 50) return FaVolumeDown;
    return FaVolumeUp;
  };

  const VolumeIcon = getVolumeIcon();

  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Large Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Musical Note Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            {i % 6 === 0 && <div className="text-2xl text-cyan-400">♪</div>}
            {i % 6 === 1 && <div className="text-xl text-purple-400">♫</div>}
            {i % 6 === 2 && <div className="text-lg text-green-400">♬</div>}
            {i % 6 === 3 && <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />}
            {i % 6 === 4 && <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />}
            {i % 6 === 5 && <div className="w-4 h-4 border-2 border-green-400/50 rounded-full animate-pulse" />}
          </div>
        ))}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-60 animate-pulse" />
              <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <FaHeadphones className="text-white text-3xl" />
              </div>
            </div>
            <h2 className="text-2xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Background Music
            </h2>
          </div>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Enhance your focus and well-being with carefully curated ambient music designed for healthcare professionals
          </p>
        </div>

        <div className="grid  lg:grid-cols-3 gap-4 lg:gap-8">

          {/* Main Music Player */}
          <div className="lg:col-span-2 md:-ml-0 -ml-8  space-y-4 lg:space-y-8">

            {/* Current Playing Card */}
            <div className={`  relative backdrop-blur-2xl bg-gradient-to-br ${currentPlaylistData.bgColor} border ${currentPlaylistData.borderColor} rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

              {/* Animated Background */}
              <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${currentPlaylistData.color} opacity-10 rounded-full blur-3xl ${isPlaying ? 'animate-pulse' : ''}`} />
                <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${currentPlaylistData.color} opacity-5 rounded-full blur-2xl ${isPlaying ? 'animate-pulse' : ''}`} style={{ animationDelay: '1s' }} />
              </div>

              <div className="relative z-10 p-4 lg:p-8">

                {/* Track Info */}
                <div className="flex items-center gap-3 lg:gap-6 mb-6 lg:mb-8">

                  {/* Album Art / Visualizer */}
                  <div className="relative w-16 h-16 lg:w-24 lg:h-24 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br ${currentPlaylistData.color} rounded-xl lg:rounded-2xl ${isPlaying ? 'animate-pulse' : ''}" />
                    <div className="absolute inset-1 lg:inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-lg lg:rounded-xl flex items-center justify-center">
                      {React.createElement(currentPlaylistData.icon, {
                        className: `text-xl lg:text-3xl text-white ${isPlaying ? 'animate-bounce' : ''}`
                      })}
                    </div>

                    {/* Audio Visualizer Bars */}
                    {isPlaying && (
                      <div className="absolute -bottom-2 -left-2 -right-2 flex items-end justify-center gap-1">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 bg-gradient-to-t ${currentPlaylistData.color} rounded-full animate-pulse`}
                            style={{
                              height: `${8 + Math.random() * 16}px`,
                              animationDelay: `${i * 100}ms`,
                              animationDuration: `${500 + Math.random() * 1000}ms`
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg lg:text-2xl font-bold text-white mb-1 truncate">
                      {currentTrackData.name}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-300 mb-2">{currentTrackData.artist}</p>
                    <div className="flex items-center gap-2 lg:gap-3">
                      <span className={`px-2 py-1 bg-gradient-to-r ${currentPlaylistData.color} text-white text-xs rounded-full font-medium`}>
                        {currentTrackData.mood}
                      </span>
                      <span className="text-gray-400 text-xs lg:text-sm">{currentTrackData.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4 lg:mb-6">
                  <div
                    ref={progressRef}
                    onClick={handleProgressChange}
                    className="w-full h-2 bg-white/20 rounded-full cursor-pointer relative group"
                  >
                    <div
                      className={`h-full bg-gradient-to-r ${currentPlaylistData.color} rounded-full transition-all duration-300 relative`}
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Music Controls */}
                <div className="flex items-center justify-center gap-3 lg:gap-6">

                  {/* Shuffle */}
                  <button
                    onClick={() => setIsShuffling(!isShuffling)}
                    className={`p-2 cursor-pointer rounded-full transition-all duration-300 transform hover:scale-110 ${
                      isShuffling
                        ? `bg-gradient-to-r ${currentPlaylistData.color} text-white shadow-lg`
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <FaRandom />
                  </button>

                  {/* Previous */}
                  <button
                    onClick={handlePrevious}
                    className="p-2 lg:p-3 cursor-pointer text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <FaStepBackward className="text-lg lg:text-xl" />
                  </button>

                  {/* Play/Pause */}
                  <button
                    onClick={handlePlayPause}
                    className={`p-3 lg:p-4 cursor-pointer bg-gradient-to-r ${currentPlaylistData.color} rounded-full text-white shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-110 group`}
                  >
                    {isPlaying ? (
                      <FaPause className="text-xl lg:text-2xl group-hover:animate-pulse" />
                    ) : (
                      <FaPlay className="text-xl lg:text-2xl ml-1 group-hover:animate-bounce" />
                    )}
                  </button>

                  {/* Next */}
                  <button
                    onClick={handleNext}
                    className="p-2 lg:p-3 cursor-pointer text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <FaStepForward className="text-lg lg:text-xl" />
                  </button>

                  {/* Loop */}
                  <button
                    onClick={() => setIsLooping(!isLooping)}
                    className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      isLooping
                        ? `bg-gradient-to-r ${currentPlaylistData.color} text-white shadow-lg`
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <FaRedo />
                  </button>
                </div>
              </div>
            </div>

            {/* Current Playlist Tracks */}
            <div className={`backdrop-blur-2xl bg-white/5 border border-white/20 rounded-2xl p-6 shadow-xl transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                {React.createElement(currentPlaylistData.icon, { className: 'text-2xl' })}
                {currentPlaylistData.name} Playlist
              </h3>

              <div className="space-y-2">
                {currentPlaylistData.tracks.map((track, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setCurrentTrack(index);
                      setCurrentTime(0);
                      setProgress(0);
                    }}
                    className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 group ${
                      index === currentTrack
                        ? `bg-gradient-to-r ${currentPlaylistData.bgColor} border ${currentPlaylistData.borderColor}`
                        : 'hover:bg-white/5 hover:border-white/10'
                    } border border-transparent`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index === currentTrack && isPlaying
                        ? `bg-gradient-to-r ${currentPlaylistData.color} animate-pulse`
                        : 'bg-white/10'
                    }`}>
                      {index === currentTrack && isPlaying ? (
                        <FaPause className="text-white text-xs" />
                      ) : (
                        <FaPlay className="text-white text-xs ml-0.5" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold truncate ${
                        index === currentTrack ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {track.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{track.artist}</p>
                    </div>

                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        index === currentTrack
                          ? `bg-gradient-to-r ${currentPlaylistData.color} text-white`
                          : 'bg-white/10 text-gray-300'
                      }`}>
                        {track.mood}
                      </span>
                      <p className="text-gray-400 text-xs mt-1">{track.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Controls */}
          <div className="space-y-4 lg:space-y-6">

            {/* Volume Control */}
            <div className={`backdrop-blur-2xl bg-white/5 border border-white/20 rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-xl transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <VolumeIcon className="text-xl" />
                Volume Control
              </h4>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaVolumeMute className="text-gray-400" />
                  <div className="flex-1 relative">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={(e) => handleVolumeChange(Number(e.target.value))}
                      className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(236, 72, 153) ${volume}%, rgba(255,255,255,0.2) ${volume}%)`
                      }}
                    />
                  </div>
                  <FaVolumeUp className="text-gray-400" />
                </div>

                <div className="text-center">
                  <span className="text-2xl font-bold text-white">{volume}%</span>
                </div>
              </div>
            </div>

            {/* Playlist Selection */}
            <div className={`backdrop-blur-2xl bg-white/5 border border-white/20 rounded-2xl p-6 shadow-xl transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="text-white font-bold mb-6">Choose Mood</h4>

              <div className="space-y-3">
                {Object.entries(playlists).map(([key, playlist]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setCurrentPlaylist(key);
                      setCurrentTrack(0);
                      setCurrentTime(0);
                      setProgress(0);
                    }}
                    className={`w-full cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 text-left ${
                      currentPlaylist === key
                        ? `bg-gradient-to-r ${playlist.bgColor} ${playlist.borderColor} shadow-lg`
                        : 'bg-white/5 border-white/20 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {React.createElement(playlist.icon, {
                        className: `text-xl ${currentPlaylist === key ? 'text-white' : 'text-gray-400'}`
                      })}
                      <h5 className={`font-semibold ${currentPlaylist === key ? 'text-white' : 'text-gray-300'}`}>
                        {playlist.name}
                      </h5>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {playlist.description}
                    </p>

                    {currentPlaylist === key && (
                      <div className="mt-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-xs font-medium">Active</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Music Benefits */}
            <div className={`backdrop-blur-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 shadow-xl transform transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="text-purple-300 font-bold mb-4 flex items-center gap-2">
                <FaBrain className="text-xl" />
                Music Benefits
              </h4>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>Improved focus during medical studies</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full" />
                  <span>Reduced stress during patient care</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span>Enhanced concentration levels</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Better work-life balance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.6;
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, rgb(168, 85, 247), rgb(236, 72, 153));
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(168, 85, 247, 0.4);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, rgb(168, 85, 247), rgb(236, 72, 153));
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px rgba(168, 85, 247, 0.4);
        }

        .slider::-webkit-slider-track {
          height: 8px;
          border-radius: 4px;
        }

        .slider::-moz-range-track {
          height: 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
        }
      `}</style>
    </section>
  );
};

export default MusicPlayer;