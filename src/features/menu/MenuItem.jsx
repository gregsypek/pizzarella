// import pizza1 from "../../images/menu_pizza1.png";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, imageUrl, soldOut } = pizza;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <div
      className={` relative rounded-xl border border-bg300 bg-opacity-50 p-2 text-text100 ${
        soldOut ? "bg-bg200 opacity-70" : ""
      } sm:text-sm sm:leading-6`}
    >
      <img
        src={imageUrl}
        alt="small pizza"
        className=" border-3 absolute  left-2 top-2 z-50 my-0  hidden aspect-square  h-full rounded-full border-bg100 object-cover sm:inset-0 sm:left-3 sm:my-auto sm:block"
      />

      <div className=" relative  h-full w-full flex-wrap text-black sm:h-[80px]">
        <div className="flex h-full flex-col justify-start gap-4 px-3 sm:flex-row md:gap-6">
          <div className="absolute  hidden aspect-square h-[145%] w-auto  -translate-x-[15%] -translate-y-[15%] rounded-full   bg-bg200 sm:block "></div>
          <div className="mr-auto flex h-full w-full  flex-col justify-around sm:w-2/3 ">
            <div className=" flex flex-row justify-between   p-3 sm:ml-[100px] sm:flex-col">
              <div className="space-y-2">
                <p className=" text-sm font-bold md:text-base">{name}</p>

                <p className="flex-wrap text-xs font-normal md:text-sm">
                  {ingredients.join(", ")}
                </p>
              </div>
              <p className="mt-2 text-sm font-normal md:text-base">
                {formatCurrency(unitPrice)}
              </p>
            </div>
          </div>
          <div className=" min-w-fit self-end  sm:w-1/3  sm:self-center ">
            <div
              className="gap2 flex justify-between gap-3  p-2 
             lg:gap-3"
            >
              <div className="flex items-center justify-center gap-3 align-middle">
                {isInCart && (
                  <UpdateItemQuantity
                    pizzaId={id}
                    currentQuantity={currentQuantity}
                  />
                )}
              </div>
              <div className="flex self-center">
                {!soldOut && !isInCart && (
                  <Button type="smallYellow" onClick={handleAddToCart}>
                    Add To Cart
                  </Button>
                )}
                {isInCart && <DeleteItem pizzaId={id} size="normal" />}

                {soldOut && (
                  <span className="px-2.5 py-2.5 text-sm font-semibold uppercase tracking-wide text-text100 sm:px-2.5 sm:text-base md:px-7">
                    Sold out
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
