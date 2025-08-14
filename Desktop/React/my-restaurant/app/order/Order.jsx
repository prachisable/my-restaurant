"use client";
import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import MealCategoryTabs from "../components/MealCategoryTabs";
import { useCart } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OrderPage() {
  const menuRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");

  const { cart, addToCart, getTotalPrice, getTotalItems, setShowCart } =
    useCart();

  const categories = [
    { id: "all", name: "All Items", icon: "fas fa-utensils" },
    { id: "fast-food", name: "Fast Food", icon: "fas fa-hamburger" },
    { id: "full-meals", name: "Full Meals", icon: "fas fa-plate-wheat" },
    { id: "snacks", name: "Snacks", icon: "fas fa-cookie-bite" },
    { id: "beverages", name: "Beverages", icon: "fas fa-glass-water" },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Veggie Supreme Burger",
      description:
        "Grilled patty made from fresh vegetables, quinoa, and herbs with crispy lettuce and tomatoes",
      price: 299,
      category: "fast-food",
      isPopular: true,
      isSpicy: false,
    },
    {
      id: 2,
      name: "Royal Thali",
      description:
        "Complete traditional meal with dal, sabzi, rice, roti, raita, pickle, and sweet",
      price: 399,
      category: "full-meals",
      isPopular: true,
      isSpicy: false,
    },
    {
      id: 3,
      name: "Spicy Paneer Wrap",
      description:
        "Grilled paneer with fresh vegetables wrapped in soft tortilla with mint chutney",
      price: 249,
      category: "fast-food",
      isPopular: false,
      isSpicy: true,
    },
    {
      id: 4,
      name: "South Indian Combo",
      description:
        "Crispy dosa with sambar, coconut chutney, rice, rasam, and filter coffee",
      price: 349,
      category: "full-meals",
      isPopular: false,
      isSpicy: true,
    },
    {
      id: 5,
      name: "Samosa Chaat",
      description:
        "Crispy samosas topped with yogurt, chutneys, and fresh herbs",
      price: 129,
      category: "snacks",
      isPopular: true,
      isSpicy: true,
    },
    {
      id: 6,
      name: "Fresh Lime Water",
      description: "Refreshing lime juice with mint and black salt",
      price: 89,
      category: "beverages",
      isPopular: true,
      isSpicy: false,
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const heroButtons = [
    {
      text: "Start Ordering",
      icon: "fas fa-shopping-cart",
      primary: true,
      onClick: () => {
        if (menuRef.current) {
          menuRef.current.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
  ];

  const EnhancedMenuCard = ({ item }) => (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
      data-aos="zoom-in"
    >
      <div className="relative">
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: item.image
              ? `url(${item.image})`
              : "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
          }}
        />
        {item.isPopular && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            <i className="fas fa-star mr-1"></i> Popular
          </div>
        )}
        {item.isSpicy && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            <i className="fas fa-fire mr-1"></i> Spicy
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <span className="text-xl font-bold text-green-600">
            ₹{item.price}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <i className="fas fa-tag mr-1"></i>
            <span className="capitalize">
              {item.category.replace("-", " ")}
            </span>
          </div>
          <button
            onClick={() => addToCart(item)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <i className="fas fa-plus mr-1"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <HeroSection
        title="Order Online"
        subtitle="Fresh vegetarian food delivered to your doorstep in just 30 minutes"
        buttons={heroButtons}
        height="h-96"
      />

      {/* Floating Cart */}
      {cart.length > 0 && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg z-40 transition-colors"
        >
          <i className="fas fa-shopping-cart mr-2"></i>
          {getTotalItems()} items • ₹{getTotalPrice()}
        </button>
      )}

      {/* Menu */}
      <section
        ref={menuRef}
        className="py-16 bg-gray-50 flex-grow"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Order Your Favorites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide variety of fresh and delicious vegetarian
              dishes
            </p>
          </div>

          <MealCategoryTabs
            categories={categories}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {filteredItems.map((item) => (
              <EnhancedMenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
