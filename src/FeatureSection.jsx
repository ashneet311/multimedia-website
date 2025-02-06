import React, { useEffect, useState } from 'react'; 

const FeatureSection = () => {
  const counters = [
    { label: "Professionals Trained", value: 25000 },
    { label: "Branches", value: 10 },
    { label: "Professional Teachers", value: 51 },
    { label: "Placement Rate*", value: 97 }
  ];

  const [count, setCount] = useState(counters.map(() => 0));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered) {
      setCount(counters.map(() => 0)); // Reset counter on hover
      interval = setInterval(() => {
        setCount(prevCount =>
          prevCount.map((num, idx) =>
            num < counters[idx].value ? num + Math.ceil(counters[idx].value / 100) : counters[idx].value
          )
        );
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isHovered]); // Runs only when hovered

  return (
    <section 
      className="relative text-white py-12 sm:py-16 bg-gradient-to-b from-orange-500 to-red-700"
    >
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Counter Section (Now Reacts to Hover) */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center border-b border-white border-opacity-25 pb-6 sm:pb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {counters.map((counter, index) => (
            <div key={index} className="border-r border-white border-opacity-25 last:border-none">
              <h1 className="text-3xl sm:text-5xl font-extrabold">{count[index]}<span>+</span></h1>
              <p className="mt-1 sm:mt-2 text-sm sm:text-lg">{counter.label}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 ">
          {[
            { title: "Animation", desc: "The Advanced Program in 3D Animation equips participants with advanced skills in the dynamic field of computer-generated imagery.", link: "#", image: "/image1.webp" },
            { title: "VFX", desc: "Visual effects integrate live-action footage and generated imagery to create environments that would be impossible to capture on film.", link: "#", image: "/image2.webp" },
            { title: "Gaming", desc: "Gaming is one of the most creative and innovative technology-driven fields, with increasing demand for professionals.", link: "#", image: "/image3.webp" },
            { title: "Film Making", desc: "Film-making opens a gateway to the world of visual storytelling, blending creativity with technical skills.", link: "#", image: "/about1.webp" },
            { title: "Architectural", desc: "Brilliko's Architecture Program dives deep into design and visualization from planning to execution.", link: "#", image: "/about2.webp" },
            { title: "Graphics", desc: "The Graphics and Web Design course provides the creative and technical skills required in the dynamic world of digital design.", link: "#", image: "/about3.webp" }
          ].map((course, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={course.image} alt={course.title} className="w-full h-48 sm:h-64 object-fill" />
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{course.desc}</p>
                <a href={course.link} className="inline-block bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">View Program</a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Courses */}
        <div className="text-center mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Other <span className="text-blue-500">Courses</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {['UI/UX', 'Web Design', 'Full Stack Development', 'Digital Marketing', 'Editing & Color Grading', 'Motion Graphics', 'App Development', 'Coding'].map((course, idx) => (
              <a key={idx} href="#" className="border border-white px-3 sm:px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">{course}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
