import { useState } from "react";
import clsx from "clsx";

import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CartImg from "../cart/CartImg";
import Logo from "../Logo";

import {
  FaShoppingCart,
  FaInfoCircle,
  FaEnvelope,
  FaHome,
  FaDollarSign,
} from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

const navItems = [
  { name: "Home", icon: <FaHome />, path: "/" },
  { name: "Shop", icon: <FaShoppingCart />, path: "/shop" },
  // { name: "Exercise", icon: <FaDumbbell />, path: "/exercise" },
  { name: "Pricing", icon: <FaDollarSign />, path: "/pricing" },
  { name: "Contact", icon: <FaEnvelope />, path: "/contact" },
  { name: "About", icon: <FaInfoCircle />, path: "/about" },
];

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuVariants = {
    hidden: {
      x: "100%",
    },
    visible: {
      x: "0%",
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.35,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.35,
      },
    },
  };

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-primary text-text py-8 px-[2rem] lg:px-[5rem] flex justify-between items-center z-1000 shadow-2xl 2xl:px-[15rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeIn" }}
    >
      <Link to="/">
        <Logo />
      </Link>

      <div className="flex order-3 flex-row-reverse gap-[2rem] items-center">
        <button
          className="md:hidden rounded-lg transition-all duration-600 icon-effect"
          onClick={handleMenuToggle}
          aria-label="Menu"
        >
          <TbMenu2 size={30} className="w-[30px] sm:w-[35px] h-auto  " />
        </button>

        <CartImg />
      </div>

      {/* MoBILE */}
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            className="md:hidden fixed top-0 right-0  bg-primary w-[80%] h-full flex flex-col p-[2rem] sm:py-[3rem] gap-[5rem] z-50 font-bold"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <button
              className="md:hidden rounded-lg transition-all self-end duration-600 icon-effect"
              onClick={handleMenuToggle}
              aria-label="Menu Close"
            >
              <CgClose size={30} className="w-[30px] sm:w-[35px] h-auto  " />
            </button>

            <ul className="flex flex-col gap-2 text-[1.7rem] z-50">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => {
                      return clsx(
                        "flex items-center gap-3 w-full p-5 rounded hover:bg-secondary/20 transition-all duration-600",
                        isActive && "text-secondary!",
                        hoveredItem === index && "bg-secondary/20"
                      );
                    }}
                    onTouchStart={() => setHoveredItem(index)}
                    onTouchEnd={() => setHoveredItem(null)}
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP */}
      <div className="hidden md:block font-bold">
        <ul className="flex md:gap-8 lg:gap-12 items-center">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.9rem]  hover:text-secondary transition-all hover:scale-95 duration-600 "
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${isActive ? "text-secondary!" : ""}`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default NavBar;
