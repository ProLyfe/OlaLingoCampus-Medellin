import { useState } from "react";
import styles from "./tabs.module.scss";

type SubscriptionTabsProps = {
  active?: boolean;
  model: { label: string; value: string }[];
  setChoosedLevel: any;
  choosedLevel: any;
};

const Tabs = ({
  model,
  setChoosedLevel,
  choosedLevel,
}: SubscriptionTabsProps) => {
  
  const handleTabClick = (index: number, label: string, value: string) => {
    setChoosedLevel({ label, id: value });
  };

  if (!model.length) {
    return <div className="h-[55px]"></div>;
  }

  return (
    <div className={`${styles.scroll_block}`}>
      <div className={styles.tabs_container}>
        {model.map((item, index) => (
          <button
            key={`${item.label}_${index}`}
            onClick={() => handleTabClick(index, item.label, item.value)}
            className={`${styles.tab_button} ${
              choosedLevel.id === item.value ? styles.tab_button_active : ""
            } transition-colors`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
