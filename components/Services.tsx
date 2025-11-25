'use client';

import { Calendar, Users, Trophy, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Calendar,
      title: 'Live Class Schedule',
      description: 'Book your spot in real-time with instant availability updates across all fitness classes.',
      features: ['Real-time booking', 'Waitlist alerts', '50+ weekly classes'],
      color: 'red'
    },
    {
      icon: Users,
      title: 'Elite Trainers',
      description: 'Connect with certified professionals who bring expertise, motivation, and personalized training plans.',
      features: ['NASM certified', 'Specialized programs', 'Progress tracking'],
      color: 'gray'
    },
    {
      icon: Trophy,
      title: 'Flexible Memberships',
      description: 'Choose the plan that fits your lifestyle with transparent pricing and no hidden fees.',
      features: ['Month-to-month', 'Family packages', 'Freeze options'],
      color: 'gray'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Join hundreds who have transformed their lives with documented success stories and real progress.',
      features: ['Photo tracking', 'Body composition', 'Community support'],
      color: 'red'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider px-4 py-2 bg-red-50 rounded-full">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to{' '}
            <span className="text-red-600">Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to help you reach your goals faster
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHighlight = service.color === 'red';
            
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  isHighlight
                    ? 'bg-gradient-to-br from-red-600 to-red-700 text-white'
                    : 'bg-white text-gray-900'
                }`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    isHighlight
                      ? 'bg-white/20'
                      : 'bg-red-50'
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      isHighlight ? 'text-white' : 'text-red-600'
                    }`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p
                  className={`text-lg mb-6 ${
                    isHighlight ? 'text-red-50' : 'text-gray-600'
                  }`}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          isHighlight ? 'bg-white' : 'bg-red-600'
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          isHighlight ? 'text-white' : 'text-gray-700'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 transition-all duration-300 ${
                    isHighlight
                      ? 'bg-white w-full'
                      : 'bg-red-600 w-0 group-hover:w-full'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}
