import Image from "next/image";
interface AvatarProps {
  src?: string | null | undefined;
}
const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      height={30}
      width={30}
      alt="avatar"
      src={src || "/images/placeholder.jpg"}
      className="rounded-full "
    />
  );
};

export default Avatar;
