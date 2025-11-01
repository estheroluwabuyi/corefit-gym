import { Link } from "react-router-dom";
import CtaBtn from "../CtaBtn";

function CartEmpty() {
  return (
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
  );
}

export default CartEmpty;
