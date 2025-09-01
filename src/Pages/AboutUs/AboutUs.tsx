import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
            About Mern Store
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A robust e-commerce platform built with the MERN stack to bring you a
            seamless shopping experience, secure payments, and user-friendly
            design.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition">
            <h2 className="text-2xl font-semibold text-blue-300">Our Mission</h2>
            <p className="text-gray-300 mt-4 leading-relaxed">
              At Mern Store, our mission is to provide an easy-to-use, secure, and
              reliable online marketplace where users can discover, purchase, and
              enjoy products with confidence. We focus on speed, quality, and
              transparency.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition">
            <h2 className="text-2xl font-semibold text-blue-300">Our Vision</h2>
            <p className="text-gray-300 mt-4 leading-relaxed">
              To become a trusted global e-commerce platform powered by modern
              technologies, offering users an innovative and personalized
              shopping experience with world-class customer service.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-blue-400">
            Why Choose Us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-300">
                Secure Authentication
              </h3>
              <p className="text-gray-400 mt-2">
                Protect your account with JWT authentication and secure password
                hashing.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-300">
                Product Management
              </h3>
              <p className="text-gray-400 mt-2">
                Browse and manage a wide variety of products with easy CRUD
                operations.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-300">
                Shopping Experience
              </h3>
              <p className="text-gray-400 mt-2">
                Enjoy smooth cart functionality, order tracking, and quick
                checkout with an intuitive UI.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-300">
                Admin Dashboard
              </h3>
              <p className="text-gray-400 mt-2">
                Manage users, products, and orders with full control and
                real-time updates.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-300">
                Scalable Technology
              </h3>
              <p className="text-gray-400 mt-2">
                Built with React, Node.js, Express, and MongoDB for high
                performance and scalability.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-300">
                Customer Support
              </h3>
              <p className="text-gray-400 mt-2">
                We’re always here to help you with questions or support through
                email and live chat.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-400">
            Ready to start shopping?
          </h2>
          <p className="text-gray-400 mt-2">
            Sign up today and explore our amazing collection of products.
          </p>
          <a
            href="/register"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-medium transition"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
