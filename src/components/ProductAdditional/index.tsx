import { useState } from "react";
import cn from "classnames";

import { ProductAdditionalProps } from "./types";

import { ReviewForm } from "../ReviewForm";
import { Rating } from "../Rating";

import styles from "./ProductAdditional.module.scss";

export const ProductAdditional: React.FC<ProductAdditionalProps> = ({
  title,
  shortDesc,
  weight,
  dimensions,
  colors,
  material,
  reviews,
}) => {
  const [activeSection, setActiveSection] = useState("description");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <section className={styles.additional}>
      <div className={styles.sections}>
        <button
          className={activeSection === "description" ? `${styles.active}` : ""}
          onClick={() => handleSectionClick("description")}
        >
          Description
        </button>
        <button
          className={activeSection === "additional" ? `${styles.active}` : ""}
          onClick={() => handleSectionClick("additional")}
        >
          Additional information
        </button>
        <button
          className={activeSection === "reviews" ? `${styles.active}` : ""}
          onClick={() => handleSectionClick("reviews")}
        >
          Reviews({reviews.length})
        </button>
      </div>
      {activeSection === "description" && (
        <p className={cn(styles.section, styles.description)}>{shortDesc}</p>
      )}
      {activeSection === "additional" && (
        <div className={cn(styles.section, styles.features)}>
          <div>
            <span>Weight:</span>
            <p>{weight} kg</p>
          </div>
          <div>
            <span>Dimensions:</span>
            <p>
              {`${dimensions.height} x ${dimensions.width} x ${dimensions.depth} `}
              cm
            </p>
          </div>
          <div>
            <span>Colours:</span>
            <p>{colors.join(", ")}</p>
          </div>
          <div>
            <span>Material:</span>
            <p>{material}</p>
          </div>
        </div>
      )}
      {activeSection === "reviews" && (
        <div className={cn(styles.section, styles.reviews)}>
          <div className={styles.ratings}>
            <h3 className={styles.quantity}>
              {reviews.length} Reviews for {title}
            </h3>
            {reviews.map((review, index) => (
              <div key={index} className={styles.review}>
                <div className={styles.title}>
                  <h3>{review.title}</h3>
                  <p>{review.date}</p>
                </div>
                <Rating rating={review.rating} />
                <p className={styles.description}>{review.description}</p>
              </div>
            ))}
          </div>
          <ReviewForm />
        </div>
      )}
    </section>
  );
};
