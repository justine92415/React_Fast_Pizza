export type OrderItemProps = {
  item: OrderItemType;
  isLoadingIngredients: boolean;
  ingredients: string[];
}

export type OrderItemType = {
  id: number;
  name: string;
  quantity: number;
  totalPrice: number;
}