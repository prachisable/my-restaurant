"use client";
import React, { useState, useEffect } from "react";

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState("acceptance-of-terms");

  const tableOfContents = [
    {
      id: "acceptance-of-terms",
      title: "1. Acceptance of Terms",
      icon: "fas fa-file-contract",
    },
    {
      id: "restaurant-services",
      title: "2. Restaurant Services",
      icon: "fas fa-utensils",
    },
    {
      id: "online-ordering",
      title: "3. Online Ordering",
      icon: "fas fa-shopping-cart",
    },
    {
      id: "delivery-and-pickup",
      title: "4. Delivery and Pickup",
      icon: "fas fa-truck",
    },
    {
      id: "cancellation-refund",
      title: "5. Cancellation and Refund Policy",
      icon: "fas fa-undo-alt",
    },
    {
      id: "food-safety",
      title: "6. Food Safety and Allergies",
      icon: "fas fa-allergies",
    },
    {
      id: "intellectual-property",
      title: "7. Intellectual Property",
      icon: "fas fa-copyright",
    },
    {
      id: "user-conduct",
      title: "8. User Conduct",
      icon: "fas fa-user-shield",
    },
    {
      id: "limitation-liability",
      title: "9. Limitation of Liability",
      icon: "fas fa-exclamation-triangle",
    },
    {
      id: "changes-to-terms",
      title: "10. Changes to Terms",
      icon: "fas fa-sync-alt",
    },
    {
      id: "governing-law",
      title: "11. Governing Law",
      icon: "fas fa-balance-scale",
    },
    {
      id: "contact-information",
      title: "12. Contact Information",
      icon: "fas fa-envelope",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // height of fixed header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-green-100">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Page Content with Table of Contents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-list-ul text-green-600 mr-3"></i> Table
                  of Contents
                </h2>
                <nav className="space-y-2">
                  {tableOfContents.map(({ id, title, icon }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center group ${
                        activeSection === id
                          ? "bg-green-100 text-green-700 border-l-4 border-green-600"
                          : "text-gray-600 hover:bg-gray-50 hover:text-green-600"
                      }`}
                    >
                      <i
                        className={`${icon} mr-3 w-4 text-center ${
                          activeSection === id
                            ? "text-green-600"
                            : "text-gray-400 group-hover:text-green-600"
                        }`}
                      ></i>
                      <span className="text-sm font-medium">{title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-8">
                    <strong>Effective Date:</strong> January 1, 2025
                    <br />
                    <strong>Last Updated:</strong> January 1, 2025
                  </p>

                  <section id="acceptance-of-terms" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-file-contract text-green-600 mr-3"></i>{" "}
                      1. Acceptance of Terms
                    </h2>
                    <p className="text-gray-600 mb-6">
                      By accessing and using VeggieBite's website, mobile app,
                      or dining services, you agree to be bound by these Terms
                      of Service. If you do not agree to these terms, please do
                      not use our services.
                    </p>
                  </section>

                  <section id="restaurant-services" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-utensils text-green-600 mr-3"></i> 2.
                      Restaurant Services
                    </h2>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Dining Services
                    </h3>
                    <ul className="text-gray-600 mb-4 space-y-2">
                      <li>
                        All food items are prepared fresh and are 100%
                        vegetarian.
                      </li>
                      <li>
                        Menu items and prices are subject to change without
                        notice.
                      </li>
                      <li>
                        We reserve the right to refuse service in our sole
                        discretion.
                      </li>
                      <li>
                        Outside food and beverages are not permitted in our
                        restaurant.
                      </li>
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Reservation Policy
                    </h3>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li>
                        Table reservations are held for 15 minutes past the
                        reserved time.
                      </li>
                      <li>
                        Cancellations must be made at least 2 hours in advance.
                      </li>
                      <li>
                        Large group reservations (8+ people) may require a
                        deposit.
                      </li>
                      <li>We may contact you to confirm your reservation.</li>
                    </ul>
                  </section>

                  <section id="online-ordering" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-shopping-cart text-green-600 mr-3"></i>{" "}
                      3. Online Ordering
                    </h2>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Order Process
                    </h3>
                    <ul className="text-gray-600 mb-4 space-y-2">
                      <li>
                        All orders are subject to availability and acceptance.
                      </li>
                      <li>
                        We reserve the right to cancel orders due to ingredient
                        unavailability.
                      </li>
                      <li>
                        Order modifications must be made within 5 minutes of
                        placement.
                      </li>
                      <li>
                        Delivery times are estimates and may vary based on
                        demand and weather.
                      </li>
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Payment Terms
                    </h3>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li>
                        Payment is required at the time of order placement.
                      </li>
                      <li>
                        We accept major credit cards, debit cards, and digital
                        wallets.
                      </li>
                      <li>
                        All prices include applicable taxes unless otherwise
                        stated.
                      </li>
                      <li>
                        Refunds are processed according to our refund policy.
                      </li>
                    </ul>
                  </section>

                  <section id="delivery-and-pickup" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-truck text-green-600 mr-3"></i> 4.
                      Delivery and Pickup
                    </h2>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li>
                        Delivery is available within our designated service
                        areas.
                      </li>
                      <li>
                        Delivery charges apply and will be displayed at
                        checkout.
                      </li>
                      <li>
                        Pickup orders must be collected within 30 minutes of
                        notification.
                      </li>
                      <li>
                        We are not responsible for orders left unattended after
                        delivery.
                      </li>
                    </ul>
                  </section>

                  <section id="cancellation-refund" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-undo-alt text-green-600 mr-3"></i> 5.
                      Cancellation and Refund Policy
                    </h2>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li>
                        Orders can be cancelled within 5 minutes of placement
                        for a full refund.
                      </li>
                      <li>
                        Refunds for quality issues will be processed after
                        investigation.
                      </li>
                      <li>
                        Refunds typically take 5-7 business days to process.
                      </li>
                      <li>
                        We reserve the right to refuse refunds for frivolous
                        claims.
                      </li>
                    </ul>
                  </section>

                  <section id="food-safety" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-allergies text-green-600 mr-3"></i>{" "}
                      6. Food Safety and Allergies
                    </h2>
                    <p className="text-gray-600 mb-6">
                      While all our food is vegetarian, please inform us of any
                      allergies or dietary restrictions. We cannot guarantee
                      that our food is free from all allergens due to shared
                      cooking spaces.
                    </p>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li>
                        Customers with severe allergies dine at their own risk.
                      </li>
                      <li>
                        We use nuts, dairy, gluten, and other common allergens
                        in our kitchen.
                      </li>
                      <li>
                        Special dietary requests will be accommodated when
                        possible.
                      </li>
                    </ul>
                  </section>

                  <section id="intellectual-property" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-copyright text-green-600 mr-3"></i>{" "}
                      7. Intellectual Property
                    </h2>
                    <p className="text-gray-600 mb-6">
                      All content on our website, including recipes, images,
                      logos, and text, is the property of VeggieBite and is
                      protected by copyright and trademark laws. You may not use
                      our content without explicit written permission.
                    </p>
                  </section>

                  <section id="user-conduct" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-user-shield text-green-600 mr-3"></i>{" "}
                      8. User Conduct
                    </h2>
                    <p className="text-gray-600 mb-6">
                      When using our services, you agree to:
                    </p>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li>Provide accurate and truthful information.</li>
                      <li>Respect our staff and other customers.</li>
                      <li>
                        Not engage in disruptive or inappropriate behavior.
                      </li>
                      <li>
                        Not misuse our website or attempt to gain unauthorized
                        access.
                      </li>
                    </ul>
                  </section>

                  <section id="limitation-liability" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-exclamation-triangle text-green-600 mr-3"></i>{" "}
                      9. Limitation of Liability
                    </h2>
                    <p className="text-gray-600 mb-6">
                      VeggieBite's liability is limited to the cost of the food
                      or service provided. We are not liable for any indirect,
                      incidental, or consequential damages arising from your use
                      of our services.
                    </p>
                  </section>

                  <section id="changes-to-terms" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-sync-alt text-green-600 mr-3"></i>{" "}
                      10. Changes to Terms
                    </h2>
                    <p className="text-gray-600 mb-6">
                      We reserve the right to modify these terms at any time.
                      Changes will be posted on our website with an updated
                      effective date. Continued use of our services constitutes
                      acceptance of the revised terms.
                    </p>
                  </section>

                  <section id="governing-law" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-balance-scale text-green-600 mr-3"></i>{" "}
                      11. Governing Law
                    </h2>
                    <p className="text-gray-600 mb-6">
                      These terms are governed by the laws of Maharashtra,
                      India. Any disputes will be resolved in the courts of
                      Nagpur, Maharashtra.
                    </p>
                  </section>

                  <section id="contact-information" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-envelope text-green-600 mr-3"></i>{" "}
                      12. Contact Information
                    </h2>
                    <p className="text-gray-600 mb-4">
                      If you have any questions about these Terms of Service,
                      please contact us:
                    </p>
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                      <p className="text-gray-600 mb-2">
                        <strong>VeggieBite Restaurant</strong>
                      </p>
                      <p className="text-gray-600 mb-2">
                        <a
                          href="mailto:legal@veggiebite.com"
                          className="text-green-600 hover:underline"
                        >
                          legal@veggiebite.com
                        </a>
                      </p>
                      <p className="text-gray-600 mb-2">
                        Phone: +91 98765 43210
                      </p>
                      <p className="text-gray-600">
                        Address: 123 Green Street, Nagpur, Maharashtra 440001
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
