import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function FadeInSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}

export default FadeInSection;
