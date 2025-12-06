import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import PricingCards from "../components/pricing/PricingCards";
import PricingSection from "../components/pricing/PricingSection";


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
        className="2xl:px-[15rem] lg:px-[5rem] px-8"
      >


        <h2 className=" text-[1.5rem] md:text-[1.7rem] mb-6 text-center px-8 pb-5 max-w-2xl mx-auto mt-15 font-semibold font-montserrat ">
          From Starter to Elite — Your Fitness Evolution Starts Here
        </h2>

        <PricingSection />
        <PricingCards />

        {/* PRICING CTA */}
        <p className="text-center text-text/90 py-20 pt-30 text-[1.4rem] font-montserrat">
          Not sure which plan fits you best?{" "}
          <Link to='/contact'> <span className="text-secondary underline cursor-pointer ">
            Book a free consultation.
          </span></Link>

        </p>
      </motion.section>
    </motion.div>
  );
}

export default Pricing;
