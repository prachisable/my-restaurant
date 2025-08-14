"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";
import MenuCard from "../components/MenuCard";
import MealCategoryTabs from "../components/MealCategoryTabs";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MenuPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
  }, []);

  const categories = [
    { id: "all", name: "All Items", icon: "fas fa-utensils", description: "" },
    {
      id: "fast-food",
      name: "Fast Food",
      icon: "fas fa-hamburger",
      description: "",
    },
    {
      id: "full-meals",
      name: "Full Meals",
      icon: "fas fa-plate-wheat",
      description: "",
    },
    {
      id: "snacks",
      name: "Snacks",
      icon: "fas fa-cookie-bite",
      description: "",
    },
    {
      id: "beverages",
      name: "Beverages",
      icon: "fas fa-glass-water",
      description: "",
    },
  ];

  const menuItems = [
    // shortened for brevity — use your existing array
    {
      id: 1,
      name: "Veggie Supreme Burger",
      description: "...",
      price: 299,
      category: "fast-food",
      isPopular: true,
      isSpicy: false,
    },
    {
      id: 2,
      name: "Spicy Paneer Wrap",
      description: "...",
      price: 249,
      category: "fast-food",
      isPopular: false,
      isSpicy: true,
    },
    // ... rest of your menu items ...
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const heroButtons = [
    {
      text: "Order Now",
      icon: "fas fa-shopping-cart",
      primary: true,
      onClick: () => (window.location.href = "/order"), // ✅ link
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Delicious Menu"
        subtitle="Explore our wide variety of fresh and healthy vegetarian dishes"
        buttons={heroButtons}
        height="h-96"
      />

      {/* Menu Section */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Favorites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quick bites to complete meals, we have something delicious
              for everyone
            </p>
          </div>

          {/* Category Tabs */}
          <MealCategoryTabs
            categories={categories}
            onCategoryChange={setActiveCategory}
          />

          {/* Menu Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {filteredItems.map((item) => (
              <div key={item.id} data-aos="zoom-in" data-aos-delay="150">
                <MenuCard item={item} />
              </div>
            ))}
          </div>

          {/* Special Offers */}
          <div
            className="mt-16 bg-white rounded-lg shadow-md p-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <i className="fas fa-star text-yellow-400 mr-2"></i>
                Special Offers
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg p-6 bg-green-50" data-aos="fade-right">
                <h4 className="text-lg font-semibold text-green-800 mb-2">
                  <i className="fas fa-percentage mr-2"></i>
                  Lunch Special
                </h4>
                <p className="text-green-700 mb-3">
                  Get 20% off on all thali meals between 12 PM - 3 PM
                </p>
                <span className="text-sm text-green-600 font-medium">
                  Valid Monday to Friday
                </span>
              </div>

              <div className="rounded-lg p-6 bg-orange-50" data-aos="fade-left">
                <h4 className="text-lg font-semibold text-orange-800 mb-2">
                  <i className="fas fa-users mr-2"></i>
                  Family Pack
                </h4>
                <p className="text-orange-700 mb-3">
                  Order for 4 or more people and get free delivery + dessert
                </p>
                <span className="text-sm text-orange-600 font-medium">
                  Minimum order ₹1200
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Love What You See?"
        subtitle="Order your favorite dishes now and enjoy fresh vegetarian food delivered to your doorstep"
        primaryButton={{
          text: "Order Online",
          icon: "fas fa-shopping-cart",
          onClick: () => (window.location.href = "/order"), // ✅
        }}
        secondaryButton={{
          text: "Call to Order",
          icon: "fas fa-phone",
          onClick: () => (window.location.href = "tel:+15551234567"), // ✅
        }}
        backgroundColor="bg-green-600"
      />
    </div>
  );
}
