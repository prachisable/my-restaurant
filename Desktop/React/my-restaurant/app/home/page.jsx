// app/pages/home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import MenuCard from '../components/MenuCard';

const home = () => {
  const metadata = {
    title: "VeggieBite - Premium Vegetarian Restaurant | Fresh & Healthy Food",
    description: "Experience the finest vegetarian cuisine at VeggieBite. From fast food favorites to traditional meals, we serve fresh, healthy, and delicious vegetarian dishes.",
    img: "/images/veggiebite-hero.jpg"
  };

  const heroButtons = [
    {
      text: "Order Now",
      icon: "fas fa-shopping-cart",
      primary: true
    },
    {
      text: "View Menu",
      icon: "fas fa-utensils",
      primary: false
    }
  ];

  const featuredItems = [
    {
      name: "Veggie Supreme Burger",
      description: "Grilled patty made from fresh vegetables, quinoa, and herbs with crispy lettuce and tomatoes",
      price: 299,
      category: "fast food",
      isPopular: true,
      isSpicy: false
    },
    {
      name: "Royal Thali",
      description: "Complete traditional meal with dal, sabzi, rice, roti, raita, pickle, and sweet",
      price: 399,
      category: "full meal",
      isPopular: true,
      isSpicy: false
    },
    {
      name: "Spicy Paneer Wrap",
      description: "Grilled paneer with fresh vegetables wrapped in soft tortilla with mint chutney",
      price: 249,
      category: "fast food",
      isPopular: false,
      isSpicy: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Metadata for SEO */}
      <div style={{display: 'none'}}>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content={metadata.img} />
      </div>

      {/* Hero Section */}
      <HeroSection
        title="Fresh. Healthy. Vegetarian."
        subtitle="Experience the finest vegetarian cuisine crafted with love and fresh ingredients"
        buttons={heroButtons}
        height="h-screen"
      />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose VeggieBite?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to serving you the freshest, healthiest, and most delicious vegetarian food
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-leaf text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Vegetarian</h3>
              <p className="text-gray-600">
                All our dishes are completely vegetarian, made with the finest plant-based ingredients
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-seedling text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We source our vegetables and ingredients fresh daily from local organic farms
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Made with Love</h3>
              <p className="text-gray-600">
                Every dish is prepared with care and passion by our experienced chefs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Dishes
            </h2>
            <p className="text-xl text-gray-600">
              Try our most popular and loved dishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <MenuCard key={index} item={item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              <i className="fas fa-utensils mr-2"></i>
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Menu Items</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-green-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, VeggieBite started as a small family restaurant with a big dream - 
                to serve the most delicious and healthy vegetarian food in the city.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we're proud to be serving hundreds of satisfied customers every day with our 
                diverse menu ranging from quick bites to elaborate traditional meals.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                <i className="fas fa-info-circle mr-2"></i>
                Learn More About Us
              </button>
            </div>
            <div className="h-96 bg-green-200 rounded-lg flex items-center justify-center">
              <i className="fas fa-image text-green-600 text-6xl"></i>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Experience Amazing Vegetarian Food?"
        subtitle="Order now and taste the difference fresh, quality ingredients make"
        primaryButton={{
          text: "Order Online",
          icon: "fas fa-shopping-cart"
        }}
        secondaryButton={{
          text: "Book a Table",
          icon: "fas fa-calendar-alt"
        }}
        backgroundColor="bg-green-600"
      />

    </div>
  );
};

export default home;