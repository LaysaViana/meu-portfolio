import { motion } from 'framer-motion';
import Avatar from '/assets/perfil.jpeg';

export default function Home() {
  const title = 'Olá, eu sou a';
  const name = 'Laysa Viana :)';
  const profession = 'Desenvolvedora Front-End';

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
      <div className="flex-1 flex flex-col gap-6">
        <motion.div
          className="text-left space-y-4"
          variants={typingContainer}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-primary-light dark:text-transparent dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 dark:bg-clip-text mb-5">
            {title.split('').map((char, index) => (
              <motion.span key={index} variants={typingLetter}>
                {char}
              </motion.span>
            ))}
          </h1>

          <span className="text-4xl md:text-5xl font-bold text-accent-light dark:text-transparent dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 dark:bg-clip-text text-center mb-5">
            {name.split('').map((char, index) => (
              <motion.span key={index} variants={typingLetter}>
                {char}
              </motion.span>
            ))}
          </span>

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
          <a
            href={`https://wa.me/5562982661883?text=${encodeURIComponent(
              'Olá Laysa, gostaria de falar com você!',
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-md 
      hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black 
      transition-colors font-medium"
          >
            Contate-me
          </a>

          <a
            href="/curriculo.pdf"
            download
            className="px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-md 
      hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black 
      transition-colors font-medium"
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
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500"></span>

          <img
            src={Avatar}
            alt="Avatar Laysa"
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />

          <span className="absolute inset-0 rounded-full border-2 border-white/20 dark:border-black/20"></span>
        </a>
      </div>
    </section>
  );
}
