import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Wrench, Users, Brain, Server, Cloud } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass"
    style={{ padding: '2rem' }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
      <div style={{ 
        padding: '0.75rem', 
        background: 'rgba(139, 92, 246, 0.1)', 
        borderRadius: '12px',
        color: 'var(--accent-primary)'
      }}>
        <Icon size={24} />
      </div>
      <h3 style={{ fontSize: '1.25rem' }}>{title}</h3>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
      {skills.map((skill) => (
        <span 
          key={skill}
          style={{ 
            padding: '0.5rem 1rem', 
            background: 'rgba(255,255,255,0.05)', 
            borderRadius: '100px',
            fontSize: '0.875rem',
            border: '1px solid var(--border-card)',
            color: 'var(--text-secondary)'
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: 'AI & Generative AI',
      icon: Brain,
      skills: ['Generative AI', 'Agno (Phidata)', 'RAG', 'LLMs (GPT-4)', 'Whisper (Transcripts)', 'Embeddings', 'Perplexity API']
    },
    {
      title: 'Backend Engineering',
      icon: Server,
      skills: ['Python 3.13', 'Django 5.0.7', 'DRF', 'Java', 'SpringBoot', 'Celery', 'Redis', 'WebSockets (Channels)']
    },
    {
      title: 'Infrastructure & Cloud',
      icon: Cloud,
      skills: ['AWS S3', 'AWS SQS', 'Docker', 'PostgreSQL', 'Vector DB', 'Redis Caching']
    },
    {
      title: 'Third-Party Integrations',
      icon: Code2,
      skills: ['OAuth 2.0', 'Google Workspace', 'Gmail API', 'Calendar API', 'Zoom/TLDV', 'Mailjet']
    },
    {
      title: 'Core Tools & QA',
      icon: Wrench,
      skills: ['MyPy', 'Pytest', 'Sentry', 'Postman', 'Git', 'Black/Ruff']
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Team Work', 'System Architecture', 'Security & Scalability', 'AI Strategy', 'People Management']
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Technical <span className="gradient-text">Mastery</span></h2>
        <p style={{ color: 'var(--text-secondary)' }}>Advanced expertise in AI-driven CRM architectures and enterprise cloud infrastructures.</p>
      </div>
      
      <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {categories.map((cat, index) => (
          <SkillCategory key={cat.title} {...cat} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default Skills;


