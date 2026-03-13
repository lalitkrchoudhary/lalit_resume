import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Bot, Server, Shield, Globe, Zap, X, Database, Brain } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

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
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 1100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          padding: '1rem'
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
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
            border: '1px solid var(--border-card)'
          }}
        >
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-card)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '8px', color: 'var(--accent-primary)' }}>
                {project.icon && <project.icon size={20} />}
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>{project.title}</h3>
            </div>
            <button onClick={onClose} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>
          
          <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              {project.details?.map((detail, idx) => (
                <div key={idx} style={{ padding: '1.25rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-card)' }}>
                  <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {detail.icon && <detail.icon size={16} />} {detail.subtitle}
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {detail.points.map((p, i) => (
                      <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'flex', gap: '0.5rem', lineHeight: '1.5' }}>
                        <span style={{ color: 'var(--accent-primary)', flexShrink: 0 }}>•</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid var(--border-card)', paddingTop: '1.5rem' }}>
              {project.tech.split(',').map(item => (
                <span key={item} style={{ padding: '0.4rem 0.8rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '100px', fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  {item.trim()}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, delay, onShowDetails }) => {
  const Icon = project.icon || Code;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass"
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
      whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
      onClick={onShowDetails}
    >
      <div style={{ padding: '2rem', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ padding: '0.6rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '10px', color: 'var(--accent-primary)' }}>
            <Icon size={20} />
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <motion.a whileHover={{ scale: 1.1 }} href="#" onClick={(e) => e.stopPropagation()}><Github size={18} className="text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} /></motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#" onClick={(e) => e.stopPropagation()}><ExternalLink size={18} className="text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} /></motion.a>
          </div>
        </div>
        
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{project.title}</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>{project.summary}</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
          {project.tech.split(',').slice(0, 3).map(item => (
            <span key={item} style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              #{item.trim()}
            </span>
          ))}
          {project.tech.split(',').length > 3 && <span style={{ color: 'var(--text-secondary)', fontSize: '0.7rem' }}>+more</span>}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      title: "Cleopatra AI CRM Backend",
      summary: "AI-enhanced CRM with RAG-based chat, omni-channel sync, and autonomous relationship intelligence.",
      icon: Database,
      tech: "Django 5.0, GPT-4, Embeddings, Celery, AWS S3/SQS, PostgreSQL, Redis, OAuth 2.0",
      details: [
        {
          subtitle: "AI & RAG Intelligence",
          icon: Brain,
          points: [
            "RAG-based AI Chat Assistant leveraging GPT-4 and OpenAI Embeddings for semantic transcript/email querying.",
            "Automated extraction of action items, decisions, and sentiment from Whisper-processed meeting recordings.",
            "Integrated Perplexity API for automated investor background enrichment and strategic intelligence."
          ]
        },
        {
          subtitle: "Enterprise Data Sync",
          icon: Globe,
          points: [
            "OAuth 2.0 synchronization for Google Workspace (Gmail/Calendar) with strict organization-wide isolation.",
            "Engineered email deduplication and high-density interaction linking via Celery background processors."
          ]
        },
        {
          subtitle: "Cost & Performance",
          icon: Zap,
          points: [
            "Dynamic Token Optimization reducing API costs by 40% using intelligent interaction data change-detection.",
            "Hybrid Celery/SQS task infrastructure with Redis caching for low-latency CRM operations."
          ]
        }
      ]
    },
    {
      title: "Multi-Tenant AI Agent Platform",
      summary: "Architected a scalable workspace-based isolation model with real-time SSE streaming and adaptive context memory.",
      icon: Server,
      tech: "Python 3.13, Django 5.2, Agno, OpenAI, Redis, PostgreSQL, WebSockets",
      details: [
        {
          subtitle: "Core Architecture",
          icon: Shield,
          points: [
            "Multi-tenant workspace isolation using Django ORM and per-bot LLM configurations.",
            "Secured sessions via JWE/JWT tokens and Redis-backed granular rate limiting."
          ]
        },
        {
          subtitle: "Agentic Performance",
          icon: Bot,
          points: [
            "Adaptive Context Compaction adjusting history summaries based on dynamic token tiers.",
            "Smart Agent Caching layer synchronizing in-memory caches with Redis configuration hashes."
          ]
        }
      ]
    },
    {
      title: "E-commerce Platform",
      summary: "Full-stack React/Spring Boot platform with secure auth and product-catalog performance optimization.",
      icon: Code,
      tech: "React, Thymeleaf, Spring Boot, PostgreSQL",
      details: [
        {
          subtitle: "Optimization",
          icon: Zap,
          points: [
            "Achieved sub-200ms rendering performance via REST API synchronization optimizations.",
            "Refactored complex SQL queries resulting in 20% faster checkout data access."
          ]
        }
      ]
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Strategic <span className="gradient-text">Engineering</span></h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Sophisticated AI agents and robust enterprise backends built for scale.</p>
      </div>

      <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {projectData.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project}
            delay={index * 0.1}
            onShowDetails={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal 
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
