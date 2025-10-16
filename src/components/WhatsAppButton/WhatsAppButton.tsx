import { FaWhatsapp } from 'react-icons/fa';

type WhatsAppButtonProps = {
  phone: string;
  message?: string;
};

export default function WhatsAppButton({
  phone,
  message,
}: WhatsAppButtonProps) {
  const url = `https://wa.me/${phone.replace(
    /\D/g,
    '',
  )}?text=${encodeURIComponent(message || 'Olá, gostaria de saber mais!')}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}
