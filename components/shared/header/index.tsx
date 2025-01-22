import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./mode-toggle";

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
        <div className="space-x-2">
          <ModeToggle />
          <Button asChild variant={"ghost"}>
            <Link href="/cart">
              <ShoppingCartIcon /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/cart">
              <UserIcon /> Sign-in
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
