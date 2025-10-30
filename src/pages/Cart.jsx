import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import CtaBtn from "../components/CtaBtn";
import { IoIosStar } from "react-icons/io";

export default function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, total } =
    useCart();

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="px-8 lg:px-[5rem] pt-[13rem] min-h-screen bg-dark-alt">
          <div className="font-montserrat">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold">
              Shopping Cart
            </h2>
            <p className="font-montserrat tracking-wide font-light mt-4">
              Buy $500 and more to get{" "}
              <span className="font-semibold">Free Shipping!</span>
            </p>

            {/*  */}
            <div className="mt-3 flex justify-center items-center">
              <div className="w-full h-2 bg-secondary rounded-l-2xl"></div>
              <div className="w-[2rem] h-[2rem] border border-secondary rounded-full flex items-center justify-center bg-dark-alt font-bold text-secondary shrink-0  ">
                <IoIosStar className="w-[1.2rem] mb-[.02rem] text-secondary" />
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      ) : (
        <div className="h-screen flex flex-col justify-center items-center hero-bg pt-[10rem]">
          <h1 className="text-[1.7rem] lg:text-[2.5rem] font-bold">
            Your Shopping Cart is Empty!
          </h1>
          <Link to="/shop">
            <CtaBtn
              hoverBg="hover:bg-transparent"
              activeBg="active:bg-transparent"
              mobileHoverBg="bg-transparent"
              text="Continue Shopping"
              bg="bg-secondary"
              radius="rounded-md"
            />
          </Link>
        </div>
      )}
    </>
  );
}

{
  /* <div className="bg-dark-alt  min-h-screen">
      {/* Empty Cart Message *
      {cartItems.length === 0 && (
        <div className="h-screen flex flex-col justify-center items-center hero-bg pt-[10rem] ">
          <h1 className="text-[1.7rem] lg:text-[2.5rem] font-bold">
            Your Shopping Cart is Empty!
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
          </Link>
        </div>
      )}

      {/* Cart Items *
      {cartItems.map((item) => (
        <div key={item.id} className="px-8 lg:px-[5rem] pt-[13rem] ">
          <div className="font-montserrat">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold">
              Shopping Cart
            </h2>
            <p className="font-montserrat tracking-wide font-light mt-4">
              Buy $500 and more to get{" "}
              <span className="font-semibold">Free Shipping!</span>
            </p>

            <div className="mt-3 flex justify-center items-center">
              <div className="w-full h-2 bg-secondary rounded-l-2xl"></div>
              <div className="w-9 h-9 border border-secondary rounded-full flex items-center justify-center bg-dark-alt font-bold text-secondary shrink-0 ">
                <FaStar className="w-[1.2rem] text-secondary" />
              </div>
            </div>
          </div>

          {/* <p>
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
