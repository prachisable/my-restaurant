// app/privacy/page.js
"use client";
import React, { useState, useEffect } from "react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("information-we-collect");

  const tableOfContents = [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      icon: "fas fa-database",
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      icon: "fas fa-cogs",
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: "fas fa-share-alt",
    },
    { id: "data-security", title: "Data Security", icon: "fas fa-shield-alt" },
    { id: "your-rights", title: "Your Rights", icon: "fas fa-user-check" },
    {
      id: "cookies-tracking",
      title: "Cookies and Tracking",
      icon: "fas fa-cookie",
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      icon: "fas fa-child",
    },
    {
      id: "policy-updates",
      title: "Updates to This Policy",
      icon: "fas fa-sync-alt",
    },
    { id: "contact-us", title: "Contact Us", icon: "fas fa-envelope" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Adjust to your header height + margin
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-green-100">
            Your privacy is important to us. Learn how we protect your
            information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents - Left Side on Desktop */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-list-ul text-green-600 mr-3"></i>
                  Table of Contents
                </h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center group ${
                        activeSection === item.id
                          ? "bg-green-100 text-green-700 border-l-4 border-green-600"
                          : "text-gray-600 hover:bg-gray-50 hover:text-green-600"
                      }`}
                    >
                      <i
                        className={`${item.icon} mr-3 w-4 text-center ${
                          activeSection === item.id
                            ? "text-green-600"
                            : "text-gray-400 group-hover:text-green-600"
                        }`}
                      ></i>
                      <span className="text-sm font-medium">{item.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content - Right Side on Desktop */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-8">
                    <strong>Effective Date:</strong> January 1, 2025
                    <br />
                    <strong>Last Updated:</strong> January 1, 2025
                  </p>

                  <section id="information-we-collect" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-database text-green-600 mr-3"></i>
                      1. Information We Collect
                    </h2>
                    <p className="text-gray-600 mb-6">
                      At VeggieBite, we collect information to provide you with
                      the best dining and ordering experience. This includes:
                    </p>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li>
                        <strong>Personal Information:</strong> Name, phone
                        number, email address, and delivery address when you
                        place orders or make reservations.
                      </li>
                      <li>
                        <strong>Payment Information:</strong> Credit card
                        details and billing information for online orders
                        (processed securely through our payment partners).
                      </li>
                      <li>
                        <strong>Order History:</strong> Details of your previous
                        orders to improve your experience and provide
                        personalized recommendations.
                      </li>
                      <li>
                        <strong>Website Usage:</strong> Information about how
                        you interact with our website, including pages visited
                        and time spent.
                      </li>
                    </ul>
                  </section>

                  <section id="how-we-use" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-cogs text-green-600 mr-3"></i>
                      2. How We Use Your Information
                    </h2>
                    <p className="text-gray-600 mb-4">
                      We use your information to:
                    </p>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li>
                        Process and fulfill your food orders and table
                        reservations
                      </li>
                      <li>
                        Communicate with you about your orders, special offers,
                        and restaurant updates
                      </li>
                      <li>
                        Improve our menu, services, and overall customer
                        experience
                      </li>
                      <li>
                        Send promotional emails about new dishes and special
                        offers (with your consent)
                      </li>
                      <li>
                        Comply with legal requirements and protect against fraud
                      </li>
                    </ul>
                  </section>

                  <section id="information-sharing" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-share-alt text-green-600 mr-3"></i>
                      3. Information Sharing
                    </h2>
                    <p className="text-gray-600 mb-6">
                      We do not sell, trade, or rent your personal information
                      to third parties. We may share your information only in
                      the following circumstances:
                    </p>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li>
                        <strong>Service Providers:</strong> With trusted
                        partners who help us operate our business (payment
                        processors, delivery services)
                      </li>
                      <li>
                        <strong>Legal Requirements:</strong> When required by
                        law or to protect our rights and safety
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> In the event of a
                        merger or acquisition (with notice to you)
                      </li>
                    </ul>
                  </section>

                  <section id="data-security" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-shield-alt text-green-600 mr-3"></i>
                      4. Data Security
                    </h2>
                    <p className="text-gray-600 mb-6">
                      We implement appropriate security measures to protect your
                      personal information against unauthorized access,
                      alteration, disclosure, or destruction. This includes
                      encryption of sensitive data and regular security
                      assessments.
                    </p>
                  </section>

                  <section id="your-rights" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-user-check text-green-600 mr-3"></i>
                      5. Your Rights
                    </h2>
                    <p className="text-gray-600 mb-4">You have the right to:</p>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li>Access and review your personal information</li>
                      <li>Request corrections to inaccurate information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Request a copy of your data in a portable format</li>
                    </ul>
                  </section>

                  <section id="cookies-tracking" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-cookie text-green-600 mr-3"></i>
                      6. Cookies and Tracking
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Our website uses cookies to enhance your browsing
                      experience, remember your preferences, and analyze website
                      traffic. You can control cookie settings through your
                      browser preferences.
                    </p>
                  </section>

                  <section id="children-privacy" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-child text-green-600 mr-3"></i>
                      7. Children's Privacy
                    </h2>
                    <p className="text-gray-600 mb-6">
                      We do not knowingly collect personal information from
                      children under 13 years of age. If you believe we have
                      collected such information, please contact us immediately.
                    </p>
                  </section>

                  <section id="policy-updates" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-sync-alt text-green-600 mr-3"></i>
                      8. Updates to This Policy
                    </h2>
                    <p className="text-gray-600 mb-6">
                      We may update this privacy policy from time to time. We
                      will notify you of any significant changes by posting the
                      new policy on our website and updating the effective date.
                    </p>
                  </section>

                  <section id="contact-us" className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-envelope text-green-600 mr-3"></i>
                      9. Contact Us
                    </h2>
                    <p className="text-gray-600 mb-4">
                      If you have any questions about this privacy policy or how
                      we handle your personal information, please contact us:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-600 mb-2">
                        <strong>VeggieBite Restaurant</strong>
                      </p>
                      <p className="text-gray-600 mb-2">
                        Email: privacy@veggiebite.com
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

export default PrivacyPolicy;
