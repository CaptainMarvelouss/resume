export type Language = 'en' | 'vi';

export interface ProjectModalContent {
  roleVerbatim: string;
  resultVerbatim: string;
  responsibilities: string[];
}

export interface LeanProject {
  id: string;
  title: string;
  isHero?: boolean;
  period: string;
  teamSize: string;
  organization: string;
  summary: {
    en: string;
    vi: string;
  };
  responsibilityChips: Array<{
    type: 'api' | 'logic' | 'db' | 'auth' | 'workflow';
    label: {
      en: string;
      vi: string;
    };
  }>;
  techStack: string[];
  modal: {
    en: ProjectModalContent;
    vi: ProjectModalContent;
  };
  repoUrl?: string; // TODO: Add public repository URL
  demoUrl?: string; // TODO: Add live demo URL
}

export interface LeanExperience {
  id: string;
  role: {
    en: string;
    vi: string;
  };
  company: string;
  location: string;
  period: string;
  oneLiner: {
    en: string;
    vi: string;
  };
  techStack: string[];
}

export interface ProfileContent {
  identity: {
    name: string;
    location: string;
    email: string;
    phone: string;
    showPhone: boolean;
    // TODO: Add your public GitHub URL
    githubUrl: string;
    // TODO: Add your public LinkedIn URL
    linkedinUrl: string;
    resumePath: string;
    status: {
      en: string;
      vi: string;
    };
    roleTitle: {
      en: string;
      vi: string;
    };
  };
  hero: {
    headingPrefix: { en: string; vi: string };
    headingAccent: { en: string; vi: string };
    headingSuffix: { en: string; vi: string };
    techHighlights: string[];
    swaggerEndpoints: Array<{
      method: 'GET' | 'POST' | 'PUT' | 'DELETE';
      path: string;
    }>;
  };
  about: {
    heading: { en: string; vi: string };
    bio: {
      en: string;
      vi: string;
    };
    stats: Array<{
      value: string;
      label: {
        en: string;
        vi: string;
      };
      icon: 'clock' | 'users' | 'building' | 'graduation';
    }>;
  };
  experiences: LeanExperience[];
  projects: LeanProject[];
  skills: {
    heading: { en: string; vi: string };
    groups: Array<{
      key: string;
      name: { en: string; vi: string };
      icon: string;
      skills: string[];
    }>;
    communication: Array<{
      icon: 'book' | 'message' | 'language';
      label: { en: string; vi: string };
    }>;
    education: {
      en: string;
      vi: string;
    };
  };
  contact: {
    heading: { en: string; vi: string };
    sendEmail: { en: string; vi: string };
    copyEmail: { en: string; vi: string };
    copied: { en: string; vi: string };
    downloadCv: { en: string; vi: string };
  };
  footer: {
    copyright: string;
    backToTop: { en: string; vi: string };
  };
}

