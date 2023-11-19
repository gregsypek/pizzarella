import React from "react";
import Button from "../../ui/Button";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  console.log("🚀 ~ file: UpdateOrder.jsx:7 ~ UpdateOrder ~ order:", order);
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="mt-12">
      <Button type="empty">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
