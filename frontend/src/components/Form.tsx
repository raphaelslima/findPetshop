import Button from './Button';

const Form = () => {
  return (
    <form
      action=""
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
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="qtdLitleDogs" className="text-primary-blue text-sm">
            Quantidade de pets de porte pequeno:
          </label>
          <input
            type="number"
            className="border-2 border-primary-blue w-full p-2 rounded text-primary-blue"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="qtdBigDogs" className="text-primary-blue text-sm">
            Quantidade de pets de porte grande:
          </label>
          <input
            type="number"
            className="border-2 border-primary-blue w-full p-2 rounded text-primary-blue"
          />
        </div>
      </div>
      <div>
        <Button>Enviar formulário</Button>
      </div>
    </form>
  );
};

export default Form;
