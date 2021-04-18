import { useContext } from "react";
import { StateContext } from "./context/StateProvider";

const Checkout = () => {
  const [{ trackCard }] = useContext(StateContext);
  const {
    card_data: { title, rating, price },
    image,
  } = trackCard;
  console.log(title);
  console.log(rating);
  console.log(price);
  console.log(image);

  return <h1></h1>;
};

export default Checkout;
