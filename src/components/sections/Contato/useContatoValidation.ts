import * as Yup from 'yup';

export const useContatoValidation = () => {
  return Yup.object().shape({
    name: Yup.string()
      .trim()
      .required('Nome obrigatório')
      .min(1, 'Nome obrigatório'),
    email: Yup.string()
      .trim()
      .required('Email obrigatório')
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Email inválido. Use formato: exemplo@dominio.com',
      ),
    subject: Yup.string()
      .trim()
      .required('Assunto obrigatório')
      .min(1, 'Assunto obrigatório'),
    message: Yup.string()
      .trim()
      .required('Mensagem obrigatória')
      .min(10, 'Mensagem muito curta'),
  });
};
