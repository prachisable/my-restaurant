// app/pages/MenuPage.jsx
'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import MenuCard from '../components/MenuCard';
import MealCategoryTabs from '../components/MealCategoryTabs';

const MenuPage = () => {
  const metadata = {
    title: "Our Menu - VeggieBite | Vegetarian Fast Food & Traditional Meals",
    description: "Explore our extensive menu of vegetarian fast food, traditional thalis, snacks, and beverages. Fresh, healthy, and delicious options for every taste.",
    img: "/images/veggiebite-menu.jpg"
  };

  const categories = [
    {
      id: 'all',
      name: 'All Items',
      icon: 'fas fa-utensils',
      description: 'Browse our complete menu of delicious vegetarian dishes'
    },
    {
      id: 'fast-food',
      name: 'Fast Food',
      icon: 'fas fa-hamburger',
      description: 'Quick bites and street food favorites made with fresh ingredients'
    },
    {
      id: 'full-meals',
      name: 'Full Meals',
      icon: 'fas fa-plate-wheat',
      description: 'Complete traditional meals with multiple courses'
    },
    {
      id: 'snacks',
      name: 'Snacks',
      icon: 'fas fa-cookie-bite',
      description: 'Light bites and appetizers perfect for any time'
    },
    {
      id: 'beverages',
      name: 'Beverages',
      icon: 'fas fa-glass-water',
      description: 'Refreshing drinks, juices, and traditional beverages'
    }
  ];

  const menuItems = [
    // Fast Food Items
    {
      name: "Veggie Supreme Burger",
      description: "Grilled patty made from fresh vegetables, quinoa, and herbs with crispy lettuce, tomatoes, and special sauce",
      price: 299,
      category: "fast-food",
      isPopular: true,
      isSpicy: false
    },
    {
      name: "Spicy Paneer Wrap",
      description: "Grilled paneer with fresh vegetables wrapped in soft tortilla with mint chutney and spicy sauce",
      price: 249,
      category: "fast-food",
      isPopular: false,
      isSpicy: true
    },
    {
      name: "Crispy Veggie Pizza",
      description: "Wood-fired pizza with fresh vegetables, mozzarella cheese, and herbs on thin crust",
      price: 399,
      category: "fast-food",
      isPopular: true,
      isSpicy: false
    },
    {
      name: "Masala Fries",
      description: "Golden crispy fries tossed with special Indian spices and served with tangy sauce",
      price: 149,
      category: "fast-food",
      isPopular: false,
      isSpicy: true
    },
    {
      name: "Veggie Club Sandwich",
      description: "Triple layer sandwich with grilled vegetables, cheese, and fresh herbs",
      price: 229,
      category: "fast-food",
      isPopular: false,
      isSpicy: false
    },

    // Full Meals
    {
      name: "Royal Thali",
      description: "Complete traditional meal with dal, sabzi, rice, roti, raita, pickle, papad, and sweet",
      price: 399,
      category: "full-meals",
      isPopular: true,
      isSpicy: false
    },
    {
      name: "Punjabi Thali",
      description: "Authentic Punjabi meal with rajma, aloo gobi, rice, naan, lassi, and gulab jamun",
      price: 449,
      category: "full-meals",
      isPopular: true,
      isSpicy: true
    },
    {
      name: "South Indian Combo",
      description: "Crispy dosa with sambar, coconut chutney, rice, rasam, and filter coffee",
      price: 349,
      category: "full-meals",
      isPopular: false,
      isSpicy: true
    },
    {
      name: "Special Biryani Meal",
      description: "Fragrant vegetable biryani with raita, shorba, and roasted papad",
      price: 379,
      category: "full-meals",
      isPopular: true,
      isSpicy: false
    },

    // Snacks
    {
      name: "Samosa Chaat",
      description: "Crispy samosas topped with yogurt, chutneys, and fresh herbs",
      price: 129,
      category: "snacks",
      isPopular: true,
      isSpicy: true
    },
    {
      name: "Paneer Tikka",
      description: "Grilled cottage cheese cubes marinated in spices and herbs",
      price: 199,
      category: "snacks",
      isPopular: false,
      isSpicy: true
    },
    {
      name: "Veg Spring Rolls",
      description: "Crispy rolls filled with fresh vegetables served with sweet chili sauce",
      price: 159,
      category: "snacks",
      isPopular: false,
      isSpicy: false
    },
    {
      name: "Aloo Tikki Burger",
      description: "Spiced potato patty with onions, tomatoes, and mint chutney",
      price: 179,
      category: "snacks",
      isPopular: true,
      isSpicy: true
    },

    // Beverages
    {
      name: "Fresh Lime Water",
      description: "Refreshing lime juice with mint and black salt",
      price: 89,
      category: "beverages",
      isPopular: true,
      isSpicy: false
    },
    {
      name: "Mango Lassi",
      description: "Creamy yogurt drink blended with fresh mango pulp",
      price: 119,
      category: "beverages",
      isPopular: true,
      isSpicy: false
    },
    {
      name: "Masala Chai",
      description: "Traditional Indian spiced tea brewed with aromatic spices",
      price: 49,
      category: "beverages",
      isPopular: false,
      isSpicy: true
    },
    {
      name: "Fresh Juice",
      description: "Seasonal fresh fruit juices - orange, apple, or mixed fruit",
      price: 99,
      category: "beverages",
      isPopular: false,
      isSpicy: false
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const heroButtons = [
    {
      text: "Order Now",
      icon: "fas fa-shopping-cart",
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
        title="Our Delicious Menu"
        subtitle="Explore our wide variety of fresh and healthy vegetarian dishes"
        buttons={heroButtons}
        height="h-96"
      />

      {/* Menu Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Favorites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quick bites to complete meals, we have something delicious for everyone
            </p>
          </div>

          {/* Category Tabs */}
          <MealCategoryTabs 
            categories={categories} 
            onCategoryChange={setActiveCategory} 
          />

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <MenuCard key={index} item={item} />
            ))}
          </div>

          {/* Special Offers */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <i className="fas fa-star text-yellow-400 mr-2"></i>
                Special Offers
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                <h4 className="text-lg font-semibold text-green-800 mb-2">
                  <i className="fas fa-percentage mr-2"></i>
                  Lunch Special
                </h4>
                <p className="text-green-700 mb-3">
                  Get 20% off on all thali meals between 12 PM - 3 PM
                </p>
                <span className="text-sm text-green-600 font-medium">Valid Monday to Friday</span>
              </div>

              <div className="border border-orange-200 rounded-lg p-6 bg-orange-50">
                <h4 className="text-lg font-semibold text-orange-800 mb-2">
                  <i className="fas fa-users mr-2"></i>
                  Family Pack
                </h4>
                <p className="text-orange-700 mb-3">
                  Order for 4 or more people and get free delivery + dessert
                </p>
                <span className="text-sm text-orange-600 font-medium">Minimum order ₹1200</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Love What You See?"
        subtitle="Order your favorite dishes now and enjoy fresh vegetarian food delivered to your doorstep"
        primaryButton={{
          text: "Order Online",
          icon: "fas fa-shopping-cart"
        }}
        secondaryButton={{
          text: "Call to Order",
          icon: "fas fa-phone"
        }}
        backgroundColor="bg-green-600"
      />

      <Footer />
    </div>
  );
};

export default MenuPage;