import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const profileLink = "https://github.com/JescinthaRajkumar12";

  const projectData = [
    { title: "Portfolio", status: "Current", image: "/images/portfolio.png", description: "Modern React portfolio built with MUI. Features custom animations.", techStack: ["React", "MUI"], githubLink: profileLink, demoLink: "https://jescintharajkumar12.github.io" },
    { title: "Bookshelf", status: "Completed", image: "/images/bookshelf.png", description: "Digital library interface mimicking physical browsing.", techStack: ["HTML", "CSS", "JS"], githubLink: profileLink },
    { title: "Pickier App", status: "Completed", image: "/images/pickier.png", description: "Full-stack React app with REST API integration.", techStack: ["React", "Node"], githubLink: profileLink },
    { title: "DBMS", status: "Completed", image: "", description: "Relational schema design for order tracking using SQL.", techStack: ["SQL"], githubLink: profileLink },
    { title: "Reviews API", status: "Completed", image: "", description: "RESTful API built with Node.js and Express.", techStack: ["Node.js", "Express"], githubLink: profileLink }
  ];

  return (
    // Changed bgcolor from '#fff' to 'transparent' to show the dark gradient!
    <Box sx={{ bgcolor: 'transparent', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign="center" fontWeight="900" sx={{ color: '#fff' }} gutterBottom>
          Projects
        </Typography>
        <Typography variant="h6" textAlign="center" sx={{ mb: 6, color: '#94a3b8' }}>
          Individual Projects
        </Typography>
        
        <Grid container spacing={4} alignItems="stretch">
          {projectData.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;