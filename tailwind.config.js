/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // habilita Dark Mode via classe
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        // Cabeçalho
        'header-light': '#f3f4f6', // cinza claro
        'header-dark': '#1f2937', // cinza escuro

        // Textos principais
        'primary-light': '#111827', // dark text
        'primary-dark': '#f9fafb', // light text

        // Textos secundários / descrição
        'secondary-light': '#4b5563', // cinza médio
        'secondary-dark': '#d1d5db', // cinza claro dark

        // Background geral
        'background-light': '#f3f4f6',
        'background-dark': '#111827',

        // Hover / efeitos
        'hover-light': '#e5e7eb', // hover claro
        'hover-dark': '#374151', // hover escuro

        // Botões / destaque
        'accent-light': '#3b82f6', // azul claro
        'accent-dark': '#60a5fa', // azul escuro

        // Gradientes
        'gradient-start': '#ec4899', // pink-500
        'gradient-middle': '#8b5cf6', // purple-500
        'gradient-end': '#6366f1', // indigo-500
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        base: ['1rem', { lineHeight: '1.5rem' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        '5xl': ['3rem', { lineHeight: '1' }], // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }], // 60px
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
