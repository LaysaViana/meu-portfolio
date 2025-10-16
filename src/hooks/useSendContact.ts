import { useMutation } from '@tanstack/react-query';
import type { ContactFormValues } from '../types/portfolio';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export const useSendContact = () => {
  return useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.error || 'Erro ao enviar mensagem');
      }

      return response.json();
    },
  });
};
