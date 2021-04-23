import { useContext } from "react";
import { StateContext } from "./context/StateProvider";
import styled from "styled-components/macro";
import Rating from "@material-ui/lab/Rating";

const Checkout = () => {
  const [{ trackCard }] = useContext(StateContext);
  const { card_data, image } = trackCard;
  const { title, rating, price } = card_data;

  return (
    <Container>
      <img src={image} alt={`${title} pic`} />
      <div className="checkout__title">{title}</div>
      <Rating
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        style={{ color: "#44baff" }}
        readOnly
      />
      <div className="pricing">${price}</div>
      <div className="benefits">
        <div className="item people"></div>
        <div className="item beds"></div>
        <div className="item wifi"></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 0 0 25px 25px;
  img {
    width: 200px;
    object-fit: contain;
    border-radius: 30px;
    margin-top: 2em;
  }

  & .benefits {
    display: flex;
    justify-content: space-between;
    width: 80%;
    .item {
      width: 76px;
      height: 35px;
      border: 1px solid #000000;
      border-radius: 7px;
    }
  }
`;

export default Checkout;
