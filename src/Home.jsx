import React from 'react';
import { Link } from 'react-router-dom';
import FeatureSection from './FeatureSection';
import Testimonals from './Testimonals';
import EventsSection from './EventsSection';
import Footer from './Footer';
import Rec from './Rec';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-purple-700 text-white font-sans">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-red-600 w-full">
        <div className="flex items-center w-full justify-between sm:justify-start space-x-4 sm:space-x-8">
          <img src="/logo.png" alt="Brilliko Logo" className="h-12 sm:h-14" />
          <nav className="hidden md:flex space-x-4 sm:space-x-8 text-sm sm:text-lg">
            <Link to="/" className="hover:text-yellow-400">HOME</Link>
            <Link to="/about" className="hover:text-yellow-400">ABOUT</Link>
            <a href="#students" className="hover:text-yellow-400">STUDENTS</a>
            <a href="#courses" className="hover:text-yellow-400">COURSES</a>
            <a href="#blog" className="hover:text-yellow-400">BLOG</a>
            <a href="#franchise" className="hover:text-yellow-400">FRANCHISE</a>
            <a href="#contact" className="hover:text-yellow-400">CONTACT</a>
          </nav>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm sm:text-lg mt-4 sm:mt-0 text-center">
          <span>1800 </span>
          <span>info@brilliko.com</span>
          <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-500">
            BOOK
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 sm:py-20">
        <img src="/student.webp" alt="Student with Laptop" className="w-48 sm:w-72 md:w-96 mb-6 md:mb-0" />
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">25,000+ Students Trained In Last 12 Years</h1>
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-6 leading-tight">
            Institute Of Animation, <br /> VFX & Film Making
          </h2>
          <p className="text-sm sm:text-lg max-w-2xl mb-6 sm:mb-8">
            We have a track record of maintaining 100% job placement with every batch.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto bg-orange-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-orange-600">
              VIEW COURSES
            </button>
            <button className="w-full sm:w-auto border border-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-black">
              BOOK FREE DEMO
            </button>
          </div>
        </div>
      </main>

      {/* Courses Section */}
      <section className="bg-white py-8 sm:py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{ title: "Start Your Learning Journey", img: "/image1.webp", bg: "bg-orange-500" },
            { title: "Enhance Your Skills", img: "/image2.webp", bg: "bg-purple-700" },
            { title: "Professional Certificate", img: "/image3.webp", bg: "bg-blue-900" },].map((course, idx) => (
            <div key={idx} className={`${course.bg} text-white p-4 sm:p-6 rounded-2xl shadow-lg text-center`}>
              <img src={course.img} alt={course.title} className="rounded-lg mb-4 w-full h-40 sm:h-48 object-cover" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm sm:text-base">
                {idx === 0 && "Begin your educational adventure with foundational knowledge."}
                {idx === 1 && "Elevate your abilities with advanced training in multimedia."}
                {idx === 2 && "Earn a respected credential that sets you apart."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Brilliko Section */}
      <section className="py-8 sm:py-12 bg-white px-6">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose <span className="text-orange-500">Brilliko?</span></h2>
            <p className="text-base text-gray-600 mb-4">
              Brilliko provides Animation, Web Designing, VFX & Multimedia education.
            </p>
            <Link to="/about">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600">
                KNOW MORE
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <img src="/about1.webp" alt="VFX" className="w-full h-32 sm:h-40 object-cover rounded-xl" />
            <img src="/about2.webp" alt="Animation" className="w-full h-64 sm:h-80 object-cover rounded-xl row-span-2" />
            <img src="/about3.webp" alt="Game Design" className="w-full h-32 sm:h-40 object-cover rounded-xl" />
          </div>
        </div>
      </section>


      {/* Awards Section */}
      <section className="bg-cover bg-center bg-fixed py-16 sm:py-24" style={{ backgroundImage: "url('/bg-award.webp')" }}>
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/awards2.webp" 
            alt="Authorized Training Partner - Brilliko Institute of Multimedia" 
            className="mx-auto w-full max-w-3xl sm:max-w-5xl rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Student Work Section */}
      <section id="students" className="py-12 sm:py-16 bg-white">
        <div className="text-center pb-4 sm:pb-6 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">
            Students <span className="text-orange-500">Work</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Showcasing innovative design solutions through real-world projects.
          </p>
        </div>

        {/* Marquee Section with Hover Pause Effect */}
        <div className="overflow-x-hidden relative w-full group">
          <div className="flex animate-marquee motion-safe:group-hover:paused space-x-4 sm:space-x-6">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {['/work1.webp', '/work2.webp', '/work3.webp', '/work4.webp', '/work5.webp'].map((imgSrc, idx) => (
                  <img key={idx} src={imgSrc} alt={`Student Work ${idx + 1}`} className="w-48 sm:w-60 h-64 sm:h-80 rounded-2xl object-cover" />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <FeatureSection />
      <Rec />
      <section 
      className="relative py-16 bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('/background1.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}

      <div className="relative container mx-auto text-center max-w-3xl px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">For Admissions &amp; Career Counselling</h3>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">TOLL FREE : 18005725501</h1>

        <p className="text-lg md:text-xl mb-6">
          If you would like to take a tour of our facilities and experience the atmosphere first-hand 
          through a free demo lesson, For queries, feedback &amp; assistance.
        </p>

        <a 
          href="https://www.brilliko.com/register.php" 
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full shadow-lg"
        >
          BOOK A FREE DEMO
        </a>
      </div>
    </section>
      <Testimonals />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Home;
