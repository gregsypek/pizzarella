import pizza1 from "../../images/menu_pizza1.png";
import Button from "../../ui/Button";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    // <div className=" h-full  w-full  ">
    <div className=" relative rounded-xl border border-bg300 bg-opacity-50 text-text100  sm:text-sm sm:leading-6">
      <img
        src={imageUrl}
        alt="small pizza"
        className=" absolute left-2  top-2 z-50 my-0 hidden  aspect-square h-full  rounded-full sm:inset-0 sm:left-3 sm:my-auto sm:block "
      />
      {/* </div> */}
      <div className=" relative  h-full w-full flex-wrap text-black sm:h-[80px]">
        <div className="flex h-full flex-col justify-start gap-4 px-3 sm:flex-row md:gap-6">
          <div className="absolute  hidden aspect-square h-[120%] w-auto  -translate-x-[10%] -translate-y-[10%] rounded-full border  bg-bg300 sm:block "></div>
          <div className="mr-auto flex h-full w-full  flex-col justify-around sm:w-2/3 ">
            <div className=" flex flex-row justify-between   p-3 sm:ml-[100px] sm:flex-col">
              <div>
                <p className=" text-sm font-bold md:text-base">{name}</p>

                <p className="flex-wrap text-xs md:text-sm">
                  {ingredients.join(", ")}
                </p>
              </div>
              <p className="text-sm font-semibold md:text-base">{unitPrice}</p>
            </div>
          </div>
          <div className=" min-w-fit self-end  sm:w-1/3  sm:self-center ">
            <div
              className="flex  justify-end gap-3   p-2 
             lg:gap-6"
            >
              <div className="flex items-center justify-center gap-3 align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512"
                  className="align-middle text-blue-500"
                >
                  {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512"
                >
                  {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                </svg>
              </div>
              <div className="flex justify-center">
                <Button type="smallGray">Add To Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default MenuItem;
