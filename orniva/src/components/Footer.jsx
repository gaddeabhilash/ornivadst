import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Orniva</h3>
            <p className="text-gray-400 font-light mb-6 leading-relaxed">Creating beautiful, functional interiors that transform spaces and enhance lives across India</p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer transition" />
              <Twitter className="w-5 h-5 hover:text-orange-500 cursor-pointer transition" />
              <Instagram className="w-5 h-5 hover:text-orange-500 cursor-pointer transition" />
              <Linkedin className="w-5 h-5 hover:text-orange-500 cursor-pointer transition" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li><a href="#" className="hover:text-orange-500 transition">Full Home Interiors</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Modular Kitchen</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Wardrobe Design</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Renovations</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Price Calculator</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact Us</h4>
            <div className="space-y-4 text-gray-400 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Multiple cities across India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a href="tel:+919876543210" className="hover:text-orange-500 transition">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a href="mailto:info@orniva.com" className="hover:text-orange-500 transition">info@orniva.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 font-light text-sm">
              © 2026 Orniva Design Studio. All rights reserved.
            </p>
            <div className="flex gap-6 justify-start md:justify-end text-sm text-gray-400 font-light">
              <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition">Terms & Conditions</a>
              <a href="#" className="hover:text-orange-500 transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
