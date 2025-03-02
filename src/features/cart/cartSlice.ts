import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "./cart.types";

const initialState: CartState = {
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      console.log('###addItem', action.payload);
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
