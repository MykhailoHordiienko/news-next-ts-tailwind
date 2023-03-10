"use client";

import { usePathname } from "next/navigation";
import { CATEGORIES } from "../constants";
import NavLinkItem from "./NavLinkItem";

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-sm md:text-lg gap-4 pb-5 md:pb-10 max-w-6xl mx-auto border-b">
      {CATEGORIES.map((item) => (
        <NavLinkItem
          isActive={isActive(item)}
          key={item}
          category={item}
        />
      ))}
    </nav>
  );
};

export default NavLinks;
