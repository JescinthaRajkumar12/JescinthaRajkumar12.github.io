import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './index.css';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaDatabase, 
  FaServer, FaMicrosoft, FaLinux, FaLinkedin, FaCode, FaBriefcase, 
  FaBookOpen, FaGraduationCap, FaCertificate 
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJest } from 'react-icons/si';

// --- PAGE COMPONENTS ---

const Home = () => (
  <div className="page-container">
    <h1 className="page-title">Jescintha Rajkumar</h1>
    <p style={{ fontSize: '1.2rem', color: '#555' }}>
      Software Developer & Cybersecurity Trainee based in London.
    </p>
    <p>
      I am a full-stack developer skilled in JavaScript, TypeScript, React, Next.js, Node.js, and Azure. 
      I am experienced in REST API integration, server-side rendering (SSR), WCAG-compliant accessible applications, 
      and CI/CD pipelines. Currently, I am advancing my skills in cybersecurity, focusing on penetration testing and Linux administration.
    </p>
    
    <h3 style={{ marginTop: '3rem' }}>Core Technologies</h3>
    <div>
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

const Experience = () => (
  <div className="page-container">
    <h1 className="page-title">Experience</h1>
    
    <div className="card">
      <h3><FaBriefcase /> Cybersecurity Analyst Trainee</h3>
      <div className="card-subtitle">Code First Girls | Jan 2026 – Present</div>
      <ul>
        <li>Conduct vulnerability scans using GVM across multiple virtual environments.</li>
        <li>Perform penetration testing using Kali Linux and TryHackMe labs.</li>
        <li>Manage Linux OS and command-line security tools.</li>
        <li>Completed 25+ practical challenges on network security, web exploitation, and system hardening.</li>
      </ul>
    </div>

    <div className="card">
      <h3><FaBriefcase /> Trainee Full-Stack Developer</h3>
      <div className="card-subtitle">Code First Girls | Sep 2025 – Jan 2026</div>
      <ul>
        <li>Built full-stack applications with JavaScript, TypeScript, React, Node.js, and REST APIs.</li>
        <li>Implemented 30+ reusable React components with state management, reducing code duplication by 40%.</li>
        <li>Applied Next.js SSR to improve performance and SEO.</li>
        <li>Wrote unit and integration tests using Jest and React Testing Library (85%+ coverage).</li>
      </ul>
    </div>

    <div className="card">
      <h3><FaBriefcase /> Theatre Systems Administrator</h3>
      <div className="card-subtitle">London North West University Healthcare NHS Trust | Dec 2023 – Present</div>
      <ul>
        <li>Supported digital theatre and patient-tracking systems, ensuring data accuracy and operational continuity.</li>
        <li>Maintained secure, role-based access and system compliance per NHS governance.</li>
        <li>Performed system troubleshooting and minor process automation.</li>
      </ul>
    </div>
    
    <div className="card">
      <h3><FaBriefcase /> Assistant Professor</h3>
      <div className="card-subtitle">University of Madras | Jul 2021 – Nov 2022</div>
      <ul>
        <li>Published research on digital learning platforms, analysing engagement data from 500+ students.</li>
        <li>Led departmental digital documentation for NAAC accreditation.</li>
        <li>Mentored students in technology-enabled learning and problem-solving.</li>
      </ul>
    </div>
  </div>
);

const Projects = () => (
  <div className="page-container">
    <h1 className="page-title">Projects</h1>
    <div className="grid">
      <div className="card">
        <h3><FaCode /> Pickier Full Stack App</h3>
        <div className="card-subtitle">React, TypeScript, Node.js</div>
        <ul>
          <li>Developed full-stack application using modern React and REST APIs.</li>
          <li>Applied Next.js SSR for performance and SEO.</li>
          <li>Wrote unit and integration tests using Jest.</li>
        </ul>
      </div>

      <div className="card">
        <h3><FaDatabase /> Jeslit DBMS</h3>
        <div className="card-subtitle">SQL, Relational Design</div>
        <ul>
          <li>Designed a normalised relational schema for customers, orders, and rewards.</li>
          <li>Wrote complex SQL queries with JOINs and indexing.</li>
          <li>Optimised query performance while maintaining data integrity.</li>
        </ul>
      </div>

      <div className="card">
        <h3><FaServer /> Jeslit Reviews API</h3>
        <div className="card-subtitle">Node.js, Express, Postman</div>
        <ul>
          <li>Designed RESTful API using Node.js and Express.</li>
          <li>Implemented secure input validation and error handling.</li>
          <li>Documented endpoints and tested services via Postman.</li>
        </ul>
      </div>
    </div>
  </div>
);

const Education = () => (
  <div className="page-container">
    <h1 className="page-title">Education & Pubs</h1>
    
    <h3><FaGraduationCap /> Education</h3>
    <div className="card">
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}><strong>Cyber Security Masters Programme</strong><br/>Code First Girls (Expected 2027)</li>
        <li style={{ marginBottom: '1rem' }}><strong>Full Stack Development Programme</strong><br/>Code First Girls (First Class with Distinction)</li>
        <li style={{ marginBottom: '1rem' }}><strong>M.A. English Literature</strong><br/>University of Madras (Distinction)</li>
        <li><strong>B.A. English Literature</strong><br/>University of Madras (First Class)</li>
      </ul>
    </div>

    <h3><FaCertificate /> Certifications</h3>
    <div className="card">
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>• Microsoft Azure Fundamentals (AZ-900)</li>
        <li>• Microsoft Azure Data Fundamentals (DP-900)</li>
        <li>• Foundations of User Experience (UX) Design - Google</li>
        <li>• Introduction to AI & Security - Dstl and National Cyber Force</li>
        <li>• Python and SQL Kickstarter Course - Dstl</li>
      </ul>
    </div>

    <h3><FaBookOpen /> Publications</h3>
    <div className="card">
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Vocabulary Development using Quizlet Digital Flashcards</strong><br/>
          Article | <a href="https://www.researchgate.net/profile/Jescintha-Rajkumar-2" target="_blank" rel="noreferrer">View on ResearchGate</a>
        </li>
      </ul>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>© 2026 Jescintha Rajkumar. All rights reserved.</p>
      <div className="social-links">
        <span>Reach me at: </span>
        <a href="https://www.linkedin.com/in/jescintha-rajkumar/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/JescinthaRajkumar12" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <nav className="navbar">
          <h2>Jescintha.</h2>
          <div className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/education">Education & Pubs</NavLink>
          </div>
        </nav>

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;