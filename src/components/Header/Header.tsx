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
        className={`flex flex-col gap-1 z-50 p-3 
    bg-gray-300 dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500
    rounded-full 
    hover:bg-gray-300 dark:hover:opacity-90
    transition-colors duration-300 shadow-inner`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span
          className={`w-6 h-0.5 transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          } bg-current dark:bg-white`}
        />
        <span
          className={`w-6 h-0.5 transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          } bg-current dark:bg-white`}
        />
        <span
          className={`w-6 h-0.5 transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          } bg-current dark:bg-white`}
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
        className={`fixed top-[64px] left-0 w-64 
    bg-gray-200 dark:bg-gray-800/30 
    dark:backdrop-blur-md dark:border-r dark:border-gray-700/40 
    shadow-lg flex flex-col font-sans z-40 
    transform transition-transform duration-300 
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    rounded-tr-2xl rounded-br-2xl
  `}
      >
        {menuItems.map((section, index) => (
          <button
            key={section}
            onClick={() => handleClick(section)}
            className={`relative text-lg sm:text-xl font-medium 
        text-gray-800 dark:text-white
        w-full text-left px-6 py-4 transition-all duration-300
        hover:bg-gray-300/50 dark:hover:bg-gray-700/40
        hover:backdrop-blur-sm 
        after:content-[''] after:absolute after:left-6 after:right-6 after:bottom-0 
        after:h-px after:bg-gray-300 dark:after:bg-gray-700 after:opacity-50 
        after:transition-opacity after:duration-300 
        ${index === menuItems.length - 1 ? 'after:hidden' : ''} 
        group rounded-lg
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
