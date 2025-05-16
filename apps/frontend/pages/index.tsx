import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="hero bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Welcome to Our Travel Agency</h1>
          <p className="mt-4 text-xl">Discover your next adventure with us</p>
        </div>
      </section>

      <section className="featured-destinations py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="destination bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Destination 1</h3>
              <p className="mt-2">Description of Destination 1</p>
            </div>
            <div className="destination bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Destination 2</h3>
              <p className="mt-2">Description of Destination 2</p>
            </div>
            <div className="destination bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Destination 3</h3>
              <p className="mt-2">Description of Destination 3</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials bg-gray-200 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="testimonial bg-white p-6 rounded-lg shadow-lg">
              <p className="mt-2">"Testimonial 1"</p>
              <p className="mt-2 font-bold">- Client 1</p>
            </div>
            <div className="testimonial bg-white p-6 rounded-lg shadow-lg">
              <p className="mt-2">"Testimonial 2"</p>
              <p className="mt-2 font-bold">- Client 2</p>
            </div>
            <div className="testimonial bg-white p-6 rounded-lg shadow-lg">
              <p className="mt-2">"Testimonial 3"</p>
              <p className="mt-2 font-bold">- Client 3</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mt-4 text-xl">Contact us today to plan your next trip</p>
          <button className="mt-8 px-6 py-3 bg-white text-blue-500 font-bold rounded-lg shadow-lg">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
