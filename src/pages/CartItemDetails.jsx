import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import BackBtn from "../components/BackBtn";
import { useGym } from "../contexts/GymContext";
import { useCart } from "../contexts/CartContext";
import toast from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";

function CartItemDetails() {
  const { id } = useParams();
  const { equipments, formatUSD } = useGym();
  const { addToCart, cartItems, decreaseQty, increaseQty, removeFromCart } =
    useCart();
  const item = equipments.find((item) => item.id === id);
  const cartItem = cartItems.find((i) => i.id === item.id);

  //star rating
  const renderStars = (rating) => {
    return [1, 2, 3, 4, 5].map((i) => {
      if (rating >= i) {
        return <FaStar key={i} className="text-yellow-500 inline-block mr-1" />;
      } else if (rating >= i - 0.5) {
        return (
          <FaStarHalfAlt
            key={i}
            className="text-yellow-500 inline-block mr-1"
          />
        );
      } else {
        return (
          <FaRegStar key={i} className="text-yellow-500 inline-block mr-1" />
        );
      }
    });
  };

  const navigate = useNavigate();

  //  toast.success(`${item.name} added to cart!`, { id: "cart" });

  // remove from cart
  const handleRemoveFromCart = () => {
    removeFromCart(cartItem.id);
    toast.success(`${cartItem.name} removed from cart!`, { id: "cart-remove" });
  };

  useEffect(() => {
    if (!item) {
      navigate("*");
    }
  }, [item, navigate]);

  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0.7, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className=" bg-dark-alt min-h-screen flex flex-col justify-center items-center pb-[5rem] pt-[15rem] text-center gap-6 text-dark-alt lg:px-[5rem] px-8 "
    >
      <div className="bg-text flex flex-col w-full md:w-5xl px-6 md:px-8 md:py-12 py-10 rounded-3xl">
        {/* <BackBtn /> */}
        <div className="flex gap-6 items-center pb-6 ">
          <button
            onClick={() => navigate("/shop")}
            className="
                  flex items-center gap-2 px-5 py-2 
                  bg-secondary text-white 
                  font-medium rounded-xl shadow-lg
                  hover:bg-secondary/90
                  transition-all duration-300
                  font-montserrat text-[1.35rem] sm:text-[1.4rem] lg:text-[1.7rem] uppercase
                "
          >
            <BiArrowBack size={28} className="mr-1" />
            Shop
          </button>
        </div>

        <div className=" bg-muted/40 shadow-xl flex items-center justify-center rounded-2xl ">
          <img
            src={item.image}
            alt={item.name}
            width={300}
            height={400}
            className="w-full max-w-lg h-auto  object-cover p-2"
          />
        </div>

        <div>
          <h1 className="font-montserrat uppercase tracking-wide text-3xl md:text-5xl font-bold mt-8 drop-shadow-md">
            {item.name}
          </h1>
          <h2 className="bg-text/90  text-primary transition-all duration-700 ease-in-out text-[1.5rem] lg:text-[1.7rem] font-bold font-montserrat mt-3">
            {formatUSD(item.price)}
          </h2>

          <div
            className="mt-2 flex items-center justify-center 
          gap-2 text-[1.5rem] lg:text-[1.7rem]"
          >
            <div>{renderStars(item.rating)}</div>
            <span className="font-montserrat font-semibold mt-2.5">
              {item.rating.toFixed(1)}
            </span>
          </div>
          <p></p>
          <p className="text-[1.35rem] lg:text-[1.55rem] tracking-wider  text-center  max-w-3xl m-auto my-5 ">
            {item.description}
          </p>
        </div>

        {!cartItem ? (
          <button
            className="mt-3 bg-secondary border-2 hover:border-2 hover:bg-transparent hover:border-secondary hover:text-primary  text-[1.35rem] sm:text-[1.4rem] lg:text-[1.7rem] text-text font-bold px-6 py-5 rounded-xl shadow-lg transition-all duration-500 font-montserrat uppercase"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        ) : (
          <div className=" flex  justify-center gap-5 ss:gap-7 sm:gap-10 items-center mt-6 flex-col">
            <section className="flex px-7 py-5 gap-15 md:gap-20 rounded-xl shadow-lg border-2 border-secondary text-[1.35rem] sm:text-[1.4rem] md:text-[1.7rem]">
              <button
                className={` hover:scale-110 transition duration-600 ${
                  item.quantity === 1 && "opacity-50"
                }`}
                onClick={() => decreaseQty(cartItem.id)}
              >
                <FaMinus />
              </button>
              <div className=" font-bold font-montserrat">
                {cartItem.quantity}
              </div>
              <button
                className="hover:scale-110 transition duration-600"
                onClick={() => increaseQty(cartItem.id)}
              >
                <FaPlus />
              </button>
            </section>

            <button
              className=" bg-secondary border-2 hover:border-2 hover:bg-transparent hover:border-secondary hover:text-primary  text-[1.35rem] sm:text-[1.4rem] md:text-[1.7rem] text-text font-bold px-6 py-5 rounded-xl shadow-lg transition-all duration-500 w-full tracking-wider font-montserrat uppercase"
              onClick={handleRemoveFromCart}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default CartItemDetails;
