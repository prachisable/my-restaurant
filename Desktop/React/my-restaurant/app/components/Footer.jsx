"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Dine-in Experience", icon: "fas fa-utensils" },
    { name: "Online Ordering", icon: "fas fa-laptop" },
    { name: "Catering Services", icon: "fas fa-concierge-bell" },
    { name: "Private Events", icon: "fas fa-calendar-alt" },
    { name: "Takeaway", icon: "fas fa-shopping-bag" },
    { name: "Corporate Lunch", icon: "fas fa-building" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-orange-500 p-3 rounded-xl shadow-lg">
                <i className="fas fa-leaf text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Green Spice</h3>
                <p className="text-sm text-gray-400 font-medium">
                  PURE VEGETARIAN
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experience the finest vegetarian cuisine crafted with love, fresh
              ingredients, and traditional recipes that bring families together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                className="bg-gray-800 hover:bg-emerald-600 p-3 rounded-lg transition"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="bg-gray-800 hover:bg-blue-400 p-3 rounded-lg transition"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition"
              >
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm block"
                  >
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-gray-400 text-sm"
                >
                  <i className={`${service.icon} text-emerald-400 w-4`}></i>
                  <span>{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p>
                123 Green Street, Vegetarian Quarter
                <br /> Mumbai, Maharashtra 400001
              </p>
              <p>
                <a href="tel:+919876543210" className="hover:text-emerald-400">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@greenspice.com"
                  className="hover:text-emerald-400"
                >
                  hello@greenspice.com
                </a>
              </p>
              <p>Mon - Sun: 11:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Green Spice Restaurant. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-emerald-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-emerald-400">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-emerald-400">
                Sitemap
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              Made with <i className="fas fa-heart text-red-500"></i> for
              vegetarian food lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
