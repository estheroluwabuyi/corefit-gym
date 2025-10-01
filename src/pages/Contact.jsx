import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { contactInfo } from "../utils/contactPageInfo";
import { div } from "framer-motion/client";

function Contact() {
  return (
    <div className=" bg-dark-alt min-h-screen  pb-15 lg:pb-20">
      <PageHeader
        title="Contact"
        titleSpan=" Us"
        titleSpanColor="text-secondary"
        subtitle="We’d love to hear from you! Whether it’s feedback, enquiries, or support, we’re just a message away—ready to listen and respond quickly."
      />

      <motion.section
        initial={{ opacity: 0.1, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        // className="grid-small-container grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-12 sm:max-w-4xl md:max-w-6xl lg:max-w-full mx-auto  lg:px-[5rem] px-8"
      >
        {contactInfo.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center gap-3">
              <Icon className="text-xl text-secondary" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </motion.section>
    </div>
  );
}

export default Contact;
