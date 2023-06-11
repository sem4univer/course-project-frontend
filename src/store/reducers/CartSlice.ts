import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface ProductState {
  cartItems: CartItem[];
}

const initialState: ProductState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      const cartIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartIndex !== -1) {
        state.cartItems[cartIndex] = action.payload;
      } else state.cartItems = [...state.cartItems, action.payload];
    },

    decreaseQuanity: (state, action: PayloadAction<{ id: number }>) => {
      const cartIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[cartIndex].quantity--;
    },

    increaseQuanity: (state, action: PayloadAction<{ id: number }>) => {
      const cartIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[cartIndex].quantity++;
    },

    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const cartIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems.splice(cartIndex, 1);
    },

    checkOutCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const productActions = cartSlice.actions;

export default cartSlice.reducer;
