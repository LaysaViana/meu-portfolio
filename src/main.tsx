import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext/ThemeContext.tsx';
import NotFound from './components/sections/NotFound/NotFound.tsx';
import Footer from './components/Footer/Footer.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Rodapé */}
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
