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

      const cheapPetShop: Petshop[] = [];

      petshops.forEach((petshop, i) => {
        if (valuesOfPetshops[i] === minValue) {
          cheapPetShop.push(petshop);
        }
      });

      if (cheapPetShop.length === 1) {
        const indexBestPetshop = valuesOfPetshops.indexOf(minValue);

        setBestNamePetshops(petshops[indexBestPetshop].name);
        setBestValuePetshops(minValue);
      } else {
        const DistancePetshop: number[] = [];
        cheapPetShop.forEach((petshop) => {
          DistancePetshop.push(petshop.distance);
        });

        const minDistance = Math.min(...DistancePetshop);

        const bestPetshopClose = petshops.filter(
          (petshop) => petshop.distance === minDistance
        );

        setBestNamePetshops(bestPetshopClose[0].name);
        setBestValuePetshops(minValue);
      }
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

      const cheapPetShop: Petshop[] = [];

      petshops.forEach((petshop, i) => {
        if (valuesOfPetshops[i] === minValue) {
          cheapPetShop.push(petshop);
        }
      });

      if (cheapPetShop.length === 1) {
        const indexBestPetshop = valuesOfPetshops.indexOf(minValue);

        setBestNamePetshops(petshops[indexBestPetshop].name);
        setBestValuePetshops(minValue);
      } else {
        const DistancePetshop: number[] = [];
        cheapPetShop.forEach((petshop) => {
          DistancePetshop.push(petshop.distance);
        });

        const minDistance = Math.min(...DistancePetshop);

        const bestPetshopClose = petshops.filter(
          (petshop) => petshop.distance === minDistance
        );

        setBestNamePetshops(bestPetshopClose[0].name);
        setBestValuePetshops(minValue);
      }
    }
  };

  const closeModal = () => {
    setShowChoosePetshop(false);
  };

  return (
    <>
      {showChoosePetshop && (
        <section className="absolute h-[85vh] w-screen bg-primary-black opacity-80 flex justify-center items-center">
          <div className="bg-dark-blue text-primary-white p-4 rounded-md w-3/4 h-2/4 flex flex-col justify-between items-center ">
            <p className="text-lg font-bold w-full align-middle">
              Petshop: {bestNamePetshops} <br /> Valor:{' '}
              {formatNumberToMoney(bestValuePetshop)}
            </p>
            <button
              onClick={() => closeModal()}
              className="border-2 w-11/12 p-2 rounded-md bg-primary-white text-primary-blue transition-all duration-300 hover:scale-105 md:w-1/2"
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
