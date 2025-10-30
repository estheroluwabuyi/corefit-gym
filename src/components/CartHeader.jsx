import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import CtaBtn from "./CtaBtn";
import { IoIosStar } from "react-icons/io";

function CartHeader() {
  const { cartItems } = useCart();

  return (
    <div>
      {cartItems.length > 0 ? (
        // Cart Items Header
        <div className="px-8 lg:px-[5rem] pt-[13rem] min-h-screen bg-dark-alt font-montserrat">
          <h2 className="text-[2rem] lg:text-[2.5rem] font-bold">
            Shopping Cart
          </h2>
          <p className=" tracking-wide font-light mt-4">
            Buy $300 and more to get{" "}
            <span className="font-semibold">Free Shipping!</span>
          </p>

          {/* Check if cart is eligible for discount */}
          {/* {cartItems.length > 0 && total >= 300 && ( */}
          <p className=" text-green-500 mt-5  tracking-wider">
            Cart eligible for discounts.
          </p>
          {/* )} */}

          <div className="mt-3 flex justify-center items-center">
            <div className="w-full h-2 bg-secondary rounded-l-2xl"></div>
            <div className="w-[2rem] h-[2rem] border border-secondary rounded-full flex items-center justify-center bg-dark-alt font-bold text-secondary shrink-0  ">
              <IoIosStar className="w-[1.2rem] mb-[.02rem] text-secondary" />
            </div>
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
    </div>
  );
}

export default CartHeader;
