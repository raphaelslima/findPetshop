'use client';
import { createContext, useState } from 'react';

import { DogShower } from '@/types/DogShower';

type DogShowerProviderProps = {
  shower: DogShower;
  setShower: (shower: DogShower) => void;
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

  return (
    <DogShowerContext.Provider value={{ shower, setShower }}>
      {children}
    </DogShowerContext.Provider>
  );
};

export { DogShowerProvider, DogShowerContext };
