'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Dumbbell } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: '7594ad89-7222-43d8-b493-900eac7b54d2',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl mb-6 transform hover:scale-110 transition-transform">
              <Dumbbell className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Start Your <span className="text-red-600">Transformation?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get in touch today and take the first step towards your fitness goals. We'll respond within 24 hours.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-400 text-lg mb-8">
                  We've received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email & Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all resize-none"
                    placeholder="Tell us about your fitness goals and how we can help you achieve them..."
                  ></textarea>
                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-red-600 text-white font-bold text-lg py-5 rounded-xl hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy Note */}
                <p className="text-center text-sm text-gray-500 pt-4">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-colors">
              <div className="text-red-600 font-bold text-lg mb-1">Email</div>
              <div className="text-gray-400">hello@fitnesshub.com</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-colors">
              <div className="text-red-600 font-bold text-lg mb-1">Phone</div>
              <div className="text-gray-400">(555) 123-4567</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-colors">
              <div className="text-red-600 font-bold text-lg mb-1">Hours</div>
              <div className="text-gray-400">Mon-Fri: 6AM - 10PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
