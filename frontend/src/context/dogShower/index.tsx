'use client';
import { createContext, useState } from 'react';

import { DogShower } from '@/types/DogShower';

type DogShowerProviderProps = {
  shower: DogShower;
  setShower: (shower: DogShower) => void;
  showChoosePetshop: boolean;
  setShowChoosePetshop: (showChoosePetshop: boolean) => void;
};

const DogShowerContext = createContext<DogShowerProviderProps>(
  {} as DogShowerProviderProps
);

const DogShowerProvider = ({ children }: { children: React.ReactNode }) => {
  const [shower, setShower] = useState<DogShower>({
    date: '',
    qtdLitleDogs: 0,
    qtdBigDogs: 0
  });

  const [showChoosePetshop, setShowChoosePetshop] = useState(false);

  return (
    <DogShowerContext.Provider
      value={{ shower, setShower, showChoosePetshop, setShowChoosePetshop }}
    >
      {children}
    </DogShowerContext.Provider>
  );
};

export { DogShowerProvider, DogShowerContext };
