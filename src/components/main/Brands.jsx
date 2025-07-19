import { motion } from "framer-motion";
import clsx from "clsx";

import adidas from "/images/brands/adidas-2.svg";
import allianz from "/images/brands/allianz.webp";
import asics from "/images/brands/asics.svg";
import nike from "/images/brands/nike.svg";
import dhl from "/images/brands/dhl.svg";
import optimum from "/images/brands/optimum.webp";
import paypal from "/images/brands/paypal.svg";
import rogue from "/images/brands/rogue.webp";
import stripe from "/images/brands/stripe.svg";
import underArmour from "/images/brands/under-armour.svg";
import SectionHeader from "../SectionHeader";

const logos = [
  { src: adidas, alt: "Adidas" },
  { src: allianz, alt: "Allianz" },
  { src: nike, alt: "Nike" },
  { src: asics, alt: "Asics" },
  { src: dhl, alt: "DHL" },
  { src: optimum, alt: "Optimum" },
  { src: paypal, alt: "PayPal" },
  { src: rogue, alt: "Rogue" },
  { src: stripe, alt: "Stripe" },
  { src: underArmour, alt: "Under Armour" },
];

function Brands() {
  return (
    <div className="bg-primary px-8 py-8 pt-12 lg:px-[5rem] overflow-hidden">
      <SectionHeader
        titleColor="secondary"
        highlightColor="text"
        title="Trusted By "
        highlight="Leading Brands"
      />

      <div className="relative w-full ">
        <motion.div
          className="flex gap-12 lg:gap-20 w-max justify-center items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`${logo.alt}-${index}`}
              src={logo.src}
              alt={logo.alt}
              className={clsx(
                "h-auto grey-brand",
                logo.alt === "PayPal" && "w-20",
                logo.alt === "Allianz" && "w-40 lg:w-45",
                logo.alt === "Under Armour" && "w-25 lg:w-30",
                !["PayPal", "Under Armour", "Allianz"].includes(logo.alt) &&
                  "w-32 lg:w-40"
              )}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Brands;
