// src/pages/Home.js
import React from 'react';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, 
  FaMicrosoft, FaLinux 
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJest } from 'react-icons/si';

const Home = () => (
  /* Updated from page-container to page-wrapper for better width and alignment */
  <div className="page-wrapper">
    
    {/* FEATURE 1: Animated Gradient Title */}
    <h1 className="animated-gradient-text">Jescintha Rajkumar</h1>

    {/* FEATURE 2: Mock Terminal Window */}
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="terminal-button red"></span>
        <span className="terminal-button yellow"></span>
        <span className="terminal-button green"></span>
        <span className="terminal-title">guest@jescintha: ~</span>
      </div>
      <div className="terminal-body">
        <p><span className="prompt">guest@jescintha:~$</span> whoami</p>
        <p className="output">Software Developer & Cybersecurity Trainee</p>
        
        <p><span className="prompt">guest@jescintha:~$</span> cat location.txt</p>
        <p className="output">Based in London, UK</p>
        
        <p><span className="prompt">guest@jescintha:~$</span> ./get_mission.sh</p>
        <p className="output">
          Building secure, WCAG-compliant full-stack applications while advancing skills in penetration testing and Linux administration.
        </p>
        
        <p><span className="prompt">guest@jescintha:~$</span> <span className="cursor"></span></p>
      </div>
    </div>
    
    <h3 style={{ marginTop: '3rem', fontWeight: '800' }}>Core Technologies</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {/* FEATURE 3: Badges with CSS hover effects */}
      <span className="badge"><FaReact color="#61DAFB"/> React</span>
      <span className="badge"><SiNextdotjs color="#000"/> Next.js</span>
      <span className="badge"><SiTypescript color="#3178C6"/> TypeScript</span>
      <span className="badge"><FaNodeJs color="#339933"/> Node.js</span>
      <span className="badge"><FaDatabase color="#4479A1"/> SQL & DBs</span>
      <span className="badge"><FaMicrosoft color="#0089D6"/> Azure</span>
      <span className="badge"><FaLinux color="#000"/> Kali Linux</span>
      <span className="badge"><SiJest color="#C21325"/> Jest Testing</span>
      <span className="badge"><SiTailwindcss color="#38B2AC"/> Tailwind CSS</span>
      <span className="badge"><FaHtml5 color="#E34F26"/> HTML5</span>
      <span className="badge"><FaCss3Alt color="#1572B6"/> CSS3</span>
    </div>
  </div>
);

export default Home;