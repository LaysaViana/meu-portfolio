import React from 'react';
import ReactDOM from 'react-dom/client';

import { Toaster } from 'react-hot-toast';

import './index.css';
import Root from './Root';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Root />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
            borderRadius: '8px',
          },
        }}
      />
    </QueryClientProvider>
  </React.StrictMode>,
);
