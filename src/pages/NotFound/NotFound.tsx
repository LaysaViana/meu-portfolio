import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Página não encontrada
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
