export type MenuItemProps = {
  pizza: MenuItemType;
}

export type MenuItemType = {
  id: string;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}