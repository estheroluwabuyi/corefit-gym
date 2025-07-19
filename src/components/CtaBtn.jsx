import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

function CtaBtn({ text, bg, hoverBg, hoverBorder, activeBg, others }) {
  const [mobileHovered, setMobileHovered] = useState(false);

  return (
    <motion.button
      className={clsx(
        `${bg} py-4 px-8 lg:px-12 rounded-tl-[1.8rem] rounded-br-[1.8rem] text-[1.5rem] lg:text-[1.8rem] border-2 border-secondary font-[600] uppercase tracking-wide text-text transition-all duration-600 hover:${hoverBg} hover:${hoverBorder} active:${activeBg} mt-8 ${others} focus:outline-none focus:ring focus:ring-secondary`,
        mobileHovered && `${hoverBg}`
      )}
      onTouchStart={() => setMobileHovered(true)}
      onTouchEnd={() => setMobileHovered(false)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {text}
    </motion.button>
  );
}

export default CtaBtn;

{
  /* <motion.button
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
      </motion.div> */
}
