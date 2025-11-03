import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Camera, Video } from 'lucide-react';

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 playfair">
            My Work
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className="relative h-96 rounded-lg overflow-hidden group cursor-pointer"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8">
              <Camera size={48} className="mb-4" />
              <h3 className="text-2xl font-bold mb-4 playfair">Photography Portfolio</h3>
              <Link to="/photography">
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>

          <div
            className="relative h-96 rounded-lg overflow-hidden group cursor-pointer"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8">
              <Video size={48} className="mb-4" />
              <h3 className="text-2xl font-bold mb-4 playfair">Video Portfolio</h3>
              <Link to="/videos">
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
