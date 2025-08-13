"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-green-700">VeggieBite</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Home</Link>
              <Link href="/menu" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Menu</Link>
              <Link href="/about" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">About</Link>
              <Link href="/gallery" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Gallery</Link>
              <Link href="/reviews" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Reviews</Link>
              <Link href="/contact" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Contact</Link>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/order">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium">Order Now</button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-green-600 inline-flex items-center justify-center p-2 rounded-md"
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">Home</Link>
            <Link href="/menu" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">Menu</Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">About</Link>
            <Link href="/gallery" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">Gallery</Link>
            <Link href="/reviews" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">Reviews</Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600">Contact</Link>
            <div className="px-3 py-2">
              <Link href="/order">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium">Order Now</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
