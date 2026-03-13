import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-width-1200 mx-auto px-6">
        <div className={`glass flex items-center justify-between px-6 py-3 transition-all duration-300 ${isScrolled ? 'bg-glass-bg' : 'bg-transparent border-transparent shadow-none'}`}
             style={{
               backdropFilter: isScrolled ? 'blur(16px)' : 'none',
               backgroundColor: isScrolled ? 'var(--glass-bg)' : 'transparent',
               borderColor: isScrolled ? 'var(--glass-border)' : 'transparent',
               display: 'flex',
               borderRadius: '100px',
               justifyContent: 'space-between',
               alignItems: 'center',
               border: '1px solid var(--border-card)'
             }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold gradient-text"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            LC.
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8" style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors"
                style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4" style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/lalitkrchoudhary" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} />
            </a>
            <a href="https://linkedin.com/in/lalitkrchoudhary" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} className="text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ display: 'none' }} // Placeholder for now as I focus on layout
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
