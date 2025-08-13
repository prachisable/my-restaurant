// app/components/CTASection.jsx
import React from 'react';

const CTASection = ({ title, subtitle, primaryButton, secondaryButton, backgroundColor = "bg-green-600" }) => {
  return (
    <section className={`${backgroundColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryButton && (
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors min-w-48">
              <i className={`${primaryButton.icon} mr-2`}></i>
              {primaryButton.text}
            </button>
          )}
          {secondaryButton && (
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors min-w-48">
              <i className={`${secondaryButton.icon} mr-2`}></i>
              {secondaryButton.text}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;