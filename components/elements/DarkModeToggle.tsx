"use client";

import * as React from "react";
import { MdNightsStay } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function DarkModeToggle() {
  const { setTheme } = useTheme();
  return (
    <>
      <Button
        onClick={() => setTheme("dark")}
        variant="default"
        size="icon"
        className="bg-inherit border-none shadow-none hover:bg-emerald-900 hover:text-white dark:hidden w-12 h-12"
      >
        <IoSunny className="h-6 w-6" />
      </Button>
      <Button
        onClick={() => setTheme("light")}
        variant="outline"
        size="icon"
        className="dark:bg-inherit dark:border-none dark:hover:bg-emerald-950 hover:text-white hidden dark:flex items-center justify-center w-12 h-12 dark:shadow-none"
      >
        <MdNightsStay className="absolute h-6 w-6" />
      </Button>
    </>
  );
}
