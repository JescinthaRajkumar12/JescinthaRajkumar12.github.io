import React from 'react';


const About = () => {
  return (
    <div className="page-wrapper">
      {/* Changed to glass-card */}
      <div className="glass-card">
        <h1 className="page-title">About Me</h1>
         <p>
          I am a self-taught full-stack developer and cybersecurity trainee with a unique origin story.
          Coming from an academic background as an Assistant Professor in English Literature, my curiosity
          for technology grew from a desire to build better digital learning tools.
        </p>

        <p>
          What began as late-night coding experiments evolved into a serious pursuit of software engineering,
          cloud computing, and cybersecurity.
        </p>

        <p>
          Today, I focus on building secure, accessible, and user-centric applications while strengthening
          my cybersecurity expertise.
        </p>

        <hr className="about-divider" />

        <h2 className="about-subtitle">Technical Skills</h2>
        <ul className="skills-list">
          <li><strong>Frontend:</strong> React, Next.js, JavaScript, TypeScript, HTML5, CSS3</li>
          <li><strong>Backend:</strong> Node.js, Express, REST APIs</li>
          <li><strong>Cloud & Databases:</strong> SQL, Microsoft Azure</li>
          <li><strong>Cybersecurity:</strong> Kali Linux, Pen Testing, Vulnerability Scanning</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
