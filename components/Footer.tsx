import { socialMedia } from "@/data";
import { ButtonsCard } from "./ui/ButtonsCard";
import Background from "./ui/Background";

const Footer = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 relative">
      <Background className="h-full" />
      <div className="flex flex-col items-center gap-10 relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center dark:text-blue-100 tracking-wide">
          Ready to take your project to the
          <span className="text-fuchsia-500"> next level?</span>
        </h2>
        <p className="text-xl text-center pt-4">
          Let's work together to create something unique.
        </p>
        <a href="mailto:muhammetbakiduman@gmail.com">
          <ButtonsCard>Get in touch</ButtonsCard>
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-10 z-10 relative">
        <p className="text-center text-gray-400 order-1 pt-4 sm:text-start md:-order-none sm:pt-0">
          <span className="font-bold text-white">Copyright © 2024</span> Baki
          Duman
        </p>
        <div className="flex gap-4 items-center">
          {socialMedia.map((item) => (
            <a
              href={item.link}
              key={item.name}
              target="_blank"
              rel="noreferrer"
              className="border border-slate-800 rounded-xl p-2 hover:opacity-80 transition-opacity"
            >
              <img src={item.img} alt={item.name} className="w-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
