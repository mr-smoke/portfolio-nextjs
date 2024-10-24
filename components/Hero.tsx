import Background from "./ui/Background";
import { ButtonsCard } from "./ui/ButtonsCard";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div>
      <Background className="h-screen" />
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
      <div className="relative z-10 flex justify-center h-screen">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="text-xs md:text-sm text-center text-blue-100 mb-5 uppercase tracking-widest">
            Bringing concepts to life with seamless user experiences
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-black-100 dark:text-blue-100 tracking-wide">
            Welcome to the next era of
            <span className="text-fuchsia-500"> web development</span>
          </h1>
          <TextGenerateEffect
            words="Hi there! I'm a web developer from Turkey, passionate about crafting modern, responsive websites and applications."
            className="text-4xl md:text-5xl lg:text-6xl text-center pt-4 pb-8"
          />
          <a href="#about" className="mt-5">
            <ButtonsCard>Get Started</ButtonsCard>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
