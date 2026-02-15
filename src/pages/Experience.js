import React from 'react';
import { FaShieldAlt, FaCode, FaLaptopMedical, FaChalkboardTeacher } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Cybersecurity Analyst Trainee",
      company: "Code First Girls",
      date: "Jan 2026 – Present",
      icon: <FaShieldAlt />,
      points: [
        "Conduct vulnerability scans using GVM across multiple virtual environments.",
        "Perform penetration testing using Kali Linux and TryHackMe labs.",
        "Manage Linux OS and command-line security tools.",
        "Completed 25+ practical challenges on network security, web exploitation, and system hardening."
      ]
    },
    {
      title: "Trainee Full-Stack Developer",
      company: "Code First Girls",
      date: "Sep 2025 – Jan 2026",
      icon: <FaCode />,
      points: [
        "Built full-stack applications with JavaScript, TypeScript, React, Node.js, and REST APIs.",
        "Implemented reusable React components with state management.",
        "Applied Next.js SSR to improve performance and SEO.",
        "Wrote unit and integration tests using Jest and React Testing Library."
      ]
    },
    {
      title: "Theatre Systems Administrator",
      company: "London North West University Healthcare NHS Trust",
      date: "Dec 2023 – Present",
      icon: <FaLaptopMedical />,
      points: [
        "Supported digital theatre and patient-tracking systems.",
        "Maintained secure role-based access and system compliance.",
        "Performed system troubleshooting and minor automation."
      ]
    },
    {
      title: "Assistant Professor",
      company: "University of Madras",
      date: "Jul 2021 – Nov 2022",
      icon: <FaChalkboardTeacher />,
      points: [
        "Published research on digital learning platforms.",
        "Led departmental digital documentation for NAAC accreditation.",
        "Mentored students in technology-enabled learning."
      ]
    }
  ];

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Experience Journey</h1>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">{exp.icon}</div>

            <div className="timeline-content card">
              <span className="timeline-date">{exp.date}</span>
              <h3>{exp.title}</h3>
              <div className="card-subtitle">{exp.company}</div>

              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
