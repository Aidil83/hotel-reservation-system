import "./Hero.css";
import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Hero = ({ image, card_data }) => {
  const { title, rating, price } = card_data;
  const [booked, setBooked] = useState({});
  const history = useHistory();
  const handleClick = () => {
    setBooked(card_data, image);
    console.log(booked);
    history.push("/checkout");
  };

  return (
    <div className="hero__card">
      <img src={image} className="hero__image" />
      <div className="hero__info">
        <div className="hero__title">{title}</div>

        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          style={{ color: "#44baff", marginBottom: 35 }}
          readOnly
        />
        <div className="hero__footer">
          <div className="pricing">${price}</div>
          <div to="/checkout" className="book-room" onClick={handleClick}>
            BOOK ROOM
          </div>
          {/* <div className="book-room" onClick={handleClick}>
            BOOK ROOM
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
