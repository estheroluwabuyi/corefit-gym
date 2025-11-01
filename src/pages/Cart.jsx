import { useCart } from "../contexts/CartContext";
import CartHeader from "../components/cart/CartHeader";
import CartEmpty from "../components/cart/CartEmpty";
import CartOrderSummary from "../components/cart/CartOrderSummary";
import CartAddedItems from "../components/cart/CartAddedItems";

export default function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, total } =
    useCart();

  return (
    <div className=" bg-dark-alt">
      {/* {cartItems.length > 0 ? ( */}
      {cartItems.length === 0 ? (
        <div
          className="min-h-screen px-8 pb-25 lg:px-[5rem] 
        pt-[12rem] mx-auto"
        >
          <CartHeader />

          <section>
            <CartAddedItems />
            <CartOrderSummary />
          </section>
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}
