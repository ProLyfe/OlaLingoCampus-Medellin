import styles from './mobile-menu.module.scss';
import Link from "next/link";
import { useRouter } from "next/router";

type MenuRout = {
  name: string,
  path: string,
  extraPath: string[],
  icon: any,
}

type MobileMenuProps = {
  open?: boolean;
  routes?: MenuRout[];
  onClose?: () => void
}

const MobileMenu = ({ open=false, routes, onClose }: MobileMenuProps) => {
  const router = useRouter();

  const checkActiveLink = (item: MenuRout) => {
    return (
      router.pathname === item.path ||
      item.extraPath.includes(router.pathname)
    )
  }

  const handleClose = () => {
    onClose && onClose()
  }

  return (
    <>
    <div className={`${styles.menu_drawer} ${open ? styles.menu_drawer_open : ""}`}>
      <ul className='px-5 pt-10'>
        {routes?.map(item => (
          <li key={`${item.name}_mobile`}>
            <Link href={item.path} className={`
              ${checkActiveLink(item) ? 'text-white bg-main rounded-full' : 'text-h'} 
              font-medium text-xl flex items-center gap-[10px] py-4 px-6
            `}>
              <item.icon /> {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div onClick={handleClose} className={`${styles.overlay} ${!open ? styles.overlay_hidden : ""}`}></div>
    </>
  )
}

export default MobileMenu;
