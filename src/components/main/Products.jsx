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

      {/* use mediaquery width <=320 single col */}
      <div className="grid-small-container grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-5 gap-7 md:gap-10 mt-12 sm:max-w-4xl md:max-w-5xl lg:max-w-full mx-auto">
        {equipments.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="bg-text/90 p-7 flex flex-col justify-center items-center rounded-3xl gap-7 text-primary "
          >
            <img
              src={item.image}
              alt={item.name}
              width={150}
              height={150}
              className="w-[100px] h-[80px] sm:w-[150px] sm:h-[120px] lg:w-[200px] lg:h-[170px] bg-muted/40 p-3 sm:p-5 lg:p-7 rounded-2xl shadow-lg"
            />

            <div>
              <h2 className="md:text-[1.35rem] lg:text-[1.55rem] font-semibold text-center">
                {item.name}
              </h2>

              <div className="text-sm"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
