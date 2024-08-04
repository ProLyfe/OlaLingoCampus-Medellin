import { useEffect } from 'react'
import styles from './menu-drawer.module.scss'
import { X } from 'lucide-react';

type MenuDrawerProps = {
  isOpen: boolean
  children: React.ReactNode
  onClose?: () => void
} 

const MenuDrawer = ({ isOpen, children, onClose }: MenuDrawerProps) => {
  const handleclose = () => {
    onClose && onClose();
  }

  useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen) {
      body?.classList.add('overflow-hidden');
    } else {
      body?.classList.remove('overflow-hidden');
    }
  }, [isOpen])

  return (
    <div className={`${styles.menu_drawer} ${isOpen ? styles.menu_drawer_open : ""}`}>
      <div className={styles.menu_drawer_header}>
        <div>
          <img
            src="/assets/menu-logo.svg"
            width={60}
            height={27}
            alt="logo"
          />
        </div>
        <button onClick={handleclose}>
          <X />
        </button>
      </div>
      <div className="flex flex-col gap-5 py-10 px-5">
        { children }
      </div>
    </div>
  )
}

export default MenuDrawer;
