'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Marathon Runner',
    image: 'https://i.pravatar.cc/150?img=47',
    quote: 'This program transformed my endurance completely. I shaved 20 minutes off my marathon time and feel stronger than ever. The personalized coaching made all the difference.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Fitness Enthusiast',
    image: 'https://i.pravatar.cc/150?img=33',
    quote: 'Lost 35 pounds in 4 months while gaining muscle. The nutrition guidance combined with intense workouts gave me results I never thought possible. Life-changing experience!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'CrossFit Athlete',
    image: 'https://i.pravatar.cc/150?img=45',
    quote: 'The community and expert trainers pushed me beyond my limits. I hit PRs I\'d been chasing for years. This isn\'t just a gym, it\'s a complete lifestyle transformation.',
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results, Real People
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands who've transformed their lives through dedication and expert guidance
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700 transition-all duration-500">
            <div className="flex flex-col items-center text-center">
              {/* Avatar with red ring */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-50"></div>
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-red-600 relative z-10"
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-red-600" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Name and Role */}
              <h3 className="text-xl font-bold text-white mb-1">
                {testimonials[activeIndex].name}
              </h3>
              <p className="text-red-500 font-medium">
                {testimonials[activeIndex].role}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center justify-center group"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-red-600' : 'w-2 bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center justify-center group"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
