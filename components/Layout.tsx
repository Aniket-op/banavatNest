
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, Mail, Phone, Linkedin, Facebook, Instagram, Twitter, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
  <div className="flex font-extrabold text-2xl tracking-tighter items-baseline">
    <span className="text-[#84CC16]">Banavat</span>
    <span className="text-[#5D3A1A]">Nest</span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'What We Do', path: '/services' },
    { name: 'Academia-Industry', path: '/bridge' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center group transition-transform hover:scale-[1.02]">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-all relative py-1 ${
                  location.pathname === link.path ? 'text-[#84CC16]' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#84CC16] rounded-full"
                  />
                )}
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-[#5D3A1A] text-white px-7 py-2.5 rounded-full text-sm font-bold flex items-center hover:bg-[#4B2C13] transition-all shadow-lg hover:shadow-[#84CC16]/20"
              >
                Get Involved <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-bold text-gray-900 hover:text-[#84CC16] py-2 border-b border-gray-50 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#5D3A1A] text-white px-6 py-4 rounded-xl font-bold shadow-lg mt-4"
            >
              Get Involved
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block transition-transform hover:scale-105 mb-6">
              <Logo />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
              Research-led innovation ecosystem shaping curiosity-driven concepts into impactful solutions.
            </p>
            <div className="mt-8 flex space-x-4">
               {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                 <motion.div key={i} whileHover={{ y: -5, scale: 1.1 }}>
                   <a href="#" className="block p-2.5 bg-gray-50 rounded-xl hover:bg-lime-50 text-gray-400 hover:text-[#84CC16] transition-all">
                     <Icon className="w-5 h-5" />
                   </a>
                 </motion.div>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-zinc-900 font-bold mb-8 text-lg">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li><Link to="/services" className="hover:text-[#84CC16] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-lime-400 mr-2" />Focus Areas</Link></li>
              <li><Link to="/services" className="hover:text-[#84CC16] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-lime-400 mr-2" />Research Domains</Link></li>
              <li><Link to="/bridge" className="hover:text-[#84CC16] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-lime-400 mr-2" />Collaboration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 font-bold mb-8 text-lg">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li><Link to="/about" className="hover:text-[#84CC16] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#5D3A1A] mr-2" />About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-[#84CC16] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#5D3A1A] mr-2" />Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#84CC16] transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#5D3A1A] mr-2" />Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 font-bold mb-8 text-lg">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li className="flex items-start"><Mail className="w-5 h-5 mr-3 text-lime-600 shrink-0" /> banavatnest@gmail.com</li>
              <li className="flex items-start"><Phone className="w-5 h-5 mr-3 text-lime-600 shrink-0" /> +91 99340 44777</li>
              <li className="flex items-start"><MapPin className="w-5 h-5 mr-3 text-lime-600 shrink-0" /> Sutahata, East Midnapore,<br/>West Bengal, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-medium">
          <p>© 2024 BanavatNest Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#84CC16]/20 selection:text-[#5D3A1A]">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
