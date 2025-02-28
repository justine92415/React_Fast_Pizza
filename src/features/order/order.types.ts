export type OrderItemProps = {
  item: OrderItemType;
  isLoadingIngredients?: boolean;
  ingredients?: string[];
};

export type OrderItemType = {
  id: number;
  name: string;
  quantity: number;
  totalPrice: number;
};

export type OrderParams = {
  params: {
    orderId: number;
  };
};

export type IOrder = {
  id: string;
  status: string;
  priority: string;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  cart: any[];
};

export type OrderFormData = {
  customer: string;
  phone: string;
  address: string;
  cart: string;
  priority: string;
};

export type CreateOrderType = {
  customer: string;
  phone: string;
  address: string;
  cart: any[];
  priority: boolean;
};

export type OrderFormError = {
  phone?: string;
};
