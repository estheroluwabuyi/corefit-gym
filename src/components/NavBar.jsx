import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import CartImg from "./CartImg";
import Logo from "./Logo";

import menu from "/images/menu.svg";
import close from "/images/close.svg";

import {
  FaDumbbell,
  FaShoppingCart,
  FaInfoCircle,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";

const navItems = [
  { name: "Home", icon: <FaHome />, path: "/" },
  { name: "Shop", icon: <FaShoppingCart />, path: "/shop" },
  { name: "Exercise", icon: <FaDumbbell />, path: "/exercise" },
  { name: "Contact", icon: <FaEnvelope />, path: "/contact" },
  { name: "About", icon: <FaInfoCircle />, path: "/about" },
];

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuVariants = {
    hidden: {
      x: "100%",
    },
    visible: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10,
      },
    },
    exit: {
      x: "100%",
      transition: {
        ease: "easeInOut",
        duration: 0.35,
      },
    },
  };

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary text-text py-8 px-[2rem] lg:px-[5rem] flex justify-between items-center ">
      <Logo />

      <div className="flex order-3 flex-row-reverse gap-[2rem] items-center">
        <img
          src={menu}
          alt="Menu"
          width={30}
          height={30}
          className="w-[30px] sm:w-[35px] h-auto cursor-pointer md:hidden rounded-lg transition-all duration-600 icon-effect"
          onClick={handleMenuToggle}
        />

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
            <img
              src={close}
              alt="Close"
              width={30}
              height={30}
              className="w-[30px] sm:w-[32px] h-auto self-end cursor-pointer rounded-lg transition-all duration-600 icon-effect"
              onClick={handleMenuToggle}
            />

            <ul className="flex flex-col gap-2 text-[1.7rem] z-50">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 w-full p-5 rounded hover:bg-secondary/20 hover:text-secondary active:text-secondary focus:text-secondary transition-all duration-600 ${
                        isActive ? "text-secondary!" : ""
                      }`
                    }
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
    </nav>
  );
}

export default NavBar;
