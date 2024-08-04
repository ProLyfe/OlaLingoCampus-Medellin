type DashboardCardTitleProps = {
  className?: string;
  children: React.ReactNode;
};

const CardTitle = ({ children, className }: DashboardCardTitleProps) => {
  return (
    <div
      className={`text-h font-semibold text-2xl ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default CardTitle;
