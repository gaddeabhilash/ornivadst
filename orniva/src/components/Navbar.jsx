import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex items-center justify-between">
        <div className="text-2xl md:text-[24px] font-bold text-gray-900 tracking-tight">Orniva</div>
        
        <div className="hidden lg:flex space-x-8 text-sm font-medium">
          <a href="#home" className="text-gray-700 hover:text-orange-500 transition">Home</a>
          <a href="#services" className="text-gray-700 hover:text-orange-500 transition">Services</a>
          <a href="#projects" className="text-gray-700 hover:text-orange-500 transition">Projects</a>
          <a href="#why-choose" className="text-gray-700 hover:text-orange-500 transition">Why Us</a>
          <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition">Testimonials</a>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm rounded transition shadow-md">
            Book Consultation
          </button>
        </div>

        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-700"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4">
          <a href="#home" className="block text-gray-700 hover:text-orange-500 transition text-sm font-medium">Home</a>
          <a href="#services" className="block text-gray-700 hover:text-orange-500 transition text-sm font-medium">Services</a>
          <a href="#projects" className="block text-gray-700 hover:text-orange-500 transition text-sm font-medium">Projects</a>
          <a href="#why-choose" className="block text-gray-700 hover:text-orange-500 transition text-sm font-medium">Why Us</a>
          <a href="#testimonials" className="block text-gray-700 hover:text-orange-500 transition text-sm font-medium">Testimonials</a>
          <button className="w-full px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm rounded transition">
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
}
