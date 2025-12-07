import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import { useGym } from "../contexts/GymContext";
import PageHeader from "../components/PageHeader";
import { useCart } from "../contexts/CartContext";

function Shop() {
  const { equipments } = useGym();
  const { addToCart } = useCart();

  return (
    <motion.div
      className=" bg-dark-alt min-h-screen pb-15 lg:pb-20"
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
    >
      <PageHeader
        title="Our"
        titleSpan=" Products"
        titleSpanColor="text-secondary"
        subtitle="Premium gear built for performance. From beginners to pros, find
        everything you need to push your limits and power your fitness journey."
      />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className=" text-[1.5rem] md:text-[1.7rem] mb-6 text-center px-8 pb-5 max-w-2xl mx-auto mt-15 font-semibold font-montserrat">
          Explore Our Collection
        </h2>

        <div className="grid-cols-1 max-w-[200px] grid xs:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 xs:max-w-4xl md:max-w-6xl lg:max-w-full mx-auto 2xl:px-[15rem] lg:px-[5rem] px-8">
          {equipments.map((item) => (
            <div key={item.id}>
              {item.inStock ? (
                <Link to={`/shop/${item.id}`}>
                  <CardComponent
                    item={item}
                    addToCart={() => addToCart(item)}
                  />
                </Link>
              ) : (
                <CardComponent item={item} />
              )}
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Shop;
