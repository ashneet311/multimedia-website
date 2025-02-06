import React from 'react';

const Rec = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Section Title */}
        <div className="text-center pb-4 sm:pb-6 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">
            Top <span className="text-orange-500">Recruiters</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Industry Leaders And Innovative Companies That Actively Seek <br className="hidden sm:block" />
            Out And Hire Our Talented Students
          </p>
        </div>

        {/* Recruiters Image */}
        <div className="flex justify-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg w-full max-w-xl sm:max-w-4xl">
            <img 
              src="/comapny.webp" 
              alt="Top Companies Hire Brilliko Students" 
              className="w-full h-40 sm:h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rec;
