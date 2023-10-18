import Image from 'next/image';

import logoDIT from '../../public/logoDTI.png';

const Header = () => {
  return (
    <header className="container-lg h-20 flex items-center justify-between p-4">
      <div>
        <Image src={logoDIT} alt="Logo DTI" width={48} height={48} />
      </div>
      <div>
        <button className="p-2 border rounded-lg bg-primary-blue text-primary-white cursor-pointer hover:scale-105">
          Fazer login
        </button>
      </div>
    </header>
  );
};

export default Header;
