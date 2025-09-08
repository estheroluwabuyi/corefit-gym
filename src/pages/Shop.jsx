import { useContext } from "react";
import { GymContext } from "../App";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CardComponent from "../components/CardComponent";

function Shop() {
  const { equipments } = useContext(GymContext);

  return (
    <div className=" bg-dark-alt min-h-screen  pb-15 lg:pb-20">
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

      <motion.section
        initial={{ opacity: 0.1, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="grid-small-container grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-12 sm:max-w-4xl md:max-w-6xl lg:max-w-full mx-auto  lg:px-[5rem] px-8"
      >
        {equipments.map((item) => (
          <div key={item.id}>
            {item.inStock ? (
              <Link to={`/shop/${item.id}`}>
                <CardComponent item={item} />
              </Link>
            ) : (
              <CardComponent item={item} />
            )}
          </div>
        ))}
      </motion.section>
    </div>
  );
}

export default Shop;
