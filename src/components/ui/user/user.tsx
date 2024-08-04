import UserImg from "../user-img/user-img";

type UserProps = {
  name: string;
  description?: string;
  imageSrc: string;
  className?: string;
  courseName?: string;
  subCourseName?: string;
};

const User = ({
  name,
  description,
  imageSrc,
  className = "",
  courseName,
  subCourseName,
}: UserProps) => {
  return (
    <div className={`flex flex-row gap-[10px] ${className}`}>
      <UserImg imageSrc={imageSrc}></UserImg>
      <div className="flex flex-col justify-center">
        <div className="text-h text-base font-medium">{name}</div>
        {courseName ? (
          <div className="text-base text-[#8979AA]">{courseName}</div>
        ) : null}
        {subCourseName ? (
          <div className="text-base text-[#8979AA]">{subCourseName}</div>
        ) : null}
        {description && (
          <div className="text-base text-[#8979AA]">{description}</div>
        )}
      </div>
    </div>
  );
};

export default User;
