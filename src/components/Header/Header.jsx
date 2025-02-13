import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <Link to="#" className="header-icon">
          <Sun className="w-6 h-6" />
        </Link>
        <Link to="#" className="header-icon">
          <Mail className="w-6 h-6" />
        </Link>
        <Link to="#" className="header-icon">
          <Github className="w-6 h-6" />
        </Link>
        <Link to="#" className="header-icon">
          <Linkedin className="w-6 h-6" />
        </Link>
        <Link to="#" className="header-icon">
          <Instagram className="w-6 h-6" />
        </Link>
      </nav>
    </header>
  );
}
