import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import BackBtn from "../components/BackBtn";
import { useGym } from "../contexts/GymContext";
import { useCart } from "../contexts/CartContext";
import CtaBtn from "../components/CtaBtn";

function CartItemDetails() {
  const { id } = useParams();
  const { equipments, formatUSD } = useGym();
  const { addToCart } = useCart();
  const item = equipments.find((item) => item.id === id);

  // Handle add to cart
  const handleAddToCart = () => {
    addToCart(item);
  };

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
      <div className="bg-text flex flex-col w-full md:w-5xl px-6 md:px-8 md:py-16 py-10 rounded-3xl">
        <BackBtn />

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
          <h1 className="text-3xl md:text-5xl font-bold mt-8 drop-shadow-md">
            {item.name}
          </h1>
          <h2 className="bg-text/90  text-primary transition-all duration-700 ease-in-out text-[1.5rem] lg:text-[1.7rem] font-bold font-montserrat mt-5">
            {formatUSD(item.price)}
          </h2>

          <div className="mt-2 flex items-center justify-center gap-2 text-[1.5rem] lg:text-[1.7rem]">
            <div>{renderStars(item.rating)}</div>
            <span className="font-montserrat font-semibold mt-2.5">
              {item.rating.toFixed(1)}
            </span>
          </div>

          <p className="text-[1.35rem] lg:text-[1.55rem] tracking-wide font-semibold text-center my-[2rem]">
            {item.description}
          </p>
        </div>

        <button
          className="mt-6 bg-secondary border-2 hover:border-2 hover:bg-transparent hover:border-secondary hover:text-primary  text-[1.35rem] sm:text-[1.4rem] lg:text-[1.7rem] text-text font-bold px-6 py-5 rounded-xl shadow-lg transition-all duration-500"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
        {/* <CtaBtn
          hoverBg="hover:bg-transparent "
          activeBg="active:bg-transparent "
          mobileHoverBg="bg-transparent text-primary!"
          text="Add to cart"
          bg="bg-secondary"
          radius="rounded-md"
          width="w-full"
          func={addToCart}
          onClick={() => addToCart(item)}
        /> */}
      </div>
    </motion.div>
  );
}
// onClick={() => addToCart(item)}

export default CartItemDetails;
