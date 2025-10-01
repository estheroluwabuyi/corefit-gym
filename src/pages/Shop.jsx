import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import { useGym } from "../contexts/GymContext";
import PageHeader from "../components/PageHeader";

function Shop() {
  const { equipments } = useGym();

  return (
    <div className=" bg-dark-alt min-h-screen  pb-15 lg:pb-20">
      <PageHeader
        title="Our"
        titleSpan=" Products"
        titleColor="text-secondary"
        subtitle="Premium gear built for performance. From beginners to pros, find
        everything you need to push your limits and power your fitness journey."
      />

      <motion.section
        initial={{ opacity: 0.1, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="grid-small-container grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-15 sm:max-w-4xl md:max-w-6xl lg:max-w-full mx-auto  lg:px-[5rem] px-8"
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
