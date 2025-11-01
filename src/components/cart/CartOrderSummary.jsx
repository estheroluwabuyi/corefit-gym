import CtaBtn from "../CtaBtn";

function CartOrderSummary() {
  return (
    <div className="tracking-wide text-[1.5rem] bg-primary backdrop-blur-md  shadow-lg px-10 py-12 mt-15 rounded-2xl font-opens">
      <h1 className="text-[2rem] lg:text-[2.5rem] font-bold ">Order Summary</h1>

      <section className="my-15 before:content-[''] before:block before:w-full before:bg-text/20 before:h-[2px] before:rounded-xl after:content-[''] after:block after:w-full  after:bg-text/20 after:h-[2px] after:rounded-xl">
        <div className="flex my-10  justify-between">
          <h2 className="font-bold ">Subtotal (2 items): </h2>
          <p>$900</p>
        </div>
        <div className="mt-20 mb-15 flex justify-between">
          <h2 className="opacity-70">Shipping:</h2>
          <p className="font-light">Calculated at checkout</p>
        </div>
      </section>

      <section className="">
        <div className=" flex justify-between">
          <h2 className="font-bold">Estimated Total:</h2>
          <p>$900</p>
        </div>
      </section>

      {/* <div className=""> */}
      <CtaBtn
        hoverBg="hover:bg-transparent"
        activeBg="active:bg-transparent"
        mobileHoverBg="bg-transparent"
        text="Proceed to checkout"
        bg="bg-secondary"
        radius="rounded-md"
        width="w-full"
      />
      {/* </div> */}
    </div>
  );
}

export default CartOrderSummary;
