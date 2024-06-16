import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
import { MdTipsAndUpdates } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { IoReader } from "react-icons/io5";
import { MdExplore } from "react-icons/md";

import { cn } from "@/lib/utils";


const MobileNav = () => {
  const featuredPosts = [
    {
      title: "5 awesome food to try in Vietnam",
      slug: "5-awesome-food-to-try-in-vietnam",
    },
    {
      title: "The best beaches in Vietnam",
      slug: "the-best-beaches-in-vietnam",
    },
    {
      title: "The best time to visit Vietnam",
      slug: "the-best-time-to-visit-vietnam",
    },
    {
      title: "The best places to visit in Vietnam",
      slug: "the-best-places-to-visit-in-vietnam",
    },
    {
      title: "The best time2 to visit Vietnam",
      slug: "the-best-time2-to-visit-vietnam",
    },
  ];
  return (
    <nav className="bg-emerald-800 dark:bg-emerald-900 text-white dark:text-yellow-50 py-3 rounded-b-md">
      <ul className="grid grid-cols-2 px-3 gap-2">
        <Link href={"/blogs"}>
          <li className="py-3 bg-emerald-900 dark:bg-emerald-950 rounded-md text-center border-emerald-700 dark:border-emerald-800  items-center flex justify-center gap-2">
            <FaBookOpen className="h-5 w-5 inline-block" />
            Blogs
          </li>
        </Link>
        <Link href={"/tips"}>
          <li className="py-3 bg-emerald-900 dark:bg-emerald-950 rounded-md text-center border-emerald-700 dark:border-emerald-800  items-center flex justify-center gap-2">
            <MdTipsAndUpdates className="h-5 w-5 inline-block" />
            My Tips
          </li>
        </Link>
        <Link href={"/about"}>
          <li className="py-3 bg-emerald-900 dark:bg-emerald-950 rounded-md text-center border-emerald-700 dark:border-emerald-800  items-center flex justify-center gap-2">
            <MdExplore className="h-5 w-5 inline-block" />
            About Me
          </li>
        </Link>
        <Link href={"/youtube"}>
          <li className="py-3 bg-emerald-900 dark:bg-emerald-950 rounded-md text-center border-emerald-700 dark:border-emerald-800  items-center flex justify-center gap-2">
            <FaYoutube className="h-5 w-5 inline-block" />
            Videos
          </li>
        </Link>
      </ul>
      <h2 className="pt-4 px-3.5 text-lg font-medium">Featured Posts:</h2>
      <ul className="px-1.5">
        {featuredPosts.map((post) => (
          <Link href={`/blogs/${post.slug}`} key={post.slug}>
            <li className={cn("py-3 px-3 bg-emerald-800 dark:bg-emerald-900 rounded-md text-center border-emerald-700 dark:border-emerald-800 items-center flex  gap-2 italic hover:bg-emerald-900 ")}>
              <IoReader className="h-5 w-5 inline-block" />
              {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
