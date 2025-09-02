import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center py-16 px-6">
      <div className="max-w-6xl w-full bg-gray-800 text-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-600 p-10 flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-sm leading-6 mb-8 text-blue-100">
              We’d love to hear from you! Whether you have a question about our
              products, need assistance, or just want to share feedback —
              we’re here to help.
            </p>

            <ul className="space-y-6 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={22} /> support@zoomit.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={22} /> +880 1234-567890
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={22} /> Dhaka, Bangladesh
              </li>
            </ul>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="p-10"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  className="mt-2 w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
