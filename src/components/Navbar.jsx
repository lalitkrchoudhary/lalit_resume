import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

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
    <nav 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000, 
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
        transition: 'all 0.3s'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="glass"
             style={{
               backdropFilter: isScrolled ? 'blur(16px)' : 'none',
               backgroundColor: isScrolled ? 'var(--glass-bg)' : 'transparent',
               borderColor: isScrolled ? 'var(--glass-border)' : 'transparent',
               display: 'flex',
               borderRadius: '100px',
               justifyContent: 'space-between',
               alignItems: 'center',
               padding: '0.75rem 1.5rem',
               border: '1px solid var(--border-card)',
               transition: 'all 0.3s'
             }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="gradient-text"
            style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif' }}
          >
            LC.
          </motion.div>

          {/* Desktop Nav */}
          <div className="md-flex" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}
              >
                {link.name}
              </a>
            ))}
            <div style={{ width: '1px', height: '20px', background: 'var(--border-card)', margin: '0 0.5rem' }} />
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/lalitkrchoudhary" target="_blank" rel="noopener noreferrer">
                <Github size={18} style={{ color: 'var(--text-secondary)' }} />
              </a>
              <a href="https://linkedin.com/in/lalitkrchoudhary" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} style={{ color: 'var(--text-secondary)' }} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md-hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: 'var(--text-primary)', padding: '0.25rem' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: '1.5rem',
              right: '1.5rem',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '2rem',
              zIndex: 999,
              border: '1px solid var(--border-card)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 600, 
                  color: 'var(--text-primary)',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {link.name}
              </a>
            ))}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', justifyContent: 'center' }}>
              <a href="https://github.com/lalitkrchoudhary" target="_blank" rel="noopener noreferrer">
                <Github size={24} style={{ color: 'var(--accent-primary)' }} />
              </a>
              <a href="https://linkedin.com/in/lalitkrchoudhary" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} style={{ color: 'var(--accent-secondary)' }} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
