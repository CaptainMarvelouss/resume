import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '@/data/profile';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020203] border-t border-white/[0.06] py-8 text-[#8A8F98]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        {/* Copyright */}
        <span>{profileData.footer.copyright}</span>

        {/* Center: Social / Contact Icon Links */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profileData.identity.email}`}
            aria-label="Send email"
            className="p-1.5 rounded-lg text-[#8A8F98] hover:text-white hover:bg-white/[0.05] transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>

          {profileData.identity.githubUrl && (
            <a
              href={profileData.identity.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-1.5 rounded-lg text-[#8A8F98] hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          )}

          {profileData.identity.linkedinUrl && (
            <a
              href={profileData.identity.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-1.5 rounded-lg text-[#8A8F98] hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label={profileData.footer.backToTop[language]}
          className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-[#EDEDEF] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2]"
        >
          <span>{profileData.footer.backToTop[language]}</span>
          <ArrowUp className="h-3.5 w-3.5 text-[#818CF8] group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
