import React from 'react';
import { Card } from '@/components/ui/Card';
import { TechIcon } from '@/components/ui/TechIcon';
import { Reveal } from '@/components/ui/Reveal';
import { profileData } from '@/data/profile';
import { Briefcase, Calendar, MapPin, Target } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Experience: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-12 sm:py-16 lg:py-20 border-t border-white/[0.06] scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="experience-heading"
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#EDEDEF] mb-8"
          >
            {language === 'vi' ? 'Kinh nghiệm' : 'Experience'}
          </h2>
        </Reveal>

        {/* Vertical Timeline with hairline line and compact cards */}
        <div className="relative border-l border-white/[0.1] ml-3 sm:ml-6 pl-5 sm:pl-8 space-y-6">
          {profileData.experiences.map((exp, idx) => (
            <div key={exp.id} className="relative">
              {/* Glowing node */}
              <div
                aria-hidden="true"
                className="absolute -left-[27px] sm:-left-[39px] top-5 flex items-center justify-center h-3.5 w-3.5 rounded-full bg-[#050506] border-2 border-[#5E6AD2] shadow-[0_0_10px_rgba(94,106,210,0.8)]"
              >
                <div className="h-1 w-1 rounded-full bg-white" />
              </div>

              <Reveal delay={idx * 0.1}>
                <Card
                  variant="default"
                  enableSpotlight={true}
                  className="p-4 sm:p-5 bg-[#0a0a0d]/90 hover:border-white/[0.12] transition-all"
                >
                  {/* Header Row: Role, Company, Location, and Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-white/[0.05]">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#818CF8] shrink-0">
                        <Briefcase className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white tracking-tight leading-snug">
                          {exp.role[language]}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-[#8A8F98]">
                          <span className="text-[#EDEDEF]">{exp.company}</span>
                          <span>&middot;</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-[#5E6AD2]" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#818CF8] shrink-0">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* ONE line with Target icon */}
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-[#EDEDEF]/90 mb-4">
                    <Target className="h-4 w-4 text-[#5E6AD2] shrink-0 mt-0.5" />
                    <span>{exp.oneLiner[language]}</span>
                  </div>

                  {/* Icon-only tech row */}
                  <div className="flex items-center gap-2">
                    {exp.techStack.map((tech) => (
                      <TechIcon key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                </Card>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
