"use client";
import { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

type Props = {};

const Header = (props: Props) => {
  const [showCategory, setShowCategory] = useState(true);

  useEffect(() => {
    const clientWidth = document.documentElement.clientWidth;
    clientWidth > 800 ? setShowCategory(true) : setShowCategory(false);
  }, []);

  const handleClick = () => {
    setShowCategory(!showCategory);
  };

  return (
    <header className="border-b">
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon
          className="h-8 w-8 cursor-pointer"
          onClick={handleClick}
        />
        <Link
          href="/"
          prefetch={false}>
          <h1 className="font-semibold text-xl md:text-4xl text-center">
            The{" "}
            <span className="underline decoration-2 decoration-orange-400">
              MICHAEL
            </span>{" "}
            News
          </h1>
        </Link>
        <div>
          <DarkModeButton />
        </div>
      </div>
      {showCategory && <NavLinks />}
      <SearchBox />
    </header>
  );
};

export default Header;
