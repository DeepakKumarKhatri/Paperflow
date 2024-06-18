"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full p-2 bg-foreground hover:bg-muted text-background hover:text-muted-foreground border-0 outline-none"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <MdOutlineDarkMode className="w-6 h-6" />
      ) : (
        <CiLight className="w-6 h-6" />
      )}
    </Button>
  );
}
