"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

type Props = {};

const DarkModeButton = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <div className="flex justify-end items-center space-x-2">
          <p>Turn Light</p>
          <SunIcon
            className="h-8 w-8 cursor-pointer text-yellow-400"
            onClick={() => setTheme("light")}
          />
        </div>
      ) : (
        <div className="flex justify-end items-center space-x-2">
          <p>Turn Dark</p>
          <MoonIcon
            className="h-8 w-8 cursor-pointer text-gray-900"
            onClick={() => setTheme("dark")}
          />{" "}
        </div>
      )}
    </div>
  );
};

export default DarkModeButton;
