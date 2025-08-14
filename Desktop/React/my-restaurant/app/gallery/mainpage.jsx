"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GalleryPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
  }, []);

  const [activeFilter, setActiveFilter] = useState("all");

  const galleryCategories = [
    { id: "all", name: "All Photos", icon: "fas fa-images" },
    { id: "dishes", name: "Our Dishes", icon: "fas fa-utensils" },
    { id: "ambiance", name: "Restaurant", icon: "fas fa-store" },
    { id: "events", name: "Events", icon: "fas fa-calendar-alt" },
    { id: "team", name: "Our Team", icon: "fas fa-users" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "dishes",
      title: "Veggie Supreme Burger",
      img: "/images/gallery/dish1.jpg",
    },
    {
      id: 2,
      category: "dishes",
      title: "Royal Thali",
      img: "/images/gallery/dish2.jpg",
    },
    {
      id: 3,
      category: "dishes",
      title: "Spicy Paneer Wrap",
      img: "/images/gallery/dish3.jpg",
    },
    {
      id: 4,
      category: "ambiance",
      title: "Main Dining Area",
      img: "/images/gallery/ambiance1.jpg",
    },
    {
      id: 5,
      category: "ambiance",
      title: "Kitchen View",
      img: "/images/gallery/ambiance2.jpg",
    },
    {
      id: 6,
      category: "dishes",
      title: "Fresh Juices",
      img: "/images/gallery/dish4.jpg",
    },
    {
      id: 7,
      category: "events",
      title: "Birthday Celebration",
      img: "/images/gallery/event1.jpg",
    },
    {
      id: 8,
      category: "team",
      title: "Our Chefs",
      img: "/images/gallery/team1.jpg",
    },
    {
      id: 9,
      category: "dishes",
      title: "South Indian Combo",
      img: "/images/gallery/dish5.jpg",
    },
    {
      id: 10,
      category: "ambiance",
      title: "Outdoor Seating",
      img: "/images/gallery/ambiance3.jpg",
    },
    {
      id: 11,
      category: "dishes",
      title: "Snacks Platter",
      img: "/images/gallery/dish6.jpg",
    },
    {
      id: 12,
      category: "events",
      title: "Corporate Catering",
      img: "/images/gallery/event2.jpg",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const heroButtons = [
    {
      text: "Visit Us",
      icon: "fas fa-map-marker-alt",
      primary: true,
      onClick: () => {
        window.open("https://www.google.com/maps/place/VeggieBite", "_blank");
      },
    },
  ];

  // Carousel images example (top of gallery)
  const carouselImages = [
    "/images/gallery/carousel1.jpg",
    "/images/gallery/carousel2.jpg",
    "/images/gallery/carousel3.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title="Our Gallery"
        subtitle="Take a visual journey through our delicious dishes and warm atmosphere"
        buttons={heroButtons}
        height="h-96"
      />

      {/* Carousel */}
      <section className="relative bg-gray-100" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={carouselImages[currentSlide]}
              alt={`Slide ${currentSlide}`}
              className="w-full h-96 object-cover transition-all duration-700"
            />
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeFilter === category.id
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200"
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
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                data-aos="zoom-in"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Hungry After Seeing Our Gallery?"
        subtitle="Come and experience these delicious dishes in person"
        primaryButton={{
          text: "Order Now",
          icon: "fas fa-shopping-cart",
          onClick: () => (window.location.href = "/order"),
        }}
        secondaryButton={{
          text: "Book a Table",
          icon: "fas fa-calendar-alt",
          onClick: () => (window.location.href = "/reservations"),
        }}
        backgroundColor="bg-green-600"
      />
    </div>
  );
}
