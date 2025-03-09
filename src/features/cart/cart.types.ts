export type CartItemProps = {
  item: CartItemType;
};

export type CartItemType = {
  pizzaId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type CartState = {
  cart: CartItemType[];
};
