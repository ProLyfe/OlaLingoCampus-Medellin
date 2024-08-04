import CustomButton from "@/components/ui/button/button";
import Link from "next/link";
import React, { useState } from "react";
import NavMenubutton from '@/components/layout/header/nav-menu-button/nav-menu-button'
import MenuDrawer from '@/components/layout/header/menu-drawer/menu-drawer'
import styles from './un-auth.module.scss';
import { PersonMenuSVG, BurgerMenuSVG } from '@/utils/icons';
import { useRouter } from "next/router";
import { usePathname } from 'next/navigation'

const UnAuthHeader = () => {
  const router = useRouter();
  const pathname = usePathname()

  const [ openBurgerMenu, setOpenBurgerMenu ] = useState(false);
  const [ openPersonMenu, setOpenPersonMenu ] = useState(false);

  return (
    <header className="w-full py-4 bg-white">
      <div className="container_big">
        <div className="flex items-center justify-between">
          <h1 className=" text-[20px]">Logo</h1>
          <nav className={`flex items-center gap-x-8 ${styles.top_navigation}`}>
            <Link className={`${pathname === '/student' ? "text-main underline underline-offset-8" : "text-222"  } font-medium text-[18px]`} href={"/student"}>
              For students
            </Link>
            <Link className={`${pathname === '/teacher' ? "text-main underline underline-offset-8" : "text-222"  } font-medium text-[18px]`} href={"/teacher"}>
              For teacher
            </Link>
            <Link className=" text-222 font-medium text-[18px]" href={""}>
              Contacts
            </Link>
          </nav>
          <div className={styles.burger_menu}>
            <NavMenubutton setIsOpen={setOpenPersonMenu}>
              <PersonMenuSVG />
            </NavMenubutton>
            <NavMenubutton setIsOpen={setOpenBurgerMenu} >
              <BurgerMenuSVG />
            </NavMenubutton>
          </div>
          <div className={`flex gap-x-4 ${styles.auth_buttons}`}>
          </div>
        </div>
      </div>
      <MenuDrawer isOpen={openPersonMenu} onClose={()=> setOpenPersonMenu(!setOpenPersonMenu)} >
        <Link className="py-2 text-main font-medium text-[18px]" href={""}>
          <span className="border-b-2 border-main">For students</span>
        </Link>
        <Link className="py-2 text-222 font-medium text-[18px]" href={""}>
          For teacher
        </Link>
        <Link className="py-2 text-222 font-medium text-[18px]" href={""}>
          Contacts
        </Link>
      </MenuDrawer>
    </header>
  );
};

export default UnAuthHeader;
