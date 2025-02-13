// src/pages/Projects/ProjectDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetailPage.css';

const ProjectDetailPage = () => {
  const { id } = useParams();
  
  const projects = {
    "order-processing": {
      title: "Order Processing Application for Restaurants",
      description: "A full-stack Android application streamlining meal order processing and printing for local Durham restaurants in a $120K annual revenue business.",
      date: "June 2024 – Present",
      techStack: ["Kotlin", "StarXpand SDK", "Android"],
      image: "/api/placeholder/800/400",
      bullets: [
        "Designed and developed a full-stack Android application to streamline meal order processing and printing for local Durham restaurants in a $120K annual revenue business.",
        "Implemented LAN-based receipt printing using Star Micronics' StarXpand SDK for asynchronous printing operations, with Bluetooth and USB printing options.",
        "Built with Kotlin, utilizing dynamic fragment management and an accessible, minimalistic UI."
      ]
    },
    // Add other projects similarly
  };

  const project = projects[id];

  if (!project) {
    return <div className="detail-container">Project not found</div>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-title">{project.title}</h1>
      <p className="detail-date">{project.date}</p>
      
      <div className="detail-image-container">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="detail-image"
        />
      </div>
      
      <div className="tech-stack">
        {project.techStack.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
      
      <p className="detail-description">{project.description}</p>
      
      <div className="detail-bullets">
        {project.bullets.map((bullet, index) => (
          <p key={index} className="detail-bullet">• {bullet}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailPage;