export type MenuItemProps = {
  pizza: MenuItemType;
}

export type MenuItemType = {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}