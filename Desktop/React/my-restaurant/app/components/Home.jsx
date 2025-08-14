"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "./HeroSection";
import CTASection from "./CTASection";
import MenuCard from "./MenuCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  const handleNavigation = (path) => {
    router.push(path);
  };

  // ✅ Hero Buttons Array
  const heroButtons = [
    {
      text: "Order Now",
      icon: "fas fa-shopping-cart",
      primary: true,
      onClick: () => handleNavigation("/order"),
    },
    {
      text: "View Menu",
      icon: "fas fa-utensils",
      primary: false,
      onClick: () => handleNavigation("/menu"),
    },
  ];

  // ✅ Features Array
  const features = [
    {
      icon: "fas fa-leaf",
      color: "from-green-400 to-green-600",
      title: "100% Vegetarian",
      desc: "All our dishes are completely vegetarian, made with the finest plant-based ingredients sourced responsibly",
      delay: 100,
    },
    {
      icon: "fas fa-seedling",
      color: "from-orange-400 to-orange-600",
      title: "Fresh Ingredients",
      desc: "We source our vegetables and ingredients fresh daily from local organic farms to ensure quality and nutrition",
      delay: 200,
    },
    {
      icon: "fas fa-heart",
      color: "from-yellow-400 to-amber-500",
      title: "Made with Love",
      desc: "Every dish is prepared with care and passion by our experienced chefs who understand the art of vegetarian cuisine",
      delay: 300,
    },
  ];

  // ✅ Featured Items Array
  const featuredItems = [
    {
      name: "Veggie Supreme Burger",
      description:
        "Grilled patty made from fresh vegetables, quinoa, and herbs with crispy lettuce and tomatoes",
      price: 299,
      category: "fast food",
      isPopular: true,
      isSpicy: false,
    },
    {
      name: "Royal Thali",
      description:
        "Complete traditional meal with dal, sabzi, rice, roti, raita, pickle, and sweet",
      price: 399,
      category: "full meal",
      isPopular: true,
      isSpicy: false,
    },
    {
      name: "Spicy Paneer Wrap",
      description:
        "Grilled paneer with fresh vegetables wrapped in soft tortilla with mint chutney",
      price: 249,
      category: "fast food",
      isPopular: false,
      isSpicy: true,
    },
  ];

  // ✅ Stats Array
  const stats = [
    { value: "500+", label: "Happy Customers" },
    { value: "50+", label: "Menu Items" },
    { value: "5+", label: "Years Experience" },
    { value: "4.8", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Fresh. Healthy. Vegetarian."
        subtitle="Experience the finest vegetarian cuisine crafted with love and fresh ingredients"
        buttons={heroButtons}
        height="h-screen"
        // No decorative bg passed here, so HeroSection stays clean
      />

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose VeggieBite?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to serving you the freshest, healthiest, and most
              delicious vegetarian food
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 justify-center">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="flex-1 group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={f.delay}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${f.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <i className={`${f.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {f.desc}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-full h-1 bg-gradient-to-r ${f.color} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Dishes
            </h2>
            <p className="text-xl text-gray-600">
              Try our most popular and loved dishes
            </p>
          </div>

          <div
            className="flex flex-col md:flex-row gap-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {featuredItems.map((item, index) => (
              <div key={index} className="flex-1">
                <MenuCard item={item} />
              </div>
            ))}
          </div>

          <div
            className="text-center mt-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button
              onClick={() => handleNavigation("/menu")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-utensils mr-2"></i>
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div
            className="flex flex-col md:flex-row gap-8 text-center"
            data-aos="fade-up"
          >
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="flex-1 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl font-bold mb-2">{s.value}</div>
                <div className="text-green-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="flex-1" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2020, VeggieBite started as a small family restaurant
              with a big dream - to serve the most delicious and healthy
              vegetarian food in the city.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Today, we're proud to be serving hundreds of satisfied customers
              every day with our diverse menu ranging from quick bites to
              elaborate traditional meals.
            </p>
            <button
              onClick={() => handleNavigation("/about")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-info-circle mr-2"></i>
              Learn More About Us
            </button>
          </div>
          <div
            className="flex-1 h-96 bg-green-200 rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-left"
          >
            <i className="fas fa-image text-green-600 text-6xl"></i>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
  title="Ready to Experience Amazing Vegetarian Food?"
  subtitle="Order now and taste the difference fresh, quality ingredients make"
  primaryButton={{
    text: "Order Online",
    icon: "fas fa-shopping-cart",
    onClick: () => handleNavigation("/order"),
  }}
  secondaryButton={{
    text: "Book a Table",
    icon: "fas fa-calendar-alt",
    onClick: () => handleNavigation("/reservations"),
  }}
/>

    </div>
  );
};

export default Home;
