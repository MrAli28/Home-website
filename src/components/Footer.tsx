import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, Home } from "lucide-react";

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
              <a href="https://www.facebook.com/profile.php?id=Hussanin%20Ali" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="h-10 w-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Facebook className="h-5 w-5 text-white" />
                </div>
              </a>
              <a href="https://www.instagram.com/mr._.ali31/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#fa7e1e] via-[#d62976] to-[#4f5bd5] hover:opacity-90 transition-opacity">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
              </a>
              <a href="https://wa.me/923061642273" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <div className="h-10 w-10 bg-[#25D366] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-white" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m4.528 3.618c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-3.5-5.5c0-2.486-2.014-4.5-4.5-4.5s-4.5 2.014-4.5 4.5c0 2.486 2.014 4.5 4.5 4.5s4.5-2.014 4.5-4.5z" fill-rule="nonzero"/>
                  </svg>
                </div>
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
                <Link to="/services#ac-repair" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  AC Repair & Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services#painting" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  Painting Services
                </Link>
              </li>
              <li>
                <Link to="/services#carpentry" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  Carpentry Work
                </Link>
              </li>
              <li>
                <Link to="/services#cleaning" className="text-gray-400 hover:text-homefix-400 transition-colors">
                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services#moving" className="text-gray-400 hover:text-homefix-400 transition-colors">
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
                  huss132336@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-homefix-400 mt-0.5" />
                <span className="text-gray-400">
                  +923061642273
                </span>
              </div>
              <div>
                <p className="text-gray-400">
                  shuja town sahiwal, <br />
                  Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} HomeFix UK Solutions. All rights reserved.
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
