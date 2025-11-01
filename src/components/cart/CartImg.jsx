import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";

function CartImg() {
  const { cartItems } = useCart();
  return (
    <Link to="/cart">
      <div className="relative">
        <button aria-label="Cart">
          <FaShoppingCart
            size={30}
            className="hover:scale-95 duration-600 cursor-pointer transition-all w-[28px] sm:w-[32px] h-auto  "
          />
        </button>

        <div className="bg-secondary absolute top-1/2 -right-2 transform -translate-y-1/2 p-2 rounded-full w-[19px] h-[19px] sm:w-[20px] sm:h-[20px] flex items-center justify-center font-bold ">
          {cartItems.length}
        </div>
      </div>
    </Link>
  );
}

export default CartImg;
