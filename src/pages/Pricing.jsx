import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import {  FaDragon, FaHorseHead, FaWolfPackBattalion } from "react-icons/fa";
import { GiLion } from "react-icons/gi";

const plans = [
  {
    name: "Starter Plan",
    price: 59,
    icon: <FaHorseHead className="text-gray-400" />,
    features: [
      "2 days per week access",
      "Access to standard classes",
      "Basic gym floor access",
      "Progress tracking via CoreFit app",
    ],
    highlight: false,
  },
  {
    name: "Basic Plan",
    price: 99,
    icon: <FaWolfPackBattalion className="text-blue-400"/>,
    features: [
      "3 days per week access",
      "Access to all group classes",
      "CoreFit mobile app included",
      "1 complimentary gym merch item",
    ],
    highlight: false,
  },
  {
    name: "Premium Plan",
    price: 199,
    icon: <GiLion className="text-yellow-500"/>,
    tag: "Most Popular",
    features: [
      "5 days per week access",
      "All classes + HIIT + Boxing",
      "1 personal training session monthly",
      "Free gym kit (towel + bottle)",
    ],
    highlight: true,
  },
  {
    name: "Elite Plan",
    price: 299 ,
    icon: <FaDragon className="text-purple-500"/>,
    features: [
      "Unlimited access",
      "VIP class access",
      "Weekly personal training",
      "Full gym merchandise kit",
      "Nutrition guide",
    ],
    highlight: false,
  },
];

function Pricing() {
  return (
    <motion.div
      className="bg-dark-alt min-h-screen"
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
    >
      <PageHeader
        title="Membership"
        titleSpan=" Plans"
        titleColor="text-secondary"
        subtitle="Your goals, your pace, your plan. Choose from flexible membership options designed to support every stage of your fitness journey."
      />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="2xl:px-[15rem] lg:px-[5rem] px-8"
      >
        <h2 className=" text-[1.5rem] md:text-[1.7rem] mb-6 text-center px-8 pb-5 max-w-2xl mx-auto mt-15 font-semibold font-montserrat ">
          Select Your Membership
        </h2>

         <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 xl:grid-cols-4 gap-10  mx-auto max-w-2xl  sm:max-w-6xl  xl:max-w-full">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 55 }}
            className={`bg-black/90 rounded-2xl p-8 justify-center flex-col flex border  ${
              plan.highlight
                ? "border-secondary shadow-[0_0_20px_rgba(247,92,3,0.3)]"
                : "border-white/10"
            }`}
          >
            {plan.icon && (
              <div className="text-[5rem] ss:text-[7rem] mb-7 flex justify-center">
                {plan.icon}
              </div>
            )}
            {plan.tag && (
              <div className="text-center mb-4">
    <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-[1.2rem] font-semibold tracking-wider border border-secondary/20">
      {plan.tag}
    </span>
  </div>
            )}


            <h2 className="text-[1.8rem] ss:text-[2rem] lg:text-[2.2rem] font-montserrat uppercase font-bold text-center tracking-wider">
              {plan.name}
            </h2>
            <p className="text-center text-[2.5rem] font-bold mt-3 font-montserrat">
  <span className={`${plan.highlight ? 'text-secondary' : 'text-text'}`}>
    ${plan.price}
  </span>
  <span className="text-[1.2rem] text-text/40 tracking-wide">/month</span>
</p>

            <ul className="mt-6 space-y-3 text-text/80 leading-relaxed tracking-wide text-[1.35rem]">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
  <HiCheck className={`text-[1.5rem] ${
    plan.name === "Starter Plan" ? "text-gray-400" :
    plan.name === "Basic Plan" ? "text-blue-400" :
    plan.name === "Premium Plan" ? "text-yellow-500" :
    "text-purple-500"
  }`}/> 
  <span className={plan.highlight ? "text-text" : "text-text/80"}>{f}</span>
</li>
              ))}
            </ul>

            <button
              className={`w-full mt-10 py-3 rounded-lg text-[1.3rem] font-semibold transition-all duration-500 uppercase font-montserrat tracking-wide ${
                plan.highlight
                  ? "bg-secondary text-text"
                  : "bg-secondary/20 text-secondary hover:bg-secondary hover:text-text"
              }`} 
            >
              {plan.highlight ? "Join Premium" : "Select Plan"}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <p className="text-center text-text/90 py-20 pt-30 text-[1.4rem] font-montserrat">
        Not sure which plan fits you best?{" "}
        <Link to='/contact'> <span className="text-secondary underline cursor-pointer ">
          Book a free consultation.
        </span></Link>
       
      </p>
      </motion.section>
    </motion.div>
  );
}

export default Pricing;
