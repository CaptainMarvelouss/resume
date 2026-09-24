import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { AmbientBackground } from '@/components/layout/AmbientBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#050506] text-[#EDEDEF] selection:bg-[#5E6AD2]/30 selection:text-white">
        {/* Background ambient lighting and noise */}
        <AmbientBackground />

        {/* Global Fixed Navbar with Language Switcher */}
        <Navbar />

        {/* Main Content Landmark */}
        <main id="main-content" className="relative z-10 focus:outline-none">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Global Lean Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
