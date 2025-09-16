import { useRef } from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

export default function Projetos() {
  const projetos = [
    {
      titulo: 'Projeto 1',
      descricao: 'Uma descrição curta e objetiva do projeto.',
      tecnologias: ['React', 'Firebase', 'CSS'],
      site: 'https://meuprojeto1.com',
      github: 'https://github.com/seuusuario/projeto1',
    },
    {
      titulo: 'Projeto 2',
      descricao: 'Uma descrição curta e objetiva do projeto.',
      tecnologias: ['Node.js', 'Express', 'MongoDB'],
      site: 'https://meuprojeto2.com',
      github: 'https://github.com/seuusuario/projeto2',
    },
    {
      titulo: 'Projeto 3',
      descricao: 'Uma descrição curta e objetiva do projeto.',
      tecnologias: ['Next.js', 'Tailwind', 'TypeScript'],
      site: 'https://meuprojeto3.com',
      github: 'https://github.com/seuusuario/projeto3',
    },
    {
      titulo: 'Projeto 4',
      descricao: 'Uma descrição curta e objetiva do projeto.',
      tecnologias: ['Next.js', 'Tailwind', 'TypeScript'],
      site: 'https://meuprojeto4.com',
      github: 'https://github.com/seuusuario/projeto4',
    },
    {
      titulo: 'Projeto 5',
      descricao: 'Uma descrição curta e objetiva do projeto.',
      tecnologias: ['Next.js', 'Tailwind', 'TypeScript'],
      site: 'https://meuprojeto5.com',
      github: 'https://github.com/seuusuario/projeto5',
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth; // rola um “página”
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto relative">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Meus projetos pessoais
      </h2>

      {/* Botões de navegação sempre visíveis */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/60 p-2 rounded-full hover:bg-gray-800 transition z-20 md:left-0"
      >
        <HiChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/60 p-2 rounded-full hover:bg-gray-800 transition z-20 md:right-0"
      >
        <HiChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Container horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scroll-smooth scrollbar-hide"
      >
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="min-w-[280px] md:min-w-[320px] lg:min-w-[350px] bg-white dark:bg-gray-900 rounded-3xl shadow-xl transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl p-6 flex flex-col flex-shrink-0"
          >
            {/* thumbnail */}
            <div className="w-full h-36 bg-gray-200 dark:bg-gray-700 rounded mb-4 animate-pulse"></div>

            {/* título */}
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {projeto.titulo}
            </h3>

            {/* descrição */}
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
              {projeto.descricao}
            </p>

            {/* tecnologias */}
            <div className="flex flex-wrap gap-2 mb-4">
              {projeto.tecnologias.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* botões */}
            <div className="mt-auto flex gap-2">
              <a
                href={projeto.site}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Ver Projeto
              </a>
              <a
                href={projeto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Ver Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
