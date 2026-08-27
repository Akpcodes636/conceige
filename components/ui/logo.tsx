import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="">
      <div className="w-[71px]">
        <Image
          src="/images/logo.png"
          height={500}
          width={500}
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
    </Link>
  );
};

export default Logo;
