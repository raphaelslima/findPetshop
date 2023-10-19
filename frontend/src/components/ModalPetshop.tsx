'use client';
import { useContext, useEffect, useState } from 'react';

import { DogShowerContext } from '@/context/dogShower';
import { formatStringToDate } from '@/helpers/formatDate';
import { formatNumberToMoney } from '@/helpers/formatNumberToMoney';
import { database } from '@/mock/petshops';
import { Petshop } from '@/types/Petshop';

const ModalPetshop = () => {
  const { shower, showChoosePetshop, setShowChoosePetshop } =
    useContext(DogShowerContext);

  const [petshops, setPetshops] = useState<Petshop[]>([]);
  const [bestNamePetshops, setBestNamePetshops] = useState('');
  const [bestValuePetshop, setBestValuePetshops] = useState(0);
  const [distancePetshops, setDistancePetshops] = useState(0);

  useEffect(() => {
    setPetshops(database);
    if (showChoosePetshop) {
      showPetshop();
    }
  }, [showChoosePetshop]);

  const showPetshop = () => {
    const dateShower = formatStringToDate(shower.date);

    if (dateShower.getDay() === 6 || dateShower.getDay() === 0) {
      const qtdLittleDogs = shower.qtdLitleDogs;
      const qtdBigDogs = shower.qtdBigDogs;

      const valuesOfPetshops: number[] = [];

      petshops.forEach((petshop) => {
        valuesOfPetshops.push(
          qtdLittleDogs * petshop.priceOfWeekeendToLittleDogs +
            qtdBigDogs * petshop.priceOfWeekeendToBigDogs
        );
      });

      const minValue = Math.min(...valuesOfPetshops);

      const indexBestPetshop = valuesOfPetshops.indexOf(minValue);

      setBestNamePetshops(petshops[indexBestPetshop].name);
      setBestValuePetshops(minValue);
    } else {
      const qtdLittleDogs = shower.qtdLitleDogs;
      const qtdBigDogs = shower.qtdBigDogs;

      const valuesOfPetshops: number[] = [];

      petshops.forEach((petshop) => {
        valuesOfPetshops.push(
          qtdLittleDogs * petshop.priceOfWeekToLittleDogs +
            qtdBigDogs * petshop.priceOfWeekToBigDogs
        );
      });

      const minValue = Math.min(...valuesOfPetshops);

      const indexBestPetshop = valuesOfPetshops.indexOf(minValue);

      setBestNamePetshops(petshops[indexBestPetshop].name);
      setBestValuePetshops(minValue);
    }
  };

  const closeModal = () => {
    setShowChoosePetshop(false);
  };

  return (
    <>
      {showChoosePetshop && (
        <section className="absolute min-h-screen w-screen bg-primary-black opacity-80 flex justify-center">
          <div className="bg-primary-white text-primary-blue p-4 rounded-md w-3/4 h-1/4 mt-8 flex flex-col justify-center items-center gap-2">
            <p className="text-lg font-bold w-full align-middle">
              Petshop: {bestNamePetshops} <br /> Valor:{' '}
              {formatNumberToMoney(bestValuePetshop)}
            </p>
            <button
              onClick={() => closeModal()}
              className="border-2 border-primary-blue p-2 rounded-md hover:bg-primary-blue hover:text-primary-white transition-all duration-300 hover:scale-105"
            >
              Fechar
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default ModalPetshop;
