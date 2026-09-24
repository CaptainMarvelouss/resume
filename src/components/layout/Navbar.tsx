import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Terminal, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { Button } from '@/components/ui/Button';
import { profileData } from '@/data/profile';
import { useLanguage } from '@/context/LanguageContext';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(['about', 'experience', 'projects', 'skills', 'contact'], 120);

  const navLinks = [
    { href: '#about', label: language === 'vi' ? 'Giới thiệu' : 'About', id: 'about' },
    { href: '#experience', label: language === 'vi' ? 'Kinh nghiệm' : 'Experience', id: 'experience' },
    { href: '#projects', label: language === 'vi' ? 'Dự án' : 'Projects', id: 'projects' },
    { href: '#skills', label: language === 'vi' ? 'Kỹ năng' : 'Skills', id: 'skills' },
    { href: '#contact', label: language === 'vi' ? 'Liên hệ' : 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-[#5E6AD2] text-white rounded-md font-mono text-sm shadow-lg focus:outline-none"
      >
        {language === 'vi' ? 'Chuyển đến nội dung chính' : 'Skip to main content'}
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050506]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-sm'
            : 'bg-[#050506]/50 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Identity */}
            <a
              href="#"
              className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#EDEDEF] group transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2] rounded-md py-1 px-1.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08] text-[#818CF8] group-hover:border-[#5E6AD2]/50 group-hover:text-white transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                <Terminal className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium tracking-tight text-white leading-none">
                  {profileData.identity.name}
                </span>
                <span className="font-mono text-[10px] text-[#8A8F98] leading-tight">
                  .NET Backend
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.06] backdrop-blur-sm" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2] ${
                      isActive ? 'text-white' : 'text-[#8A8F98] hover:text-[#EDEDEF]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.1] shadow-sm"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Actions: Language Toggle + CTA */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Language Switcher */}
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={language === 'en' ? 'Switch to Vietnamese' : 'Chuyển sang tiếng Anh'}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/[0.15] text-xs font-mono text-[#8A8F98] hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2]"
              >
                <Globe className="h-3.5 w-3.5 text-[#818CF8]" />
                <span className={language === 'en' ? 'text-white font-semibold' : 'opacity-60'}>EN</span>
                <span className="opacity-40">/</span>
                <span className={language === 'vi' ? 'text-white font-semibold' : 'opacity-60'}>VI</span>
              </button>

              <Button
                variant="primary"
                size="sm"
                href={`mailto:${profileData.identity.email}?subject=Inquiry`}
                icon={<Mail className="h-3.5 w-3.5" />}
                iconPosition="left"
              >
                {language === 'vi' ? 'Liên hệ' : 'Get in touch'}
              </Button>
            </div>

            {/* Mobile Actions: Language + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className="flex items-center gap-1 px-2 py-1 rounded-md border border-white/[0.08] bg-white/[0.03] text-xs font-mono text-[#EDEDEF]"
              >
                <Globe className="h-3.5 w-3.5 text-[#818CF8]" />
                <span className="font-semibold">{language.toUpperCase()}</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center p-2 rounded-lg text-[#8A8F98] hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden border-b border-white/[0.08] bg-[#050506]/98 backdrop-blur-2xl px-5 py-6 shadow-2xl"
            >
              <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={handleNavClick}
                      className={`flex items-center justify-between py-2 text-sm font-medium transition-colors border-b border-white/[0.04] ${
                        isActive ? 'text-[#818CF8]' : 'text-[#8A8F98] hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#5E6AD2]" />}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-6 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  href={`mailto:${profileData.identity.email}?subject=Inquiry`}
                  icon={<Mail className="h-4 w-4" />}
                  iconPosition="left"
                  className="w-full"
                  onClick={handleNavClick}
                >
                  {language === 'vi' ? 'Liên hệ' : 'Get in touch'}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
