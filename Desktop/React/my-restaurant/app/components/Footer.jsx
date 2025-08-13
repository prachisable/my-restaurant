// src/components/Footer.jsx
import React from 'react';

const Footer = ({ setCurrentPage }) => {
  const quickLinks = [
    { name: 'Home', key: 'home' },
    { name: 'Menu', key: 'menu' },
    { name: 'About Us', key: 'about' },
    { name: 'Gallery', key: 'gallery' },
    { name: 'Reviews', key: 'testimonials' },
    { name: 'Contact', key: 'contact' }
  ];

  const services = [
    { name: 'Dine-in Experience', icon: 'fas fa-utensils' },
    { name: 'Online Ordering', icon: 'fas fa-laptop' },
    { name: 'Catering Services', icon: 'fas fa-concierge-bell' },
    { name: 'Private Events', icon: 'fas fa-calendar-alt' },
    { name: 'Takeaway', icon: 'fas fa-shopping-bag' },
    { name: 'Corporate Lunch', icon: 'fas fa-building' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-orange-500 p-3 rounded-xl shadow-lg">
                <i className="fas fa-leaf text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Green Spice</h3>
                <p className="text-sm text-gray-400 font-medium">PURE VEGETARIAN</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experience the finest vegetarian cuisine crafted with love, fresh ingredients, and traditional recipes that bring families together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-emerald-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-400 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => setCurrentPage(link.key)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm font-medium block w-full text-left group"
                  >
                    <i className="fas fa-chevron-right mr-2 text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-400 text-sm">
                  <i className={`${service.icon} text-emerald-400 w-4`}></i>
                  <span>{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-emerald-400 mt-1 text-sm"></i>
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    123 Green Street, Vegetarian Quarter<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-emerald-400 text-sm w-4"></i>
                <a 
                  href="tel:+919876543210" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-emerald-400 text-sm w-4"></i>
                <a 
                  href="mailto:hello@greenspice.com" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  hello@greenspice.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="fas fa-clock text-emerald-400 text-sm w-4"></i>
                <div>
                  <p className="text-gray-400 text-sm">Mon - Sun</p>
                  <p className="text-gray-400 text-sm">11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h5 className="text-sm font-semibold mb-3 text-white">Stay Updated</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-emerald-500 text-white"
                />
                <button className="bg-gradient-to-r from-emerald-500 to-orange-500 px-4 py-2 rounded-r-lg hover:shadow-lg transition-all">
                  <i className="fas fa-paper-plane text-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Green Spice Restaurant. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Sitemap</a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              Made with <i className="fas fa-heart text-red-500"></i> for vegetarian food lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;