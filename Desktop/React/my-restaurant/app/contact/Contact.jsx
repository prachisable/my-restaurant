"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";
import ContactForm from "../components/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const heroButtons = [
    {
      text: "Call Now",
      icon: "fas fa-phone",
      primary: true,
      onClick: () => {
        window.location.href = "tel:+15551234567"; // ✅ Opens phone dialer
      },
    },
  ];

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Visit Us",
      details: ["123 Green Street", "Veggie City, VC 12345", "Near City Mall"],
    },
    {
      icon: "fas fa-phone",
      title: "Call Us",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 123-4568",
        "Toll Free: 1800-VEGGIE",
      ],
    },
    {
      icon: "fas fa-envelope",
      title: "Email Us",
      details: [
        "info@veggiebite.com",
        "orders@veggiebite.com",
        "catering@veggiebite.com",
      ],
    },
    {
      icon: "fas fa-clock",
      title: "Opening Hours",
      details: ["Monday - Sunday", "9:00 AM - 10:00 PM", "Last order: 9:30 PM"],
    },
  ];

  const services = [
    {
      icon: "fas fa-utensils",
      title: "Dine-In",
      description: "Enjoy our cozy restaurant ambiance with family and friends",
    },
    {
      icon: "fas fa-motorcycle",
      title: "Home Delivery",
      description: "Fast delivery within 5km radius. Free delivery above ₹300",
    },
    {
      icon: "fas fa-shopping-bag",
      title: "Takeaway",
      description: "Quick pickup service. Order online or call ahead",
    },
    {
      icon: "fas fa-users",
      title: "Catering",
      description:
        "Special catering services for parties, events, and corporate functions",
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Table Reservation",
      description: "Book your table in advance for special occasions",
    },
    {
      icon: "fas fa-gift",
      title: "Private Events",
      description: "Host your special celebrations in our private dining area",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Get In Touch"
        subtitle="We'd love to hear from you. Contact us for reservations, catering, or any inquiries"
        buttons={heroButtons}
        height="h-96"
      />

      {/* Contact Information Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${info.icon} text-green-600 text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <ContactForm />
            </div>

            {/* Map Placeholder */}
            <div data-aos="fade-left">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Find Us Here
                </h3>
                <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <i className="fas fa-map-marked-alt text-gray-400 text-6xl mb-4"></i>
                    <p className="text-gray-600">Interactive Map Location</p>
                    <p className="text-gray-500 text-sm">
                      123 Green Street, Veggie City
                    </p>
                  </div>
                </div>

                {/* Directions */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-car text-green-600 mr-3"></i>
                    <span>5 minutes from City Mall</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-subway text-green-600 mr-3"></i>
                    <span>2 minutes walk from Green Street Metro Station</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-parking text-green-600 mr-3"></i>
                    <span>Free parking available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer multiple convenient ways to enjoy our delicious food
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-green-600 text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              [
                "Do you take table reservations?",
                "Yes, we accept table reservations. Call us or book online.",
              ],
              [
                "What is your delivery area and charges?",
                "We deliver within 5km. Free delivery above ₹300, else ₹30 applies.",
              ],
              [
                "Do you cater for large events?",
                "Yes, contact us at least 24hrs in advance for event catering.",
              ],
              [
                "Are all your dishes vegetarian?",
                "Yes, we use strictly plant-based ingredients.",
              ],
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none"
                >
                  <span className="text-lg font-semibold text-gray-900 flex items-center">
                    <i className="fas fa-question-circle text-green-600 mr-2"></i>
                    {faq[0]}
                  </span>
                  <i
                    className={`fas text-green-600 transition-transform duration-300 ${
                      openIndex === idx ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                  ></i>
                </button>

                {/* Answer */}
                {openIndex === idx && (
                  <div className="px-6 pb-4 text-gray-600 ">{faq[1]}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with onClick */}
      <CTASection
        title="Ready to Visit Us?"
        subtitle="Come and experience our warm hospitality and delicious vegetarian cuisine"
        primaryButton={{
          text: "Book a Table",
          icon: "fas fa-calendar-alt",
          onClick: () => {
            window.location.href = "/reservations"; // ✅ Navigates to Reservations page
          },
        }}
        secondaryButton={{
          text: "Order Online",
          icon: "fas fa-shopping-cart",
          onClick: () => {
            window.location.href = "/order"; // ✅ Navigates to Order page
          },
        }}
        backgroundColor="bg-green-600"
      />
    </div>
  );
}
