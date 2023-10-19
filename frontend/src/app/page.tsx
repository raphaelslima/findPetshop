import Form from '@/components/Form';
import ModalPetshop from '@/components/ModalPetshop';

export default function Home() {
  return (
    <main className="h-[85vh] w-full bg-primary-blue flex flex-col items-center justify-center">
      <Form />
      <ModalPetshop />
    </main>
  );
}
