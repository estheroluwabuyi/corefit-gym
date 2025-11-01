import { useCart } from "../contexts/CartContext";
import CartHeader from "../components/cart/CartHeader";
import CartEmpty from "../components/cart/CartEmpty";
import CartOrderSummary from "../components/cart/CartOrderSummary";
import CartAddedItems from "../components/cart/CartAddedItems";

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="relative bg-dark-alt ">
      {cartItems.length > 0 ? (
        <div
          className="min-h-screen px-8 pb-25 lg:px-[5rem] 
        pt-[12rem] mx-auto md:max-w-5xl lg:max-w-full"
        >
          <CartHeader />
          <section
            className={`lg:flex gap-20  justify-center ${
              cartItems.length > 3 ? "items-center" : "items-start"
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
    </div>
  );
}
