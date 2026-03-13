import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const EducationCard = ({ degree, institution, location, period, score, scoreLabel, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass"
    style={{ padding: '2.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}
  >
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
      <div style={{ padding: '0.85rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '16px', color: 'var(--accent-primary)' }}>
        <GraduationCap size={32} />
      </div>
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{degree}</h3>
        <div style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{institution}</div>
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '200px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <MapPin size={16} />
        <span>{location}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <Calendar size={16} />
        <span>{period}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
        <Award size={18} />
        <span>{scoreLabel}: {score}</span>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications",
      institution: "Tezpur University",
      location: "Tezpur, Assam",
      period: "Nov 2022 - June 2024",
      score: "7.1 (current)",
      scoreLabel: "CGPA",
      delay: 0
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Dispur College",
      location: "Guwahati, Assam",
      period: "April 2018 - July 2021",
      score: "7.11",
      scoreLabel: "Percentage",
      delay: 0.1
    }
  ];

  return (
    <section id="education" className="section-container">
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Academic <span className="gradient-text">Foundation</span></h2>
        <p style={{ color: 'var(--text-secondary)' }}>Formal training and technical education that shaped my career.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;
