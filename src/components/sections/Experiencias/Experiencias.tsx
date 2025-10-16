import { motion } from 'framer-motion';
import { usePortfolioData } from '../../../hooks/usePortfolioData';

export const Experiencias = () => {
  const { data, isLoading, isError } = usePortfolioData();

  if (isLoading) {
    return (
      <section className="flex justify-center items-center min-h-screen text-gray-700 dark:text-gray-300">
        <p>Carregando experiências...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="flex justify-center items-center min-h-screen text-red-500">
        <p>Não foi possível carregar as experiências.</p>
      </section>
    );
  }

  const dataExperiences = data?.experiences || [];

  return (
    <section
      id="experiencias"
      className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-12"
    >
      <h2
        className="text-4xl md:text-4xl font-bold text-center mb-5
  text-black dark:text-transparent
  dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 dark:bg-clip-text"
      >
        Experiência Profissional
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dataExperiences?.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="
        bg-gray-100 dark:bg-slate-900
        p-6 rounded-3xl shadow-lg hover:shadow-2xl
        transition-transform transform hover:-translate-y-2
        flex flex-col
        border border-gray-200 dark:border-slate-700
      "
          >
            <div className="flex items-center gap-4 mb-4">
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={exp.enterprise}
                  className="w-12 h-12 object-contain rounded-md bg-white p-1 shadow-sm"
                />
              )}

              <div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  {exp.position}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {exp.enterprise}
                </p>

                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {exp.period}
                </span>
              </div>
            </div>

            {/* lista de responsabilidades */}
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm flex-1">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
