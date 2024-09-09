import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data/index";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.value}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
