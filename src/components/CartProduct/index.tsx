import { useTypedDispatch } from "../../hooks/redux";

import styles from "./CartProduct.module.scss";

import { CartProductProps } from "./types";

import { ReactComponent as DeleteIcon } from "../../assets/icons/cross.svg";
import { cartSlice } from "../../store/reducers/CartSlice";

export const CartProduct: React.FC<CartProductProps> = ({
  id,
  image,
  title,
  price,
  quantity,
}) => {
  const dispatch = useTypedDispatch();

  return (
    <div className={styles.product}>
      <img src={`../src/assets/${image}`} alt="Product in cart" />
      <div className={styles.description}>
        <div>
          <p>{title}</p>
          <span>$ {price},00</span>
        </div>
        <div className={styles.quantity}>
          <p>
            QTY:
            <button
              onClick={() =>
                dispatch(cartSlice.actions.decreaseQuanity({ id }))
              }
            >
              -
            </button>
            {quantity}
            <button
              onClick={() =>
                dispatch(cartSlice.actions.increaseQuanity({ id }))
              }
            >
              +
            </button>
          </p>
          <button
            className={styles.deleteButton}
            onClick={() => {
              dispatch(cartSlice.actions.removeFromCart({ id }));
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
