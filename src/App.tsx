import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Header from './components/Header/Header';
import Home from './components/sections/Home/Home';
import { Sobre } from './components/sections/Sobre/Sobre';
import Projetos from './components/sections/Projetos/Projetos';
import { Experiencias } from './components/sections/Experiencias/Experiencias';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import Contato from './components/sections/Contato/Contato';

export default function App() {
  const showSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const SectionWrapper = ({
    id,
    children,
  }: {
    id: string;
    children: React.ReactNode;
  }) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: false, margin: '-100px' });

    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
      } else {
        controls.start({ opacity: 0, y: 50, transition: { duration: 0.6 } });
      }
    }, [inView, controls]);

    return (
      <motion.section
        ref={ref}
        id={id}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="min-h-screen flex items-center justify-center transition-all duration-500"
      >
        {children}
      </motion.section>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors overflow-x-hidden bg-gray-100 dark:bg-slate-900">
      <Header toggleSection={showSection} />
      <main className="flex-1 pt-16">
        <SectionWrapper id="home">
          <Home />
        </SectionWrapper>

        <SectionWrapper id="sobre">
          <Sobre />
        </SectionWrapper>

        <SectionWrapper id="experiencia">
          <Experiencias />
        </SectionWrapper>

        <SectionWrapper id="projetos">
          <Projetos />
        </SectionWrapper>

        <SectionWrapper id="contato">
          <Contato />
        </SectionWrapper>
      </main>
      <WhatsAppButton phone="+556299999999" message="Olá!" />
    </div>
  );
}
