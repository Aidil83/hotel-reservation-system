import "./Hero.css";
import star_ratings from "./images/star_ratings.png";
import Rating from "@material-ui/lab/Rating";

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
          <div className="book-room">BOOK ROOM</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
