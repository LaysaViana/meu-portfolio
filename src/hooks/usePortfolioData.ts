import { useQuery } from '@tanstack/react-query';
import type { PortfolioData } from '../types/portfolio';

export const usePortfolioData = () => {
  const JSONBIN_URL = import.meta.env.VITE_JSONBIN_URL;

  return useQuery<PortfolioData>({
    queryKey: ['portfolioData'],
    queryFn: async () => {
      const response = await fetch(JSONBIN_URL);
      if (!response.ok) throw new Error('Erro ao buscar dados');
      const json = await response.json();
      return json.record;
    },
    staleTime: 1000 * 60 * 10, // 10 minutos de cache
  });
};
