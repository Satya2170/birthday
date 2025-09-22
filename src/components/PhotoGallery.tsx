import React from 'react';
import NextButton from './NextButton';

interface PhotoGalleryProps {
  onNext: () => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onNext }) => {
  const photos = [
    {
      url: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'Birthday celebration'
    },
    {
      url: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'Sweet moments'
    },
    {
      url: 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'Joyful times'
    },
    {
      url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'Friendship goals'
    },
    {
      url: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'Adventure time'
    },
    {
      url: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'Support system'
    },
    {
      url: 'https://images.pexels.com/photos/1024981/pexels-photo-1024981.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'Silly moments'
    },
    {
      url: 'https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'Beautiful memories'
    },
    {
      url: 'https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'Special occasions'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Beautiful Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-base font-medium">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <NextButton onClick={onNext} text="Read Wishes" />
      </div>
    </section>
  );
};

export default PhotoGallery;