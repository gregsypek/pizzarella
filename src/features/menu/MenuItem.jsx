import pizza1 from "../../images/menu_pizza1.png";
import Button from "../../ui/Button";

function MenuItem() {
  return (
    // <div className=" h-full  w-full  ">
    <div className=" relative flex h-auto  w-auto rounded-xl border border-bg300 bg-opacity-50 text-text100  sm:text-sm sm:leading-6">
      <img
        src={pizza1}
        alt="small pizza"
        className=" absolute left-2  top-2 z-50 my-0 hidden  aspect-square h-full  sm:inset-0 sm:left-3 sm:my-auto sm:block "
      />
      <div className="text w-full  text-black">
        <div className="flex h-full justify-start gap-4 px-3 md:gap-6">
          <div className=" hidden aspect-square h-[110%] w-auto -translate-x-[5%] -translate-y-[5%] rounded-full border border-bg300 bg-bg100 sm:block sm:w-32  md:w-40  "></div>
          <div className="mr-auto flex h-full w-1/3 flex-col justify-around sm:w-2/3 ">
            <div>
              <p className=" text-sm font-bold md:text-base">Margarita</p>

              <p className="flex-wrap text-xs md:text-sm">
                Tomato, Mozarella, Basil
              </p>
            </div>
            <p className="text-sm font-semibold md:text-base">38 zł</p>
          </div>
          <div className="min-w-fit  self-center sm:w-1/3">
            <div className="flex  flex-col justify-end gap-2   p-2  md:gap-6  lg:flex-row">
              <div className="flex justify-center gap-3 align-middle sm:items-center">
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
              <Button type="smallGray">Add To Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default MenuItem;
