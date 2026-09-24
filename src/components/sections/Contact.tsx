import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { profileData } from '@/data/profile';
import { Mail, Copy, Check, Download, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.identity.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-14 sm:py-20 lg:py-24 border-t border-white/[0.06] scroll-mt-16"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          {/* Headline - no paragraph */}
          <h2
            id="contact-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6"
          >
            {profileData.contact.heading[language]}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Card
            variant="gradient"
            enableSpotlight={true}
            className="p-6 sm:p-8 border-[#5E6AD2]/30 shadow-[0_8px_30px_rgba(94,106,210,0.15)] flex flex-col items-center justify-center space-y-5"
          >
            {/* Large Mono Email with Mail Icon */}
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#818CF8] shrink-0" />
              <span className="font-mono text-lg sm:text-2xl md:text-3xl font-semibold text-white tracking-tight break-all">
                {profileData.identity.email}
              </span>
            </div>

            {/* Action Buttons: on mobile icon-only with aria-label, desktop with label */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
              {/* Send Email */}
              <Button
                variant="primary"
                size="md"
                href={`mailto:${profileData.identity.email}?subject=Collaboration%20Inquiry`}
                icon={<Mail className="h-4 w-4" />}
                iconPosition="left"
                aria-label={profileData.contact.sendEmail[language]}
              >
                <span className="hidden sm:inline">{profileData.contact.sendEmail[language]}</span>
              </Button>

              {/* Copy Email */}
              <Button
                variant="secondary"
                size="md"
                onClick={handleCopyEmail}
                icon={
                  copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-[#818CF8]" />
                  )
                }
                iconPosition="left"
                aria-label={copied ? profileData.contact.copied[language] : profileData.contact.copyEmail[language]}
              >
                <span className="hidden sm:inline">
                  {copied ? profileData.contact.copied[language] : profileData.contact.copyEmail[language]}
                </span>
              </Button>

              {/* Download CV */}
              <Button
                variant="outline"
                size="md"
                href={profileData.identity.resumePath}
                download="Phan_Duong_Huy_Resume.pdf"
                icon={<Download className="h-4 w-4 text-[#8A8F98]" />}
                iconPosition="left"
                aria-label={profileData.contact.downloadCv[language]}
              >
                <span className="hidden sm:inline">{profileData.contact.downloadCv[language]}</span>
              </Button>

              {/* GitHub (Hidden if empty) */}
              {profileData.identity.githubUrl && (
                <Button
                  variant="ghost"
                  size="md"
                  href={profileData.identity.githubUrl}
                  target="_blank"
                  icon={<Github className="h-4 w-4" />}
                  iconPosition="left"
                  aria-label="GitHub"
                >
                  <span className="hidden sm:inline">GitHub</span>
                </Button>
              )}

              {/* LinkedIn (Hidden if empty) */}
              {profileData.identity.linkedinUrl && (
                <Button
                  variant="ghost"
                  size="md"
                  href={profileData.identity.linkedinUrl}
                  target="_blank"
                  icon={<Linkedin className="h-4 w-4" />}
                  iconPosition="left"
                  aria-label="LinkedIn"
                >
                  <span className="hidden sm:inline">LinkedIn</span>
                </Button>
              )}
            </div>

            {/* Screen-reader Live Feedback */}
            <div aria-live="polite" className="sr-only">
              {copied && profileData.contact.copied[language]}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};
