import { RatingProps } from "./types";

import styles from "./Rating.module.scss";

import { ReactComponent as StarFilledIcon } from "../../assets/icons/star-filled.svg";
import { ReactComponent as StarNotFilledIcon } from "../../assets/icons/star-not-filled.svg";

export const Rating: React.FC<RatingProps> = ({ reviews, rating }) => {
  let filledStars, notFilledStars;
  if (reviews) {
    const productRating =
      reviews.reduce((acc, val) => acc + val.rating, 0) / reviews.length;

    filledStars = Math.floor(productRating);
    notFilledStars = 5 - filledStars;
  } else if (rating) {
    filledStars = rating;
    notFilledStars = 5 - rating;
  }

  return (
    <div className={styles.stars}>
      {[...Array(filledStars)].map((_, i) => (
        <StarFilledIcon key={i} />
      ))}
      {[...Array(notFilledStars)].map((_, i) => (
        <StarNotFilledIcon key={i} />
      ))}
    </div>
  );
};
