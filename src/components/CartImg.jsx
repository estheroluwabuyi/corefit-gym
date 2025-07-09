import { Link } from "react-router-dom";
import cart from "/images/cart-4.svg";

function CartImg() {
  return (
    <Link
      to="/cart"
      className="hover:scale-95 duration-600 cursor-pointer transition-all"
    >
      <div className="relative">
        <img
          src={cart}
          alt="Cart"
          width={30}
          height={30}
          className="w-[30px] sm:w-[32px] h-auto"
        />
        <div className="bg-secondary absolute top-1/2 -right-2 transform -translate-y-1/2 p-2 rounded-full w-[20px] h-[20px] flex items-center justify-center ">
          0
        </div>
      </div>
    </Link>
  );
}

export default CartImg;
