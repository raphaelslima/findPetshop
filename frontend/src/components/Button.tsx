type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className="p-2 border rounded-lg bg-primary-blue text-primary-white cursor-pointer hover:scale-105">
      {children}
    </button>
  );
};

export default Button;
