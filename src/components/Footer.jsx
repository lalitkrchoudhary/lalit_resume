import React from 'react';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ borderTop: '1px solid var(--border-card)', padding: '4rem 0' }}>
      <div className="section-container" style={{ padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <div className="text-2xl font-bold gradient-text" style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 800 }}>LC.</div>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
            Designing and developing digital experiences with a focus on backend excellence.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a href="mailto:lalit8694123@gmail.com"><Mail size={20} className="text-secondary hover:text-primary transition-colors" /></a>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>+91 7578923796</span>
            <a href="https://github.com/lalitkrchoudhary"><Github size={20} className="text-secondary hover:text-primary transition-colors" /></a>
            <a href="https://linkedin.com/in/lalitkrchoudhary"><Linkedin size={20} className="text-secondary hover:text-primary transition-colors" /></a>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            style={{ 
              padding: '0.75rem', 
              background: 'var(--bg-card)', 
              border: '1px solid var(--border-card)', 
              borderRadius: '12px',
              color: 'var(--accent-primary)'
            }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        © {new Date().getFullYear()} Lalit Kr Choudhary. Crafted with Passion.
      </div>
    </footer>
  );
};

export default Footer;
