import { FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer
      className="py-4 text-center
        bg-gray-200 dark:bg-slate-900
        text-black dark:text-white
        flex flex-col items-center gap-2
        border-t border-gray-200 dark:border-slate-700"
    >
      <div>Copyright © 2025 Laysa A. Viana</div>
      <div className="flex gap-4 mt-4 justify-center">
        <a
          href="https://www.linkedin.com/in/seu-perfil"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
        >
          <FiLinkedin size={28} />
        </a>

        <a
          href="https://github.com/seu-usuario"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <FiGithub size={28} />
        </a>
      </div>
    </footer>
  );
}
