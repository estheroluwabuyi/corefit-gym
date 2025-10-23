import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { useGym } from "../contexts/GymContext";
import clsx from "clsx";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";

function Contact() {
  const { contactPage, containerActive, setContainerActive } = useGym();

  return (
    <motion.div
      className=" bg-dark-alt min-h-screen  pb-15 lg:pb-20"
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
    >
      <PageHeader
        title="Contact"
        titleSpan=" Us"
        titleSpanColor="text-secondary"
        subtitle="We’d love to hear from you! Whether it’s feedback, enquiries, or support, we’re just a message away—ready to listen and respond quickly."
      />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="lg:px-[5rem] 2xl:px-[15rem] px-8 mt-15"
      >
        <h2 className=" text-[1.5rem] md:text-[1.7rem] text-center pb-15 max-w-2xl mx-auto font-semibold font-montserrat ">
          Reach Us Through Any of the Options Below — We’ll Get Back to You
          Quickly.
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {contactPage.map((item) => {
            const Icon = item.icon;
            return (
              <a
                href={item.link}
                target={item.id === 111 ? "_blank" : "_self"}
                rel={item.id === 111 ? "noopener noreferrer" : undefined}
                key={item.id}
                className={clsx(
                  "w-full h-[170px] md:h-[210px] flex items-center gap-8 border border-text/70 rounded-lg px-6 flex-col justify-center shadow-lg  transition-all duration-500 ease-in-out",
                  containerActive === item.id &&
                    "border-secondary! shadow-[0_0_12px_#ff944d]! scale-[1.005] -translate-y-1"
                )}
                onMouseOver={() => setContainerActive(item.id)}
                onMouseLeave={() => setContainerActive(null)}
                onTouchStart={() => setContainerActive(item.id)}
                onTouchEnd={() => setContainerActive(null)}
              >
                <Icon className="text-[3.5rem] lg:text-[5rem] text-secondary" />
                <span className="text-[1.5rem] md:text-[1.7rem] text-center font-semibold">
                  {item.text}
                </span>
              </a>
            );
          })}
        </div>

        {/* CONTACT FORM AND MAP */}
        <div className="mt-20 flex lg:flex-row flex-col w-full justify-center items-center gap-8 lg:gap-16 ">
          <ContactForm />
          <ContactMap />
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Contact;
