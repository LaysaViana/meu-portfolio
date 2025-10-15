import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type ContactProps = {
  profile?: {
    phone?: string;
    address?: string;
    email?: string;
    linkedin?: string;
    github?: string;
  };
};

const MOCK_PROFILE = {
  phone: '+55 62 98266-1883',
  address: 'Goiânia - GO',
  email: 'laysa.viana@outlook.com',
};

export default function Contato({ profile = MOCK_PROFILE }: ContactProps) {
  return (
    <section
      id="contato"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16 gap-10 relative w-full"
    >
      {/* Informações de contato */}
      <div
        className="flex-1 max-w-lg flex flex-col gap-6 text-center lg:text-left text-black dark:text-transparent
  dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 dark:bg-clip-text"
      >
        <h2 className="text-4xl font-bold">Entre em contato comigo!</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Estou disponível para projetos, colaborações ou para bater um papo.
        </p>
        {profile.phone && (
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            {' '}
            <img
              src="./src/assets/phone.png"
              alt="Telefone"
              className="w-7 h-7"
            />
            {profile.phone}
          </p>
        )}
        {profile.address && (
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <img
              src="./src/assets/home.png"
              alt="Telefone"
              className="w-7 h-7"
            />
            {profile.address}
          </p>
        )}
        {profile.email && (
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            {' '}
            <img
              src="./src/assets/email.png"
              alt="Telefone"
              className="w-7 h-7"
            />
            {profile.email}
          </p>
        )}
      </div>

      {/* Formulário */}
      <div className="flex-1 w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
        <Formik
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          validationSchema={Yup.object({
            name: Yup.string().required('Nome obrigatório'),
            email: Yup.string()
              .email('Email inválido')
              .required('Email obrigatório'),
            subject: Yup.string().required('Assunto obrigatório'),
            message: Yup.string()
              .min(10, 'Mensagem muito curta')
              .required('Mensagem obrigatória'),
          })}
          onSubmit={(values, { resetForm }) => {
            window.location.href = `mailto:${profile.email}?subject=${values.subject}&body=Oi, me chamo ${values.name} e queria mandar a seguinte mensagem: ${values.message}. Meu e-mail: ${values.email}`;
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <Field
                name="name"
                placeholder="Nome"
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-sm"
              />

              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />

              <Field
                name="subject"
                placeholder="Assunto"
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
              />
              <ErrorMessage
                name="subject"
                component="p"
                className="text-red-500 text-sm"
              />

              <Field
                name="message"
                as="textarea"
                rows={5}
                placeholder="Mensagem"
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
              />
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-500 text-sm"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 mt-2 rounded-md border-2 border-black dark:border-white 
    text-black dark:text-white px-4 py-2 font-semibold 
    hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black 
    transition-colors text-sm md:text-base"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
