import React from 'react';
import { Card } from './ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Professional, friendly, and the photos were stunning. Couldn't have asked for more.",
    author: 'Priya S.',
  },
  {
    text: 'They captured our event perfectly. The video edit was cinematic and crisp.',
    author: 'David R.',
  },
  {
    text: 'Great experience end-to-end. Smooth booking and exceptional results.',
    author: 'Aisha K.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 playfair">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-none"
            >
              <Quote className="text-gray-300 mb-4" size={40} />
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-gray-900 font-semibold">— {testimonial.author}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
