import bg from "../../images/order_bg.png";
import Card from "../../ui/Card";
import HeaderTitle from "../../ui/HeaderTitle";
import SearchOrder from "../order/SearchOrder";
import MenuItem from "./MenuItem";
import card4 from "../../images/card4_bg.png";
import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

function Menu({ bgColor }) {
  const menu = useLoaderData();
  console.log("🚀 ~ file: Menu.jsx:12 ~ Menu ~ menu:", menu);
  return (
    <>
      <div
        className={` ${
          bgColor ? bgColor : ""
        } absolute left-0 right-0 top-0 h-[80px] w-screen `}
      />
      <main className="container mx-auto my-24  flex-col bg-bg100   p-6  px-6">
        <div className="mb-6 flex  justify-end">
          <SearchOrder />
        </div>
        <div className="lg:items-left relative flex  flex-col items-start justify-start   gap-10  lg:flex-row lg:items-end ">
          <div className=" w-full px-6  ">
            <HeaderTitle
              h1={"Hungry"}
              p={"Choose your favorite one"}
              // padding="24"
            />
            <div className="flex">
              <div className="container mt-16 flex w-full flex-col gap-8 2xl:w-2/3 ">
                {menu.map((pizza) => (
                  <MenuItem pizza={pizza} key={pizza.id} />
                ))}
              </div>
              <div className="mx-6 hidden h-full flex-col flex-wrap items-end gap-12 self-center overflow-y-auto lg:w-1/3  2xl:flex ">
                <Card
                  img={card4}
                  title="Fast delivery service"
                  subtitle="Enjoy hot pizza in your home"
                />
              </div>
            </div>

            <div className="absolute -bottom-28 -right-14   lg:hidden ">
              <img src={bg} alt="pizzarella logo" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
