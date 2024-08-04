type CustomCardItemProps = {
  children: React.ReactNode;
  className?: string;
};

const CustomCardItem = ({ children, className = "" }: CustomCardItemProps) => {
  return (
    <div
      className={`border border-stroke rounded-2xl p-5 flex flex-col justify-between ${className}`}
    >
      {children}
    </div>
  );
};

export default CustomCardItem;
