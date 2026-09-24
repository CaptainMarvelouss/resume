import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { TechIcon } from '@/components/ui/TechIcon';
import { Reveal } from '@/components/ui/Reveal';
import { profileData, LeanProject } from '@/data/profile';
import {
  Users,
  Calendar,
  ArrowUpRight,
  Github,
  ExternalLink,
  Waypoints,
  Workflow,
  Database,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<LeanProject | null>(null);

  const getChipIcon = (type: string) => {
    switch (type) {
      case 'api':
        return <Waypoints className="h-3 w-3 text-[#00B4D8]" />;
      case 'logic':
        return <Workflow className="h-3 w-3 text-[#818CF8]" />;
      case 'db':
        return <Database className="h-3 w-3 text-[#CC292B]" />;
      case 'auth':
        return <ShieldCheck className="h-3 w-3 text-emerald-400" />;
      case 'workflow':
        return <Workflow className="h-3 w-3 text-amber-400" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-12 sm:py-16 lg:py-20 border-t border-white/[0.06] scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#EDEDEF] mb-8"
          >
            {language === 'vi' ? 'Dự án' : 'Projects'}
          </h2>
        </Reveal>

        {/* Asymmetric Bento Grid: 6 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          {profileData.projects.map((project, idx) => {
            const isHero = project.isHero;
            const colSpan = isHero
              ? 'lg:col-span-4'
              : idx === 1
              ? 'lg:col-span-2'
              : 'lg:col-span-3';

            return (
              <Reveal key={project.id} delay={idx * 0.08} className={colSpan}>
                <Card
                  variant={isHero ? 'gradient' : 'default'}
                  enableSpotlight={true}
                  className={`p-5 sm:p-6 flex flex-col justify-between h-full cursor-pointer group hover:border-white/20 transition-all duration-200 ${
                    isHero ? 'border-[#5E6AD2]/30' : ''
                  }`}
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  aria-label={`View details for ${project.title}`}
                >
                  <div>
                    {/* Header: Title + Meta Row + Corner Arrow */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white group-hover:text-[#818CF8] transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs font-mono text-[#8A8F98] mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {project.period}
                          </span>
                          <span>&middot;</span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {project.teamSize}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#8A8F98] hover:text-white transition-colors"
                            aria-label={`GitHub repo for ${project.title}`}
                          >
                            <Github className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#8A8F98] hover:text-white transition-colors"
                            aria-label={`Live demo for ${project.title}`}
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                        <span className="p-1 text-[#8A8F98] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>

                    {/* 1 Summary line (<= 12 words) */}
                    <p className="text-xs sm:text-sm text-[#EDEDEF]/85 line-clamp-2 my-3">
                      {project.summary[language]}
                    </p>

                    {/* 2-3 Responsibility Icon Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-4">
                      {project.responsibilityChips.map((chip) => (
                        <span
                          key={chip.type}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-[#EDEDEF]"
                        >
                          {getChipIcon(chip.type)}
                          <span>{chip.label[language]}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Icon-Only Tech Row */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center gap-1.5">
                    {project.techStack.map((tech) => (
                      <TechIcon key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Accessible Detail Modal - ONLY place with full verbatim text */}
      <Modal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || 'Project Details'}
      >
        {selectedProject && (
          <div className="space-y-5">
            {/* Meta row */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono text-[#8A8F98]">
              <span className="text-[#818CF8] font-medium">{selectedProject.organization}</span>
              <div className="flex items-center gap-3">
                <span>{selectedProject.period}</span>
                <span>&middot;</span>
                <span>Team: {selectedProject.teamSize}</span>
              </div>
            </div>

            {/* Verbatim Role */}
            <div>
              <h4 className="text-xs font-mono uppercase text-[#8A8F98] tracking-wider mb-2">
                {language === 'vi' ? 'Vai trò & Đóng góp' : 'Role & Technical Scope'}
              </h4>
              <p className="text-sm leading-relaxed text-[#EDEDEF]">
                {selectedProject.modal[language].roleVerbatim}
              </p>
            </div>

            {/* Verbatim Result */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {language === 'vi' ? 'Kết quả' : 'Result'}
              </h4>
              <p className="text-xs sm:text-sm text-[#EDEDEF] leading-relaxed">
                {selectedProject.modal[language].resultVerbatim}
              </p>
            </div>

            {/* Full Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase text-[#8A8F98] tracking-wider mb-2">
                {language === 'vi' ? 'Công nghệ sử dụng' : 'Technologies'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <TechIcon key={tech} name={tech} showLabel={true} size="sm" />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedProject(null)}
              >
                {language === 'vi' ? 'Đóng' : 'Close'}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
