import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={toggleTheme}
    style={{
      padding: '0.5rem',
      borderRadius: '12px',
      background: 'rgba(139, 92, 246, 0.1)',
      color: 'var(--accent-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(139, 92, 246, 0.2)'
    }}
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </AnimatePresence>
  </motion.button>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Theme initialization
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

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
          <div className="md-flex" style={{ display: 'none', gap: '1.5rem', alignItems: 'center' }}>
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
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <a href="https://github.com/lalitkrchoudhary" target="_blank" rel="noopener noreferrer">
                <Github size={18} style={{ color: 'var(--text-secondary)' }} />
              </a>
              <a href="https://linkedin.com/in/lalitkrchoudhary" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} style={{ color: 'var(--text-secondary)' }} />
              </a>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md-hidden" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: 'var(--text-primary)', padding: '0.25rem' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
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
