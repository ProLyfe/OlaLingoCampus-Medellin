type AppContainerProps = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div
      className={`container_1872 mt-0 pb-[50px] relative flex flex-row gap-9`}
    >
      {children}
    </div>
  );
};

export default AppContainer;
