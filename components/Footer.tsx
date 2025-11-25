import Link from 'next/link';
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' }
  ];

  const programs = [
    { name: 'Strength Training', href: '#programs' },
    { name: 'Cardio Fitness', href: '#programs' },
    { name: 'Group Classes', href: '#programs' },
    { name: 'Personal Training', href: '#programs' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Transform Your Body?
              </h3>
              <p className="text-red-50">
                Join FitForce today and get your first week free!
              </p>
            </div>
            <Link
              href="#pricing"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center space-x-2 mb-6 group">
              <div className="bg-red-600 p-2 rounded-lg group-hover:bg-red-500 transition-colors">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">FitForce</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Unleash your potential with cutting-edge equipment, expert trainers, and a community that pushes you to be your best.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition-all hover:scale-110 group"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600 -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Our Programs
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600 -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-gray-400 hover:text-red-500 transition-colors hover:translate-x-1 inline-block"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600 -mb-2"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400">
                  123 Fitness Street<br />New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-red-500 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@fitforce.com" className="text-gray-400 hover:text-red-500 transition-colors">
                  info@fitforce.com
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <Clock className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400">
                  Mon-Fri: 5AM - 11PM<br />Sat-Sun: 6AM - 10PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} FitForce Gym. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
