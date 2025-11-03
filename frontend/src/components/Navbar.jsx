import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1
              className={`text-2xl font-bold playfair transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Click Media
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <Link
              to="/photography"
              className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Photography
            </Link>
            <Link
              to="/videos"
              className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Videos
            </Link>
            <button
              onClick={() => scrollToSection('workshops')}
              className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Workshops
            </button>
            <Button
              onClick={() => scrollToSection('book')}
              className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={scrolled ? 'text-gray-900' : 'text-white'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4 py-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-gray-900 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-gray-900 text-left"
              >
                About
              </button>
              <Link to="/photography" className="text-gray-700 hover:text-gray-900">
                Photography
              </Link>
              <Link to="/videos" className="text-gray-700 hover:text-gray-900">
                Videos
              </Link>
              <button
                onClick={() => scrollToSection('workshops')}
                className="text-gray-700 hover:text-gray-900 text-left"
              >
                Workshops
              </button>
              <Button
                onClick={() => scrollToSection('book')}
                className="bg-black text-white hover:bg-gray-800"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
