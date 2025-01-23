import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="wrapper flex-between">
        <Link href="/" className="flex-start">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME}`}
            width={48}
            height={48}
            priority={true}
          />
          <span className="hidden lg:block text-2xl font-bold ml-3">
            {APP_NAME}
          </span>
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
