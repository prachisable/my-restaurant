// app/pages/ContactPage.jsx
'use client'
import React from 'react';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const metadata = {
    title: "Contact Us - VeggieBite | Get in Touch for Reservations & Inquiries",
    description: "Contact VeggieBite for table reservations, catering services, or any inquiries. Visit our restaurant or reach out through phone, email, or our contact form.",
    img: "/images/veggiebite-contact.jpg"
  };

  const heroButtons = [
    {
      text: "Call Now",
      icon: "fas fa-phone",
      primary: true
    }
  ];

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Visit Us",
      details: [
        "123 Green Street",
        "Veggie City, VC 12345",
        "Near City Mall"
      ]
    },
    {
      icon: "fas fa-phone",
      title: "Call Us",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 123-4568",
        "Toll Free: 1800-VEGGIE"
      ]
    },
    {
      icon: "fas fa-envelope",
      title: "Email Us",
      details: [
        "info@veggiebite.com",
        "orders@veggiebite.com",
        "catering@veggiebite.com"
      ]
    },
    {
      icon: "fas fa-clock",
      title: "Opening Hours",
      details: [
        "Monday - Sunday",
        "9:00 AM - 10:00 PM",
        "Last order: 9:30 PM"
      ]
    }
  ];

  const services = [
    {
      icon: "fas fa-utensils",
      title: "Dine-In",
      description: "Enjoy our cozy restaurant ambiance with family and friends"
    },
    {
      icon: "fas fa-motorcycle",
      title: "Home Delivery",
      description: "Fast delivery within 5km radius. Free delivery above ₹300"
    },
    {
      icon: "fas fa-shopping-bag",
      title: "Takeaway",
      description: "Quick pickup service. Order online or call ahead"
    },
    {
      icon: "fas fa-users",
      title: "Catering",
      description: "Special catering services for parties, events, and corporate functions"
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Table Reservation",
      description: "Book your table in advance for special occasions"
    },
    {
      icon: "fas fa-gift",
      title: "Private Events",
      description: "Host your special celebrations in our private dining area"
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

      {/* Hero Section */}
      <HeroSection
        title="Get In Touch"
        subtitle="We'd love to hear from you. Contact us for reservations, catering, or any inquiries"
        buttons={heroButtons}
        height="h-96"
      />

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
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
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${info.icon} text-green-600 text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map Placeholder */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us Here</h3>
                <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <i className="fas fa-map-marked-alt text-gray-400 text-6xl mb-4"></i>
                    <p className="text-gray-600">Interactive Map Location</p>
                    <p className="text-gray-500 text-sm">123 Green Street, Veggie City</p>
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
      <section className="py-16 bg-white">
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
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-green-600 text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <i className="fas fa-question-circle text-green-600 mr-2"></i>
                Do you take table reservations?
              </h3>
              <p className="text-gray-600">
                Yes, we accept table reservations. You can call us or book online. We recommend booking in advance for weekends and special occasions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <i className="fas fa-question-circle text-green-600 mr-2"></i>
                What is your delivery area and charges?
              </h3>
              <p className="text-gray-600">
                We deliver within 5km radius of our restaurant. Delivery is free for orders above ₹300, otherwise ₹30 delivery charges apply.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <i className="fas fa-question-circle text-green-600 mr-2"></i>
                Do you cater for large events?
              </h3>
              <p className="text-gray-600">
                Yes, we provide catering services for parties, corporate events, and special occasions. Please contact us at least 24 hours in advance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <i className="fas fa-question-circle text-green-600 mr-2"></i>
                Are all your dishes completely vegetarian?
              </h3>
              <p className="text-gray-600">
                Yes, all our dishes are 100% vegetarian. We use only plant-based ingredients and maintain strict vegetarian kitchen standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Visit Us?"
        subtitle="Come and experience our warm hospitality and delicious vegetarian cuisine"
        primaryButton={{
          text: "Book a Table",
          icon: "fas fa-calendar-alt"
        }}
        secondaryButton={{
          text: "Order Online",
          icon: "fas fa-shopping-cart"
        }}
        backgroundColor="bg-green-600"
      />

    </div>
  );
};

export default ContactPage;