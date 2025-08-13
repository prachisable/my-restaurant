// app/pages/OrderPage.jsx
'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import MenuCard from '../components/MenuCard';
import MealCategoryTabs from '../components/MealCategoryTabs';

const OrderPage = () => {
  const metadata = {
    title: "Order Online - VeggieBite | Fresh Vegetarian Food Delivery",
    description: "Order fresh, delicious vegetarian food online from VeggieBite. Fast delivery, easy ordering, and the best vegetarian cuisine in the city.",
    img: "/images/veggiebite-order.jpg"
  };

  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCart, setShowCart] = useState(false);

  const categories = [
    { id: 'all', name: 'All Items', icon: 'fas fa-utensils', description: 'Browse our complete menu' },
    { id: 'fast-food', name: 'Fast Food', icon: 'fas fa-hamburger', description: 'Quick bites and favorites' },
    { id: 'full-meals', name: 'Full Meals', icon: 'fas fa-plate-wheat', description: 'Complete traditional meals' },
    { id: 'snacks', name: 'Snacks', icon: 'fas fa-cookie-bite', description: 'Light bites and appetizers' },
    { id: 'beverages', name: 'Beverages', icon: 'fas fa-glass-water', description: 'Refreshing drinks and juices' }
  ];

  const menuItems = [
    { id: 1, name: "Veggie Supreme Burger", description: "Grilled patty made from fresh vegetables, quinoa, and herbs with crispy lettuce and tomatoes", price: 299, category: "fast-food", isPopular: true, isSpicy: false },
    { id: 2, name: "Royal Thali", description: "Complete traditional meal with dal, sabzi, rice, roti, raita, pickle, and sweet", price: 399, category: "full-meals", isPopular: true, isSpicy: false },
    { id: 3, name: "Spicy Paneer Wrap", description: "Grilled paneer with fresh vegetables wrapped in soft tortilla with mint chutney", price: 249, category: "fast-food", isPopular: false, isSpicy: true },
    { id: 4, name: "South Indian Combo", description: "Crispy dosa with sambar, coconut chutney, rice, rasam, and filter coffee", price: 349, category: "full-meals", isPopular: false, isSpicy: true },
    { id: 5, name: "Samosa Chaat", description: "Crispy samosas topped with yogurt, chutneys, and fresh herbs", price: 129, category: "snacks", isPopular: true, isSpicy: true },
    { id: 6, name: "Fresh Lime Water", description: "Refreshing lime juice with mint and black salt", price: 89, category: "beverages", isPopular: true, isSpicy: false }
  ];

  const filteredItems = activeCategory === 'all' ? menuItems : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const heroButtons = [
    { text: "Start Ordering", icon: "fas fa-shopping-cart", primary: true }
  ];

  const EnhancedMenuCard = ({ item }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: item.image ? `url(${item.image})` : 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)'
          }}
        />
        {item.isPopular && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            <i className="fas fa-star mr-1"></i> Popular
          </div>
        )}
        {item.isSpicy && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            <i className="fas fa-fire mr-1"></i> Spicy
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <span className="text-xl font-bold text-green-600">₹{item.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <i className="fas fa-tag mr-1"></i>
            <span className="capitalize">{item.category.replace('-', ' ')}</span>
          </div>
          <button
            onClick={() => addToCart(item)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <i className="fas fa-plus mr-1"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Metadata */}
      <div style={{ display: 'none' }}>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content={metadata.img} />
      </div>

      <Header />

      {/* Hero */}
      <HeroSection
        title="Order Online"
        subtitle="Fresh vegetarian food delivered to your doorstep in just 30 minutes"
        buttons={heroButtons}
        height="h-96"
      />

      {/* Floating Cart */}
      {cart.length > 0 && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg z-40 transition-colors"
        >
          <i className="fas fa-shopping-cart mr-2"></i>
          {getTotalItems()} items • ₹{getTotalPrice()}
        </button>
      )}

      {/* Menu */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Order Your Favorites</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide variety of fresh and delicious vegetarian dishes
            </p>
          </div>

          <MealCategoryTabs
            categories={categories}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {filteredItems.map(item => (
              <EnhancedMenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Delivery Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Get your food delivered in just 30-45 minutes</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shipping-fast text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Delivery</h3>
              <p className="text-gray-600">Free delivery on orders above ₹300</p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wide Coverage</h3>
              <p className="text-gray-600">We deliver within 5km radius of our restaurant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg overflow-y-auto transform transition-transform duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Order</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <i className="fas fa-shopping-cart text-gray-300 text-6xl mb-4"></i>
                  <p className="text-gray-600">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-green-600 font-medium">₹{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center"
                          >
                            <i className="fas fa-minus text-sm"></i>
                          </button>
                          <span className="font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center"
                          >
                            <i className="fas fa-plus text-sm"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="border-t pt-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>₹{getTotalPrice()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Fee:</span>
                        <span>{getTotalPrice() >= 300 ? 'Free' : '₹40'}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total:</span>
                        <span>₹{getTotalPrice() + (getTotalPrice() >= 300 ? 0 : 40)}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => alert('Proceeding to Checkout...')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium text-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <i className="fas fa-credit-card"></i>
                    <span>Proceed to Checkout</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default OrderPage;
