import { useState } from "react";

import { motion } from "framer-motion";
import clsx from "clsx";

import heroImg from "/images/bg.webp";

function Hero() {
  const [mobileHovered, setMobileHovered] = useState(false);

  return (
    <header className="bg-black pt-[15rem] lg:pt-[11rem] hero-bg px-8 flex justify-between items-center lg:items-start lg:px-[5rem] flex-col lg:flex-row gap-8 relative overflow-hidden">
      {/* Hero Text */}
      <motion.div
        className="text-center lg:text-left self-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1.3, ease: "easeOut" }}
      >
        <h1 className="font-montserrat font-[800] text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.5rem] uppercase">
          <span className="text-secondary text-shadow-orange">Break</span>{" "}
          <span className="text-text text-shadow-orange">Limits,</span> <br />
          <span className="text-text text-shadow-orange">Build</span>{" "}
          <span className="text-secondary text-shadow-orange">Legends.</span>
        </h1>

        <p className="text-[1.2rem] md:text-[1.4rem] lg:text-[1.55rem] font-[500] mt-4 max-w-3xl tracking-wider">
          Stop settling. Push past limits, crush excuses, and forge
          <span className="text-secondary font-[600] text-shadow-orange">
            {" "}
            unshakable strength.
          </span>{" "}
          Your transformation starts now.
        </p>

        <motion.button
          className={clsx(
            "bg-secondary py-4 px-8 lg:px-12 rounded-tl-[1.8rem] rounded-br-[1.8rem] text-[1.5rem] lg:text-[1.8rem] border-2 border-secondary font-[600] uppercase tracking-wide text-text hover:bg-transparent transition-all duration-600 hover:border-secondary active:border-secondary mt-8 mb-4 lg:mb-3 focus:outline-none focus:ring focus:ring-secondary",
            mobileHovered && "border-secondary bg-transparent"
          )}
          onTouchStart={() => setMobileHovered(true)}
          onTouchEnd={() => setMobileHovered(false)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Start Training
        </motion.button>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="lg:self-end  lg:translate-y-[2rem]"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1.3, ease: "easeOut" }}
      >
        <img
          src={heroImg}
          alt="Hero Image"
          width={400}
          height={400}
          className="w-[300px] sm:w-[500px] lg:w-[600px] max-w-full h-auto object-cover "
          loading="eager"
        />
      </motion.div>
    </header>
  );
}

export default Hero;
