import { Button } from "./ui/MovingCard";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center dark:text-blue-100 tracking-wide">
        My
        <span className="text-fuchsia-500"> work experience</span>
      </h2>
      <div className="pt-10 flex flex-wrap justify-center">
        {workExperience.map((exp, idx) => {
          return (
            <div className="w-[80vw] lg:w-1/2 p-4" key={idx}>
              <Button duration={Math.floor(Math.random() * 10000) + 10000}>
                <div className="flex items-center flex-col md:flex-row p-8">
                  <img
                    src={exp.thumbnail}
                    alt={exp.title}
                    className="w-28 h-28"
                  />
                  <div className="mt-4 md:ml-4 text-center md:text-start">
                    <h3 className="text-lg md:text-2xl font-semibold text-blue-100">
                      {exp.title}
                    </h3>
                    <p className="text-md md:text-lg text-blue-200 mt-2">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
