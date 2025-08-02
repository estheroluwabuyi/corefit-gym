import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import clsx from "clsx";

import SectionHeader from "../SectionHeader";
import { equipmentItems } from "../../utils/equipmentList";
import { i } from "framer-motion/client";

function Products() {
  const [equipments, setEquipments] = useState(equipmentItems);

  return (
    <div className="bg-primary p-8 pt-12 lg:px-[5rem]">
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

      <div className="grid-small-container grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-12 sm:max-w-4xl md:max-w-6xl lg:max-w-full mx-auto">
        {equipments.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className={
              "bg-text/90 p-7 lg:p-10 flex flex-col justify-center items-center rounded-3xl  text-primary " +
              clsx(item.inStock ? "" : "opacity-50 cursor-not-allowed")
            }
          >
            <img
              src={item.image}
              alt={item.name}
              width={150}
              height={150}
              className={clsx(
                "w-[120px] h-[90px] sm:w-[180px] sm:h-[150px] lg:w-[220px] lg:h-[160px] bg-muted/40 p-3 sm:p-5 lg:p-7 rounded-2xl shadow-lg grid-large-containerImg",
                !item.inStock ? " grayscale" : ""
              )}
            />

            <div>
              <h2 className="md:text-[1.35rem] lg:text-[1.55rem] font-semibold text-center my-[2rem]">
                {item.name}
              </h2>
            </div>

            <div className="self-start text-[1.5rem] lg:text-[1.7rem] flex justify-between w-full">
              <div className="font-bold  font-montserrat">${item.price}</div>

              {item.inStock ? (
                <button className="cursor-pointer bg-secondary w-[50px] px-2 py-1 rounded-[3px] flex items-center justify-center">
                  <FaShoppingCart className="text-text" />
                </button>
              ) : (
                <button
                  className="bg-gray-400 text-white text-[0.8rem] lg:text-[1rem] px-2 py-1 rounded-[3px]"
                  disabled
                >
                  Out of Stock
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
