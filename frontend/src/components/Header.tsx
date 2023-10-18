import Image from 'next/image';

import logoDIT from '../../public/logoDTI.png';
import Button from './Button';

const Header = () => {
  return (
    <header className="container-lg h-20 flex items-center justify-between p-4">
      <div>
        <Image src={logoDIT} alt="Logo DTI" width={48} height={48} />
      </div>
      <div>
        <Button>Fazer login</Button>
      </div>
    </header>
  );
};

export default Header;
