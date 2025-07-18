'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  const images = [
    { src: 'https://hubaji.com/image/gallery/31.jpeg' },
    { src: 'https://hubaji.com/image/gallery/30.jpeg' },
    { src: 'https://hubaji.com/image/gallery/1.jpeg' },
    { src: '/image/gallery/2.jpeg' },
    { src: '/image/gallery/3.jpeg' },
    { src: '/image/gallery/4.jpeg' },
    { src: '/image/gallery/5.jpeg' },
    { src: '/image/gallery/6.jpeg' },
    { src: '/image/gallery/7.jpeg' },
    { src: '/image/gallery/8.jpeg' },
    { src: '/image/gallery/9.jpeg' },
    { src: '/image/gallery/10.jpeg' },
    { src: '/image/gallery/11.jpeg' },
    { src: '/image/gallery/12.jpeg' },
    { src: '/image/gallery/13.jpeg' },
    { src: '/image/gallery/14.jpeg' },
    { src: '/image/gallery/15.jpeg' },
    { src: '/image/gallery/16.jpeg' },
    { src: '/image/gallery/17.jpeg' },
    { src: '/image/gallery/18.jpeg' },
    { src: '/image/gallery/19.jpeg' },
    { src: '/image/gallery/20.jpeg' },
    { src: '/image/gallery/21.jpeg' },
    { src: '/image/gallery/22.jpeg' },
    { src: '/image/gallery/23.jpeg' },
    { src: '/image/gallery/24.jpeg' },
    { src: '/image/gallery/25.jpeg' },
    { src: '/image/gallery/26.jpeg' },
    { src: '/image/gallery/27.jpeg' },
    { src: '/image/gallery/28.jpeg' },
   
    

  ];

  useEffect(() => {
    const updateCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Image
                src={image.src}
                alt={image.title || 'Gallery Image'}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={75}
                className="object-cover transform group-hover:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-3">
                  {image.category}
                </span>
                <h3 className="text-white text-xl font-semibold">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`fixed w-12 h-12 rounded-full pointer-events-none mix-blend-difference z-50 transition-transform duration-300 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          background: 'white',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-lg"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-6xl aspect-[16/9]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute top-4 right-4 flex items-center space-x-4">
              <button
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add download functionality
                }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <button
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;