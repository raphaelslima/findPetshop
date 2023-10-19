import Image from 'next/image';

import logoDIT from '../../public/logoDTI.png';

const Header = () => {
  return (
    <header className="container-lg h-20 flex items-center justify-start p-4">
      <div>
        <Image src={logoDIT} alt="Logo DTI" width={48} height={48} />
      </div>
    </header>
  );
};

export default Header;
