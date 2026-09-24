import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { TechIcon } from '@/components/ui/TechIcon';
import { profileData } from '@/data/profile';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useLanguage } from '@/context/LanguageContext';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.97]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, 40]);

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Hero"
      className="relative min-h-[85vh] pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 flex items-center"
    >
      <motion.div
        style={
          reducedMotion
            ? undefined
            : {
                opacity: heroOpacity,
                scale: heroScale,
                y: heroY,
              }
        }
        className="w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5">
            {/* Avatar + Status Row */}
            <div className="flex items-center gap-4">
              <Avatar
                src={profileData.identity.avatarPath}
                alt={`${profileData.identity.name} – ${profileData.identity.roleTitle[language]}`}
                initials={profileData.identity.name.split(' ').map(n => n[0]).slice(-2).join('')}
                size="lg"
                withStatusDot={true}
              />
              <div className="flex flex-col gap-1.5">
                <span className="text-lg sm:text-xl font-semibold tracking-tight text-white">
                  {profileData.identity.name}
                </span>
                <Badge variant="status" size="md" pulse={true}>
                  {profileData.identity.status[language]}
                </Badge>
              </div>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#EDEDEF]">
              {profileData.hero.headingPrefix[language]}
              <span className="shimmer-text font-semibold">
                {profileData.hero.headingAccent[language]}
              </span>
              {profileData.hero.headingSuffix[language]}
            </h1>

            {/* One line under headline: MapPin + Role · Location */}
            <div className="flex items-center gap-2 text-sm text-[#8A8F98]">
              <MapPin className="h-4 w-4 text-[#5E6AD2] shrink-0" />
              <span>
                {profileData.identity.roleTitle[language]} &middot; {profileData.identity.location}
              </span>
            </div>

            {/* CTAs with Icons */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                href={`mailto:${profileData.identity.email}?subject=Inquiry`}
                icon={<Mail className="h-4 w-4" />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                {language === 'vi' ? 'Liên hệ' : 'Get in touch'}
              </Button>

              <Button
                variant="secondary"
                size="md"
                href={profileData.identity.resumePath}
                download="Phan_Duong_Huy_Resume.pdf"
                icon={<Download className="h-4 w-4 text-[#818CF8]" />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                {language === 'vi' ? 'Tải CV' : 'Download CV'}
              </Button>
            </div>

            {/* Icon-Only Tech Row */}
            <div className="pt-2 flex items-center gap-2">
              {profileData.hero.techHighlights.map((tech) => (
                <TechIcon key={tech} name={tech} size="md" />
              ))}
            </div>
          </div>

          {/* Right Column: Lean Swagger Glass Card (4 endpoint rows only, no body, no clutter) */}
          <div className="lg:col-span-5 w-full" aria-hidden="true">
            <Card
              variant="default"
              enableSpotlight={true}
              className="p-4 sm:p-5 bg-[#0a0a0e]/80 border-white/[0.08] backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-[11px] text-[#8A8F98]">
                  ASP.NET Core Endpoints
                </span>
              </div>

              {/* 4 Endpoints List Only */}
              <div className="space-y-2">
                {profileData.hero.swaggerEndpoints.map((ep) => {
                  const methodColors = {
                    GET: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
                    POST: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
                    PUT: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
                    DELETE: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
                  }[ep.method];

                  return (
                    <div
                      key={ep.path}
                      className="p-2 rounded-lg border border-white/[0.05] bg-white/[0.02] font-mono text-xs flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${methodColors}`}>
                          {ep.method}
                        </span>
                        <span className="text-[#EDEDEF] text-xs truncate">{ep.path}</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono">200 OK</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
