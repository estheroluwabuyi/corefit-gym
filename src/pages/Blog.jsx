import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CtaBtn from "../components/CtaBtn";

function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0.7, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className="min-h-screen bg-dark-alt flex flex-col items-center justify-center text-center px-6"
    >
      {/* GIF */}
      <img
        height={280}
        width={250}
        src="/gifs/hammer.gif"
        alt="Under construction"
        className="w-[200px] md:w-[280px] mb-8"
      />

      {/* Text */}
      <h1 className="text-[2.2rem] md:text-[3rem] font-montserrat font-semibold text-secondary mb-3">
        Page Under Construction
      </h1>
      <p className="text-text/80 md:text-[1.4rem] max-w-lg mb-2">
        We’re working hard to bring you exciting fitness articles, tips, and
        updates soon. Stay tuned!
      </p>

      {/* Button */}
      <Link to="/" className="">
        <CtaBtn
          hoverBg="hover:bg-transparent"
          activeBg="active:bg-transparent"
          mobileHoverBg="bg-transparent"
          text="Go Back Home"
          bg="bg-secondary"
          radius="rounded-md"
        />
      </Link>
    </motion.div>
  );
}

export default Blog;
