import React from 'react';

const EventsSection = () => {
  const eventImages = [
    '/01.webp',
    '/02.webp',
    '/03.webp',
    '/06.webp',
    '/01.webp',
    '/02.webp',
    '/03.webp',
    '/01.webp',
    '/02.webp',
    '/03.webp',
    '/06.webp',
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-8 text-center">
        
        {/* Section Title */}
        <div className="mb-6 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">
            EVENTS & <span className="text-orange-500">ACTIVITIES</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Brilliko Institute of Multimedia hosts dynamic events and activities that foster creativity 
            and enhance skills in multimedia technology.
          </p>
        </div>

        {/* Scrolling Images */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee space-x-4 group-hover:pause">
            {eventImages.concat(eventImages).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Event ${idx + 1}`}
                className="w-40 h-28 sm:w-64 sm:h-40 object-cover rounded-xl shadow-lg"
              />
            ))}
          </div>
        </div>

        {/* Read More Button */}
        <div className="mt-6 sm:mt-8">
          <a
            href="/events-and-activities"
            className="bg-orange-500 text-white px-6 py-3 rounded-full text-base sm:text-lg hover:bg-orange-600 transition duration-300"
          >
            READ MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
