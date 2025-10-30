import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import CtaBtn from "../components/CtaBtn";

export default function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, total } =
    useCart();

  return (
    <div className="bg-dark-alt flex flex-col justify-center items-center   pt-[15rem] lg:pt-[11rem] hero-bg px-8 h-screen">
      {cartItems.length === 0 && (
        <>
          <h1 className="text-[1.5rem] lg:text-[2.5rem] font-bold">
            Your Cart is empty!{" "}
          </h1>
          <Link to="/shop" className="">
            <CtaBtn
              hoverBg="hover:bg-transparent"
              activeBg="active:bg-transparent"
              mobileHoverBg="bg-transparent"
              text="Continue Shopping"
              bg="bg-secondary"
              radius="rounded-md"
            />
          </Link>{" "}
        </>
      )}

      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "1rem" }}>
          <p>
            {item.name} - ${item.price} × {item.quantity}
          </p>
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      {/* <h3>Total: ${total}</h3> */}
    </div>
  );
}
