// app/components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ title, subtitle, backgroundImage, buttons, height = "h-screen" }) => {
  return (
    <section className={`relative ${height} flex items-center justify-center text-white`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: backgroundImage 
              ? `url(${backgroundImage})` 
              : 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-gray-200">{subtitle}</p>
        )}
        {buttons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}  // ✅ bind click handler
                className={`${button.primary 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-green-600'
                } px-8 py-4 rounded-lg font-semibold transition-colors min-w-48 text-lg`}
              >
                <i className={`${button.icon} mr-2`}></i>
                {button.text}
              </button>
            ))}
          </div>
        )}
      </div>

    </section>
  );
};

export default HeroSection;
