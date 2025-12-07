import { useCart } from "../contexts/CartContext";
import { motion } from "framer-motion";
import CartHeader from "../components/cart/CartHeader";
import CartEmpty from "../components/cart/CartEmpty";
import CartOrderSummary from "../components/cart/CartOrderSummary";
import CartAddedItems from "../components/cart/CartAddedItems";

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <motion.div className="relative bg-dark-alt "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}>
      {cartItems.length > 0 ? (
        <div
          className="min-h-screen px-8 pb-25 lg:px-[5rem] 
        pt-[12rem] mx-auto md:max-w-5xl lg:max-w-full 2xl:px-[15rem]"
        >
          <CartHeader />
          <section
            className={`lg:flex gap-20  justify-center ${cartItems.length > 4 ? "items-center" : "items-start"
              }`}
          >
            <div className="lg:w-[65%]">
              <CartAddedItems />
            </div>

            <CartOrderSummary />
          </section>
        </div>
      ) : (
        <CartEmpty />
      )}
    </motion.div>
  );
}
