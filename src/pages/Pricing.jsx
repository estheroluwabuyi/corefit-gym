import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import PricingPlanCards from "../components/pricing/PricingPlanCards";
import PricingPerks from "../components/pricing/PricingPerks";
import PricingFitnessEvolution from "../components/pricing/PricingFitnessEvolution";


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

        <section>
          <div className=" bg-secondary/10 border
       border-secondary/20 rounded-full px-6 py-2 mb-6 text-center mx-auto max-w-3xl text-[1.2rem] text-secondary  tracking-wider font-russo">
            CANCEL ANYTIME • NO HIDDEN FEES
          </div>

          <PricingPerks />
        </section>

        <PricingFitnessEvolution />
        <PricingPlanCards />

        {/* PRICING CTA */}
        <div className="text-center text-text/90 py-20 pt-30 text-[1.4rem] font-montserrat">
          Not sure which plan fits you best?{" "}
          <Link to='/contact'> <span className="text-secondary underline cursor-pointer ">
            Book a free consultation.
          </span></Link>

        </div>


      </motion.section>
    </motion.div>
  );
}

export default Pricing;
