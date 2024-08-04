import styles from "./topbar.module.scss";
import Image from "next/image";
import { TopbarDivider } from "@/utils/icons";
import { Bell, User, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import UserDropdown from './user-dropdown';

type TopbarProps = {
  title: string;
  coinNumber: number;
  username: string;
  userImageSrc: string;
  profileLink: string;
  extraPageTitle?: string;
  type: 'teacher' | 'student';
};

const Topbar = ({
  title,
  coinNumber,
  username,
  userImageSrc,
  profileLink,
  extraPageTitle,
  type,
}: TopbarProps) => {
  const router = useRouter();
  const handlegoToProfile = () => {
    if (type === 'teacher') {
      router.push('/teacher/profile');
    }

    if (type === 'student') {
      router.push('/student/profile');
    }
  }

  return (
    <div className="mt-[48px] mb-[32px] flex justify-between">
      <div className="text-4xl font-bold text-h">
        {extraPageTitle ? (
          extraPageTitle
        ) : (
          <>
            {router.pathname === "/student/profile" ||
            router.pathname === "/teacher/profile"
              ? "Profile"
              : title}
          </>
        )}
      </div>
      <div className="flex items-center gap-6">
        <div className={styles.topbar_coins}>
          <div>
            <Image
              width={23}
              height={23}
              src="/assets/icons/standing_coin.png"
              alt="coin image"
            />
          </div>
          <div>{coinNumber}</div>
          <button>+</button>
        </div>
        <div className="bell">
          <Bell />
        </div>
        <TopbarDivider />
        <div className="flex flex-row gap-2 items-center">
          <Link className="cursor-pointer" href={profileLink}>
            {userImageSrc ? (
              <Image
                width={48}
                height={48}
                src={userImageSrc}
                alt="user picture"
              />
            ) : (
              <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center">
                <User className="text-white" />
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
