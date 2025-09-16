import { motion } from 'framer-motion';

export const Experiencias = () => {
  const experiencias = [
    {
      empresa: 'Raro Labs - Consultoria',
      periodo: 'Julho, 2022 – Julho, 2025',
      cargo: 'Frontend Developer (React) - Grupo Zelo',
      logo: './src/assets/img-zelo.jpeg',
      descricao: [
        'Plataforma de Assistência Funerária moderna, em microserviços de gamification para milhares de usuários.',
        'Responsável pela implementação de módulos completos, criação de listas, páginas de detalhe, filtros avançados e formulários dinâmicos.',
        'Integração com APIs REST usando React Query.',
        'Validação de formulários com Yup e React Hook Form.',
        'Gerenciamento de estado com Context API.',
        'Boas práticas de código limpo, componentes reutilizáveis e responsividade.',
      ],
    },
    {
      empresa: 'Raro Labs - Consultoria',
      periodo: 'Julho, 2022 – Agosto, 2022',
      cargo: 'Frontend Developer (React) - Alke',
      logo: './src/assets/raro-logo.jpeg',
      descricao: [
        'Criação e estilização de componentes reutilizáveis com Material UI.',
        'Gerenciamento de estado global com Redux.',
        'Testes automatizados com React Testing Library.',
        'Integração com APIs REST, tratamento de erros e loading.',
      ],
    },
    {
      empresa: 'Raro Labs - Consultoria',
      periodo: 'Agosto, 2022 – Janeiro, 2023',
      cargo: 'Frontend Developer (React) - Hermes Pardini',
      logo: './src/assets/img-pardini.jpeg',
      descricao: [
        'Aplicação web para gestão de questionários médicos.',
        'Implementação de formulários dinâmicos com lógica condicional.',
        'Layouts responsivos com Material UI e Bootstrap.',
        'Fluxo de assinatura digital integrado.',
      ],
    },
    {
      empresa: 'Raro Labs - Consultoria',
      periodo: 'Fevereiro, 2023 - Julho, 2023',
      cargo: 'Frontend Developer (React)  Banco Neon',
      logo: './src/assets/img-neon.jpeg',
      descricao: [
        'Web app para simulação e contratação de empréstimos consignados.',
        'Interfaces modernas com Material UI.',
        'Gerenciamento de estado com Context API.',
        'Integração com APIs REST para simulação de crédito.',
      ],
    },
    {
      empresa: 'Raro Labs - Consultoria',
      periodo: 'Novembro, 2024 - Janeiro, 2025',
      cargo: 'Frontend Developer (React) - Tribanco',
      logo: './src/assets/img-tribanco.jpeg',
      descricao: [
        'Criação de microserviço para administração e distribuição de recursos.',
        'Interfaces responsivas com Material UI.',
        'Gerenciamento de estado com Redux e Context API.',
        'Formulários validados com React Hook Form e Zod.',
        'Integração com APIs REST usando Axios.',
      ],
    },
  ];

  return (
    <section
      id="experiencias"
      className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-12"
    >
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-10">
        Experiência Profissional
      </h2>

      {/* grid responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiencias.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-100 dark:bg-gray-900 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col"
          >
            {/* topo do card: logo + empresa */}
            <div className="flex items-center gap-4 mb-4">
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={exp.empresa}
                  className="w-12 h-12 object-contain rounded-md bg-white p-1 shadow-sm"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  {exp.cargo}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {exp.empresa}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {exp.periodo}
                </span>
              </div>
            </div>

            {/* lista de responsabilidades */}
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm flex-1">
              {exp.descricao.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
