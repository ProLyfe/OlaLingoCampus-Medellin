type TabviewItemProps = {
  active?: boolean;
  value?: string;
  children: React.ReactNode;
  onClick?: (value: string | undefined) => void;
};

const TabviewItem = ({
  children,
  value,
  active = false,
  onClick,
}: TabviewItemProps) => {
  console.log(active)
  return (
    <button
      onClick={() => onClick && onClick(value)}
      type="button"
      role="tab"
      className={`
      ${active ? "text-main border-b-2 border-main bg-primary": ""} 
        rounded-t-2xl py-3 px-10 max-w-[290px] w-full text-center
      `}
    >
      {children}
    </button>
  );
};

export default TabviewItem;
