import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, ExternalLink, X } from 'lucide-react';

// Import certificates
import ArdvarkCert from '../assets/Lalit Choudhary _ Internship participation (1)_page-0001.jpg';
import WhatbytesCert from '../assets/Lalit Internship Certificate (1)_page-0001.jpg';

const CertificateModal = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 1100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(12px)',
          padding: '1rem'
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glass"
          style={{
            position: 'relative',
            maxWidth: '1000px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            background: 'var(--bg-dark)',
            border: '1px solid var(--border-card)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-card)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(139, 92, 246, 0.05)' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{title}</h3>
            <button onClick={onClose} style={{ color: 'var(--text-secondary)', transition: 'opacity 0.2s', background: 'none', border: 'none', cursor: 'pointer', opacity: 0.7 }}>
              <X size={20} />
            </button>
          </div>
          <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <img 
              src={imageUrl} 
              alt={title} 
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', border: '1px solid var(--border-card)' }} 
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ExperienceItem = ({ role, company, period, description, points, color, onShowCert }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    style={{ position: 'relative', paddingLeft: '2.5rem', marginBottom: '3.5rem' }}
  >
    <div style={{ 
      position: 'absolute', 
      left: '0.75rem', 
      top: '0', 
      bottom: '-3.5rem', 
      width: '2px', 
      background: 'var(--border-card)' 
    }} />
    
    <div style={{ 
      position: 'absolute', 
      left: '0', 
      top: '0.5rem', 
      width: '1.5rem', 
      height: '1.5rem', 
      borderRadius: '50%', 
      background: color || 'var(--accent-primary)',
      border: '4px solid var(--bg-dark)',
      zIndex: 1
    }} />

    <div className="glass" style={{ padding: '1.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <div style={{ minWidth: '200px', flex: '1' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>{role}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
            <Briefcase size={16} />
            <span>{company}</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem', width: '100%', maxWidth: 'max-content' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            <Calendar size={16} />
            <span>{period}</span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onShowCert}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              fontSize: '0.75rem', 
              color: 'var(--accent-primary)', 
              fontWeight: 600,
              background: 'rgba(139, 92, 246, 0.1)',
              padding: '0.4rem 0.8rem',
              borderRadius: '8px',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              cursor: 'pointer'
            }}
          >
            <ExternalLink size={12} /> View Certificate
          </motion.button>
        </div>
      </div>

      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontWeight: 500, fontSize: '0.95rem' }}>{description}</p>
      
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {experiences?.[0]?.points.map((point, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
            <ChevronRight size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  const [activeCert, setActiveCert] = useState(null);

  const experiences = [
    {
      role: 'Python & AI Backend Engineer',
      company: 'Whatbytes',
      period: 'Aug 11, 2025 – Feb 01, 2026',
      description: 'Architecting Cleopatra Backend—a sophisticated, AI-driven CRM for high-stakes relationship management.',
      points: [
        'Developed a RAG-based AI Chat Service using GPT-4 and Embeddings, enabling semantic search across meeting transcripts and email threads.',
        'Engineered an OAuth 2.0 sync engine for Gmail and Google Calendar with org-wide interaction tracking.',
        'Implemented "Dynamic Token Optimization" for AI analysis, reducing operational costs by ~40%.',
        'Built automated intelligence pipelines to extract action items, sentiment, and decisions from Zoom/TLDV recordings.',
        'Integrated Perplexity API for automated professional enrichment and background intelligence on global investors.'
      ],
      color: '#8b5cf6',
      title: 'Whatbytes Internship Certificate',
      imageUrl: WhatbytesCert
    },
    {
      role: 'Backend Java Developer Intern',
      company: 'Ardvark Network Solutions Private Limited',
      period: 'March 04, 2024 – June 30, 2024',
      description: 'Product Development Department | Telecom Salesforce Management Platform',
      points: [
        'Built backend microservices using Java and Spring Boot, reducing API response times by 15%.',
        'Refactored SQL queries, cutting peak load execution time by 30 seconds.',
        'Refined API protocols and load balancing, resulting in a 20% decrease in runtime errors.',
        'Achieved 85% code coverage with JUnit and Mockito unit testing.',
        'Designed normalized relational database schemas in MySQL for customer profile modules.'
      ],
      color: '#3b82f6',
      title: 'Ardvark Internship Certificate',
      imageUrl: ArdvarkCert
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Professional <span className="gradient-text">Journey</span></h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Developing high-performance architectures and intelligent AI-driven platforms.</p>
      </div>

      <div style={{ position: 'relative' }}>
        {experiences.map((exp, index) => {
          // Fix for the points mapping in ExperienceItem
          const ItemWithPoints = (props) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative', paddingLeft: '2.5rem', marginBottom: '3.5rem' }}
            >
              <div style={{ 
                position: 'absolute', 
                left: '0.75rem', 
                top: '0', 
                bottom: '-3.5rem', 
                width: '2px', 
                background: 'var(--border-card)' 
              }} />
              
              <div style={{ 
                position: 'absolute', 
                left: '0', 
                top: '0.5rem', 
                width: '1.5rem', 
                height: '1.5rem', 
                borderRadius: '50%', 
                background: props.color || 'var(--accent-primary)',
                border: '4px solid var(--bg-dark)',
                zIndex: 1
              }} />

              <div className="glass" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ minWidth: '200px', flex: '1' }}>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>{props.role}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                      <Briefcase size={16} />
                      <span>{props.company}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem', width: '100%', maxWidth: 'max-content' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                      <Calendar size={16} />
                      <span>{props.period}</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={props.onShowCert}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.4rem', 
                        fontSize: '0.75rem', 
                        color: 'var(--accent-primary)', 
                        fontWeight: 600,
                        background: 'rgba(139, 92, 246, 0.1)',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        cursor: 'pointer'
                      }}
                    >
                      <ExternalLink size={12} /> View Certificate
                    </motion.button>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontWeight: 500, fontSize: '0.95rem' }}>{props.description}</p>
                
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {props.points.map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      <ChevronRight size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );

          return (
            <ItemWithPoints 
              key={index} 
              {...exp} 
              onShowCert={() => setActiveCert(exp)}
            />
          );
        })}
      </div>

      <CertificateModal 
        isOpen={!!activeCert}
        onClose={() => setActiveCert(null)}
        title={activeCert?.title}
        imageUrl={activeCert?.imageUrl}
      />
    </section>
  );
};

export default Experience;
