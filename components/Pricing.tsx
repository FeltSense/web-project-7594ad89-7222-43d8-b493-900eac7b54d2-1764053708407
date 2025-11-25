'use client';

import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-red-500" />
            <span className="text-red-500 font-semibold text-sm">Limited Time Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pre-Order Special
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Be among the first to transform your fitness journey. Lock in exclusive early-bird pricing today.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-red-600 p-8 shadow-2xl shadow-red-600/20 transform hover:scale-105 transition-all duration-300">
            {/* Badge */}
            <div className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-6">
              EARLY BIRD SPECIAL
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl font-bold text-white">$29</span>
                <span className="text-gray-400 line-through text-2xl">$99</span>
              </div>
              <p className="text-red-500 font-semibold text-lg">Save 71% - Limited Spots</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                'Full access to AI-powered workout plans',
                'Personalized nutrition guidance',
                'Progress tracking & analytics',
                'Community support & challenges',
                'Lifetime updates included',
                'Priority customer support'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-600/50 hover:shadow-red-600/70"
            >
              Pre-Order Now - $29
            </button>

            {/* Trust Badge */}
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">🔒 Secure checkout • 30-day money-back guarantee</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              <span className="text-red-500 font-bold">247 people</span> have pre-ordered in the last 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
