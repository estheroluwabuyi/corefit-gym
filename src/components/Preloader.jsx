import { motion } from "framer-motion";
import Logo from "./Logo";

function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="preloader-bg fixed inset-0 flex flex-col justify-center items-center  z-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <Logo />
      </motion.div>

      <motion.p
        className="text-text font-russo text-lg sm:text-[1.5rem] mt-2 flex items-center  tracking-wide translate-x-[-1rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Loading your transformation
        <motion.span
          className="inline-block ml-1"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          ●
        </motion.span>
        <motion.span
          className="inline-block ml-0.5"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          ●
        </motion.span>
        <motion.span
          className="inline-block ml-0.5"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          ●
        </motion.span>
      </motion.p>
    </motion.div>
  );
}

export default Preloader;
