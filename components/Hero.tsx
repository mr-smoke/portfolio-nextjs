import Background from "./ui/Background";
import { ButtonsCard } from "./ui/ButtonsCard";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <Background />
      <div className="relative my-20 z-10 flex justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-black-100 dark:text-blue-100 tracking-wide ">
            Welcome to the future of design
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-center text-black-100 dark:text-blue-100 mt-5 mb-5">
            Transforming Concepts into Seamless User Experiences
          </p>
          <TextGenerateEffect
            words="Hi! I'm a web developer and designer based in Turkey. I specialize
            in creating modern, responsive websites and applications."
            className="text-4xl md:text-5xl lg:text-6xl text-center"
          />
          <ButtonsCard className="mt-10">Get Started</ButtonsCard>
        </div>
      </div>
    </div>
  );
};

export default Hero;
