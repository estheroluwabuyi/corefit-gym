import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";

function CartAddedItems() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, total } =
    useCart();

  return (
    <div className="flex items-center justify-between border border-text/30 p-5 mt-10 rounded-[5px] ">
      <section className="flex items-center gap-10">
        <div className="w-[90px] h-[80px] bg-yellow-400"></div>

        <div className=" text-[1.45rem] font-bold lg:text-[2rem] tracking-wider">
          <div>DumBells</div>
          <div className="mt-3">Price: $900</div>
        </div>
      </section>

      <section className="flex justify-center items-center gap-10 p-3 px-5 rounded-xl border border-text/20">
        <button className="text-[1.5rem] lg:text-[2rem]  hover:scale-110 transition duration-600">
          <FaMinus />
        </button>
        <div className="text-[1.5rem] font-bold lg:text-[2rem]">3</div>
        <button className="text-[1.5rem] lg:text-[2rem]  hover:scale-110 transition duration-600">
          <FaPlus />
        </button>
      </section>
    </div>
  );
}

export default CartAddedItems;

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
