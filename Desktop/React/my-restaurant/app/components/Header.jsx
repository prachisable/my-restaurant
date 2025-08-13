"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext"; // Import the cart hook

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    cart,
    showCart,
    setShowCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart();

  // ✅ Lock body scroll when cart is open
  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showCart]);

  // WhatsApp order sender
  const sendWhatsAppOrder = () => {
    if (cart.length === 0) return;
    let message = "🍽️ *New Order from VeggieBite*\n\n";
    cart.forEach((item) => {
      message += `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}\n`;
    });
    message += `\n💰 *Total Amount: ₹${getTotalPrice()}*\n`;
    message += `📦 *Total Items: ${getTotalItems()}*\n\n`;
    message += "Please confirm my order. Thank you!";
    const phoneNumber = "919876543210";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    clearCart();
    setShowCart(false);
  };

  return (
    <>
      {/* HEADER NAVBAR */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-green-700">VeggieBite</h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex space-x-8">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/menu" className="nav-link">Menu</Link>
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/gallery" className="nav-link">Gallery</Link>
                <Link href="/reviews" className="nav-link">Reviews</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
              </div>
            </nav>

            {/* Right Side - Cart Icon & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setShowCart(true)}
                className="relative p-2 text-gray-700 hover:text-green-600 transition"
              >
                <i className="fas fa-shopping-cart text-xl"></i>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              <Link href="/order">
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-medium">
                  Order Now
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={() => setShowCart(true)}
                className="relative p-2 text-gray-700 hover:text-green-600 transition"
              >
                <i className="fas fa-shopping-cart text-xl"></i>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-green-600 p-2 rounded-md"
              >
                <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            {["/", "/menu", "/about", "/gallery", "/reviews", "/contact"].map(
              (path, idx) => (
                <Link
                  key={idx}
                  href={path}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-green-600"
                >
                  {path === "/"
                    ? "Home"
                    : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              )
            )}
            <div className="px-3 py-2">
              <Link href="/order">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* SLIDE-IN CART SIDEBAR with Glassmorphism */}
      {showCart && (
        <div className="fixed inset-0 flex z-50">
          {/* Glass overlay */}
          <div
            className="flex-1 bg-white/10 backdrop-blur-sm"
            onClick={() => setShowCart(false)}
          ></div>

          {/* Sidebar */}
          <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-lg transform translate-x-0 transition-transform p-6 overflow-y-auto flex flex-col">
            {/* Cart Header */}
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-xl font-bold flex items-center text-green-700">
                <i className="fas fa-shopping-cart mr-2"></i> Your Cart
              </h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 mt-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center text-gray-500">Your cart is empty.</div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-500">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 ml-2"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Summary */}
            {cart.length > 0 && (
              <div className="border-t pt-4 mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Total Items:</span>
                  <span>{getTotalItems()}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total Price:</span>
                  <span>₹{getTotalPrice()}</span>
                </div>
              </div>
            )}

            {/* Actions */}
            {cart.length > 0 && (
              <div className="mt-4 space-y-2">
                <button
                  onClick={sendWhatsAppOrder}
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  <span>Order via WhatsApp</span>
                </button>
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-lg"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tailwind styles for nav link */}
      <style jsx>{`
        .nav-link {
          @apply text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium;
        }
      `}</style>
    </>
  );
};

export default Header;
