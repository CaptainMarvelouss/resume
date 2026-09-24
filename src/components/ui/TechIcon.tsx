import React from 'react';
import {
  SiDotnet,
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
  SiJira,
  SiCloudinary,
  SiClaude,
  SiCursor,
} from 'react-icons/si';
import { TbBrandCSharp, TbBrandVisualStudio } from 'react-icons/tb';
import { Database, Layers, Waypoints, Code } from 'lucide-react';

interface TechMeta {
  label: string;
  color: string;
  icon: (props: { size?: number; className?: string }) => JSX.Element;
}

const OpenAiIcon = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4947zm-9.66-4.664a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1402-2.185zm-1.1633-10.038a4.4708 4.4708 0 0 1 2.3418-1.9729l-.0048.1658v5.5163a.776.776 0 0 0 .388.6765l5.8428 3.3685-2.02 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7865a4.504 4.504 0 0 1-1.6465-6.136zm16.597 3.8558L13.1908 8.2144l2.02-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4022-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.409 6.2297V3.8973a.0663.0663 0 0 1 .0332-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.664zm-12.641 4.145l-2.02-1.1635a.0804.0804 0 0 1-.038-.052V3.9725a4.4992 4.4992 0 0 1 7.371-3.4538l-.142.0805-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813zm1.0976 1.888l3.774-2.1818 3.774 2.1818v4.3636L12 17.587l-3.774-2.1818z" />
  </svg>
);

const techRegistry: Record<string, TechMeta> = {
  // Back-end
  'asp.net core': { label: 'ASP.NET Core', color: '#704fe6', icon: (p) => <SiDotnet {...p} /> },
  'asp.net': { label: 'ASP.NET', color: '#704fe6', icon: (p) => <SiDotnet {...p} /> },
  '.net': { label: '.NET', color: '#704fe6', icon: (p) => <SiDotnet {...p} /> },
  'c#': { label: 'C#', color: '#9B4993', icon: (p) => <TbBrandCSharp {...p} /> },
  'sql server': { label: 'SQL Server', color: '#CC292B', icon: (p) => <Database {...p} /> },
  'ef core': { label: 'EF Core', color: '#8b5cf6', icon: (p) => <Layers {...p} /> },
  'entity framework core': { label: 'EF Core', color: '#8b5cf6', icon: (p) => <Layers {...p} /> },
  'restful apis': { label: 'REST APIs', color: '#00B4D8', icon: (p) => <Waypoints {...p} /> },
  'rest api': { label: 'REST API', color: '#00B4D8', icon: (p) => <Waypoints {...p} /> },
  'rest apis': { label: 'REST APIs', color: '#00B4D8', icon: (p) => <Waypoints {...p} /> },
  'asp.net core web api': { label: 'Web API', color: '#00B4D8', icon: (p) => <Waypoints {...p} /> },

  // Front-end
  'react': { label: 'React', color: '#61DAFB', icon: (p) => <SiReact {...p} /> },
  'vue.js': { label: 'Vue.js', color: '#4FC08D', icon: (p) => <SiVuedotjs {...p} /> },
  'vue': { label: 'Vue.js', color: '#4FC08D', icon: (p) => <SiVuedotjs {...p} /> },
  'typescript': { label: 'TypeScript', color: '#3178C6', icon: (p) => <SiTypescript {...p} /> },
  'tailwind css': { label: 'Tailwind', color: '#38BDF8', icon: (p) => <SiTailwindcss {...p} /> },
  'tailwind': { label: 'Tailwind', color: '#38BDF8', icon: (p) => <SiTailwindcss {...p} /> },
  'html5': { label: 'HTML5', color: '#E34F26', icon: (p) => <SiHtml5 {...p} /> },
  'css3': { label: 'CSS3', color: '#1572B6', icon: (p) => <SiCss {...p} /> },
  'css': { label: 'CSS3', color: '#1572B6', icon: (p) => <SiCss {...p} /> },

  // Tools & Cloud
  'git': { label: 'Git', color: '#F05032', icon: (p) => <SiGit {...p} /> },
  'github': { label: 'GitHub', color: '#EDEDEF', icon: (p) => <SiGithub {...p} /> },
  'postman': { label: 'Postman', color: '#FF6C37', icon: (p) => <SiPostman {...p} /> },
  'swagger': { label: 'Swagger', color: '#85EA2D', icon: (p) => <SiSwagger {...p} /> },
  'jira': { label: 'Jira', color: '#2684FF', icon: (p) => <SiJira {...p} /> },
  'visual studio': { label: 'Visual Studio', color: '#9B4993', icon: (p) => <TbBrandVisualStudio {...p} /> },
  'cloudinary': { label: 'Cloudinary', color: '#3448C5', icon: (p) => <SiCloudinary {...p} /> },

  // AI Workflow
  'chatgpt': { label: 'ChatGPT', color: '#10A37F', icon: (p) => <OpenAiIcon {...p} /> },
  'claude ai': { label: 'Claude', color: '#D97706', icon: (p) => <SiClaude {...p} /> },
  'claude': { label: 'Claude', color: '#D97706', icon: (p) => <SiClaude {...p} /> },
  'cursor': { label: 'Cursor', color: '#EDEDEF', icon: (p) => <SiCursor {...p} /> },
};

export interface TechIconProps {
  name: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  showLabel = false,
  size = 'md',
  className = '',
}) => {
  const key = name.trim().toLowerCase();
  const meta = techRegistry[key] || {
    label: name,
    color: '#8A8F98',
    icon: (p: { size?: number; className?: string }) => <Code {...p} />,
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 20,
  }[size];

  const containerSizes = {
    sm: 'h-7 w-7 text-xs',
    md: 'h-8 w-8 text-xs',
    lg: 'h-10 w-10 text-sm',
  }[size];

  const IconComponent = meta.icon;

  if (!showLabel) {
    return (
      <div
        role="img"
        tabIndex={0}
        title={meta.label}
        aria-label={meta.label}
        style={{ '--hover-color': meta.color } as React.CSSProperties}
        className={`group relative inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#8A8F98] transition-all duration-200 hover:text-[var(--hover-color)] hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_0_12px_rgba(94,106,210,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2] cursor-default select-none ${containerSizes} ${className}`}
      >
        <IconComponent size={iconSizes} className="shrink-0 transition-transform duration-200 group-hover:scale-110" />
      </div>
    );
  }

  return (
    <div
      tabIndex={0}
      style={{ '--hover-color': meta.color } as React.CSSProperties}
      className={`group inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.04] text-[#8A8F98] transition-all duration-200 hover:text-[#EDEDEF] hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_0_12px_rgba(94,106,210,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2] select-none ${className}`}
    >
      <div className="text-[#8A8F98] transition-colors duration-200 group-hover:text-[var(--hover-color)]">
        <IconComponent size={iconSizes} className="shrink-0 transition-transform duration-200 group-hover:scale-110" />
      </div>
      <span className="font-mono text-xs text-[#EDEDEF] group-hover:text-white font-medium">
        {meta.label}
      </span>
    </div>
  );
};
