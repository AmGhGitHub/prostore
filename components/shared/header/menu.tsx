"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import ModeToggle from "./mode-toggle";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant={"ghost"}>
          <Link href="/cart">
            <ShoppingCartIcon /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign-in
          </Link>
        </Button>
      </nav>
      {/* Mobile Menu */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <MenuIcon className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetHeader className="border-b pb-4 mb-4">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <ModeToggle />
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/cart">
                <ShoppingCartIcon className="mr-2 h-5 w-5" />
                Cart
              </Link>
            </Button>
            <Button asChild>
              <Link href="/sign-in">
                <UserIcon /> Sign-in
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
