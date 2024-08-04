import Image from "next/image";
import Link from "next/link";
import { BurgerTopbarMenuSVG } from '@/utils/icons';
import { Bell, ChevronDown, User } from "lucide-react";

type MobileTopbarProps = {
  coinNumber: number;
  userImageSrc: string;
  profileLink: string;
  onMenuClick?: () => void;
};

const MobileTopbar = ({
  coinNumber,
  userImageSrc,
  profileLink,
  onMenuClick,
}: MobileTopbarProps) => {
  return (
    <div className='h-[60px] w-full fixed top-0 left-0 bg-main z-10 flex justify-between px-5'>
      <div className="flex items-center">
        <button onClick={onMenuClick} className="cursor-pointer z-10"><BurgerTopbarMenuSVG /></button>
        <Image className="ml-[-30px]" src='/assets/logo/OlaLingo_logo_1.svg' width={161} height={52} alt='logo'/>
      </div>
      <div className="flex gap-4 items-center">
      <div className="gap-2 px-[9px] h-[36px] flex justify-center items-center text-base font-medium bg-white rounded-full">
        <div>
          <Image
            width={23}
            height={23}
            src="/assets/icons/standing_coin.png"
            alt="coin image"
          />
        </div>
        <div className="relative top-[2px]">{coinNumber}</div>
        <button className="relative top-[2px]">+</button>
      </div>
      <div className="text-white">
        <Bell />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Link className="cursor-pointer flex gap-1 text-white items-center" href={profileLink}>
          {userImageSrc ? (
              <Image
                width={32}
                height={32}
                src={userImageSrc}
                alt="user picture"
              />
            ) : (
              <div className="bg-primary w-8 h-8 rounded-full flex justify-center items-center">
                <User className="text-white" />
              </div>
          )}
          <ChevronDown />
        </Link>
      </div>
      </div>
    </div>
  )
}

export default MobileTopbar;
