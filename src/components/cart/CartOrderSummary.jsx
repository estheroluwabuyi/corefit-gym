import { useCart } from "../../contexts/CartContext";
import { useGym } from "../../contexts/GymContext";
import CtaBtn from "../CtaBtn";

function CartOrderSummary() {
  const { cartItems, total } = useCart();
  const { formatUSD } = useGym();

  return (
    <div className="tracking-wide text-[1.35rem] lg:text-[1.4rem] bg-primary backdrop-blur-md  shadow-lg px-10 py-12 lg:mt-10 mt-15 rounded-2xl font-opens lg:w-[35%]">
      <h1 className="text-[2rem] lg:text-[2.5rem] font-bold ">Order Summary</h1>

      <section className="my-15 before:content-[''] before:block before:w-full before:bg-text/20 before:h-[2px] before:rounded-xl after:content-[''] after:block after:w-full  after:bg-text/20 after:h-[2px] after:rounded-xl">
        <div className="flex my-10  justify-between">
          <h2 className="font-bold ">
            Subtotal (
            {cartItems.length === 1
              ? `${cartItems.length} item`
              : `${cartItems.length} items`}
            ):
          </h2>
          <p>{formatUSD(total)}</p>
        </div>
        <div className="mt-20 mb-15 flex justify-between opacity-70">
          <h2>Shipping:</h2>
          <p>Calculated at checkout</p>
        </div>
      </section>

      <section className="">
        <div className=" flex justify-between">
          <h2 className="font-bold">Estimated Total:</h2>
          <p>{formatUSD(total)}</p>
        </div>
      </section>

      <CtaBtn
        hoverBg="hover:bg-transparent"
        activeBg="active:bg-transparent"
        mobileHoverBg="bg-transparent"
        text="checkout"
        bg="bg-secondary"
        radius="rounded-md"
        width="w-full"
      />
    </div>
  );
}

export default CartOrderSummary;
