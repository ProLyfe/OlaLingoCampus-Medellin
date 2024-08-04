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
} from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const sidebarRoutes = [
  {
    name: "Home",
    path: "/student/dashboard",
    extraPath: ["/student/events"],
    icon: Home,
  },
  {
    name: "School Program",
    path: "/student/school-program",
    extraPath: ["/student/course/[id]"],
    icon: FileText,
  },
  {
    name: "Schedule",
    path: "/student/schedule",
    extraPath: [],
    icon: Calendar,
  },
  {
    name: "Homework",
    path: "",
    extraPath: [],
    icon: FilePen,
  },
  {
    name: "E-Learning",
    path: "/student/e-learning",
    extraPath: [
      "/student/learning/[id]",
      "/student/learning/material/[id]",
      "/student/learning/practice/[id]"
    ],
    icon: FolderOpen,
  },
  {
    name: "Live course",
    path: "",
    extraPath: [],
    icon: Monitor,
  },
  {
    name: "Chat",
    path: "Chat",
    extraPath: [],
    icon: MessageCircle,
  },
];

type StudentLayoutProps = {
  children: React.ReactNode;
  extraPageTitle?: string;
};

const StudentLayout = ({ children, extraPageTitle }: StudentLayoutProps) => {
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
                <item.icon className="w-[20px] h-[20px]" />
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
            profileLink="/student/profile"
            extraPageTitle={extraPageTitle}
            type="student"
          />
        </div>
        <div className="block mobile:hidden">
          <MobileTopbar
            userImageSrc=""
            coinNumber={122}
            profileLink="/student/profile"
            onMenuClick={toggleMovileMenu}
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

export default StudentLayout;
