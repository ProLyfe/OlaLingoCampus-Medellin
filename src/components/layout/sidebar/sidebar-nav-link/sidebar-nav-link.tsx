import Link from "next/link";
import styles from './sidebar-nav-link.module.scss'
import { useSidebarContent } from '../sidebar-context'

type SidebarNavLinkProps = {
  href: string
  active?: boolean
  children: React.ReactNode
}

const SidebarNavLink = ({ children, active=false, href }: SidebarNavLinkProps) => {
  const compact = useSidebarContent();
  return (
    <Link 
      className={`${styles.sidebar_nav_link} ${active ? styles.active : ""} ${compact ? styles.compact : ""}`}
      href={href}
    >
      { children }
    </Link>
  )
}

export default SidebarNavLink;
