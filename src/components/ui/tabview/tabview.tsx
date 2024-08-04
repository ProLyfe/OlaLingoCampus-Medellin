import styles from "../tabs/tabs.module.scss";
type TabViewProps = {
  children: React.ReactNode;
};

const TabView = ({ children }: TabViewProps) => {
  return (
    <div className={styles.scroll_block}>
      <div
        role="tablist"
        className="min-w-[900px] flex flex-row border-b border-stroke text-secondary2 font-medium text-lg"
      >
        {children}
      </div>
    </div>
  );
};

export default TabView;
