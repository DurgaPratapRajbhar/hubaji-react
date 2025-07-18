'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  const videos = [
    {
      id: 'video1',
      thumbnail: '/default.PNG',
      title: 'Solar Installation Process',
      description: 'Step-by-step guide to professional solar installation',
      youtubeId: 'tUZpjN60nos',
      category: 'Installation'
    },
    {
      id: 'video2',
      thumbnail: '/default.PNG',
      title: 'How Solar Panels Work',
      description: 'Understanding solar technology fundamentals',
      youtubeId: 'YOUR_YOUTUBE_ID_2',
      category: 'Education'
    },
    {
      id: 'video3',
      thumbnail: '/default.PNG',
      title: 'Solar Energy Benefits',
      description: 'Environmental and economic advantages',
      youtubeId: 'YOUR_YOUTUBE_ID_3',
      category: 'Benefits'
    },
    {
      id: 'video4',
      thumbnail: '/default.PNG',
      title: 'Solar Technology Innovation',
      description: 'Latest advances in solar power',
      youtubeId: 'YOUR_YOUTUBE_ID_4',
      category: 'Technology'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
            onClick={() => setSelectedVideo(video)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 border border-white/20">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                  <svg className="w-8 h-8 text-white transform translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-sm mb-3">
                {video.category}
              </span>
              <h3 className="text-white text-2xl font-bold mb-2">
                {video.title}
              </h3>
              <p className="text-white/80 text-sm line-clamp-2">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-xl"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
              title={selectedVideo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(null);
              }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;