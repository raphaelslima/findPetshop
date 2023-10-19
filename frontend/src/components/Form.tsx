'use client';

import { useForm } from 'react-hook-form';

import { formatStringToDate } from '@/helpers/date';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  date: yup.string().required('Campo obrigatório'),
  qtdLitleDogs: yup
    .number()
    .integer('O valor precisa ser um inteiro')
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    ),
  qtdBigDogs: yup
    .number()
    .integer('O valor precisa ser um inteiro')
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    )
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      date: '',
      qtdLitleDogs: 0,
      qtdBigDogs: 0
    }
  });

  const handleForm = (data: any) => {
    const dateShowerPet = formatStringToDate(data.date);

    if (dateShowerPet < new Date()) {
      setError('date', {
        type: 'manual',
        message: 'Data do banho precisa ser maior que a data de hoje.'
      });

      return;
    }

    if (data.qtdLitleDogs < 0) {
      setError('qtdLitleDogs', {
        type: 'manual',
        message: 'Valor inválido.'
      });

      return;
    }

    if (data.qtdBigDogs < 0) {
      setError('qtdBigDogs', {
        type: 'manual',
        message: 'Valor inválido.'
      });

      return;
    }

    if (data.qtdLitleDogs === 0 && data.qtdBigDogs === 0) {
      setError('qtdLitleDogs', {
        type: 'manual',
        message: 'Adicione um pet ao formulário'
      });

      setError('qtdBigDogs', {
        type: 'manual',
        message: 'Adicione um pet ao formulário'
      });

      return;
    }
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="bg-primary-white w-full flex flex-col items-center justify-between p-4 rounded-lg"
    >
      <h1 className="w-full text-primary-blue font-semibold text-center text-base">
        Qual o melhor petshop para você?
      </h1>
      <div className="w-full flex flex-col justify-center items-center gap-4 my-4">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="date" className="text-primary-blue text-sm">
            Data do banho:
          </label>
          <input
            type="date"
            className="border-2 border-primary-blue w-full p-2 rounded text-primary-blue"
            {...register('date')}
          />
          {errors.date?.message && (
            <p className="text-primary-red">{errors.date?.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="qtdLitleDogs" className="text-primary-blue text-sm">
            Quantidade de pets de porte pequeno:
          </label>
          <input
            type="number"
            className="border-2 border-primary-blue w-full p-2 rounded text-primary-blue"
            {...register('qtdLitleDogs')}
          />
          {errors.qtdLitleDogs?.message && (
            <p className="text-primary-red">{errors.qtdLitleDogs?.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="qtdBigDogs" className="text-primary-blue text-sm">
            Quantidade de pets de porte grande:
          </label>
          <input
            type="number"
            className="border-2 border-primary-blue w-full p-2 rounded text-primary-blue"
            {...register('qtdBigDogs')}
          />
          {errors.qtdBigDogs?.message && (
            <p className="text-primary-red">{errors.qtdBigDogs?.message}</p>
          )}
        </div>
      </div>
      <div>
        <button
          className="p-2 border rounded-lg bg-primary-blue text-primary-white cursor-pointer hover:scale-105"
          type="submit"
        >
          Mostrar petshop
        </button>
      </div>
    </form>
  );
};

export default Form;
