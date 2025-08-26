import { motion } from "framer-motion";

function FadeInSection({
  children,
  className = "",
  delay = 0,
  animation = "fade",
}) {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    },
    slide: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    blur: {
      initial: { opacity: 0, filter: "blur(10px)" },
      animate: { opacity: 1, filter: "blur(0px)" },
    },
  };

  return (
    <motion.section
      className={className}
      initial={variants[animation].initial}
      whileInView={variants[animation].animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}

export default FadeInSection;
