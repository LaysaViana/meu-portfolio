import { usePortfolioData } from '../../../hooks/usePortfolioData';
import type { About } from '../../../types/portfolio';

export const Sobre = () => {
  const { data, isLoading, isError } = usePortfolioData();

  if (isLoading) {
    return (
      <section className="flex justify-center items-center min-h-screen text-gray-700 dark:text-gray-300">
        <p>Carregando Sobre Mim...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="flex justify-center items-center min-h-screen text-red-500">
        <p>Não foi possível carregar as informações sobre mim.</p>
      </section>
    );
  }

  const dataAbout = data?.about as About;

  return (
    <section
      id="sobre"
      className="max-w-4xl mx-auto px-6 py-12 text-center flex flex-col gap-6"
    >
      <h2 className="text-4xl md:text-4xl font-bold text-center mb-5 text-black dark:text-transparent dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 dark:bg-clip-text">
        {dataAbout?.title}
      </h2>

      {dataAbout?.description.map((p, i) => (
        <p
          key={i}
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          {p}
        </p>
      ))}

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-4xl font-bold text-center mb-10 text-black dark:text-transparent dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 dark:bg-clip-text">
          Habilidades
        </h3>

        {/* skillsCategories */}
        {dataAbout?.skillsCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <h4 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              {category.title}
            </h4>

            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-white text-gray-800 font-medium shadow-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
