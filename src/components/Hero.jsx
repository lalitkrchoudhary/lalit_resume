import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github } from 'lucide-react';
import ProfilePic from '../assets/WhatsApp Image 2026-03-13 at 08.35.21.jpeg';

const Hero = () => {
  return (
    <section id="about" className="section-container" style={{ paddingTop: '160px', position: 'relative' }}>
      <div className="glow" style={{ top: '0', left: '10%' }}></div>
      
      <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="gradient-text"
            style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}
          >
            Python & Generative AI Engineer
          </motion.div>
          
          <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Lalit Kr <br /><span className="gradient-text">Choudhary</span>
          </h1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '500px', marginBottom: '2.5rem' }}>
            Building scalable backend architectures, AI-driven solutions, and interactive frontend experiences with precision and scale.
          </p>

          <div className="mobile-center" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <Mail size={18} className="text-accent" />
              <span style={{ fontSize: '0.95rem' }}>lalit8694123@gmail.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <span style={{ fontSize: '18px' }}>📞</span>
              <span style={{ fontSize: '0.95rem' }}>+91 7578923796</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <MapPin size={18} className="text-accent" />
              <span style={{ fontSize: '0.95rem' }}>Bangalore, India</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'inherit' }}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:lalit8694123@gmail.com"
              className="glass"
              style={{ 
                padding: '0.875rem 2rem', 
                background: 'var(--gradient-primary)', 
                color: 'white', 
                fontWeight: 600,
                border: 'none',
                textAlign: 'center',
                flex: '1 1 auto',
                minWidth: '200px'
              }}
            >
              Get in Touch
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/lalitkrchoudhary"
              className="glass"
              style={{ 
                padding: '0.875rem 2rem', 
                fontWeight: 600, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '0.5rem',
                flex: '1 1 auto',
                minWidth: '200px'
              }}
            >
              <Github size={20} /> GitHub
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="floating mobile-hide"
          style={{ position: 'relative' }}
        >
          <div className="glass" style={{ 
            width: '100%', 
            aspectRatio: '1', 
            borderRadius: '40px', 
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
            border: '2px solid var(--border-card)'
          }}>
            <img 
              src={ProfilePic} 
              alt="Lalit Kr Choudhary" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                objectPosition: 'center 20%' 
              }} 
            />
          </div>
          <div 
            style={{ 
              position: 'absolute', 
              top: '-20px', 
              right: '-20px', 
              width: '100px', 
              height: '100px', 
              background: 'var(--gradient-primary)', 
              borderRadius: '20px',
              zIndex: 0,
              opacity: 0.5,
              filter: 'blur(40px)'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
