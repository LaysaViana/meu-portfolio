// import { Link } from 'react-router-dom';
// import { useTheme } from '../../context/useTheme';

// interface HeaderProps {
//   toggleSection: (section: string) => void;
// }

// export default function Header({ toggleSection }: HeaderProps) {
//   const { theme, toggleTheme } = useTheme();

//   const scrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({
//         behavior: 'smooth', // animação suave
//         block: 'start', // posiciona no topo da tela
//       });
//     }
//   };

//   const handleClick = (section: string) => {
//     toggleSection(section);
//     scrollToSection(section);
//   };

//   return (
//     <header
//       className="flex justify-between items-center px-6 py-4 shadow
//     bg-header-light dark:bg-header-dark
//     text-black dark:text-white transition-colors"
//     >
//       <h1 className="font-bold text-lg text-primary-light dark:text-primary-dark">
//         Meu Portfólio
//       </h1>

//       <nav className="flex gap-6 items-center">
//         <button
//           onClick={() => handleClick('home')}
//           className="hover:underline transition-colors"
//         >
//           Home
//         </button>
//         <button
//           onClick={() => handleClick('sobre')}
//           className="hover:underline transition-colors"
//         >
//           Sobre
//         </button>
//         <button
//           onClick={() => handleClick('experiencia')}
//           className="hover:underline transition-colors"
//         >
//           Experiências
//         </button>
//         <button
//           onClick={() => handleClick('projetos')}
//           className="hover:underline transition-colors"
//         >
//           Projetos
//         </button>

//         <Link to="/contato" className="hover:underline transition-colors">
//           Contato
//         </Link>

//         <button
//           onClick={toggleTheme}
//           className="ml-4 px-2 py-1 border rounded
//             hover:bg-secondary-light dark:hover:bg-secondary-dark
//             transition-colors"
//         >
//           {theme === 'dark' ? '🌙 Dark' : '🌞 Light'}
//         </button>
//       </nav>
//     </header>
//   );
// }

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useTheme } from '../../context/useTheme';

// interface HeaderProps {
//   toggleSection: (section: string) => void;
// }

// export default function Header({ toggleSection }: HeaderProps) {
//   const { theme, toggleTheme } = useTheme();
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const handleClick = (section: string) => {
//     toggleSection(section);
//     scrollToSection(section);
//     setIsOpen(false); // fecha o menu depois de clicar
//   };

//   return (
//     <header
//       className="flex justify-between items-center px-6 py-4 shadow
//       bg-header-light dark:bg-header-dark
//       text-black dark:text-white transition-colors relative"
//     >
//       {/* Botão hambúrguer (sempre visível) */}
//       <button
//         className="flex flex-col gap-1"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Menu"
//       >
//         <span
//           className={`w-6 h-0.5 bg-current transition ${
//             isOpen ? 'rotate-45 translate-y-1.5' : ''
//           }`}
//         />
//         <span
//           className={`w-6 h-0.5 bg-current transition ${
//             isOpen ? 'opacity-0' : 'opacity-100'
//           }`}
//         />
//         <span
//           className={`w-6 h-0.5 bg-current transition ${
//             isOpen ? '-rotate-45 -translate-y-1.5' : ''
//           }`}
//         />
//       </button>

//       {/* Toggle de tema (sempre à direita) */}
//       <button
//         onClick={toggleTheme}
//         className="px-2 py-1 border rounded
//         hover:bg-secondary-light dark:hover:bg-secondary-dark
//         transition-colors"
//       >
//         {theme === 'dark' ? '🌙 Dark' : '🌞 Light'}
//       </button>

//       {/* Menu dropdown (abre em qualquer tela) */}
//       {isOpen && (
//         <nav
//           className="absolute top-full left-0 w-full flex flex-col items-center gap-4
//           bg-header-light dark:bg-header-dark shadow p-6"
//         >
//           <button
//             onClick={() => handleClick('home')}
//             className="hover:underline"
//           >
//             Home
//           </button>
//           <button
//             onClick={() => handleClick('sobre')}
//             className="hover:underline"
//           >
//             Sobre
//           </button>
//           <button
//             onClick={() => handleClick('experiencia')}
//             className="hover:underline"
//           >
//             Experiências
//           </button>
//           <button
//             onClick={() => handleClick('projetos')}
//             className="hover:underline"
//           >
//             Projetos
//           </button>
//           <Link
//             to="/contato"
//             className="hover:underline"
//             onClick={() => setIsOpen(false)}
//           >
//             Contato
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useTheme } from '../../context/useTheme';

