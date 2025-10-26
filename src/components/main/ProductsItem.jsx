import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useGym } from "../../contexts/GymContext";

function ProductsItem({ item }) {
  const {
    hoveredItemId,
    setHoveredItemId,
    containerActive,
    setContainerActive,
  } = useGym();

  return (
    <div
      className={clsx(
        "bg-text/90 p-7 xs:p-5 ss:p-7 lg:p-10 flex flex-col justify-center items-center rounded-2xl text-primary transition-all duration-700 ease-in-out",
        !item.inStock && "opacity-50",
        containerActive === item.id && item.inStock && "bg-text!"
      )}
      onMouseOver={() => setContainerActive(item.id)}
      onMouseLeave={() => setContainerActive(null)}
      onTouchStart={() => setContainerActive(item.id)}
      onTouchEnd={() => setContainerActive(null)}
    >
      <img
        src={item.image}
        alt={item.name}
        width={150}
        height={150}
        className={clsx(
          "w-[120px] h-[90px] sm:w-[180px] sm:h-[150px] lg:w-[220px] lg:h-[160px] bg-muted/40 p-3 sm:p-5 lg:p-7 rounded-2xl shadow-lg grid-large-containerImg transition-all duration-1500 ease-in-out",
          !item.inStock ? " grayscale" : "",
          containerActive === item.id && item.inStock && "scale-105"
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
          <motion.button
            className={clsx(
              "cursor-pointer bg-secondary w-[50px] px-2 py-1 rounded-[3px] flex items-center justify-center text-text border-2 border-secondary transition-all duration-600 hover:text-secondary hover:bg-transparent active:bg-transparent focus:bg-transparent active:text-secondary focus:text-secondary",
              hoveredItemId === item.id && "bg-transparent text-secondary"
            )}
            onTouchStart={() => setHoveredItemId(item.id)}
            onTouchEnd={() => setHoveredItemId(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaShoppingCart />
          </motion.button>
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
  );
}

export default ProductsItem;
