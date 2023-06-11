import cn from "classnames";

import styles from "./Features.module.scss";
import { FeaturesProps } from "./types";

export const Features: React.FC<FeaturesProps> = ({
  className,
  weight,
  dimensions,
  colors,
  material,
  ...props
}) => {
  return (
    <div className={cn(styles.features, className)} {...props}>
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
  );
};
