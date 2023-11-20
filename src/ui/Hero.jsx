import hero from "../images/hero_pizza.png";
import heroSmall from "../images/hero_pizza-small.png";
import Button from "./Button";

function Hero({ bgColor }) {
  return (
    <>
      <div
        className={` ${
          bgColor ? bgColor : ""
        } max-h absolute left-2/3 right-0 top-0 z-10 h-2/3 max-h-[700px] w-1/3 rounded-xl 
         `}
      />
      <section
        id="hero"
        className=" container mx-auto flex h-auto  flex-col items-center gap-10  p-6 px-7  pb-24  pt-32  sm:pt-48   lg:flex-row lg:px-8 lg:pt-52 "
      >
        <div
          className=" p= relative flex h-full justify-start lg:justify-between
      "
        >
          <div className=" w-1/2">
            <h1 className="text-5xl font-bold tracking-tight text-black sm:text-7xl ">
              Delicious Pizza
            </h1>
            <p className="mt-5 text-2xl font-bold capitalize leading-8 text-text200 md:text-3xl md:font-normal">
              Delivered
              <span className="block">Right to Yours</span>
              <span className=" block"> Doorstep</span>
            </p>
            <p
              className=" mt-8 w-[100%] bg-bg100 p-2 text-sm sm:w-[70%] sm:max-w-fit md:text-lg lg:max-w-[80%]"
              id="feature "
            >
              Craving a mouthwatering pizza? Look no further! Our delivery
              service brings you the best pizza in town, made with fresh
              ingredients and topped with love
            </p>
            <div className="mt-14 ">
              <Button to="order/new" type="red">
                Order now
              </Button>
            </div>
          </div>
          <div className=" -sm:top-32 xl-right-0 lg-right-0 lg:1/4 md:w-1/1 absolute -right-16 top-[3%] z-10 w-3/4 lg:static ">
            <img
              className="hidden h-full  w-auto object-cover md:block lg:relative lg:h-fit lg:w-full"
              src={hero}
              alt="pizza"
            />
            <img
              className=" h-full translate-x-12 object-cover md:hidden "
              src={heroSmall}
              alt="pizza"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
