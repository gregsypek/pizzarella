import pizzaBg from "../images/cta-bg.svg";
import Button from "./Button";
import HeaderTitle from "./HeaderTitle";

function Cta({ bgColor }) {
  return (
    <>
      <div
        className={` ${
          bgColor ? bgColor : ""
        } absolute  left-0 right-0 -z-10 h-[500px] rounded-l-xl lg:left-1/2   `}
      />
      <section
        id="cta"
        className=" mx-auto mt-10 h-[400px] max-w-[1440px] bg-right bg-no-repeat p-6 sm:mt-16 md:mt-10 xl:mt-0"
        style={{
          backgroundImage: `url(${pizzaBg})`,
        }}
      >
        <div className="  h-full w-full rounded-xl  p-10 text-left ">
          <HeaderTitle
            h1="Delicious Pizza"
            p="Explore our menu and satisfy your pizza cravings with our fresh
            ingredients"
          />
          <div className="mt-20 flex justify-center space-x-10 md:mt-40">
            <Button type="empty">Order</Button>
            <Button type="gray">Menu</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
