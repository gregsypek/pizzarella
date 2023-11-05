import Button from "../../ui/Button";
import HeaderTitle from "../../ui/HeaderTitle";
import Card from "../../ui/Card";
import bg from "../../images/order_bg.png";
import card5 from "../../images/card5_bg.png";

function CreateUser({ bgColor }) {
  return (
    <>
      <div
        className={` ${
          bgColor ? bgColor : ""
        } absolute left-0 right-0 top-0 h-[80px] w-screen `}
      />
      <main className="container mx-auto  mt-40 max-h-screen flex-col bg-bg100   p-6  px-6">
        <div className="lg:items-left relative mb-16 flex flex-col items-start   justify-start gap-10  lg:flex-row lg:items-end ">
          <div className=" w-full px-6  lg:w-2/3">
            <HeaderTitle
              h1={"Welcome"}
              p={"Start by telling us your name "}
              padding="24"
            />

            <form action="#" method="POST" className="mt-6  ">
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
                    htmlFor="last-name"
                    className="mt-3 block  justify-self-start  text-lg font-normal leading-6 tracking-normal text-text100 md:my-0"
                  >
                    Last name
                  </label>
                  <div className="mt-3  h-full w-full md:mt-12">
                    <input
                      type="text"
                      name="last name"
                      autoComplete="given-name"
                      id="last name"
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
              </div>
              <div className="mt-12">
                <Button type="orange">Join now</Button>
              </div>
            </form>
          </div>

          <div className="mx-6 hidden h-full w-1/3 justify-center lg:flex">
            <Card
              img={card5}
              title="Become our memeber"
              subtitle="Grab an extra discount on our pizza"
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

export default CreateUser;
