import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Mail, Phone, MapPin } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/packages', label: 'Tour Packages' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#C9A045] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plane className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#C9A045] bg-clip-text text-transparent">
                  Elite Journeys
                </h1>
                <p className="text-xs text-[#D4AF37]/80">Luxury Travel Concierge</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    location.pathname === link.path
                      ? 'text-[#D4AF37]'
                      : 'text-white hover:text-[#D4AF37]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            <button className="md:hidden text-[#D4AF37]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {children}
      </main>

      <footer className="bg-gradient-to-b from-black to-[#0A0A0A] border-t border-[#D4AF37]/20 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#C9A045] rounded-full flex items-center justify-center">
                  <Plane className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-[#D4AF37]">Elite Journeys</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Crafting extraordinary luxury travel experiences for discerning travelers worldwide.
              </p>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-[#D4AF37] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Luxury Flights</li>
                <li>Premium Hotels</li>
                <li>Private Tours</li>
                <li>Visa Assistance</li>
                <li>Travel Insurance</li>
                <li>Concierge Service</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white/70 text-sm">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 text-white/70 text-sm">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>hello@elitejourneys.com</span>
                </li>
                <li className="flex items-start gap-2 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-[#D4AF37] mt-1" />
                  <span>123 Luxury Lane<br />New York, NY 10001</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#D4AF37]/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2024 Elite Journeys. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
