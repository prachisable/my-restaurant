"use client";
import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const heroButtons = [
    {
      text: "Visit Us",
      icon: "fas fa-map-marker-alt",
      primary: true,
      onClick: () => {
        // Open your location in a new Google Maps tab
        window.open(
          "https://www.google.com/maps/place/VeggieBite", // <- replace with your exact map link
          "_blank"
        );
      },
    },
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Head Chef",
      experience: "15+ years",
      specialty: "Traditional Indian Cuisine",
    },
    {
      name: "Priya Sharma",
      role: "Sous Chef",
      experience: "8+ years",
      specialty: "Fast Food & Fusion",
    },
    {
      name: "Amit Patel",
      role: "Restaurant Manager",
      experience: "10+ years",
      specialty: "Customer Service",
    },
  ];

  const values = [
    {
      icon: "fas fa-leaf",
      title: "100% Vegetarian",
      description:
        "We are committed to serving only vegetarian food, respecting all life forms and promoting a sustainable lifestyle.",
    },
    {
      icon: "fas fa-seedling",
      title: "Fresh Ingredients",
      description:
        "We source our vegetables and ingredients fresh daily from local organic farms to ensure quality and taste.",
    },
    {
      icon: "fas fa-heart",
      title: "Made with Love",
      description:
        "Every dish is prepared with care, passion, and attention to detail by our experienced chefs.",
    },
    {
      icon: "fas fa-handshake",
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We strive to provide exceptional service and memorable dining experiences.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="About VeggieBite"
        subtitle="Serving fresh, healthy, and delicious vegetarian food since 2020"
        buttons={heroButtons}
        height="h-96"
      />

      {/* Our Story */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  VeggieBite was born from a simple dream - to create a place
                  where vegetarian food is not just an alternative, but the star
                  of the show. Founded in 2020 by food enthusiasts who believed
                  in the power of plant-based cuisine.
                </p>
                <p>
                  What started as a small family restaurant has grown into a
                  beloved dining destination, serving hundreds of satisfied
                  customers daily. Our journey has been fueled by the positive
                  response from our community and our unwavering commitment to
                  quality.
                </p>
                <p>
                  Today, we're proud to offer a diverse menu that ranges from
                  quick street food favorites to elaborate traditional meals,
                  all made with the freshest ingredients and prepared with love
                  and care.
                </p>
              </div>
            </div>
            <div
              className="h-96 bg-green-200 rounded-lg flex items-center justify-center"
              data-aos="zoom-in"
            >
              <i className="fas fa-store text-green-600 text-8xl"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className="bg-white rounded-lg p-8 shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bullseye text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-center">
              To serve the finest vegetarian cuisine while promoting healthy
              eating habits, supporting local farmers, and creating a positive
              impact on our community and environment.
            </p>
          </div>

          <div
            className="bg-white rounded-lg p-8 shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-eye text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-center">
              To become the leading vegetarian restaurant chain, known for
              exceptional quality, innovative dishes, and outstanding service.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            The principles that guide us in everything we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-green-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            The passionate people behind your delicious meals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user text-green-600 text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-1">
                  Experience: {member.experience}
                </p>
                <p className="text-gray-500 text-sm">
                  Specialty: {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We're honored to be recognized for our commitment to quality and
            service
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-trophy",
                color: "bg-yellow-100",
                title: "Best Vegetarian Restaurant",
                desc: "City Food Awards 2023",
              },
              {
                icon: "fas fa-star",
                color: "bg-green-100",
                title: "4.8 Star Rating",
                desc: "Google Reviews & Zomato",
              },
              {
                icon: "fas fa-certificate",
                color: "bg-blue-100",
                title: "Hygiene Excellence",
                desc: "Food Safety Authority 2024",
              },
            ].map((award, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                style={{ backgroundColor: award.color.replace("bg-", "") }}
              >
                <div
                  className={`w-16 h-16 ${award.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <i className={`${award.icon} text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-600 text-sm">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Experience VeggieBite?"
        subtitle="Visit us today and taste the difference that fresh, quality ingredients and passionate cooking make"
        primaryButton={{
          text: "Visit Our Restaurant",
          icon: "fas fa-map-marker-alt",
          onClick: () => {
            // Open Google Maps location or navigate to a page
            window.open(
              "https://www.google.com/maps/place/VeggieBite",
              "_blank"
            );
          },
        }}
        secondaryButton={{
          text: "Contact Us",
          icon: "fas fa-phone",
          onClick: () => {
            // Open phone dialer
            window.location.href = "tel:+15551234567";
          },
        }}
        backgroundColor="bg-green-600"
      />
    </div>
  );
}
