import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
import { equipmentItems } from "../../utils/equipmentList";

function Products() {
  const [equipments, setEquipments] = useState(equipmentItems);

  return (
    <div className="bg-primary px-8 py-8 pt-12 lg:px-[5rem]">
      <SectionHeader
        title="Our "
        highlight="Products"
        highlightColor="text"
        titleColor="secondary"
      />

      <p className="md:text-[1.35rem] lg:text-[1.55rem] tracking-wider sm:max-w-5xl lg:max-w-7xl text-center mx-auto">
        We’ve got the tools to match your hustle. Built for performance, priced
        for you. Ready to power up your home or gym space?
      </p>
    </div>
  );
}

export default Products;
