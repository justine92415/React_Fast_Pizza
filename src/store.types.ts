import { CartState } from "./features/cart/cart.types";
import { UserState } from "./features/user/user.types";

export type StoreState = {
  user: UserState;
  cart: CartState;
};
