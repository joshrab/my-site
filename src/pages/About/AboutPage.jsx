import React, { useState, useEffect } from 'react';
import './AboutPage.css';
import { ArrowRight } from 'lucide-react';

const TypewriterText = ({ text, delay = 20, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return <span>{displayedText}</span>;
};

const WaveText = ({ text }) => {
  return (
    <span className="wave-text">
      {text.split("").map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {char}
        </span>
      ))}
    </span>
  );
};

const ProjectCard = () => {
  return (
    <a href="/projects" className="project-card">
      <div className="flex flex-col items-center text-center space-y-4">
        <WaveText text="Projects"/>
        <p>Explore my portfolio of web applications, mobile apps, and development tools</p>
        <ArrowRight className="arrow w-6 h-6 text-white" />
      </div>
    </a>
  );
};

const AboutPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    "Hey!",
    "My name is Josh Rabbani, and this is a showcase of my projects and passions.",
    "I love learning new languages, traveling, and creating cool projects (like the ones below) for social good.",
    "Feel free to contact me if you're interested in collaborating",
    "Ciao!",
  ];
  

  return (
    <div className="about-container">
      <h1 className="about-title">Josh Rabbani</h1>

      <div className="about-text-container">
        {sections.map((text, index) => (
          <div 
            key={index}
            className={`transition-opacity duration-500 ${
              currentSection >= index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {currentSection === index ? (
              <TypewriterText 
                text={text}
                onComplete={() => setCurrentSection(prev => prev + 1)}
              />
            ) : currentSection > index ? (
               text
            ) : null}
          </div>
        ))}
      </div>

      <div className="project-card-container">
        <ProjectCard />
      </div>

      <footer className="about-footer">
        © 2025 • Built with React & Tailwind
      </footer>
    </div>
  );
};

export default AboutPage;