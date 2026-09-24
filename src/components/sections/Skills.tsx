import React from 'react';
import { Card } from '@/components/ui/Card';
import { TechIcon } from '@/components/ui/TechIcon';
import { Reveal } from '@/components/ui/Reveal';
import { profileData } from '@/data/profile';
import {
  Server,
  Database,
  Layout,
  Wrench,
  Bot,
  GraduationCap,
  BookOpen,
  MessagesSquare,
  Languages,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Skills: React.FC = () => {
  const { language } = useLanguage();

  const getGroupHeaderIcon = (icon: string) => {
    switch (icon) {
      case 'server':
        return <Server className="h-4 w-4 text-[#818CF8]" />;
      case 'database':
        return <Database className="h-4 w-4 text-[#818CF8]" />;
      case 'layout':
        return <Layout className="h-4 w-4 text-[#818CF8]" />;
      case 'wrench':
        return <Wrench className="h-4 w-4 text-[#818CF8]" />;
      case 'bot':
        return <Bot className="h-4 w-4 text-[#818CF8]" />;
      default:
        return null;
    }
  };

  const getCommIcon = (icon: 'book' | 'message' | 'language') => {
    switch (icon) {
      case 'book':
        return <BookOpen className="h-3.5 w-3.5 text-[#818CF8]" />;
      case 'message':
        return <MessagesSquare className="h-3.5 w-3.5 text-[#818CF8]" />;
      case 'language':
        return <Languages className="h-3.5 w-3.5 text-[#818CF8]" />;
    }
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-12 sm:py-16 lg:py-20 border-t border-white/[0.06] scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="skills-heading"
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#EDEDEF] mb-8"
          >
            {profileData.skills.heading[language]}
          </h2>
        </Reveal>

        {/* Asymmetric Bento Groups: Back-end is largest */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-5">
          {/* Back-End: largest (7 cols) */}
          <Reveal className="lg:col-span-7">
            <Card
              variant="gradient"
              enableSpotlight={true}
              className="p-5 h-full border-[#5E6AD2]/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/[0.06]">
                  {getGroupHeaderIcon('server')}
                  <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
                    {profileData.skills.groups[0].name[language]}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {profileData.skills.groups[0].skills.map((skill) => (
                    <TechIcon key={skill} name={skill} showLabel={true} size="md" />
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Database: (5 cols) */}
          <Reveal delay={0.05} className="lg:col-span-5">
            <Card
              variant="default"
              enableSpotlight={true}
              className="p-5 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/[0.06]">
                  {getGroupHeaderIcon('database')}
                  <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
                    {profileData.skills.groups[1].name[language]}
                  </h3>
                </div>

                <div className="flex flex-col gap-2.5">
                  {profileData.skills.groups[1].skills.map((skill) => (
                    <TechIcon key={skill} name={skill} showLabel={true} size="md" />
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Front-End: (4 cols) */}
          <Reveal delay={0.1} className="lg:col-span-4">
            <Card
              variant="default"
              enableSpotlight={true}
              className="p-5 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/[0.06]">
                  {getGroupHeaderIcon('layout')}
                  <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
                    {profileData.skills.groups[2].name[language]}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {profileData.skills.groups[2].skills.map((skill) => (
                    <TechIcon key={skill} name={skill} showLabel={true} size="sm" />
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Tools: (4 cols) */}
          <Reveal delay={0.15} className="lg:col-span-4">
            <Card
              variant="default"
              enableSpotlight={true}
              className="p-5 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/[0.06]">
                  {getGroupHeaderIcon('wrench')}
                  <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
                    {profileData.skills.groups[3].name[language]}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {profileData.skills.groups[3].skills.map((skill) => (
                    <TechIcon key={skill} name={skill} showLabel={true} size="sm" />
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>

          {/* AI Workflow: (4 cols) */}
          <Reveal delay={0.2} className="lg:col-span-4">
            <Card
              variant="default"
              enableSpotlight={true}
              className="p-5 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/[0.06]">
                  {getGroupHeaderIcon('bot')}
                  <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">
                    {profileData.skills.groups[4].name[language]}
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  {profileData.skills.groups[4].skills.map((skill) => (
                    <TechIcon key={skill} name={skill} showLabel={true} size="sm" />
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Bottom row: Communication 3 Chips + Education Compact One-Line Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          {/* Communication 3 Chips */}
          <div className="lg:col-span-5 flex flex-wrap items-center gap-2">
            {profileData.skills.communication.map((comm) => (
              <div
                key={comm.label.en}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#EDEDEF]"
              >
                {getCommIcon(comm.icon)}
                <span>{comm.label[language]}</span>
              </div>
            ))}
          </div>

          {/* Education: Compact One-Line Card */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-[#EDEDEF]">
              <GraduationCap className="h-4 w-4 text-[#818CF8] shrink-0" />
              <span className="font-mono text-[#8A8F98]">
                {profileData.skills.education[language]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
