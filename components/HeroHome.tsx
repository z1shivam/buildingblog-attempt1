import heroImage from "@/public/hero-home-image.jpg";
import Image from "next/image";
import { SearchBox } from "./elements/SearchBox";

const HeroHome = () => {
  return (
    <>
      <section className="sm:hidden">
        <div className="w-full h-96 relative z-0">
          <Image
            src={heroImage}
            alt="Hero Home Image"
            className="h-full object-cover w-full"
            priority
          />
          <div className="bg-gradient-to-t from-emerald-950 to-black/0 w-full h-72 absolute bottom-0 z-0">

          </div>
          <div className="absolute bottom-0 p-3 w-full z-10">
            <SearchBox />
          </div>
        </div>
      </section>
      <section className="hidden sm:block">
        <div className="w-full h-[450px] relative z-0 ">
          <Image
            src={heroImage}
            alt="Hero Home Image"
            className="h-full object-cover w-full"
            priority
          />
          <div className="h-full w-full bg-gradient-to-tr from-emerald-950 to-emerald-400/0 absolute bottom-0 "></div>
          <div className="max-w-7xl mx-auto px-8">
            <div className="absolute top-1/2 flex gap-6 flex-col">
              <div>
                <h1 className="text-6xl text-white font-bold">
                  Some text in H1
                </h1>
                <h2 className="text-2xl text-gray-300">Some text in H2</h2>
              </div>
              <div className="w-full">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHome;
