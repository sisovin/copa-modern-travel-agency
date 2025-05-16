import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Discover Your Next Adventure</h1>
        <p className="text-xl mb-8 animate-fadeIn">Find the best travel deals and destinations</p>
        <div className="flex space-x-4 animate-fadeIn">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition duration-300">Get Started</button>
          <button className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-blue-500 text-white font-bold rounded-lg shadow-lg transition duration-300">Learn More</button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 rounded-t-lg shadow-lg">
        <form className="flex items-center justify-center space-x-4">
          <input type="text" placeholder="Search for destinations" className="px-4 py-2 w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg focus:outline-none" />
          <button type="submit" className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition duration-300">Search</button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
