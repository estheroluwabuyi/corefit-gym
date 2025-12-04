import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <motion.div
      className="bg-dark-alt min-h-screen"
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
    >
      <PageHeader
        title="Membership"
        titleSpan=" Plans"
        titleColor="text-secondary"
        subtitle="Your goals, your pace, your plan. Choose from flexible membership options designed to support every stage of your fitness journey."
      />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className=" text-[1.5rem] md:text-[1.7rem] mb-6 text-center px-8 pb-5 max-w-2xl mx-auto mt-15 font-semibold font-montserrat">
          Select Your Membership
        </h2>

        {/* <div className="grid-cols-1 max-w-[200px] grid xs:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 xs:max-w-4xl md:max-w-6xl lg:max-w-full mx-auto 2xl:px-[15rem] lg:px-[5rem] px-8"> */}
        <div className="2xl:px-[15rem] lg:px-[5rem] px-8">
          {/* {equipments.map((item) => (
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
          ))} */}
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Pricing;
