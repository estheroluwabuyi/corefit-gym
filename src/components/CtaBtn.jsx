import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

function CtaBtn({ text, bg, hoverBg, activeBg, others }) {
  const [mobileHovered, setMobileHovered] = useState(false);

  return (
    <motion.button
      className={clsx(
        `${bg} py-4 px-8 lg:px-12 rounded-tl-[1.8rem] rounded-br-[1.8rem] text-[1.5rem] lg:text-[1.8rem] border-2 border-secondary font-[600] uppercase tracking-wide text-text transition-all duration-600 ${hoverBg} ${activeBg} mt-8 ${others} focus:outline-none focus:ring focus:ring-secondary`,
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
