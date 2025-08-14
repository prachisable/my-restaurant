"use client";
import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";
import TestimonialCard from "../components/TestimonialCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ReviewsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
  }, []);

  const reviewSectionRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 9;

  const testimonials = [
    /* --- your same testimonials array --- */
  ];

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const startIndex = (currentPage - 1) * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  const heroButtons = [
    {
      text: "Share Your Experience",
      icon: "fas fa-star",
      primary: true,
      onClick: () => {
        if (reviewSectionRef.current) {
          reviewSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
  ];

  const ratingBreakdown = {
    5: testimonials.filter((t) => t.rating === 5).length,
    4: testimonials.filter((t) => t.rating === 4).length,
    3: testimonials.filter((t) => t.rating === 3).length,
    2: testimonials.filter((t) => t.rating === 2).length,
    1: testimonials.filter((t) => t.rating === 1).length,
  };

  const renderStars = (rating) =>
    [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`fas fa-star ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      ></i>
    ));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Customer Reviews"
        subtitle="Hear what our satisfied customers have to say about their VeggieBite experience"
        buttons={heroButtons}
        height="h-96"
      />

      {/* Overall Rating */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">
                  {averageRating}
                </div>
                <div className="flex justify-center space-x-1 mb-2">
                  {renderStars(Math.round(parseFloat(averageRating)))}
                </div>
                <p className="text-gray-600">
                  Based on {testimonials.length} reviews
                </p>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Rating Breakdown
                </h3>
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center mb-2">
                    <span className="text-sm text-gray-600 w-8">{stars}</span>
                    <i className="fas fa-star text-yellow-400 mr-2"></i>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{
                          width: `${
                            (ratingBreakdown[stars] / testimonials.length) * 100
                          }%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8">
                      {ratingBreakdown[stars]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from real customers who love our vegetarian cuisine
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={startIndex + index}
                testimonial={testimonial}
                data-aos="zoom-in"
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-white border text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-green-600 text-white"
                      : "bg-white border text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-white border text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Customers Love Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-utensils",
                color: "bg-green-100 text-green-600",
                title: "Delicious Food",
                desc: '"Fresh ingredients and amazing flavors in every dish"',
              },
              {
                icon: "fas fa-smile",
                color: "bg-orange-100 text-orange-600",
                title: "Great Service",
                desc: '"Friendly staff and excellent customer service"',
              },
              {
                icon: "fas fa-dollar-sign",
                color: "bg-yellow-100 text-yellow-600",
                title: "Great Value",
                desc: '"Reasonable prices for high-quality vegetarian food"',
              },
            ].map((h, idx) => (
              <div
                className="text-center p-6 bg-gray-50 rounded-lg"
                key={idx}
                data-aos="zoom-in"
              >
                <div
                  className={`w-16 h-16 ${
                    h.color.split(" ")[0]
                  } rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <i
                    className={`${h.icon} ${h.color.split(" ")[1]} text-2xl`}
                  ></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {h.title}
                </h3>
                <p className="text-gray-600">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Write a Review */}
      <section
        className="py-16 bg-gray-50"
        ref={reviewSectionRef}
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Have you dined at VeggieBite? We'd love to hear about your
              experience!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div
                className="flex items-center justify-center space-x-2 text-blue-600 cursor-pointer"
                onClick={() => window.open("https://goo.gl/maps", "_blank")}
              >
                <i className="fab fa-google text-2xl"></i>
                <span className="font-medium">Google Reviews</span>
              </div>
              <div
                className="flex items-center justify-center space-x-2 text-red-600 cursor-pointer"
                onClick={() => window.open("https://www.zomato.com", "_blank")}
              >
                <i className="fas fa-utensils text-2xl"></i>
                <span className="font-medium">Zomato</span>
              </div>
              <div
                className="flex items-center justify-center space-x-2 text-green-600 cursor-pointer"
                onClick={() =>
                  window.open("https://www.facebook.com", "_blank")
                }
              >
                <i className="fab fa-facebook text-2xl"></i>
                <span className="font-medium">Facebook</span>
              </div>
            </div>
            <button
              onClick={() => window.open("https://goo.gl/maps", "_blank")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <i className="fas fa-star mr-2"></i>
              Write a Review
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Create Your Own Review?"
        subtitle="Visit us today and experience the delicious food that our customers can't stop talking about"
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
