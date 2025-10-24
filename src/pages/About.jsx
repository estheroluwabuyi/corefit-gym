import { motion } from "framer-motion";

import PageHeader from "../components/PageHeader";
import AboutMission from "../components/AboutMission";

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

        {/* Our Story */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 shadow-2xl p-7 py-10 bg-muted/50 rounded-3xl items-center">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="/images/about/community.jpg"
              alt="Gym community story"
              width="300"
              height="250"
              className="w-full  rounded-lg "
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2 ">
            <div className="flex flex-col items-center">
              <h2 className="text-[1.5rem] md:text-[1.7rem]  text-center  max-w-2xl mx-auto font-semibold font-montserrat mb-3">
                Our Story
              </h2>
              <div className="h-1.5 w-20 bg-secondary  rounded-full mb-10"></div>
            </div>

            <p className="text-[1.4rem] lg:text-[1.7rem] tracking-wider leading-relaxed sm:max-w-4xl lg:max-w-5xl mb-8 ">
              Founded in 2018, CoreFit began with a simple idea — to create a
              space where everyone feels welcome, regardless of where they are
              in their fitness journey.
              <p className="my-5">
                What started as a small community gym quickly grew into a place
                of transformation — not just of bodies, but of confidence,
                mindset, and lifestyle. From the first weights lifted to the
                friendships formed, every moment here is powered by passion and
                progress.
              </p>
              At CoreFit, we believe in energy, encouragement, and growth. We’re
              more than just a gym — we’re a family that pushes, supports, and
              celebrates every milestone with you.
            </p>

            {/*  Story Quote*/}
            <div className="flex justify-center items-center mt-5">
              <div className="w-1.5 h-12 sm:h-7.5 mr-2 bg-text/40 rounded-full "></div>
              <p
                className=" italic text-secondary  font-medium 
                lg:text-1.4rem tracking-wider font-mono "
              >
                “Stronger together — one rep, one goal, one family.”
              </p>
            </div>
          </div>
        </div>

        <AboutMission />
      </motion.section>
    </motion.div>
  );
}

export default About;
