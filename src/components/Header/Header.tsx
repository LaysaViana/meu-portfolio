import { useState } from 'react';
import { useTheme } from '../../context/useTheme';

interface HeaderProps {
  toggleSection: (section: string) => void;
}

export default function Header({ toggleSection }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section: string) => {
    toggleSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const menuItems = ['home', 'sobre', 'experiencia', 'projetos', 'contato'];

  return (
    <header
      className="fixed top-0 left-0 w-full
    flex justify-between items-center
    px-6 py-4 shadow
    bg-gray-200 dark:bg-gray-900
    text-primary-light dark:text-primary-dark
    font-sans transition-colors z-50
    dark:border-b dark:border-gray-700"
    >
      {/* Botão hambúrguer */}
      <button
        className="flex flex-col gap-1 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span
          className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-current transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>

      {/* Botão de tema */}
      <div className="flex items-center ml-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            className="sr-only peer"
          />

          {/* Track com gradiente profissional */}
          <div
            className="
      w-14 h-7 rounded-full
      bg-gray-300 dark:bg-slate-800
      peer-checked:bg-gradient-to-r peer-checked:from-indigo-600 peer-checked:via-purple-700 peer-checked:to-pink-600
      transition-colors duration-300
      shadow-inner
    "
          ></div>

          {/* Knob estilizado */}
          <span
            className="
      absolute left-1 top-0.5 w-6 h-6 rounded-full
      bg-white dark:bg-purple-500  
      shadow-md
      transition-transform duration-300
      peer-checked:translate-x-7
    "
          ></span>
        </label>
      </div>

      {/* Sidebar menu com slide */}
      <nav
        className={`fixed top-[64px] left-0 w-64 bg-gray-200 dark:bg-header-dark shadow-lg flex flex-col font-sans z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {menuItems.map((section, index) => (
          <button
            key={section}
            onClick={() => handleClick(section)}
            className={`relative text-lg sm:text-xl font-medium text-primary-light dark:text-primary-dark w-full text-left px-6 py-4 transition-colors 
              after:content-[''] after:absolute after:left-6 after:right-6 after:bottom-0 after:h-px after:bg-gray-300 dark:after:bg-gray-700 after:opacity-50 
              after:transition-opacity after:duration-300
              ${index === menuItems.length - 1 ? 'after:hidden' : ''}
              group
            `}
          >
            <span className="bg-gradient-to-r from-accent-light to-accent-dark bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 ease-out group-hover:bg-[length:100%_2px]">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </button>
        ))}
      </nav>
    </header>
  );
}
