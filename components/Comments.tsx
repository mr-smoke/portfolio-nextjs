import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Comments = () => {
  return (
    <section id="comments" className="py-20">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center dark:text-blue-100 tracking-wide">
        Comments from
        <span className="text-fuchsia-500"> some clients</span>
      </h2>
      <div className="pt-10 antialiased">
        <InfiniteMovingCards items={testimonials} speed="slow" />
      </div>
    </section>
  );
};

export default Comments;
