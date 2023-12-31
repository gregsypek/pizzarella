import card2 from "../../images/card2_bg.png";

import HeaderTitle from "../../ui/HeaderTitle";
import Card from "../../ui/Card";
import SearchOrder from "../order/SearchOrder";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartQuantity } from "./cartSlice";
import { getUsername } from "../user/userSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import BackToMenuLink from "../../ui/BackToMenuLink";
import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import CardLogo from "../../ui/CardLogo";

function Cart({ bgColor }) {
  // const cart = fakeCart;
  const fetcher = useFetcher();
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  console.log(
    "🚀 ~ file: Cart.jsx:22 ~ Cart ~ totalCartQuantity:",
    totalCartQuantity,
  );

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  return (
    <>
      <div
        className={` ${bgColor ? bgColor : ""} hidden w-0 sm:absolute bottom-0 left-0 
				  h-[100vh] sm:w-[40px]  `}
      />
      <main className="w-full">
        <div className="mt-24 w-full  p-3 md:bg-bg200 ">
          <div className=" container mx-auto flex  flex-col-reverse items-stretch justify-between  pl-0 sm:pl-12 pr-6 md:flex-row   md:items-center">
            <div className="w-full bg-bg200 p-2 mt-10 md:bg-transparent">
              <HeaderTitle h1={`Your order, ${username}`} p={""} />
            </div>
            <div className="my-4 ms-auto md:mb-0 bg-red-300">
              <SearchOrder placeholder="Search order e.g. #IIDSAT" />
            </div>
          </div>
        </div>
        <div className=" container mx-auto my-12 pe-6  ps-8 sm:ps-16">
          <BackToMenuLink />
        </div>

        <div className="container mx-auto  flex-col  bg-bg100   p-6 pe-6 ps-0 sm:ps-12">
          <div className="lg:items-left relative flex flex-col items-start justify-start  gap-10   lg:flex-row lg:items-end ">
            <div className=" w-full self-start ps-6 sm:px-6 lg:w-2/3 ">
              <ul className="divide-y-2  border-b-2 border-t-2">
                {cart.length ? (
                  cart.map((c) => (
                    <CartItem
                      isLoadingIngredients={fetcher.state === "loading"}
                      ingredients={
                        fetcher?.data?.find((el) => el.id === c.pizzaId)
                          ?.ingredients ?? []
                      }
                      item={c}
                      key={c.pizzaId}
                    />
                  ))
                ) : (
                  <EmptyCart />
                )}
              </ul>
              {cart.length > 0 && (
                <div className="mt-24 flex gap-6 sm:gap-12">
                  <Button to="/order/new" type="gray">
                    Order pizza
                  </Button>
                  <Button
                    type="empty"
                    disabled={!totalCartQuantity}
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear cart
                  </Button>
                </div>
              )}
            </div>

            <div className="mx-6 hidden h-full w-1/3 justify-center lg:flex">
              <Card
                img={card2}
                title="Thanks for ordering"
                subtitle="Enjoy our pizza"
              />
            </div>
           <CardLogo/>
            {/* <div className="absolute -bottom-28 -right-14   lg:hidden ">
              <img src={bg} alt="pizzarella logo" />
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;
