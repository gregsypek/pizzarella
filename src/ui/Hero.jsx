import hero from "../images/hero_pizza.png";
import Button from "./Button";

function Hero({ bgColor }) {
  return (
    <>
      <div
        className={` ${
          bgColor ? bgColor : ""
        } absolute left-2/3 right-0 top-0 z-10 h-2/3 w-1/3 rounded-xl 
         `}
      />
      <section
        id="hero"
        className="container mx-auto flex h-auto  flex-col items-center gap-10  p-6 px-7  pb-24  pt-32  sm:pt-48   lg:flex-row lg:px-8 lg:pt-52 "
      >
        <div
          className=" flex
      "
        >
          <div className=" min-w-[190px]  text-left sm:min-w-[220px] md:min-w-[380px]">
            <h1 className="text-5xl font-bold tracking-tight text-black sm:text-7xl ">
              Delicious Pizza
            </h1>
            <p className="mt-5 text-2xl font-bold capitalize leading-8 text-text200 md:text-4xl md:font-normal">
              Delivered Right to
              <span className=" block">Yours Doorstep</span>
            </p>
            <p className="mt-8  max-w-fit text-lg lg:max-w-[80%]" id="feature">
              Craving a mouthwatering pizza? Look no further! Our delivery
              service brings you the best pizza in town, made with fresh
              ingredients and topped with love
            </p>
            <div className="mt-14 ">
              <Button type="red"> Order now</Button>
            </div>
          </div>

          <img
            className=" relative z-50 ms-10 mt-28 h-full w-full flex-1 object-cover md:-mt-8 lg:-mt-14 "
            src={hero}
            alt="pizza"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
