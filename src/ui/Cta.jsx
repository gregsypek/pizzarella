import pizzaBg from "../images/cta-bg.svg";
import Button from "./Button";

function Cta() {
  return (
    <section
      id="cta"
      className=" mx-auto mt-32 h-[400px] max-w-[1440px] bg-right bg-no-repeat p-6 sm:mt-16 md:mt-10 xl:mt-0"
      style={{
        backgroundImage: `url(${pizzaBg})`,
      }}
    >
      <div className="  h-full w-full rounded-xl  p-10 text-left ">
        <h1 className="text-5xl font-bold tracking-tight text-black sm:text-5xl ">
          Delicious Pizza
        </h1>
        <p className="mt-2 w-3/5 text-lg font-bold capitalize leading-8 text-text200 md:w-2/3 md:text-2xl md:font-normal">
          Explore our menu and satisfy your pizza cravings with our fresh
          ingredients
        </p>
        <div className="mt-20 flex justify-center space-x-10 md:mt-40">
          <Button type="empty">Order</Button>
          <Button type="gray">Menu</Button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
