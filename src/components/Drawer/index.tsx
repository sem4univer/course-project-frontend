import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import cn from "classnames";

import { Button } from "../templates/Button";

import { DrawerProps } from "./types";

import styles from "./Drawer.module.scss";

import { CartProduct } from "../CartProduct";
import { cartSlice } from "../../store/reducers/CartSlice";
import { useCallback } from "react";

const Drawer: React.FC<DrawerProps> = ({ opened, onCloseCart }) => {
  const { cartItems } = useTypedSelector((state) => state.cartReducer);
  const dispatch = useTypedDispatch();

  const closeCartHandler = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onCloseCart();
      }
    },
    [onCloseCart]
  );

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      className={cn(styles.drawer, opened ? styles.drawerVisible : "")}
      onClick={closeCartHandler}
    >
      <div className={styles.drawerContent}>
        <h3>Shopping bag</h3>
        {cartItems.length > 0 && (
          <p className={styles.quantity}>{cartItems.length} items</p>
        )}
        {cartItems.length > 0 ? (
          <div className={styles.bag}>
            <div className={styles.items}>
              {cartItems.map((cartItem) => (
                <CartProduct
                  id={cartItem.id}
                  image={cartItem.image}
                  title={cartItem.title}
                  price={cartItem.price}
                  quantity={cartItem.quantity}
                />
              ))}
            </div>
            <div className={styles.subtotal}>
              <p>Subtotal: $ {subtotal},00</p>
              <Button
                className={styles.orderButton}
                color="black"
                onClick={() => dispatch(cartSlice.actions.checkOutCart())}
              >
                Check out
              </Button>
            </div>
          </div>
        ) : (
          <p>There is no items yet!</p>
        )}
      </div>
    </div>
  );
};
export default Drawer;
