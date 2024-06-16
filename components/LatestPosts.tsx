import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const LatestPosts = () => {
  const latestPostArray = [
    {
      title: "A best social post 1",
      slug: "a-best-social-post-1",
      date: "2021-10-10",
      excerpt: "This is a short excerpt of the post",
      image: "http://localhost:3000/hero-home-image.jpg",
    },
    {
      title: "A best social post 2",
      slug: "a-best-social-post-2",
      date: "2021-10-11",
      excerpt: "This is a short excerpt of the post",
      image: "http://localhost:3000/hero-home-image.jpg",
    },
    {
      title: "A best social post 3",
      slug: "a-best-social-post-3",
      date: "2021-10-12",
      excerpt: "This is a short excerpt of the post",
      image: "http://localhost:3000/hero-home-image.jpg",
    },
    {
      title: "A best social post 4",
      slug: "a-best-social-post-4",
      date: "2021-10-13",
      excerpt: "This is a short excerpt of the post",
      image: "http://localhost:3000/hero-home-image.jpg",
    },
    {
      title: "A best social post 5",
      slug: "a-best-social-post-5",
      date: "2021-10-14",
      excerpt: "This is a short excerpt of the post",
      image: "http://localhost:3000/hero-home-image.jpg",
    },
    {
      title: "A best social post 6",
      slug: "a-best-social-post-6",
      date: "2021-10-15",
      excerpt: "This is a short excerpt of the post",
      image: "http://localhost:3000/hero-home-image.jpg",
    },
  ];
  return (
    <section className="px-3 py-3 max-w-7xl mx-auto">
      <div className="flex justify-between items-end">
        <h2
          className={"font-bold text-2xl text-emerald-800 dark:text-yellow-50"}
        >
          Latest Posts
        </h2>
        <div className="p-1">
          <Button variant={"default"} className="sm:hidden" size={"icon"}>
            <FaArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant={"default"}
            className="hidden sm:block"
            size={"default"}
          >
            See more
            <FaArrowRight className="h-4 w-4 inline ml-2" />
          </Button>
        </div>
      </div>
      <Separator className="mt-1 sm:my-2" />
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 sm:py-3 space-y-5 sm:space-y-0  py-3">
        {latestPostArray.map((post, index) => {
          const visibilityClass = index >= 4 ? "hidden sm:block" : "";

          return (
            <div
              key={index}
              className={cn(
                "flex justify-center space-x-3 flex-col cursor-pointer p-2 hover:bg-amber-100 dark:hover:bg-emerald-900 rounded-md",
                visibilityClass
              )}
            >
              <Image
                src={post.image}
                alt={post.title}
                className="rounded-md aspect-video"
                width={1280}
                height={720}
              />
              <div>
                <p className="text-lg pt-1.5 font-semibold text-emerald-800 dark:text-yellow-50">
                  {post.title}
                </p>
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                  {post.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LatestPosts;