export const profileData: ProfileContent = {
  identity: {
    name: 'Phan Duong Huy',
    location: 'Da Nang',
    email: 'phanduonghuy@gmail.com',
    phone: '0918 930 552',
    showPhone: false,
    githubUrl: '', // TODO: Add GitHub URL
    linkedinUrl: '', // TODO: Add LinkedIn URL
    resumePath: './Phan_Duong_Huy_Resume.pdf',
    status: {
      en: 'Open to work',
      vi: 'Sẵn sàng làm việc',
    },
    roleTitle: {
      en: 'Junior .NET Backend Developer',
      vi: 'Lập trình viên .NET Backend',
    },
  },

  hero: {
    headingPrefix: {
      en: 'I build ',
      vi: 'Tôi xây dựng ',
    },
    headingAccent: {
      en: 'reliable APIs',
      vi: 'API tin cậy',
    },
    headingSuffix: {
      en: ' with ASP.NET Core.',
      vi: ' với ASP.NET Core.',
    },
    techHighlights: ['ASP.NET Core', 'C#', 'SQL Server', 'EF Core', 'React'],
    swaggerEndpoints: [
      { method: 'GET', path: '/api/v1/projects' },
      { method: 'POST', path: '/api/v1/tasks' },
      { method: 'PUT', path: '/api/v1/classes/{id}' },
      { method: 'GET', path: '/api/v1/health' },
    ],
  },

  about: {
    heading: {
      en: 'About',
      vi: 'Giới thiệu',
    },
    bio: {
      en: 'Back-end developer with 8 months of experience building ASP.NET Core web apps, RESTful APIs and SQL Server databases in team projects. Aiming to grow into building scalable, maintainable systems.',
      vi: 'Lập trình viên backend với 8 tháng kinh nghiệm phát triển ứng dụng ASP.NET Core, thiết kế RESTful API và làm việc với SQL Server trong các dự án nhóm. Định hướng phát triển hệ thống mở rộng, bảo trì tốt.',
    },
    stats: [
      {
        value: '8 mo',
        label: { en: 'Experience', vi: 'Kinh nghiệm' },
        icon: 'clock',
      },
      {
        value: '3',
        label: { en: 'Team projects', vi: 'Dự án nhóm' },
        icon: 'users',
      },
      {
        value: '2',
        label: { en: 'Companies', vi: 'Doanh nghiệp' },
        icon: 'building',
      },
      {
        value: 'B.Sc.',
        label: { en: 'FPT · 2021-25', vi: 'FPT · 2021-25' },
        icon: 'graduation',
      },
    ],
  },

  experiences: [
    {
      id: 'tan-hung-anh',
      role: {
        en: 'Software Developer',
        vi: 'Lập trình viên Phần mềm',
      },
      company: 'Tan Hung Anh Company',
      location: 'Da Nang',
      period: '05/2026 – 08/2026',
      oneLiner: {
        en: 'Built the company website; migrated it from WordPress to .NET.',
        vi: 'Phát triển website công ty; chuyển đổi từ WordPress sang .NET.',
      },
      techStack: ['ASP.NET', 'React', 'Cloudinary'],
    },
    {
      id: 'fpt-software',
      role: {
        en: 'Software Developer Intern',
        vi: 'Thực tập sinh Lập trình',
      },
      company: 'FPT Software',
      location: 'Da Nang',
      period: '09/2024 – 12/2024',
      oneLiner: {
        en: 'Built Project and Task Management modules for a Jira-like platform.',
        vi: 'Phát triển module Quản lý Dự án & Công việc cho nền tảng kiểu Jira.',
      },
      techStack: ['ASP.NET Core', 'Vue.js', 'SQL Server', 'Cloudinary'],
    },
  ],

  projects: [
    {
      id: 'edusphere',
      title: 'EduSphere',
      isHero: true,
      period: '09/2025 – 12/2025',
      teamSize: '5',
      organization: 'FPT University',
      summary: {
        en: 'School events, clubs and classroom management.',
        vi: 'Quản lý sự kiện trường học, câu lạc bộ và lớp học.',
      },
      responsibilityChips: [
        { type: 'api', label: { en: 'APIs', vi: 'APIs' } },
        { type: 'logic', label: { en: 'Logic', vi: 'Logic' } },
        { type: 'db', label: { en: 'DB', vi: 'CSDL' } },
      ],
      techStack: ['ASP.NET Core', 'C#', 'SQL Server', 'React', 'Git', 'Swagger', 'Postman'],
      modal: {
        en: {
          roleVerbatim:
            'Admin and Class Management modules (user management, class creation, teacher assignment, student management), RESTful APIs, business logic, database operations.',
          resultVerbatim:
            'Integrated school activity platform where admins and teachers manage classes, clubs, events and classroom activities while students get a centralized place to participate.',
          responsibilities: [
            'Admin and Class Management modules (user management, class creation, teacher assignment, student management)',
            'RESTful APIs design and implementation',
            'Business logic handling',
            'Database operations with SQL Server',
          ],
        },
        vi: {
          roleVerbatim:
            'Phụ trách các module Quản trị và Quản lý lớp học (quản lý người dùng, tạo lớp học, phân công giảng viên, quản lý sinh viên), RESTful APIs, nghiệp vụ hệ thống, thao tác cơ sở dữ liệu.',
          resultVerbatim:
            'Nền tảng tích hợp hoạt động học đường giúp ban giám hiệu và giáo viên quản lý lớp, câu lạc bộ, sự kiện và sinh viên tham gia tập trung.',
          responsibilities: [
            'Module Quản trị & Quản lý lớp học (tạo lớp, phân công giáo viên, quản lý sinh viên)',
            'Thiết kế và xây dựng RESTful APIs',
            'Xử lý nghiệp vụ logic hệ thống',
            'Thao tác cơ sở dữ liệu với SQL Server',
          ],
        },
      },
      repoUrl: '',
      demoUrl: '',
    },
    {
      id: 'timelux',
      title: 'TimeLux',
      period: '09/2024 – 12/2024',
      teamSize: '6',
      organization: 'FPT Software',
      summary: {
        en: 'Team task and project management platform.',
        vi: 'Nền tảng quản lý công việc và dự án nhóm.',
      },
      responsibilityChips: [
        { type: 'api', label: { en: 'APIs', vi: 'APIs' } },
        { type: 'logic', label: { en: 'Logic', vi: 'Logic' } },
        { type: 'db', label: { en: 'DB', vi: 'CSDL' } },
      ],
      techStack: ['ASP.NET Core', 'C#', 'SQL Server', 'Vue.js', 'Tailwind CSS', 'Git', 'Swagger', 'Postman'],
      modal: {
        en: {
          roleVerbatim:
            'Project Management module (project creation, project info, status tracking, member management), RESTful APIs, business logic, database operations.',
          resultVerbatim:
            'Centralized platform to organize projects, monitor status and manage workflows in one system.',
          responsibilities: [
            'Project Management module (project creation, project info, status tracking, member management)',
            'RESTful APIs implementation',
            'Business logic handling',
            'Database operations with SQL Server',
          ],
        },
        vi: {
          roleVerbatim:
            'Module Quản lý Dự án (tạo dự án, thông tin dự án, theo dõi trạng thái, quản lý thành viên), RESTful APIs, logic nghiệp vụ, thao tác cơ sở dữ liệu.',
          resultVerbatim:
            'Nền tảng tập trung giúp tổ chức dự án, theo dõi tiến độ và tối ưu luồng công việc trong một hệ thống.',
          responsibilities: [
            'Module Quản lý Dự án (tạo dự án, theo dõi trạng thái, phân quyền thành viên)',
            'Xây dựng RESTful APIs',
            'Xử lý logic nghiệp vụ',
            'Thao tác cơ sở dữ liệu SQL Server',
          ],
        },
      },
      repoUrl: '',
      demoUrl: '',
    },
    {
      id: 'teachmate',
      title: 'TeachMate',
      period: '05/2024 – 08/2024',
      teamSize: '5',
      organization: 'FPT University',
      summary: {
        en: 'Tutor search, lesson scheduling and ratings.',
        vi: 'Tìm kiếm gia sư, đặt lịch học và đánh giá.',
      },
      responsibilityChips: [
        { type: 'api', label: { en: 'APIs', vi: 'APIs' } },
        { type: 'auth', label: { en: 'Auth', vi: 'Xác thực' } },
        { type: 'db', label: { en: 'DB', vi: 'CSDL' } },
      ],
      techStack: ['ASP.NET Core Web API', 'C#', 'EF Core', 'SQL Server', 'React', 'TypeScript', 'Tailwind CSS', 'Git', 'Swagger', 'Postman'],
      modal: {
        en: {
          roleVerbatim:
            'Back-end of the Admin module (RESTful API design, user and tutor management, lesson management, authorization).',
          resultVerbatim: 'Functional tutor management and learning support platform.',
          responsibilities: [
            'Back-end of the Admin module',
            'RESTful API design',
            'User and tutor management',
            'Lesson management and authorization',
          ],
        },
        vi: {
          roleVerbatim:
            'Back-end của module Quản trị (thiết kế RESTful API, quản lý người dùng và gia sư, quản lý buổi học, phân quyền xác thực).',
          resultVerbatim: 'Nền tảng hỗ trợ học tập và quản lý gia sư hoàn chỉnh.',
          responsibilities: [
            'Xây dựng Back-end cho module Admin',
            'Thiết kế RESTful API',
            'Quản lý người dùng và gia sư',
            'Quản lý buổi học và phân quyền xác thực',
          ],
        },
      },
      repoUrl: '',
      demoUrl: '',
    },
    {
      id: 'tanhunganh',
      title: 'TanHungAnh',
      period: '05/2026 – 08/2026',
      teamSize: 'Team',
      organization: 'Tan Hung Anh',
      summary: {
        en: 'Company website migrated from WordPress to .NET.',
        vi: 'Chuyển đổi website công ty từ WordPress sang .NET.',
      },
      responsibilityChips: [
        { type: 'workflow', label: { en: 'Migration', vi: 'Chuyển đổi' } },
        { type: 'api', label: { en: 'APIs', vi: 'APIs' } },
        { type: 'db', label: { en: 'DB', vi: 'CSDL' } },
      ],
      techStack: ['ASP.NET', 'React', 'Cloudinary', 'SQL Server'],
      modal: {
        en: {
          roleVerbatim:
            'Designed and developed the TanHungAnh website for products, mobile awnings and glamping tents. Upgraded the website technology from WordPress to .NET.',
          resultVerbatim:
            'Upgraded the website technology from WordPress to .NET, improving performance and reliability.',
          responsibilities: [
            'Upgraded website architecture from WordPress to .NET',
            'Product catalog and media services with Cloudinary',
            'RESTful API implementation',
          ],
        },
        vi: {
          roleVerbatim:
            'Thiết kế và phát triển website TanHungAnh cho sản phẩm, mái hiên di động và lều glamping. Nâng cấp công nghệ website từ WordPress sang .NET.',
          resultVerbatim:
            'Chuyển đổi thành công hệ thống từ WordPress sang .NET, tăng cường hiệu năng và độ ổn định.',
          responsibilities: [
            'Nâng cấp kiến trúc website từ WordPress sang .NET',
            'Tích hợp lưu trữ hình ảnh Cloudinary',
            'Xây dựng RESTful API cho danh mục sản phẩm',
          ],
        },
      },
      repoUrl: '',
      demoUrl: '',
    },
  ],

  skills: {
    heading: {
      en: 'Skills',
      vi: 'Kỹ năng',
    },
    groups: [
      {
        key: 'backend',
        name: { en: 'Back-End', vi: 'Back-End' },
        icon: 'server',
        skills: ['ASP.NET Core', 'C#', 'REST APIs', 'EF Core'],
      },
      {
        key: 'database',
        name: { en: 'Database', vi: 'Cơ sở dữ liệu' },
        icon: 'database',
        skills: ['SQL Server'],
      },
      {
        key: 'frontend',
        name: { en: 'Front-End', vi: 'Front-End' },
        icon: 'layout',
        skills: ['React', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'],
      },
      {
        key: 'tools',
        name: { en: 'Tools', vi: 'Công cụ' },
        icon: 'wrench',
        skills: ['Git', 'Swagger', 'Postman', 'Jira', 'Visual Studio'],
      },
      {
        key: 'ai',
        name: { en: 'AI Workflow', vi: 'Quy trình AI' },
        icon: 'bot',
        skills: ['ChatGPT', 'Claude', 'Cursor'],
      },
    ],
    communication: [
      { icon: 'book', label: { en: 'Tech docs', vi: 'Tài liệu kỹ thuật' } },
      { icon: 'message', label: { en: 'Team talks', vi: 'Thảo luận nhóm' } },
      { icon: 'language', label: { en: 'English (basic)', vi: 'Tiếng Anh (cơ bản)' } },
    ],
    education: {
      en: 'FPT University Da Nang · B.Sc. Software Engineering · 2021-2025',
      vi: 'Đại học FPT Đà Nẵng · Kỹ sư Kỹ thuật Phần mềm · 2021-2025',
    },
  },

  contact: {
    heading: {
      en: "Let's build something reliable together.",
      vi: 'Cùng nhau xây dựng hệ thống tin cậy.',
    },
    sendEmail: {
      en: 'Send email',
      vi: 'Gửi email',
    },
    copyEmail: {
      en: 'Copy',
      vi: 'Sao chép',
    },
    copied: {
      en: 'Copied',
      vi: 'Đã sao chép',
    },
    downloadCv: {
      en: 'Download CV',
      vi: 'Tải CV',
    },
  },

  footer: {
    copyright: '© 2026 Phan Duong Huy',
    backToTop: {
      en: 'Back to top',
      vi: 'Lên đầu trang',
    },
  },
};
