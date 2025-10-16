import { usePortfolioData } from '../../../hooks/usePortfolioData';

export default function Projetos() {
  const { data, isLoading, isError } = usePortfolioData();

  if (isLoading) {
    return (
      <section className="flex justify-center items-center min-h-screen text-gray-700 dark:text-gray-300">
        <p>Carregando Projetos...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="flex justify-center items-center min-h-screen text-red-500">
        <p>Não foi possível carregar os projetos.</p>
      </section>
    );
  }

  const dataProjects = data?.projects ?? [];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12
  text-black dark:text-transparent
  dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 dark:bg-clip-text"
      >
        Meus projetos pessoais
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
        {dataProjects.map((projeto, index) => (
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

            <h3 className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {projeto.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1 text-sm md:text-base">
              {projeto.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {projeto.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-2">
              <a
                href={projeto.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg border-2 border-black 
    hover:bg-white hover:text-black 
    dark:bg-white dark:text-black dark:border-white 
    dark:hover:bg-black dark:hover:text-white
    transition-colors text-sm md:text-base"
              >
                Acessar projeto
              </a>

              <a
                href={projeto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-400 text-black dark:text-white px-4 py-2 rounded-lg 
    hover:bg-gray-100 dark:hover:bg-black dark:hover:text-white 
    transition text-sm md:text-base"
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
