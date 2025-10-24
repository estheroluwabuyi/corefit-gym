import { motion } from "framer-motion";

import PageHeader from "../components/PageHeader";
import AboutMission from "../components/AboutMission";
import AboutStory from "../components/main/AboutStory";

function About() {
  return (
    <motion.div
      className=" bg-dark-alt min-h-screen pb-15 lg:pb-20"
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
    >
      <PageHeader
        title="About"
        titleSpan=" Us"
        titleColor="text-secondary"
        subtitle="Our gym is more than just a workout space—it’s a place where support, energy, and dedication come together to fuel every fitness journey."
      />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="lg:px-[5rem] 2xl:px-[15rem] px-8 mt-15"
      >
        <h2 className=" text-[1.5rem] md:text-[1.7rem] text-center pb-15 max-w-2xl mx-auto font-semibold font-montserrat capitalize">
          Building more than bodies — we build people.
        </h2>

        <AboutStory />
        <AboutMission />
      </motion.section>
    </motion.div>
  );
}

export default About;
