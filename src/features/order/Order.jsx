import SearchOrder from "./SearchOrder";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import card1 from "../../images/card1_bg.png";
import bg from "../../images/order_bg.png";
import Card from "../../ui/Card";
import HeaderTitle from "../../ui/HeaderTitle";

function Order({ bgColor }) {
  return (
    <>
      <div
        className={` ${
          bgColor ? bgColor : ""
        } absolute left-0 right-0 top-0 h-[80px] w-screen `}
      />
      <main className="container mx-auto  mt-24 max-h-screen flex-col bg-bg100   p-6  px-6">
        <div className="flex justify-end">
          <SearchOrder />
        </div>
        <div className="lg:items-left relative flex flex-col items-start justify-start   gap-10  lg:flex-row lg:items-end ">
          <div className=" w-full px-6  lg:w-2/3">
            <HeaderTitle
              h1={"Get in touch"}
              p={"To order pizza"}
              padding="24"
            />

            <form action="#" method="POST" className="mt-6 max-w-[700px] ">
              <div className="container gap-x-8 gap-y-6 md:grid-cols-2">
                <div className="grid h-full grid-cols-1 md:grid-cols-[125px_1fr] md:place-items-center md:gap-5">
                  <label
                    htmlFor="first-name"
                    className="mt-3 block  justify-self-start  text-lg font-normal leading-6 tracking-normal text-text100 md:my-0"
                  >
                    First name
                  </label>
                  <div className="mt-6 h-full  w-full md:mt-12 ">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="input"
                    />
                  </div>
                </div>
                <div className="grid h-full grid-cols-1 md:grid-cols-[125px_1fr] md:place-items-center md:gap-5">
                  <label
                    htmlFor="first-name"
                    className="mt-3 block  justify-self-start  text-lg font-normal leading-6 tracking-normal text-text100 md:my-0"
                  >
                    Phone number
                  </label>
                  <div className="mt-3  h-full w-full md:mt-12">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="input"
                    />
                  </div>
                </div>
                <div className="grid h-full grid-cols-1 md:grid-cols-[125px_1fr] md:place-items-center md:gap-5">
                  <label
                    htmlFor="first-name"
                    className="mt-3 block  justify-self-start  text-lg font-normal leading-6 tracking-normal text-text100 md:my-0"
                  >
                    Email
                  </label>
                  <div className="mt-3  h-full w-full md:mt-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="input"
                    />
                  </div>
                </div>

                <div className="mt-6 flex h-6 items-center md:mt-6">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="priority"
                    id="priority"
                    // value={withPriority}
                    // onChange={(e) => {}}
                  />
                  <label
                    htmlFor="priority"
                    className="text-sm   font-normal leading-6 tracking-normal text-text100 md:mt-0"
                  >
                    Want to yo give your order priority?
                  </label>
                </div>
                <div className="mt-3 flex h-6 items-center md:mt-6">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="priority"
                    id="policy"
                    // value={withPriority}
                    // onChange={(e) => {}}
                  />
                  <label
                    htmlFor="policy"
                    className="text-sm   font-normal leading-6 tracking-normal text-text100 md:mt-0"
                  >
                    By selecting this, you agree to our{" "}
                    <Link to="#" className="font-semibold text-primary200 ">
                      privacy&nbsp;policy
                    </Link>
                  </label>
                </div>
              </div>
              <div className="mt-12">
                <Button type="orange">Order now</Button>
              </div>
            </form>
          </div>

          <div className="mx-6 hidden h-full w-1/3 justify-center lg:flex">
            <Card
              img={card1}
              title="Crafted Recipe"
              subtitle="20 years of craftmenship"
            />
          </div>
          <div className="absolute -bottom-28 -right-14   lg:hidden ">
            <img src={bg} alt="pizzarella logo" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Order;
