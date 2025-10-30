import { useCart } from "../contexts/CartContext";
import CartHeader from "../components/CartHeader";

export default function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, total } =
    useCart();

  return (
    <div>
      <CartHeader />
    </div>
  );
}

{
  /* 
      {/* Cart Items *
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center py-4 border-b border-b-dark-200">
            {item.name} - ${item.price} × {item.quantity}
          </p>
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button> *
        </div>
      ))}

      {/* <h3>Total: ${total}</h3> *
    </div> */
}
