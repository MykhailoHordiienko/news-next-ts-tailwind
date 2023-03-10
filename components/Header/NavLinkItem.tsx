import Link from "next/link";
import React from "react";

type Props = {
  category: string;
  isActive: boolean;
};

const NavLinkItem = ({ category, isActive }: Props) => {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLinkItem ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold text-lg"
      }`}>
      {category}
    </Link>
  );
};

export default NavLinkItem;
