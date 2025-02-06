import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-8 sm:py-12 text-gray-800 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          Why Choose <span className="text-orange-500">Brilliko?</span>
        </h1>
        <p className="text-base sm:text-lg leading-7 sm:leading-8 mb-4">
          Brilliko Institute of Multimedia provides Animation, Web Designing, VFX & Multimedia education. 
          Started in 2011 by a team of management and technical experts with over twelve years of experience 
          in the Animation & Visual effects production & training domain. Brilliko offers a wide array of training 
          programs aimed at producing high-quality, trained manpower to fuel India's Media & Entertainment industry.
        </p>
        <p className="text-base sm:text-lg leading-7 sm:leading-8 mb-6">
          Brilliko, a beacon of excellence in education, offers transformative programs at the intersection of 
          creativity and technology. With a commitment to nurturing talent and fostering innovation, Brilliko provides 
          a platform to explore a world of possibilities.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-base sm:text-lg hover:bg-orange-600 transition duration-300">
          KNOW MORE
        </button>
      </div>

      {/* Image Grid Section */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
        <img src="/about1.webp" alt="VFX" className="w-full h-32 sm:h-40 object-cover rounded-xl" />
        <img src="/about2.webp" alt="Animation" className="w-full h-64 sm:h-80 object-cover rounded-xl row-span-2" />
        <img src="/about3.webp" alt="Game Design" className="w-full h-32 sm:h-40 object-cover rounded-xl" />
      </div>
    </div>
  );
};

export default About;
