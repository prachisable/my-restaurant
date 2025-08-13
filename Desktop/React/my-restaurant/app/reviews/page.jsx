// app/pages/ReviewsPage.jsx
'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import TestimonialCard from '../components/TestimonialCard';

const ReviewsPage = () => {
  const metadata = {
    title: "Customer Reviews - VeggieBite | What Our Customers Say",
    description: "Read genuine reviews and testimonials from our satisfied customers. Discover why VeggieBite is the preferred choice for vegetarian dining.",
    img: "/images/veggiebite-testimonials.jpg"
  };

  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 9;

  const testimonials = [
    {
      name: "Priya Sharma",
      review: "The best vegetarian restaurant in the city! Their Royal Thali is absolutely delicious and the service is excellent. The ambiance is perfect for family dinners.",
      rating: 5,
      location: "Mumbai, India",
      date: "2 weeks ago"
    },
    {
      name: "Rajesh Kumar",
      review: "I'm not typically a vegetarian food person, but VeggieBite changed my mind completely. Their Veggie Supreme Burger is better than any meat burger I've had!",
      rating: 5,
      location: "Delhi, India",
      date: "1 month ago"
    },
    {
      name: "Anjali Patel",
      review: "Fresh ingredients, amazing taste, and reasonable prices. I order from VeggieBite at least twice a week. Their delivery is always on time and food arrives hot.",
      rating: 4,
      location: "Ahmedabad, India",
      date: "3 weeks ago"
    },
    {
      name: "Vikram Singh",
      review: "The South Indian Combo is authentic and delicious. The dosa was crispy and the sambar had the perfect flavor. Great value for money and excellent service.",
      rating: 5,
      location: "Bangalore, India",
      date: "1 week ago"
    },
    {
      name: "Meera Gupta",
      review: "Love the variety in their menu! From fast food to traditional meals, everything is prepared with care. The staff is friendly and the restaurant is always clean.",
      rating: 4,
      location: "Chennai, India",
      date: "2 months ago"
    },
    {
      name: "Arjun Nair",
      review: "Perfect place for vegetarian food lovers. Their catering service for our office party was outstanding. Everyone loved the food and appreciated the quality.",
      rating: 5,
      location: "Kochi, India",
      date: "3 weeks ago"
    },
    {
      name: "Kavita Jain",
      review: "The paneer wrap is my favorite! Fresh vegetables, perfectly spiced paneer, and soft tortilla. I also love their fresh lime water - so refreshing.",
      rating: 4,
      location: "Pune, India",
      date: "1 month ago"
    },
    {
      name: "Rohit Agarwal",
      review: "Excellent food quality and portion sizes. The restaurant ambiance is cozy and perfect for dates. Their desserts are also amazing - don't miss the gulab jamun!",
      rating: 5,
      location: "Jaipur, India",
      date: "2 weeks ago"
    },
    {
      name: "Sneha Reddy",
      review: "I've been a regular customer for over a year now. Consistently good food, friendly service, and reasonable prices. VeggieBite never disappoints!",
      rating: 5,
      location: "Hyderabad, India",
      date: "1 week ago"
    },
    {
      name: "Karthik Menon",
      review: "The spicy paneer wrap is incredible! Perfect blend of spices and fresh ingredients. The delivery was quick and the packaging kept everything fresh.",
      rating: 4,
      location: "Trivandrum, India",
      date: "4 days ago"
    },
    {
      name: "Ritu Chopra",
      review: "Organized my daughter's birthday party here. The staff was accommodating, food was delicious, and the private dining area was perfect. Highly recommended!",
      rating: 5,
      location: "Chandigarh, India",
      date: "3 weeks ago"
    },
    {
      name: "Amit Sinha",
      review: "Great vegetarian options for someone who travels a lot. Clean, tasty, and healthy food. Their thalis remind me of home-cooked meals. Will definitely return!",
      rating: 4,
      location: "Kolkata, India",
      date: "1 month ago"
    },
    {
      name: "Deepa Iyer",
      review: "The masala fries are addictive! Perfect as a snack with friends. The restaurant has a great atmosphere and the prices are very reasonable for the quality.",
      rating: 4,
      location: "Chennai, India",
      date: "2 weeks ago"
    },
    {
      name: "Suresh Patel",
      review: "Been coming here with my family for months. Kids love the pizza and burgers, while we adults enjoy the traditional thalis. Something for everyone!",
      rating: 5,
      location: "Surat, India",
      date: "1 week ago"
    },
    {
      name: "Pooja Agrawal",
      review: "Fresh juices are amazing! Love the mango lassi and fresh lime water. The food is consistently good and the staff always greets us with a smile.",
      rating: 4,
      location: "Indore, India",
      date: "5 days ago"
    }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const startIndex = (currentPage - 1) * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerPage);

  // Calculate average rating
  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  const heroButtons = [
    {
      text: "Share Your Experience",
      icon: "fas fa-star",
      primary: true
    }
  ];

  const ratingBreakdown = {
    5: testimonials.filter(t => t.rating === 5).length,
    4: testimonials.filter(t => t.rating === 4).length,
    3: testimonials.filter(t => t.rating === 3).length,
    2: testimonials.filter(t => t.rating === 2).length,
    1: testimonials.filter(t => t.rating === 1).length
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      ></i>
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Metadata for SEO */}
      <div style={{display: 'none'}}>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content={metadata.img} />
      </div>

      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Customer Reviews"
        subtitle="Hear what our satisfied customers have to say about their VeggieBite experience"
        buttons={heroButtons}
        height="h-96"
      />

      {/* Overall Rating Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Overall Rating */}
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">{averageRating}</div>
                <div className="flex justify-center space-x-1 mb-2">
                  {renderStars(Math.round(parseFloat(averageRating)))}
                </div>
                <p className="text-gray-600">Based on {testimonials.length} reviews</p>
              </div>

              {/* Rating Breakdown */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Rating Breakdown</h3>
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center mb-2">
                    <span className="text-sm text-gray-600 w-8">{stars}</span>
                    <i className="fas fa-star text-yellow-400 mr-2"></i>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                      <div 
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${(ratingBreakdown[stars] / testimonials.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8">{ratingBreakdown[stars]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from real customers who love our vegetarian cuisine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <TestimonialCard key={startIndex + index} testimonial={testimonial} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? 'bg-green-600 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Review Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Customers Love Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-utensils text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Delicious Food</h3>
              <p className="text-gray-600">
                "Fresh ingredients and amazing flavors in every dish"
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-smile text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Great Service</h3>
              <p className="text-gray-600">
                "Friendly staff and excellent customer service"
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-dollar-sign text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Great Value</h3>
              <p className="text-gray-600">
                "Reasonable prices for high-quality vegetarian food"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Write a Review Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Have you dined at VeggieBite? We'd love to hear about your experience!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2 text-blue-600">
                <i className="fab fa-google text-2xl"></i>
                <span className="font-medium">Google Reviews</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-red-600">
                <i className="fas fa-utensils text-2xl"></i>
                <span className="font-medium">Zomato</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <i className="fab fa-facebook text-2xl"></i>
                <span className="font-medium">Facebook</span>
              </div>
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              <i className="fas fa-star mr-2"></i>
              Write a Review
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Create Your Own Review?"
        subtitle="Visit us today and experience the delicious food that our customers can't stop talking about"
        primaryButton={{
          text: "Order Now",
          icon: "fas fa-shopping-cart"
        }}
        secondaryButton={{
          text: "Book a Table",
          icon: "fas fa-calendar-alt"
        }}
        backgroundColor="bg-green-600"
      />

      <Footer />
    </div>
  );
};

export default ReviewsPage;