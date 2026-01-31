/**
 * Developer Portfolio Website
 * A simple, clean portfolio for showcasing developer skills and projects
 * Built with React, but structured simply for beginners
 */

import { useState } from "react";

// ============================================
// NAVBAR COMPONENT
// Simple navigation with links to each section
// ============================================
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links array - easy to modify
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Developer Name */}
        <a href="#home" className="text-xl font-bold text-foreground">
          John Doe
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// ============================================
// HOME SECTION
// Introduction with name and tagline
// ============================================
const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section">
      <div className="text-center max-w-2xl mx-auto pt-16">
        {/* Developer Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          John Doe
        </h1>
        
        {/* Short Introduction */}
        <p className="text-xl text-muted-foreground mb-8">
          Frontend Developer | Creating beautiful web experiences
        </p>
        
        {/* Call to Action Button */}
        <a href="#projects" className="btn-primary inline-block">
          View Projects
        </a>
      </div>
    </section>
  );
};

// ============================================
// ABOUT SECTION
// Information about the developer
// ============================================
const AboutSection = () => {
  return (
    <section id="about" className="section-alt">
      <div className="container-narrow">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-2xl mx-auto text-center">
          {/* About paragraph */}
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Hello! I'm John, a passionate frontend developer currently pursuing my degree 
            in Computer Science. I love creating clean, user-friendly websites and applications 
            that solve real-world problems.
          </p>
          
          {/* Education & Interests */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm currently studying at ABC University, where I've developed a strong foundation 
            in web development technologies. When I'm not coding, you can find me exploring 
            new technologies, reading tech blogs, or working on personal projects.
          </p>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SKILLS SECTION
// List of technical skills
// ============================================
const SkillsSection = () => {
  // Skills array - easy to add or remove skills
  const skills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Git", icon: "📂" },
    { name: "Responsive Design", icon: "📱" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "TypeScript", icon: "📘" },
  ];

  return (
    <section id="skills" className="section">
      <div className="container-narrow">
        <h2 className="section-title">My Skills</h2>
        
        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-badge flex items-center gap-2">
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PROJECTS SECTION
// Showcase of projects
// ============================================
const ProjectsSection = () => {
  // Projects data - easy to add more projects
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my work and skills.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Weather App",
      description: "A simple weather application that displays current weather conditions.",
      technologies: ["JavaScript", "API", "CSS"],
    },
    {
      title: "Task Manager",
      description: "A to-do list application with add, edit, and delete functionality.",
      technologies: ["React", "CSS", "LocalStorage"],
    },
  ];

  return (
    <section id="projects" className="section-alt">
      <div className="container-narrow">
        <h2 className="section-title">My Projects</h2>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              
              {/* Project Description */}
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              
              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-accent/10 text-accent px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// CONTACT SECTION
// Simple contact form
// ============================================
const ContactSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission - shows alert message
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }
    
    // Show success message
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    
    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <div className="container-narrow">
        <h2 className="section-title">Contact Me</h2>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="form-input"
            />
          </div>
          
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="form-input"
            />
          </div>
          
          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={5}
              className="form-input resize-none"
            />
          </div>
          
          {/* Submit Button */}
          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

// ============================================
// FOOTER COMPONENT
// Copyright information
// ============================================
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="text-center">
        <p>© {currentYear} John Doe. All rights reserved.</p>
      </div>
    </footer>
  );
};

// ============================================
// MAIN INDEX PAGE
// Combines all sections together
// ============================================
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
