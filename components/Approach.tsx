import { CanvasRevealEffectDemo2 } from "./ui/CanvasRevealEffectCard";
import { myApproach } from "@/data/index";

const Approach = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center dark:text-blue-100 tracking-wide">
        My
        <span className="text-fuchsia-500"> approach</span>
      </h2>
      <div className="pt-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto sm:px-8">
        {myApproach.map((item, id) => (
          <CanvasRevealEffectDemo2
            key={id}
            title={item.title}
            description={item.description}
            img={item.img}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Approach;
