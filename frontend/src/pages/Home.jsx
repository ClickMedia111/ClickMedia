import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Portfolio from '../components/Portfolio';
import Workshops from '../components/Workshops';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Testimonials />
      <Team />
      <Portfolio />
      <Workshops />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Home;
