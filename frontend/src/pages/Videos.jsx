import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from '../components/ui/card';
import { Play } from 'lucide-react';

const videos = [
  {
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    title: 'Wedding Highlights',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    title: 'Corporate Event',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    title: 'Birthday Celebration',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
    title: 'Product Launch',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    title: 'Family Reunion',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80',
    title: 'Graduation Day',
  },
];

const Videos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={true} />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 playfair">
              Video Portfolio
            </h1>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch our cinematic video productions that tell compelling stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer border-none"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-black" size={32} />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Videos;
