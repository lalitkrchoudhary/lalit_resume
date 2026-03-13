import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationCard = ({ school, degree, period, location, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass"
    style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ padding: '0.75rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
        <GraduationCap size={24} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        <Calendar size={16} />
        <span>{period}</span>
      </div>
    </div>

    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{school}</h3>
    <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '1.1rem' }}>{degree}</p>
    
    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
      <MapPin size={16} />
      <span>{location}</span>
    </div>
  </motion.div>
);

const Education = () => {
  const educationData = [
    {
      school: 'Tezpur University',
      degree: 'Master of Computer Applications',
      period: 'Nov 2022 - June 2024',
      location: 'Tezpur, Assam',
      grade: 'CGPA: 7.1 (current)'
    },
    {
      school: 'Dispur College',
      degree: 'Bachelor of Computer Applications',
      period: 'April 2018 - July 2021',
      location: 'Guwahati, Assam',
      grade: 'Percentage: 7.11'
    }
  ];

  return (
    <section id="education" className="section-container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Academic <span className="gradient-text">Foundation</span></h2>
        <p style={{ color: 'var(--text-secondary)' }}>Rooted in computer science excellence and continuous learning.</p>
      </div>

      <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        {educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default Education;
