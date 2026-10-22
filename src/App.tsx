import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ProjectsSection } from './components/ProjectsSection';
import { GameDevSection } from './components/GameDevSection';
import { WritingSection } from './components/WritingSection';
import { GithubSection } from './components/GithubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <GameDevSection />
        <WritingSection />
        <GithubSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;