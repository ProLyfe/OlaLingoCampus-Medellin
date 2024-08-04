import styles from './nav-menu-button.module.scss';

type NavMenubuttonProps = {
  children: React.ReactNode
  setIsOpen?: (prev: React.SetStateAction<boolean>) => void
}

const NavMenubutton = ({setIsOpen, children}: NavMenubuttonProps) => {
  const toggleMenu = () => {
    setIsOpen && setIsOpen((prev: boolean) => !prev);
  };

  return (
    <button onClick={toggleMenu} className={styles.nav_menu_button}>
      { children }
    </button>
  )
}

export default NavMenubutton;
