import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useRef, useState } from "react";
import { useGym } from "../../contexts/GymContext";

function CartAddedItems() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    confirmItemId,
    setConfirmItemId,
  } = useCart();
  const { formatUSD } = useGym();

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setConfirmItemId(null);
      }
    };

    if (confirmItemId) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [confirmItemId, setConfirmItemId]);

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
              <div className="mt-3">
                {/* Price: ${item.price} */}
                Price: {formatUSD(item.price)}
                {/* {formatUSD(item.price)} */}
              </div>
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
              onClick={() => setConfirmItemId(item.id)}
            >
              Remove
            </button>
          </div>

          {confirmItemId === item.id && (
            <div className="fixed top-0 w-full h-full bg-dark-alt/30 backdrop-blur-sm left-0 z-40 ">
              <div
                className="fixed rounded-t-[3rem] bottom-0 left-0 w-full bg-primary  px-8 py-10 font-montserrat lg:absolute lg:top-[55%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[450px] lg:h-[200px] lg:rounded-3xl flex flex-col justify-center"
                ref={modalRef}
              >
                <h1 className="text-[2rem]  mb-5 font-semibold">
                  Remove from Cart
                </h1>
                <p className="text-[1.4rem] lg:text-[1.3rem] tracking-wide ">
                  Are you sure you want to remove this item from your cart? If
                  you change your mind, you&apos;ll need to add the item again.
                </p>

                <div className="flex gap-10 mt-7">
                  <button
                    className="font-semibold bg-text hover:bg-secondary hover:text-text text-primary px-4 py-5 rounded-lg w-1/2 transition duration-600"
                    onClick={() => setConfirmItemId(null)}
                  >
                    Cancel
                  </button>
                  <button
                    className="font-semibold bg-secondary hover:bg-text hover:text-primary text-text px-4 py-5 rounded-lg w-1/2 transition duration-600"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
export default CartAddedItems;