// interface HeaderProps {
//   toggleSection: (section: string) => void;
// }

// export default function Header({ toggleSection }: HeaderProps) {
//   const { theme, toggleTheme } = useTheme();
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const handleClick = (section: string) => {
//     toggleSection(section);
//     scrollToSection(section);
//     setIsOpen(false);
//   };

//   return (
//     <header
//       className="flex justify-between items-center px-6 py-4 shadow
//       bg-header-light dark:bg-header-dark
//       text-black dark:text-white transition-colors relative"
//     >
//       {/* Botão hambúrguer */}
//       <button
//         className="flex flex-col gap-1 z-50" // z-50 para ficar acima do menu
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Menu"
//       >
//         <span
//           className={`w-6 h-0.5 bg-current transition ${
//             isOpen ? 'rotate-45 translate-y-1.5' : ''
//           }`}
//         />
//         <span
//           className={`w-6 h-0.5 bg-current transition ${
//             isOpen ? 'opacity-0' : 'opacity-100'
//           }`}
//         />
//         <span
//           className={`w-6 h-0.5 bg-current transition ${
//             isOpen ? '-rotate-45 -translate-y-1.5' : ''
//           }`}
//         />
//       </button>

//       {/* Botão de tema */}
//       <button
//         onClick={toggleTheme}
//         className="px-2 py-1 border rounded
//         hover:bg-secondary-light dark:hover:bg-secondary-dark
//         transition-colors"
//       >
//         {theme === 'dark' ? '🌙 Dark' : '🌞 Light'}
//       </button>

//       {/* Sidebar menu */}
//       {isOpen && (
//         <nav
//           className="fixed top-0 left-0 h-full w-64 bg-header-light dark:bg-header-dark
//           shadow-lg flex flex-col items-start gap-6 p-6 z-40"
//         >
//           <button
//             onClick={() => handleClick('home')}
//             className="hover:underline"
//           >
//             Home
//           </button>
//           <button
//             onClick={() => handleClick('sobre')}
//             className="hover:underline"
//           >
//             Sobre
//           </button>
//           <button
//             onClick={() => handleClick('experiencia')}
//             className="hover:underline"
//           >
//             Experiências
//           </button>
//           <button
//             onClick={() => handleClick('projetos')}
//             className="hover:underline"
//           >
//             Projetos
//           </button>
//           <Link
//             to="/contato"
//             className="hover:underline"
//             onClick={() => setIsOpen(false)}
//           >
//             Contato
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }

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
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 shadow bg-header-light dark:bg-header-dark text-primary-light dark:text-primary-dark font-sans transition-colors z-50">
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
      <button
        onClick={toggleTheme}
        className="ml-4 px-3 py-1 border rounded-md text-sm sm:text-base hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors font-medium"
      >
        {theme === 'dark' ? '🌙 Dark' : '🌞 Light'}
      </button>

      {/* Sidebar menu */}
      {isOpen && (
        <nav className="fixed top-0 left-0 h-full w-64 bg-header-light dark:bg-header-dark shadow-lg flex flex-col items-start gap-6 p-6 z-50 font-sans">
          {menuItems.map((section) => (
            <button
              key={section}
              onClick={() => handleClick(section)}
              className="text-lg sm:text-xl font-medium text-primary-light dark:text-primary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors w-full text-left"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
