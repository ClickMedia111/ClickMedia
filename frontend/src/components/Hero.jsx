import React from 'react';
import { Button } from './ui/button';
import { Camera, Video } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 playfair">
            Click Media
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Capturing life's moments, one click at a time. We offer professional
            photography and videography services, and share our passion through
            engaging workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('book')}
              size="lg"
              className="bg-white text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              <Camera className="mr-2" size={20} />
              Book an Event
            </Button>
            <Button
              onClick={() => scrollToSection('workshops')}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              <Video className="mr-2" size={20} />
              Join a Workshop
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Camera className="text-white opacity-20" size={40} />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <Video className="text-white opacity-20" size={40} />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
