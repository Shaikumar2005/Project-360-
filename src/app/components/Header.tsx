import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SiteVisits from "./SiteVisits";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
         


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-700 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-700 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-green-700 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-green-700 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-green-700 transition-colors">
              Why Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-700 transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA + Site Visits */}
<div className="hidden md:flex items-center">
  <SiteVisits />

  <button
    onClick={() => scrollToSection('contact')}
    className="px-6 py-2.5 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
  >
    Get Quote
  </button>
</div>


          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-gray-50 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-gray-50 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-gray-50 rounded-md"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-gray-50 rounded-md"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-gray-50 rounded-md"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-gray-50 rounded-md"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 bg-green-700 text-white hover:bg-green-800 rounded-md"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}