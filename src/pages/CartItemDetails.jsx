import { useContext } from "react";
import { GymContext } from "../App";
import { useParams } from "react-router-dom";

function CartItemDetails() {
  const { id } = useParams();

  const { equipments } = useContext(GymContext);
  const item = equipments.find((item) => item.id === id);

  if (!item)
    return (
      <p className="bg-dark-alt min-h-screen lg:pb-20 lg:px-[5rem] pt-[15rem] pb-[5rem] px-8">
        Item not found
      </p>
    );

  return (
    <div className="bg-dark-alt min-h-screen lg:pb-20 lg:px-[5rem] pt-[15rem] pb-[5rem] px-8">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
}

export default CartItemDetails;
