import React from 'react';
import { FaBookOpen, FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Education = () => (
  <div className="page-wrapper">
    <h1 className="page-title">Education & Pubs</h1>
    
    <h3><FaGraduationCap className="card-icon" /> Education</h3>
    <div className="glass-card">
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Cyber Security Masters Programme</strong><br/>
          Code First Girls (Expected 2027)
        </li>

        <li style={{ marginBottom: '1rem' }}>
          <strong>Full Stack Development Programme</strong><br/>
          Code First Girls (First Class with Distinction)
        </li>

        <li style={{ marginBottom: '1rem' }}>
          <strong>M.A. English Literature</strong><br/>
          University of Madras (Distinction)
        </li>

        <li>
          <strong>B.A. English Literature</strong><br/>
          University of Madras (First Class)
        </li>
      </ul>
    </div>

    <h3><FaCertificate className="card-icon" /> Certifications</h3>
    <div className="glass-card">
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>• Microsoft Azure Fundamentals (AZ-900)</li>
        <li>• Microsoft Azure Data Fundamentals (DP-900)</li>
        <li>• Foundations of User Experience (UX) Design - Google</li>
        <li>• Introduction to AI & Security - Dstl and National Cyber Force</li>
        <li>• Python and SQL Kickstarter Course - Dstl</li>
      </ul>
    </div>

    <h3><FaBookOpen className="card-icon" /> Publications</h3>
    <div className="glass-card">
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <strong>Vocabulary Development using Quizlet Digital Flashcards</strong><br/>
          Article | <a href="https://www.researchgate.net/profile/Jescintha-Rajkumar-2" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>View on ResearchGate</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Education;