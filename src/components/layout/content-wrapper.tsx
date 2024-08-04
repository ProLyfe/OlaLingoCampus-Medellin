type ContentWrapperProps = {
  children: React.ReactNode;
};

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <div className="w-full">{children}</div>;
};

export default ContentWrapper;
