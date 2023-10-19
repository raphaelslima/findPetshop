import Form from '@/components/Form';
import ModalPetshop from '@/components/ModalPetshop';

export default function Home() {
  return (
    <main className="h-screen w-full bg-primary-blue flex flex-col items-center overflow-y-hidden">
      <Form />
      <ModalPetshop />
    </main>
  );
}
