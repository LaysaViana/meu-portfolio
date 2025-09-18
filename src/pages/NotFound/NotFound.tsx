import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-center">
      {/* Estrelas */}
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
            animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`,
          }}
        />
      ))}

      <h1 className="text-6xl font-bold text-red-600 z-10">404</h1>
      <p className="text-lg text-gray-300 z-10 mb-6">Página não encontrada</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 z-10"
      >
        Voltar
      </Link>

      {/* Keyframes */}
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
          }
        `}
      </style>
    </div>
  );
}
