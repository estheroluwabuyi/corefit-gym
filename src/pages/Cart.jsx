import { Link } from "react-router-dom";
import CtaBtn from "../components/CtaBtn";
import { useState } from "react";

function Cart() {
  //   const [cartItems, setCartItems] = useState([]);

  return (
    <div className="bg-dark-alt flex flex-col justify-center items-center   pt-[15rem] lg:pt-[11rem] hero-bg px-8 h-screen">
      <h1 className="text-[1.5rem] lg:text-[2.5rem] font-bold">
        Your Cart is empty!
      </h1>
      <Link to="/shop" className="">
        <CtaBtn
          hoverBg="hover:bg-transparent"
          activeBg="active:bg-transparent"
          mobileHoverBg="bg-transparent"
          text="Continue Shopping"
          bg="bg-secondary"
        />
      </Link>
    </div>
  );
}

export default Cart;
