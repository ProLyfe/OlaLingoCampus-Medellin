import Image from "next/image";
import React from "react";
import NoAvatarIcon from "../../../../public/assets/profile/no-avatar.png";

const UserImg = ({
  imageSrc,
  className,
}: {
  imageSrc: string;
  className?: string;
}) => {
  return (
    <Image
      style={{ backgroundColor: "#e3e1db" }}
      className={`object-contain rounded-[100px] h-[50px] ${className}`}
      width={50}
      height={50}
      alt="user image"
      src={imageSrc ? imageSrc : NoAvatarIcon}
    />
  );
};

export default UserImg;
