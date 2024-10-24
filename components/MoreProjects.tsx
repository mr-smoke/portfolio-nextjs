import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { moreProjects } from "@/data";

const MoreProjects = () => {
  return (
    <section id="more-projects" className="py-20">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center dark:text-blue-100 tracking-wide">
        More
        <span className="text-fuchsia-500"> projects</span>
      </h2>
      <div className="pt-10 antialiased">
        <InfiniteMovingCards items={moreProjects} speed="slow" />
      </div>
    </section>
  );
};

export default MoreProjects;
