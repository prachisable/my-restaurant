'use client'
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';

const ReservationsPage = () => {

  // Reservation form state
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '1',
    specialRequests: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // On form submit, compose WhatsApp message
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.phone || !form.date || !form.time || !form.guests) {
      alert('Please fill in all required fields.');
      return;
    }

    // Construct WhatsApp order/reservation message
    let message = `🍽️ *Table Reservation - VeggieBite*\n\n`;
    message += `*Name:* ${form.name}\n`;
    message += `*Phone:* ${form.phone}\n`;
    if(form.email) message += `*Email:* ${form.email}\n`;
    message += `*Date:* ${form.date}\n`;
    message += `*Time:* ${form.time}\n`;
    message += `*Number of Guests:* ${form.guests}\n`;
    if(form.specialRequests) message += `*Special Requests:* ${form.specialRequests}\n`;
    message += `\nPlease confirm my reservation. Thank you!`;

    const phoneNumber = "919876543210"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp link in new tab
    window.open(whatsappUrl, '_blank');

    setSubmitStatus('Reservation request sent! Please check WhatsApp.');
    // Optionally clear form
    setForm({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: '1',
      specialRequests: ''
    });
  };

  // Hero buttons - you can customize or leave empty
  const heroButtons = [
    {
      text: 'View Menu',
      icon: 'fas fa-utensils',
      primary: true,
      onClick: () => window.location.href = '/menu'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <HeroSection
        title="Reserve Your Table"
        subtitle="Book easily for a fresh vegetarian dining experience"
        buttons={heroButtons}
        height="h-96"
      />

      {/* Reservation Form Section */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Make a Reservation
          </h2>
          
          <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-8 space-y-6"
          >
            <div className="flex flex-col md:flex-row md:space-x-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={form.phone}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="flex flex-col md:flex-row md:space-x-6">
              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={handleChange}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="date"
                name="date"
                placeholder="Date *"
                value={form.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="flex flex-col md:flex-row md:space-x-6">
              <input
                type="time"
                name="time"
                placeholder="Time *"
                value={form.time}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                {[...Array(20).keys()].map(i => (
                  <option key={i+1} value={i+1}>
                    {i+1} {i === 0 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <textarea
                name="specialRequests"
                placeholder="Special Requests (optional)"
                value={form.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Submit Reservation
            </button>

            {submitStatus && (
              <p className="mt-4 text-center text-green-700 font-semibold">
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Optional CTA Section - you can customize or remove */}
      <CTASection
        title="Ready to Experience Amazing Vegetarian Food?"
        subtitle="Order now and taste the difference fresh, quality ingredients make"
        primaryButton={{
          text: "Order Online",
          icon: "fas fa-shopping-cart",
          onClick: () => window.location.href = "/order",
        }}
        secondaryButton={{
          text: "View Menu",
          icon: "fas fa-utensils",
          onClick: () => window.location.href = "/menu",
        }}
        backgroundColor="bg-green-600"
      />
    </div>
  );
};

export default ReservationsPage;
