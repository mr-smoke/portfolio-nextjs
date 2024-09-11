import { socialMedia } from "@/data";
import { ButtonsCard } from "./ui/ButtonsCard";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10">
      <div className="flex  flex-col items-center gap-4">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center dark:text-blue-100 tracking-wide">
          Ready to take your project to the
          <span className="text-fuchsia-500"> next level?</span>
        </h2>
        <p className="text-lg pb-8">
          Let's work together to create something unique.
        </p>
        <ButtonsCard>Get in touch</ButtonsCard>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-10">
        <p className="text-center order-1 pt-4 sm:text-start sm:-order-none sm:pt-0">
          Copyright © 2024 Muhammet Baki Duman
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