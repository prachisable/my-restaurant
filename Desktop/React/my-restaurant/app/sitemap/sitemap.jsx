"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Sitemap = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("main-pages");

  const sitePages = [
    {
      id: "main-pages",
      category: "Main Pages",
      icon: "fas fa-home",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      hoverColor: "hover:bg-green-100",
      pages: [
        {
          name: "Home",
          url: "/",
          description: "Welcome to VeggieBite - Fresh vegetarian cuisine",
          icon: "fas fa-home",
        },
        {
          name: "Menu",
          url: "/menu",
          description: "Browse our delicious vegetarian dishes",
          icon: "fas fa-utensils",
        },
        {
          name: "About Us",
          url: "/about",
          description: "Learn about our story and mission",
          icon: "fas fa-info-circle",
        },
        {
          name: "Contact",
          url: "/contact",
          description: "Get in touch with us",
          icon: "fas fa-phone",
        },
      ],
    },
    {
      id: "services",
      category: "Services",
      icon: "fas fa-utensils",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverColor: "hover:bg-orange-100",
      pages: [
        {
          name: "Order Online",
          url: "/order",
          description: "Place your order for delivery or pickup",
          icon: "fas fa-shopping-cart",
        },
        {
          name: "Reservations",
          url: "/reservations",
          description: "Book a table at our restaurant",
          icon: "fas fa-calendar-alt",
        },
        {
          name: "Catering",
          url: "/catering",
          description: "Catering services for events",
          icon: "fas fa-birthday-cake",
        },
        {
          name: "Gift Cards",
          url: "/gift-cards",
          description: "Purchase gift cards for loved ones",
          icon: "fas fa-gift",
        },
      ],
    },
    {
      id: "information",
      category: "Information",
      icon: "fas fa-info-circle",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverColor: "hover:bg-blue-100",
      pages: [
        {
          name: "Nutrition Info",
          url: "/nutrition",
          description: "Nutritional information for our dishes",
          icon: "fas fa-heartbeat",
        },
        {
          name: "Locations",
          url: "/locations",
          description: "Find our restaurant locations",
          icon: "fas fa-map-marker-alt",
        },
        {
          name: "Careers",
          url: "/careers",
          description: "Join our team",
          icon: "fas fa-briefcase",
        },
        {
          name: "Reviews",
          url: "/reviews",
          description: "Customer reviews and testimonials",
          icon: "fas fa-star",
        },
      ],
    },
    {
      id: "legal",
      category: "Legal",
      icon: "fas fa-shield-alt",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverColor: "hover:bg-purple-100",
      pages: [
        {
          name: "Privacy Policy",
          url: "/privacy",
          description: "How we protect your personal information",
          icon: "fas fa-user-secret",
        },
        {
          name: "Terms of Service",
          url: "/terms",
          description: "Terms and conditions for using our services",
          icon: "fas fa-file-contract",
        },
        {
          name: "Cookie Policy",
          url: "/cookies",
          description: "Information about cookies and tracking",
          icon: "fas fa-cookie",
        },
        {
          name: "Accessibility",
          url: "/accessibility",
          description: "Our commitment to web accessibility",
          icon: "fas fa-universal-access",
        },
      ],
    },
  ];

  const handleNavigation = (url) => {
    router.push(url);
  };

  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const yOffset = -100; // height of fixed header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveCategory(categoryId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Website Sitemap
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Navigate through all sections of our website. Find everything you
              need about VeggieBite.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sitemap Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-sitemap text-green-600 mr-3"></i>
                  Quick Navigation
                </h2>
                <nav className="space-y-2">
                  {sitePages.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToCategory(section.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center group ${
                        activeCategory === section.id
                          ? `${section.bgColor} ${section.color} border-l-4 ${section.borderColor}`
                          : `text-gray-600 hover:bg-gray-50 ${section.color.replace(
                              "text-",
                              "hover:text-"
                            )}`
                      }`}
                    >
                      <i
                        className={`${section.icon} mr-3 w-4 text-center ${
                          activeCategory === section.id
                            ? section.color
                            : "text-gray-400 group-hover:" + section.color
                        }`}
                      ></i>
                      <span className="text-sm font-medium">
                        {section.category}
                      </span>
                      <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {section.pages.length}
                      </span>
                    </button>
                  ))}
                </nav>

                {/* Quick Stats */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Site Statistics
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Total Pages:</span>
                      <span className="font-semibold">
                        {sitePages.reduce(
                          (total, section) => total + section.pages.length,
                          0
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Categories:</span>
                      <span className="font-semibold">{sitePages.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Updated:</span>
                      <span className="font-semibold">Jan 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-2/3">
              {sitePages.map((section, sectionIndex) => (
                <div key={sectionIndex} id={section.id} className="mb-12">
                  <div
                    className={`${section.bgColor} rounded-xl p-6 mb-6 border-l-4 ${section.borderColor}`}
                  >
                    <div className="flex items-center mb-2">
                      <div
                        className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-md`}
                      >
                        <i
                          className={`${section.icon} ${section.color} text-xl`}
                        ></i>
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                          {section.category}
                        </h2>
                        <p className="text-gray-600">
                          {section.pages.length} pages available
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.pages.map((page, pageIndex) => (
                      <div
                        key={pageIndex}
                        onClick={() => handleNavigation(page.url)}
                        className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-l-4 ${section.borderColor} group ${section.hoverColor}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start">
                            <div
                              className={`w-10 h-10 ${section.bgColor} rounded-lg flex items-center justify-center mr-4 mt-1`}
                            >
                              <i
                                className={`${page.icon} ${section.color} text-sm`}
                              ></i>
                            </div>
                            <div className="flex-1">
                              <h3
                                className={`text-xl font-semibold text-gray-900 mb-2 group-hover:${section.color} transition-colors duration-300`}
                              >
                                {page.name}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                {page.description}
                              </p>
                              <div className="flex items-center text-xs text-gray-500">
                                <i className="fas fa-link mr-2"></i>
                                <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                                  {page.url}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`ml-4 opacity-50 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1`}
                          >
                            <i
                              className={`fas fa-arrow-right ${section.color} text-lg`}
                            ></i>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Contact Section */}
              <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl text-white p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <i className="fas fa-question-circle text-3xl mr-3"></i>
                  <h3 className="text-2xl font-bold">
                    Need Help Finding Something?
                  </h3>
                </div>
                <p className="mb-6 text-green-100 max-w-md mx-auto">
                  Can't find what you're looking for? Our team is here to help
                  you navigate our services.
                </p>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-headset mr-2"></i>
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
