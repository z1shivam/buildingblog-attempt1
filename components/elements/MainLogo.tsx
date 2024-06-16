import { Skranji } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const skranji = Skranji({ subsets: ["latin"], weight: "400" });

interface LogoProps {
  size:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
}

export const Logo = ({ size }: LogoProps) => {
  return (
    <div className="cursor-pointer">
      <Link href={"/"}>
        <div className={cn(skranji.className, `text-${size}`, ` pt-1.5`)}>
          MainLogo
        </div>
      </Link>
    </div>
  );
};
