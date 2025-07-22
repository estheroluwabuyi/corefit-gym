import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

function CtaBtn({ text, bg, hoverBg, activeBg, mobileHoverBg }) {
  const [mobileHovered, setMobileHovered] = useState(false);

  return (
    <motion.button
      className={clsx(
        `${bg} py-4 px-8 lg:px-12 rounded-tl-[1.8rem] rounded-br-[1.8rem] text-[1.45rem] lg:text-[1.7rem] border-2 border-secondary font-[600] uppercase tracking-wide text-text transition-all duration-600 ${hoverBg} ${activeBg} mt-8 focus:outline-none focus:ring focus:ring-secondary`,
        mobileHovered && `${mobileHoverBg}`
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
