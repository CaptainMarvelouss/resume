import React from 'react';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { profileData } from '@/data/profile';
import { Clock, Users, Building2, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const About: React.FC = () => {
  const { language } = useLanguage();

  const getStatIcon = (iconType: string) => {
    switch (iconType) {
      case 'clock':
        return <Clock className="h-5 w-5 text-[#818CF8]" />;
      case 'users':
        return <Users className="h-5 w-5 text-[#818CF8]" />;
      case 'building':
        return <Building2 className="h-5 w-5 text-[#818CF8]" />;
      case 'graduation':
        return <GraduationCap className="h-5 w-5 text-[#818CF8]" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-12 sm:py-16 lg:py-20 border-t border-white/[0.06] scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#EDEDEF] mb-6"
          >
            {profileData.about.heading[language]}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: 2 sentences max */}
          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <Card className="p-6 bg-[#0a0a0c]/60 border-white/[0.06]">
                <p className="text-base sm:text-lg leading-relaxed text-[#EDEDEF]/90">
                  {profileData.about.bio[language]}
                </p>
              </Card>
            </Reveal>
          </div>

          {/* Right: 4 stat tiles (Icon + big value + label <= 2 words, no third line) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
            {profileData.about.stats.map((stat, idx) => (
              <Reveal key={stat.label.en} delay={0.08 + idx * 0.04}>
                <Card
                  variant="default"
                  className="p-4 sm:p-5 h-full flex flex-col justify-between"
                >
                  <div className="p-2 w-fit rounded-lg bg-white/[0.04] border border-white/[0.08] mb-3">
                    {getStatIcon(stat.icon)}
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono text-[#8A8F98]">
                      {stat.label[language]}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
