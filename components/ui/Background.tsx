import { cn } from "@/lib/utils";

const Background = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center",
        className
      )}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
};

export default Background;
