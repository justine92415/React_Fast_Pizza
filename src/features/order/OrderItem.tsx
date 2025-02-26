import { formatCurrency } from "../../utils/helpers";
import { OrderItemProps } from "./order.types";

function OrderItem({ item, isLoadingIngredients, ingredients }: OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
