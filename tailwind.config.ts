import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          deep: 'var(--bg-deep, #020203)',
          base: 'var(--bg-base, #050506)',
          elevated: 'var(--bg-elevated, #0a0a0c)',
        },
        surface: {
          DEFAULT: 'var(--surface, rgba(255, 255, 255, 0.05))',
          hover: 'var(--surface-hover, rgba(255, 255, 255, 0.08))',
        },
        foreground: {
          DEFAULT: 'var(--foreground, #EDEDEF)',
          muted: 'var(--foreground-muted, #8A8F98)',
          subtle: 'var(--foreground-subtle, rgba(255, 255, 255, 0.60))',
        },
        accent: {
          DEFAULT: 'var(--accent, #5E6AD2)',
          bright: 'var(--accent-bright, #6872D9)',
          glow: 'var(--accent-glow, rgba(94, 106, 210, 0.3))',
        },
        border: {
          default: 'var(--border-default, rgba(255, 255, 255, 0.06))',
          hover: 'var(--border-hover, rgba(255, 255, 255, 0.10))',
          accent: 'var(--border-accent, rgba(94, 106, 210, 0.30))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Geist Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        card: '0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.4), 0 0 40px rgba(0,0,0,0.2)',
        'card-hover': '0 0 0 1px rgba(255,255,255,0.1), 0 8px 40px rgba(0,0,0,0.5), 0 0 80px rgba(94,106,210,0.1)',
        'cta-glow': '0 0 0 1px rgba(94,106,210,0.5), 0 4px 12px rgba(94,106,210,0.3), inset 0 1px 0 0 rgba(255,255,255,0.2)',
        'inner-top': 'inset 0 1px 0 0 rgba(255,255,255,0.1)',
      },
      animation: {
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-slow-reverse': 'float-reverse 11s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(18px) rotate(-1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.25' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
