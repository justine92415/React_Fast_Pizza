import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "./cart.types";
import { StoreState } from "../../store.types";

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      console.log("###addItem", action.payload);
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.pizzaId !== action.payload.pizzaId,
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );

      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );

      if (item) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: StoreState) => state.cart.cart;


export const getTotalCartQuantity = (state: StoreState) => {
  return state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);
  0;
};
export const getTotalCartPrice = (state: StoreState) => {
  return state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
  0;
};
