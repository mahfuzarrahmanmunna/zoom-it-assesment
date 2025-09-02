import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">ZoomMart</h2>
          <p className="mt-4 text-sm leading-6">
            Your trusted online marketplace. Secure shopping, fast delivery, and
            amazing deals every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about-us" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link to="/orders" className="hover:text-white transition-colors">
                Orders
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faq" className="hover:text-white transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-white transition-colors">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} /> support@zoomit.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +880 1234-567890
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ZoomMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
