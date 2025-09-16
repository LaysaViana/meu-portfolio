// type AboutProps = {
//   profile: ProfileType;
// };

export const Sobre = () => {
  return (
    <section
      id="sobre"
      className="max-w-4xl mx-auto px-6 py-12 text-center flex flex-col gap-6"
    >
      {/* Título */}
      <h2 className="text-3xl font-bold text-primary-light dark:text-primary-dark">
        Sobre Mim
      </h2>

      {/* Texto */}
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Olá! Meu nome é <span className="font-semibold">Laysa</span>, sou
        desenvolvedora <span className="text-blue-500">Front-end</span>{' '}
        apaixonada por criar interfaces modernas, responsivas e focadas em
        experiência do usuário.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Tenho experiência com tecnologias como{' '}
        <span className="font-semibold">React, TypeScript, TailwindCSS</span> e{' '}
        <span className="font-semibold">Node.js</span>. Meu foco está em
        transformar ideias em produtos digitais funcionais e visualmente
        atraentes.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Além da programação, gosto de aprender novas ferramentas, participar de
        comunidades de tecnologia e compartilhar conhecimento.
      </p>

      {/* Habilidades */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-primary-light dark:text-primary-dark mb-4">
          Habilidades
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
            React
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
            TypeScript
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
            TailwindCSS
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
            Node.js
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
            Git & GitHub
          </span>
        </div>
      </div>
    </section>
  );
};
