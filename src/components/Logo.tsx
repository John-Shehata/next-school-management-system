import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center gap-2 p-4">
      <Image src="/logo.jpeg" alt="Logo Image" width={32} height={32} priority={true}></Image>
      <span className="hidden lg:block text-lg font-bold">Modern School</span>
    </Link>
  );
};

export default Logo;
