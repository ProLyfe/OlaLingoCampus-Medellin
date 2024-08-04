import Sidebar from "@/components/layout/sidebar/sidebar";
import SidebarNavLink from "@/components/layout/sidebar/sidebar-nav-link/sidebar-nav-link";
import AppContainer from "@/components/layout/app-container/app-container";
import ContentWrapper from "@/components/layout/content-wrapper";

import Topbar from "@/components/layout/topbar/topbar";
import MobileTopbar from "@/components/layout/topbar/mobile-topbar";
import MobileMenu from "@/components/layout/mobile-menu/mobile-menu";

import {
  Home,
  FileText,
  Calendar,
  FilePen,
  FolderOpen,
  Monitor,
  MessageCircle,
  UserRound,
  List,
} from "lucide-react";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const sidebarRoutes = [
  {
    name: "Home",
    path: "/teacher/dashboard",
    extraPath: [""],
    icon: Home,
  },
  {
    name: "Schedule",
    path: "/teacher/schedule?is_from_menu=true",
    extraPath: ["/teacher/schedule"],
    icon: Calendar,
  },
  {
    name: "Live course",
    path: "/",
    extraPath: [],
    icon: Monitor,
  },
  {
    name: "School classes",
    path: "/teacher/school-classes",
    extraPath: [],
    icon: FilePen,
  },
  {
    name: "Freelance classes",
    path: "/",
    extraPath: [],
    icon: FileText,
  },
  {
    name: "My students",
    path: "/teacher/my-students",
    extraPath: [],
    icon: UserRound,
  },
  {
    name: "Requested classes",
    path: "/teacher/requested-classes",
    extraPath: [],
    icon: List,
  },
  {
    name: "E-Learning",
    path: "/teacher/e-learning",
    extraPath: [
      "/teacher/learning/[id]",
      "/teacher/learning/material/[id]",
      "/teacher/learning/practice/[id]"
    ],
    icon: FolderOpen,
  },
  {
    name: "Chat",
    path: "/",
    extraPath: [],
    icon: MessageCircle,
  },
];

type StudentLayoutProps = {
  children: React.ReactNode;
  extraPageTitle?: string;
};

const TeacherLayout = ({ children }: StudentLayoutProps) => {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [mobileMenuShow, setMobileMenuShow] = useState(false);

  const getTopBarTitle = (): string => {
    const current = sidebarRoutes.find(
      (item) =>
        item.path === router.pathname ||
        item.extraPath.includes(router.pathname)
    );

    if (current) {
      return current.name;
    }
    return "";
  };

  const toggleMovileMenu = () => {
    setMobileMenuShow((prev) => !prev);
  };

  return (
    <AppContainer>
      <Sidebar>
        <ul className="flex flex-col gap-2.5">
          {sidebarRoutes.map((item) => (
            <li key={item.name}>
              <SidebarNavLink
                active={
                  router.pathname === item.path ||
                  item.extraPath.includes(router.pathname)
                }
                href={item.path}
              >
                <item.icon />
                <span>{item.name}</span>
              </SidebarNavLink>
            </li>
          ))}
        </ul>
      </Sidebar>
      <ContentWrapper>
        <div className="hidden mobile:block">
          <Topbar
            title={getTopBarTitle()}
            userImageSrc=""
            username={userName}
            coinNumber={122}
            profileLink="/teacher/profile"
            type="teacher"
          />
        </div>
        <div className="block mobile:hidden">
          <MobileTopbar
            userImageSrc="/assets/anna_smith_48x48.png"
            coinNumber={122}
            onMenuClick={toggleMovileMenu}
            profileLink="/teacher/profile"
          />
          <MobileMenu
            onClose={toggleMovileMenu}
            routes={sidebarRoutes}
            open={mobileMenuShow}
          />
          <h1 className="mobile:hidden block text-h text-3xl font-bold mt-[92px] mb-6">
            {getTopBarTitle()}
          </h1>
        </div>
        {children}
      </ContentWrapper>
    </AppContainer>
  );
};

export default TeacherLayout;
