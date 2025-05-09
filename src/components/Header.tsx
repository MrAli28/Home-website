
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-homefix-600" />
            <span className="font-bold text-xl text-homefix-800">
              <span className="text-homefix-600">Home</span>Fix UK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-homefix-600 transition-colors">
              Home
            </Link>
            <Link to="/services" className="font-medium hover:text-homefix-600 transition-colors">
              Services
            </Link>
            <Link to="/about" className="font-medium hover:text-homefix-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium hover:text-homefix-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button className="bg-homefix-600 hover:bg-homefix-700">
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6 animate-fade-in">
            <nav className="flex flex-col space-y-4 mb-6">
              <Link 
                to="/" 
                className="font-medium px-2 py-1 rounded hover:bg-homefix-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="font-medium px-2 py-1 rounded hover:bg-homefix-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="font-medium px-2 py-1 rounded hover:bg-homefix-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="font-medium px-2 py-1 rounded hover:bg-homefix-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button 
                className="w-full justify-center bg-homefix-600 hover:bg-homefix-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
