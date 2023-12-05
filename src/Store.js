import { configureStore } from "@reduxjs/toolkit";
import { ProductSlicer } from "./Reducer/ProductSlicer";

export const store = configureStore({
  reducer: {
    products: ProductSlicer.reducer,
  },
});
