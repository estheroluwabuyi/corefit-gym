import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { useGym } from "../contexts/GymContext";

function Contact() {
  const { contactPage } = useGym();
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
        className="lg:px-[5rem] px-8 mt-15"
      >
        <p className=" text-[1.5rem] md:text-[1.7rem] mb-6 text-center pb-12 max-w-2xl mx-auto">
          Reach us through any of the options below—we’ll get back to you
          quickly.
        </p>
        <div className="flex flex-col lg:flex-row gap-8">
          {contactPage.map((item) => {
            const Icon = item.icon;
            return (
              <a
                href={item.link}
                target={item.id === 111 ? "_blank" : "_self"}
                rel={item.id === 111 ? "noopener noreferrer" : undefined}
                key={item.id}
                className="w-full h-[170px] md:h-[210px] flex items-center gap-8 border border-text/70 rounded-lg px-6 flex-col justify-center shadow-lg hover:shadow-[0_0_12px_#ff944d] hover:scale-[1.005] hover:-translate-y-1 active:shadow-[0_0_12px_#ff944d] active:scale-[1.005] active:-translate-y-1
 transition-all duration-500 hover:border-secondary active:border-secondary"
              >
                <Icon className="text-[3.5rem] lg:text-[5rem] text-secondary" />
                <span className="text-[1.5rem] md:text-[1.7rem] text-center font-semibold">
                  {item.text}
                </span>
              </a>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
}

export default Contact;
