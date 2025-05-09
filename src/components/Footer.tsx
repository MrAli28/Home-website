
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-5">
              <Home className="h-6 w-6 text-homefix-400" />
              <span className="font-bold text-xl">
                <span className="text-homefix-400">Home</span>Fix UK
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for all home services. Quality work, professional staff, and customer satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-homefix-400 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-homefix-400 transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-homefix-400 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-homefix-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/ac-repair" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  AC Repair & Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services/painting" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  Painting Services
                </Link>
              </li>
              <li>
                <Link to="/services/carpentry" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  Carpentry Work
                </Link>
              </li>
              <li>
                <Link to="/services/cleaning" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/moving" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  Moving & Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-homefix-400 mt-0.5" />
                <span className="text-gray-400">
                  support@homefixuk.co.uk
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-homefix-400 mt-0.5" />
                <span className="text-gray-400">
                  +44 20 7946 0958
                </span>
              </div>
              <div>
                <p className="text-gray-400">
                  123 Service Road, <br />
                  London, UK EC1A 1BB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} HomeFix UK Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-homefix-400 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-homefix-400 text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-homefix-400 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
