import { IoIosStar } from "react-icons/io";

function CartHeader() {
  return (
    <div className=" font-montserrat">
      <h2 className="text-[2rem] lg:text-[2.5rem] font-bold">Shopping Cart</h2>
      <p className=" tracking-wide font-light mt-5">
        Buy $300 and more to get{" "}
        <span className="font-semibold">Free Shipping!</span>
      </p>

      {/* {cartItems.length > 0 && total >= 300 && ( */}
      <p className=" text-green-500 mt-5  tracking-wider">
        Cart eligible for discounts.
      </p>
      {/* )} */}

      <div className="mt-7 flex items-center">
        <div className="w-full h-2 bg-secondary rounded-l-2xl"></div>
        <div className="w-[2rem] h-[2rem] border border-secondary rounded-full flex items-center justify-center bg-dark-alt font-bold text-secondary shrink-0  ">
          <IoIosStar className="w-[1.2rem] mb-[.02rem] text-secondary" />
        </div>
      </div>
    </div>
  );
}

export default CartHeader;
