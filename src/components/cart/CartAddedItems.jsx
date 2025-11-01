import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";

function CartAddedItems() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, total } =
    useCart();
  console.log(cartItems);

  return (
    <>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border border-text/30 p-5 mt-10 rounded-[5px] "
        >
          <section className="flex items-center gap-5 ss:gap-10">
            <div className="w-[60px] h-[50px] ss:w-[110px] ss:h-[90px] flex justify-center items-center  bg-text/95 rounded-2xl p-5">
              <img src={item.image} alt={item.name} />
            </div>

            <div className=" text-[1.2rem] xs:text-[1.4rem] sm:text-[1.5rem font-bold lg:text-[2rem] tracking-wider">
              <div>{item.name}</div>
              <div className="mt-3">Price: ${item.price}</div>
            </div>
          </section>

          <div className="flex flex-col justify-center items-center">
            <section className="flex justify-center items-center gap-5 xs:gap-7 sm:gap-10 p-2 xs:p-3 ss:px-5 rounded-xl border border-text/20">
              <button
                className={`text-[1.2rem] xs:text-[1.35rem] sm:text-[1.5rem] lg:text-[2rem]  hover:scale-110 transition duration-600 ${
                  item.quantity === 1 && "opacity-50"
                }`}
                onClick={() => decreaseQty(item.id)}
              >
                <FaMinus />
              </button>
              <div className="text-[1.2rem] xs:text-[1.35rem] sm:text-[1.5rem] font-bold lg:text-[2rem]">
                {item.quantity}
              </div>
              <button
                className="text-[1.2rem] xs:text-[1.35rem] sm:text-[1.5rem] lg:text-[2rem]  hover:scale-110 transition duration-600"
                onClick={() => increaseQty(item.id)}
              >
                <FaPlus />
              </button>
            </section>

            <button
              className="text-[1.2rem]  xs:text-[1.35rem] sm:text-[1.4rem] lg:text-[1.7rem]  font-montserrat opacity-60 tracking-wide mt-5 hover:opacity-100 transition duration-600"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
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
