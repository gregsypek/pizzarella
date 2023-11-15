import SearchOrder from "./SearchOrder";
import card3 from "../../images/card3_bg.png";
import bg from "../../images/order_bg.png";
import Card from "../../ui/Card";
import HeaderTitle from "../../ui/HeaderTitle";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

function Order({ bgColor }) {
  const order = useLoaderData();

  const {
    id,
    // status,
    // priority,
    // priorityPrice,
    // orderPrice,
    // estimatedDelivery,
    cart,
  } = order;
  console.log("🚀 ~ file: Order.jsx:21 ~ Order ~ order:", order);

  return (
    <>
      <div className="mt-24 w-full  p-3 md:bg-bg200 ">
        <div className=" container mx-auto flex  flex-col-reverse items-stretch justify-between  pl-12 pr-6 md:flex-row   md:items-center">
          <div className="w-full bg-bg200 p-2 md:bg-transparent">
            <HeaderTitle h1={`Order #${id}`} p={"Check your status"} />
          </div>
          <div className="mb-12 ms-auto md:mb-0 ">
            <SearchOrder placeholder="Search order e.g. #IIDSAT" />
          </div>
        </div>
      </div>
      <main className="container mx-auto my-12 flex-col   bg-bg100   pe-6 ps-12">
        <div className="lg:items-left  flex flex-col items-start justify-start  gap-10 overflow-x-hidden  lg:flex-row lg:items-end ">
          <div className=" self-start px-6 lg:w-2/3">
            <div className="flex flex-wrap items-center justify-between gap-2 py-5">
              <p className="font-base  text-text100">Only 50 minutes left</p>
              <p className="text-sm text-text100">
                {/* (Estimated delivery: 02.11.2023) */}
              </p>
            </div>
            <ul className="divide-y-2  border-b-2 border-t-2">
              {cart.map((c) => (
                <li className="py-3" key={c.pizzaId}>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <p className="capitalize">
                      <span className="text-base font-bold">{"1"}&times;</span>
                      {c.name}
                    </p>
                    <p className="font-bold">{c.totalPrice}</p>
                  </div>
                  <p className="text-sm capitalize italic text-text100">
                    cheese, salami
                  </p>
                </li>
              ))}
            </ul>
            <div className="space-y-2 py-5">
              <p className="text-sm font-medium text-stone-600">
                Price pizza: 13
              </p>

              <p className="text-sm font-medium text-stone-600">
                Price priority: 4
              </p>

              <p className="font-bold">To pay on delivery: 17</p>
            </div>
          </div>

          <div className="relative z-50 mx-6 hidden h-full w-1/3 justify-center lg:flex">
            <Card
              img={card3}
              title="30 Recipies"
              subtitle="Find a perfect one"
            />
          </div>
          <div className="absolute -right-14 bottom-6   lg:hidden ">
            <img src={bg} alt="pizzarella logo" />
          </div>
        </div>
      </main>
      <div
        className={` ${bgColor ? bgColor : ""}  
				  h-[150px]  w-screen`}
      />
    </>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
