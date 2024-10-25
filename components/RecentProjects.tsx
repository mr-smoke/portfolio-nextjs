import { projects } from "@/data/index";
import { PinContainer } from "./ui/PinContainer";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center dark:text-blue-100 tracking-wide">
        A curated selection of
        <span className="text-fuchsia-500"> recent projects</span>
      </h2>
      <div className="flex justify-center flex-wrap mt-10">
        {projects.map((project, index) => (
          <div
            className="flex w-[80vw] xl:w-1/2 h-[30rem] sm:min-h-[36.5rem]"
            key={index}
          >
            <PinContainer
              containerClassName="w-full"
              title="Visit"
              href={project.link}
            >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden">
                <div className="relative w-full bg-violet-950 overflow-hidden rounded-t-3xl h-full ">
                  <Image
                    src="/bg.png"
                    alt="background"
                    width={570}
                    height={340}
                    className="max-w-full h-auto"
                  />
                </div>
                <Image
                  src={project.img}
                  alt={project.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="absolute -bottom-3 transform rotate-3 w-11/12 rounded-t-3xl overflow-hidden"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-8">
                  {project.title}
                </h3>
                <p className="text-base sm:text-xl font-light text-fuchsia-200 mt-2">
                  {project.des}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex">
                  {project.iconLists.map((icon, index) => (
                    <span
                      key={index}
                      style={{ transform: `translateX(-${5 * index}px)` }}
                    >
                      <Image
                        src={icon}
                        alt="icon"
                        width={28}
                        height={28}
                        className="border border-slate-500 rounded-full sm:w-10 sm:h-10 w-7 h-7 p-1 sm:p-2 bg-gray-900"
                      />
                    </span>
                  ))}
                </div>
                <button className="text-purple text-sm sm:text-xl tracking-wider font-medium flex items-center gap-2">
                  Check Live Site
                  <LuExternalLink />
                </button>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
