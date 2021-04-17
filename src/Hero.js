import "./Hero.css";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

const Hero = ({ image, card_data }) => {
  const { title, rating, price } = card_data;
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
          <Link to="/checkout" className="book-room">
            BOOK ROOM
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
