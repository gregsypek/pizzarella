import pizzaBg from "../images/cta-bg.svg";
import Button from "./Button";
import HeaderTitle from "./HeaderTitle";

function Cta({ bgColor }) {
  return (
    <>
      <div
        className={` ${
          bgColor ? bgColor : ""
        } absolute left-[80%] right-0 z-10 h-full rounded-l-xl sm:left-[40%] sm:right-[40%]  lg:left-1/2 lg:hidden   `}
      />
      <section
        id="cta"
        className="mx-auto mt-10 h-[400px] max-w-[1440px] bg-bg100 bg-right bg-no-repeat p-6 sm:mt-16 sm:bg-transparent md:mt-10 lg:mb-16  xl:mt-0"
        style={{
          backgroundImage: `url(${pizzaBg})`,
        }}
      >
        <div className="relative z-10  h-full w-[300px] rounded-xl p-10  text-left sm:w-full ">
          <HeaderTitle
            h1="Delicious Pizza"
            p="Explore our menu and satisfy your pizza cravings with our fresh
            ingredients"
          />
          <div className="relative z-10 mt-20 flex justify-center space-x-10 md:mt-40">
            <Button to="order/new" type="empty">
              Order
            </Button>
            <Button to="menu" type="gray">
              Menu
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
