import { useContext } from "react";
import { StateContext } from "./context/StateProvider";

const Checkout = () => {
  const [{ trackCard }] = useContext(StateContext);
  const { card_data, image } = trackCard;
  const { title, rating, price } = card_data;

  return (
    <>
      <img src={image} alt={`${title} pic`} />
    </>
  );
};

export default Checkout;
