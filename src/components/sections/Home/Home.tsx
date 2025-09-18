import { motion } from 'framer-motion';

export default function Home() {
  // Textos para o efeito de digitação
  const title = 'Olá, eu sou a';
  const name = 'Laysa Viana :)';
  const profession = 'Desenvolvedora Front-End';

  // Variants para o efeito de typing
  const typingContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };

  const typingLetter = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-24 gap-10 bg-background-light dark:bg-background-dark transition-colors">
      {/* Intro */}
      <div className="flex-1 flex flex-col gap-6">
        <motion.div
          className="text-left space-y-4"
          variants={typingContainer}
          initial="hidden"
          animate="visible"
        >
          {/* H1 */}
          <h1 className="text-3xl md:text-4xl font-semibold text-primary-light dark:text-primary-dark">
            {title.split('').map((char, index) => (
              <motion.span key={index} variants={typingLetter}>
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Span */}
          <span className="text-4xl md:text-5xl font-bold text-accent-light dark:text-accent-dark">
            {name.split('').map((char, index) => (
              <motion.span key={index} variants={typingLetter}>
                {char}
              </motion.span>
            ))}
          </span>

          {/* Parágrafo */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            {profession.split('').map((char, index) => (
              <motion.span key={index} variants={typingLetter}>
                {char}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* Actions */}
        <div className="flex gap-4 mt-4">
          {/* Contate-me (WhatsApp) */}
          <a
            href={`https://wa.me/5562982661883?text=${encodeURIComponent(
              'Olá Laysa, gostaria de falar com você!',
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark rounded-md hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark dark:hover:text-white transition-colors font-medium"
          >
            Contate-me
          </a>

          {/* Download Currículo */}
          <a
            href="/curriculo.pdf"
            download
            className="px-6 py-3 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark rounded-md hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark dark:hover:text-white transition-colors font-medium"
          >
            Download Currículo
          </a>
        </div>
      </div>

      {/* Profile */}
      <div className="flex-1 flex justify-center items-center">
        <a
          href="https://github.com/LaysaViana"
          target="_blank"
          className="relative group"
        >
          {/* Halo externo animado */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500"></span>

          <img
            src="./src/assets/perfil.jpeg"
            alt="Avatar Laysa"
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />

          {/* Opcional: borda neon sutil */}
          <span className="absolute inset-0 rounded-full border-2 border-white/20 dark:border-black/20"></span>
        </a>
      </div>
    </section>
  );
}
