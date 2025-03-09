import { LoaderFunctionArgs, useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { IOrder, OrderParams } from "./order.types";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }: { order: IOrder }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }: LoaderFunctionArgs<OrderParams>) {
  await updateOrder(params.orderId!, { priority: true });
  return null;
}
