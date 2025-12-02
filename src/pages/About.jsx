import { motion } from "framer-motion";

import PageHeader from "../components/PageHeader";
import AboutMission from "../components/about/AboutMission";
import AboutStory from "../components/about/AboutStory";
import AboutTeam from "../components/about/AboutTeam";
import WhyChooseUs from "../components/about/WhyChooseUs";

function About() {
  return (
    <motion.div
      className=" bg-dark-alt min-h-screen "
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
        className="mt-15"
      >
        <h2 className=" text-[1.5rem] md:text-[1.7rem] text-center pb-15 max-w-2xl mx-auto font-semibold font-montserrat capitalize px-8">
          Building more than bodies — we build people.
        </h2>

        <div className="lg:px-[5rem] 2xl:px-[15rem] px-8 ">
          <AboutStory />
          <AboutMission />
          <AboutTeam />
        </div>
        <WhyChooseUs />
      </motion.section>
    </motion.div>
  );
}

export default About;
