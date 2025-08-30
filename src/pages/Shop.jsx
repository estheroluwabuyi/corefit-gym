import { useContext } from "react";
import { GymContext } from "../App";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Shop() {
  const {
    equipments,
    hoveredItemId,
    setHoveredItemId,
    containerActive,
    setContainerActive,
  } = useContext(GymContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
      className=" bg-dark-alt min-h-screen  pb-15 lg:pb-20"
    >
      <section className="min-h-[40vh] w-full component-header-bg lg:px-[5rem] pt-[15rem] pb-[5rem] px-8 text-text flex flex-col justify-center items-center text-center gap-7">
        <h1 className="text-[2rem] md:text-[4rem] font-bold uppercase font-montserrat drop-shadow-lg ">
          Our <span className="text-secondary">Products</span>
        </h1>
        <p className="text-text/85 max-w-2xl text-[1.35rem] lg:text-[1.55rem] tracking-wider">
          Premium gear built for performance. From beginners to pros, find
          everything you need to push your limits and power your fitness
          journey.
        </p>
      </section>

      <section className="grid-small-container grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-12 sm:max-w-4xl md:max-w-6xl lg:max-w-full mx-auto  lg:px-[5rem] px-8">
        {equipments.map((item) => (
          <div
            key={item.id}
            className={clsx(
              "bg-text/90 p-7 lg:p-10 flex flex-col justify-center items-center rounded-2xl text-primary transition-all duration-700 ease-in-out",
              !item.inStock && "opacity-50",
              containerActive === item.id && item.inStock && "bg-text!"
            )}
            onMouseOver={() => setContainerActive(item.id)}
            onMouseLeave={() => setContainerActive(null)}
            onTouchStart={() => setContainerActive(item.id)}
            onTouchEnd={() => setContainerActive(null)}
          >
            {item.inStock ? (
              <Link to={`/shop/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                  className={clsx(
                    "w-[120px] h-[90px] sm:w-[180px] sm:h-[150px] lg:w-[220px] lg:h-[160px] bg-muted/40 p-3 sm:p-5 lg:p-7 rounded-2xl shadow-lg grid-large-containerImg transition-all duration-1500 ease-in-out",
                    containerActive === item.id && "scale-105"
                  )}
                />
              </Link>
            ) : (
              <img
                src={item.image}
                alt={item.name}
                width={150}
                height={150}
                className={clsx(
                  "w-[120px] h-[90px] sm:w-[180px] sm:h-[150px] lg:w-[220px] lg:h-[160px] bg-muted/40 p-3 sm:p-5 lg:p-7 rounded-2xl shadow-lg grid-large-containerImg transition-all duration-1500 ease-in-out grayscale"
                )}
              />
            )}

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
        ))}
      </section>
    </motion.div>
  );
}

export default Shop;
