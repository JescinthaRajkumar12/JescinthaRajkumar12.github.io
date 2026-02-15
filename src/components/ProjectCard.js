import React from 'react';
import { Card, CardContent, Typography, Chip, Stack, Button, Box } from '@mui/material';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, status, description, techStack, demoLink, githubLink }) => {
  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      /* Injecting High-Fidelity Dark Glassmorphism */
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      color: '#f8fafc',
      borderRadius: '16px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 30px rgba(0, 210, 255, 0.15)'
      }
    }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff' }}>{title}</Typography>
        <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 'bold' }}>Status: {status}</Typography>

        <Typography variant="body2" sx={{ mt: 2, color: '#cbd5e1', lineHeight: 1.7 }}>
          {description}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: 'wrap', gap: 1 }}>
          {(techStack || []).map((tech, i) => (
            <Chip 
              key={i} 
              label={tech} 
              size="small" 
              sx={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                color: '#fff', 
                border: '1px solid rgba(255, 255, 255, 0.1)' 
              }} 
            />
          ))}
        </Stack>
      </CardContent>

      <Box sx={{ p: 2, display: 'flex', gap: 1 }}>
        <Button 
          startIcon={<FaGithub />} 
          href={githubLink} 
          target="_blank"
          sx={{ color: '#38bdf8', textTransform: 'none', '&:hover': { background: 'rgba(56, 189, 248, 0.1)' } }}
        >
          GitHub
        </Button>

        {demoLink && (
          <Button 
            startIcon={<FaExternalLinkAlt />} 
            href={demoLink} 
            target="_blank"
            sx={{ color: '#38bdf8', textTransform: 'none', '&:hover': { background: 'rgba(56, 189, 248, 0.1)' } }}
          >
            Live Site
          </Button>
        )}
      </Box>
    </Card>
  );
};

export default ProjectCard;