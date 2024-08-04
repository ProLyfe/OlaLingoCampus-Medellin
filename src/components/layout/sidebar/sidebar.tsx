import styles from "./sidebar.module.scss";
import SidebarNavLink from "./sidebar-nav-link/sidebar-nav-link";
import SidebarContextProvider from "./sidebar-context";
import { Menu } from "lucide-react";
import { useState } from "react";
import { MessageCircleWarning } from "lucide-react";

type SidebarProps = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  const [compact, setCompact] = useState(false);

  const handleMenuToggle = () => {
    setCompact((prev) => !prev);
  };

  return (
    <SidebarContextProvider compact={compact}>
      <div
        className={`${styles.layout_sidebar} ${compact ? styles.compact : ""}`}
      >
        <div className="flex flex-row gap-4 mb-12">
          <button className="hidden md-1400:block" onClick={handleMenuToggle}>
            <Menu />
          </button>
          <div className="text-optional text-xl">Logo</div>
        </div>
        <div className={styles.layout_menu_container}>
          {children}
          <div>
            <SidebarNavLink href="">
              <MessageCircleWarning /> Support
            </SidebarNavLink>
          </div>
        </div>
      </div>
    </SidebarContextProvider>
  );
};

export default Sidebar;
