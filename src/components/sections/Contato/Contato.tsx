import { Formik, Form, Field, ErrorMessage } from 'formik';
import { usePortfolioData } from '../../../hooks/usePortfolioData';
import type { Contact, ContactFormValues } from '../../../types/portfolio';
import { useContatoValidation } from './useContatoValidation';
import { useSendContact } from '../../../hooks/useSendContact';
import toast from 'react-hot-toast';

import PhoneIcon from '/assets/phone.png';
import HomeIcon from '/assets/home.png';
import EmailIcon from '/assets/email.png';

export default function ContatoForm() {
  const { data, isLoading, isError } = usePortfolioData();
  const sendContact = useSendContact();

  if (isLoading) {
    return (
      <section className="flex justify-center items-center min-h-screen text-gray-700 dark:text-gray-300">
        <p>Carregando contatos...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="flex justify-center items-center min-h-screen text-red-500">
        <p>Não foi possível carregar os contatos.</p>
      </section>
    );
  }

  const dataContacts = data?.contact as Contact;

  return (
    <section
      id="contato"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16 gap-10 relative w-full"
    >
      <div
        className="flex-1 max-w-lg flex flex-col gap-6 text-center lg:text-left text-black dark:text-transparent
  dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 dark:bg-clip-text"
      >
        <h2 className="text-4xl font-bold">{dataContacts?.title}</h2>
        <p className="text-gray-700 dark:text-gray-300">
          {dataContacts?.message}
        </p>
        {dataContacts?.phone && (
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <img src={PhoneIcon} alt="Telefone" className="w-7 h-7" />
            {dataContacts?.phone}
          </p>
        )}
        {dataContacts.address && (
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <img src={HomeIcon} alt="Home" className="w-7 h-7" />
            {dataContacts.address}
          </p>
        )}
        {dataContacts.email && (
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <img src={EmailIcon} alt="Email" className="w-7 h-7" />
            {dataContacts.email}
          </p>
        )}
      </div>

      {/* Formulário */}
      <div className="flex-1 w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
        <Formik
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          validationSchema={useContatoValidation}
          onSubmit={(
            values: ContactFormValues,
            { resetForm, setSubmitting },
          ) => {
            sendContact.mutate(values, {
              onSuccess: () => {
                toast.success('Mensagem enviada com sucesso!');
                resetForm();
                setSubmitting(false);
              },
              onError: (error: Error) => {
                toast.error(error.message || 'Erro ao enviar a mensagem.');
                setSubmitting(false);
              },
            });
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
                disabled={isSubmitting || isLoading}
                className="w-full py-3 mt-2 rounded-md border-2 border-black dark:border-white text-black dark:text-white px-4 py-2 font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-sm md:text-base"
              >
                {isSubmitting || isLoading ? 'Enviando...' : 'Enviar'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
