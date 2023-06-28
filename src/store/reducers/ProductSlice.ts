import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  price: number;
  images: [
    {
      id: number;
      photo: string;
      description: string;
      product: number;
    }
  ];
  description: string;
  short_description: string;
  specification: [
    {
      name: string;
      value: string;
    }
  ];
  reviews: Review[];
}

export interface Review {
  user: {
    email: string;
    id: number;
    username: string;
  };
  title: string;
  text: string;
  rate: number;
}

interface ProductState {
  products: Product[];
}

export const fetchProducts = createAsyncThunk("products/get", () => {
  return fetch("http://0.0.0.0:1337/products/").then((result) => result.json());
});

export const fetchProductById = createAsyncThunk<Product, number>(
  "products/getById",
  (productId) =>
    fetch(`http://0.0.0.0:1337/products/${productId}`).then((result) =>
      result.json()
    )
);

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      const isExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!isExist) state.products.push(action.payload);
    });
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;