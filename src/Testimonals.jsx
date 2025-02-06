import React from 'react';

const testimonials = [
  {
    name: 'Kanishka Jain',
    img: '/about1.webp',
    text: 'A really good institute for digital marketing. Faculty is really good and experienced. This institute focuses only on practical knowledge which makes it best.',
  },
  {
    name: 'DK Verma',
    img: '/about2.webp',
    text: 'This is really very amazing platform to enhance your knowledge. Everything is really good in this institute. I really suggest it to everyone who wants to enhance their knowledge and personality as well.',
  },
  {
    name: 'Aman Aujla',
    img: '/about3.webp',
    text: 'First I am very thankful to you for giving me this opportunity to understand graphics designing and digital marketing in the real way. It’s a very creative course, I really learned a lot from these courses. Amazing. Thanks a lot.',
  },
  {
    name: 'Priya Sharma',
    img: '/about1.webp',
    text: 'Brilliko has been a game-changer for me! The hands-on training and expert faculty made learning fun and engaging. I highly recommend this institute.',
  },
  {
    name: 'Rohit Mehra',
    img: '/about2.webp',
    text: 'The best institute for Animation and VFX! The instructors are knowledgeable and always ready to help. I gained real-world skills that helped me land my dream job.',
  },
  {
    name: 'Sneha Kapoor',
    img: '/about3.webp',
    text: 'Fantastic experience! The curriculum is well-structured, and the practical approach sets Brilliko apart from others. I feel confident stepping into the industry.',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#F7F7F7] py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto pb-8 sm:pb-10">
          <p className="text-[#FF4A38] font-semibold mb-2">OUR TESTIMONIALS</p>
          <h2 className="text-[#14213D] text-3xl sm:text-4xl font-bold mb-4">
            WHAT OUR TRAINEES <br /> <span className="text-[#FF4A38]">ARE SAYING</span>
          </h2>
          <p className="text-[#4A4A4A] text-sm sm:text-base">
            We have trained more than 25,000+ Animation aspirants. Here’s what they feel about Brilliko,
            our trainers, the quality of our courses, and their learning with us.
          </p>
        </div>

        {/* Moving Testimonials Carousel  <div className="overflow-x-hidden relative w-full group">
          <div className="flex animate-marquee motion-safe:group-hover:paused space-x-4 sm:space-x-6" */}
        <div className="relative">
          <div className="flex animate-marquee motion-safe:group-hover:paused space-x-4 sm:space-x-6">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 min-w-[300px] sm:min-w-[350px] md:min-w-[400px]">
                <i className="fa fa-quote-left text-[#FF4A38] text-3xl"></i>
                <p className="text-[#4A4A4A] mt-4 mb-6 text-sm sm:text-base leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.img}
                    alt={`${testimonial.name} - Brilliko Satisfied Student`}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4"
                  />
                  <p className="font-semibold text-[#14213D] text-sm sm:text-base">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Read More Button */}
        <div className="text-center mt-8 sm:mt-10">
          <a
            href="/testimonials"
            className="bg-[#FF4A38] text-white px-6 py-3 rounded-full text-sm sm:text-lg hover:bg-blue-600 transition duration-300"
          >
            READ MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
