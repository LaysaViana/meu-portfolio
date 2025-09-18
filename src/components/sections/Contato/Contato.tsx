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
  phone: '+55 62 99999-9999',
  address: 'Rua Exemplo, 123, São Paulo - SP',
  email: 'laysa.viana@outlook.com',
};

export default function Contato({ profile = MOCK_PROFILE }: ContactProps) {
  return (
    <section
      id="contato"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16 gap-10 relative w-full"
    >
      {/* Informações de contato */}
      <div className="flex-1 max-w-lg flex flex-col gap-6 text-center lg:text-left">
        <h2 className="text-4xl font-bold">Entre em contato comigo!</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Estou disponível para projetos, colaborações ou para bater um papo.
        </p>
        {profile.phone && (
          <p className="text-gray-700 dark:text-gray-300">📞 {profile.phone}</p>
        )}
        {profile.address && (
          <p className="text-gray-700 dark:text-gray-300">
            🏠 {profile.address}
          </p>
        )}
        {profile.email && (
          <p className="text-gray-700 dark:text-gray-300">✉️ {profile.email}</p>
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
                className="w-full py-3 mt-2 rounded-md bg-red-600 hover:bg-red-700 transition-colors font-semibold text-white"
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
