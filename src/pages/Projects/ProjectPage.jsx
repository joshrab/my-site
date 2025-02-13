// src/pages/Projects/ProjectPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectPage.css';

const ProjectPage = () => {
  const projects = [
    {
      id: "order-processing",
      title: "Order Processing Application for Restaurants",
      description: "A full-stack Android application streamlining meal order processing and printing for local Durham restaurants in a $120K annual revenue business.",
      date: "June 2024 – Present",
      techStack: ["Kotlin", "StarXpand SDK", "Android"],
      image: "/api/placeholder/400/300"
    },
    {
      id: "rippl",
      title: "Rippl: Student Ambassador Marketing Platform",
      description: "A full-stack platform connecting local businesses with student brand ambassadors, streamlining marketing campaigns and student influencer discovery.",
      date: "Dec 2024 – Present 2025",
      techStack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
      image: "/api/placeholder/400/300"
    },
    {
      id: "veterans-insurance",
      title: "Insurance Price Navigation Tool for Veterans",
      description: "A web tool helping 1.2 million veterans navigate insurance options to find the lowest-cost diabetes medications.",
      date: "May – Aug 2024",
      techStack: ["Ruby on Rails", "PostgreSQL", "React"],
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="project-container">
      {projects.map((project) => (
        <Link 
          key={project.id}
          to={`/projects/${project.id}`}
          className="project-item"
        >
          <div className="project-content">
            <div className="image-container">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="project-image"
              />
            </div>
            
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-date">{project.date}</p>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectPage;