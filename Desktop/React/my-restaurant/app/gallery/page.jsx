// app/pages/GalleryPage.jsx
'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';

const GalleryPage = () => {
  const metadata = {
    title: "Gallery - VeggieBite | Photos of Our Dishes & Restaurant Ambiance",
    description: "Browse through our gallery featuring delicious vegetarian dishes, restaurant interior, and happy customers enjoying fresh, healthy food at VeggieBite.",
    img: "/images/veggiebite-gallery.jpg"
  };

  const [activeFilter, setActiveFilter] = useState('all');

  const galleryCategories = [
    { id: 'all', name: 'All Photos', icon: 'fas fa-images' },
    { id: 'dishes', name: 'Our Dishes', icon: 'fas fa-utensils' },
    { id: 'ambiance', name: 'Restaurant', icon: 'fas fa-store' },
    { id: 'events', name: 'Events', icon: 'fas fa-calendar-alt' },
    { id: 'team', name: 'Our Team', icon: 'fas fa-users' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'dishes',
      title: 'Veggie Supreme Burger',
      description: 'Our signature burger with fresh vegetables and herbs'
    },
    {
      id: 2,
      category: 'dishes',
      title: 'Royal Thali',
      description: 'Complete traditional meal with multiple courses'
    },
    {
      id: 3,
      category: 'dishes',
      title: 'Spicy Paneer Wrap',
      description: 'Grilled paneer wrap with fresh vegetables'
    },
    {
      id: 4,
      category: 'ambiance',
      title: 'Main Dining Area',
      description: 'Comfortable seating with modern decor'
    },
    {
      id: 5,
      category: 'ambiance',
      title: 'Kitchen View',
      description: 'Our clean, modern kitchen where magic happens'
    },
    {
      id: 6,
      category: 'dishes',
      title: 'Fresh Juices',
      description: 'Variety of fresh fruit juices and smoothies'
    },
    {
      id: 7,
      category: 'events',
      title: 'Birthday Celebration',
      description: 'Special moments celebrated with our customers'
    },
    {
      id: 8,
      category: 'team',
      title: 'Our Chefs',
      description: 'Dedicated team preparing fresh meals'
    },
    {
      id: 9,
      category: 'dishes',
      title: 'South Indian Combo',
      description: 'Authentic South Indian meal with dosa and sambhar'
    },
    {
      id: 10,
      category: 'ambiance',
      title: 'Outdoor Seating',
      description: 'Al fresco dining experience'
    },
    {
      id: 11,
      category: 'dishes',
      title: 'Snacks Platter',
      description: 'Variety of appetizers and small bites'
    },
    {
      id: 12,
      category: 'events',
      title: 'Corporate Catering',
      description: 'Professional catering for business events'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const heroButtons = [
    {
      text: "Visit Us",
      icon: "fas fa-map-marker-alt",
      primary: true
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

      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Our Gallery"
        subtitle="Take a visual journey through our delicious dishes and warm atmosphere"
        buttons={heroButtons}
        height="h-96"
      />

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visual Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every picture tells a story of fresh ingredients, passionate cooking, and happy customers
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeFilter === category.id
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200'
                }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-green-200 flex items-center justify-center">
                  <i className="fas fa-image text-green-600 text-4xl"></i>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Captured Moments</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-gray-600">Food Photos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Restaurant Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-gray-600">Happy Moments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                <div className="text-gray-600">Events Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Behind the Scenes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a glimpse of what goes into making every meal special
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-40 bg-green-200 rounded-lg mb-4 flex items-center justify-center">
                <i className="fas fa-seedling text-green-600 text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We carefully select the freshest vegetables and ingredients every morning from local suppliers.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-40 bg-orange-200 rounded-lg mb-4 flex items-center justify-center">
                <i className="fas fa-fire text-orange-600 text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Cooking</h3>
              <p className="text-gray-600">
                Our experienced chefs use traditional techniques combined with modern methods for perfect taste.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-40 bg-yellow-200 rounded-lg mb-4 flex items-center justify-center">
                <i className="fas fa-concierge-bell text-yellow-600 text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfect Presentation</h3>
              <p className="text-gray-600">
                Every dish is plated with care and attention to detail, making it as beautiful as it is delicious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Photos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tag us in your food photos and become part of our gallery
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-camera text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Share Your VeggieBite Moments
            </h3>
            <p className="text-gray-600 mb-6">
              Upload your photos on social media and tag us @veggiebite to be featured in our customer gallery
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center text-green-600">
                <i className="fab fa-instagram text-2xl mr-2"></i>
                <span className="font-medium">@veggiebite</span>
              </div>
              <div className="flex items-center text-green-600">
                <i className="fas fa-hashtag text-xl mr-2"></i>
                <span className="font-medium">#VeggieBiteExperience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Hungry After Seeing Our Gallery?"
        subtitle="Come and experience these delicious dishes in person"
        primaryButton={{
          text: "Order Now",
          icon: "fas fa-shopping-cart"
        }}
        secondaryButton={{
          text: "Book a Table",
          icon: "fas fa-calendar-alt"
        }}
        backgroundColor="bg-green-600"
      />

      <Footer />
    </div>
  );
};

export default GalleryPage;