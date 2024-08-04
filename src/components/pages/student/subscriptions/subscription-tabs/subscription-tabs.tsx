import { useState } from 'react';
import styles from './subscription-tabs.module.scss'

type SubscriptionTabsProps = {
  active?: boolean
  model: {label: string}[]
  onTabChange?: (label: string) => void
}

const SubscriptionTabs = ({ model, active, onTabChange }: SubscriptionTabsProps) => {
  const [activeIndex, setActiveIndex] = useState(active ? active : 0);

  const handleTabClick = (index: number, label: string) => {
    setActiveIndex(index)
    onTabChange && onTabChange(label)
  }

  return (
    <div className={styles.tabs_container}>
      { model.map((item, index) => (
        <button 
          key={`${item.label}_${index}`}
          onClick={() => handleTabClick(index, item.label)}
          className={`${styles.tab_button} ${index === activeIndex ?  styles.tab_button_active : ''} transition-colors`}
        >
          {item.label}
        </button>
      )) }
    </div>
  )
}

export default SubscriptionTabs;
