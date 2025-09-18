export default function Projetos() {
  const projetos = [
    {
      titulo: 'Projeto 1',
      descricao: 'Descrição do projeto 1',
      tecnologias: ['React', 'Firebase', 'CSS'],
      site: '#',
      github: '#',
    },
    {
      titulo: 'Projeto 2',
      descricao: 'Descrição do projeto 2',
      tecnologias: ['Node.js', 'Express', 'MongoDB'],
      site: '#',
      github: '#',
    },
    {
      titulo: 'Projeto 3',
      descricao: 'Descrição do projeto 3',
      tecnologias: ['Next.js', 'Tailwind', 'TypeScript'],
      site: '#',
      github: '#',
    },
    {
      titulo: 'Projeto 4',
      descricao: 'Descrição do projeto 4',
      tecnologias: ['Next.js', 'Tailwind', 'TypeScript'],
      site: '#',
      github: '#',
    },
    {
      titulo: 'Projeto 5',
      descricao: 'Descrição do projeto 5',
      tecnologias: ['Next.js', 'Tailwind', 'TypeScript'],
      site: '#',
      github: '#',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Meus projetos pessoais
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="
    bg-white dark:bg-slate-900
    rounded-3xl shadow-lg p-6 flex flex-col
    transition-transform transform hover:-translate-y-2 hover:shadow-2xl
    border border-gray-200 dark:border-slate-700
  "
          >
            {/* Thumbnail */}
            <div className="w-full h-36 sm:h-44 bg-gray-200 dark:bg-gray-600 rounded mb-4 animate-pulse"></div>

            {/* Título */}
            <h3 className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {projeto.titulo}
            </h3>

            {/* Descrição */}
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1 text-sm md:text-base">
              {projeto.descricao}
            </p>

            {/* Tecnologias */}
            <div className="flex flex-wrap gap-2 mb-4">
              {projeto.tecnologias.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Botões */}
            <div className="mt-auto flex gap-2">
              <a
                href={projeto.site}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition text-sm md:text-base"
              >
                Acessar projeto
              </a>
              <a
                href={projeto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm md:text-base"
              >
                Acessar repositório
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
