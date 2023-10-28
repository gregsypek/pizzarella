import hero from "../images/hero_pizza.png";
import Button from "./Button";
import pizza1 from "../images/feat_pizza1.png";
import pizza2 from "../images/feat_pizza2.png";
import pizza3 from "../images/feat_pizza3.png";

function Home() {
  return (
    <>
      <section
        id="hero"
        className=" mx-auto max-w-[1440px] p-6 py-32  sm:py-48 lg:px-8 lg:py-56"
      >
        <div className="absolute bottom-56 right-0 top-0 w-1/4 rounded-b-lg bg-accent100" />
        <div
          className=" flex
      "
        >
          <div className=" min-w-[190px] text-left sm:min-w-[220px] md:min-w-[380px]">
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
            className=" relative z-50 ms-10 mt-28 h-full w-full flex-1 object-cover md:-mt-8 lg:-mt-14"
            src={hero}
            alt="pizza"
          />
        </div>
      </section>
      <section id="feature">
        <div className=" block text-center">
          <h1 className="sm:text-red-5xl text-5xl font-bold tracking-tight text-black ">
            Discover
          </h1>
          <p className="mt-5 text-2xl font-bold capitalize leading-8 text-text200 md:text-3xl md:font-normal">
            Our special Offers
          </p>
        </div>
        <div className=" mt-20 flex flex-wrap justify-around ">
          <div className="flex w-1/3 min-w-[350px]  flex-col ">
            <figure className="relative flex h-full w-full flex-col items-center justify-center ">
              {/* pizza gradient */}
              <div
                class="absolute left-10 top-0 -z-10 hidden h-[350px] w-[350px] rounded-full bg-gradient-to-t from-[#FFF3B0] to-transparent lg:block
              "
              />
              <img src={pizza1} alt="pizza with basil " />
              <div className=" flex w-full items-center justify-center rounded-xl bg-bg200 p-2">
                <figcaption className="me-4 text-center text-base font-medium">
                  Fast delivery in your door
                </figcaption>
                <div className="relative h-16 w-16 overflow-hidden">
                  {/* icon gradient */}
                  <div
                    class="h-12 w-12 rounded-full bg-gradient-to-t from-[#FFF3B0] to-transparent lg:hidden
                  "
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute bottom-5 right-5 h-8 w-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </figure>
          </div>
          <div className="flex w-1/3 min-w-[350px] flex-col ">
            <figure className="relative flex h-full w-full flex-col items-center justify-center ">
              {/* pizza gradient */}
              <div
                class="absolute -top-10 left-10 -z-10 hidden h-[350px] w-[350px] rounded-full bg-gradient-to-t from-[#FFF3B0] to-transparent lg:block
              "
              />
              <img src={pizza2} alt="pizza with cheese " />
              <div className=" flex w-full items-center justify-center rounded-xl bg-bg200 p-2">
                <figcaption className="me-4 text-center text-base font-medium">
                  Fast delivery in your door
                </figcaption>
                <div className="relative h-16 w-16 overflow-hidden">
                  {/* icon gradient */}
                  <div
                    class="h-12 w-12 rounded-full bg-gradient-to-t from-[#FFF3B0] to-transparent lg:hidden
                  "
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute bottom-5 right-5 h-8 w-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </figure>
          </div>
          <div className="flex w-1/3 min-w-[350px] flex-col ">
            <figure className="relative flex h-full w-full flex-col items-center justify-center ">
              {/* pizza gradient */}
              <div
                class="absolute left-5 top-0 -z-10 hidden h-[350px] w-[350px] rounded-full bg-gradient-to-t from-[#FFF3B0] to-transparent lg:block
              "
              />
              <img src={pizza3} alt="pizza with salami " />
              <div className=" flex w-full items-center justify-center rounded-xl bg-bg200 p-2">
                <figcaption className="me-4 text-center text-base font-medium">
                  Fast delivery in your door
                </figcaption>
                <div className="relative h-16 w-16 overflow-hidden">
                  {/* icon gradient */}
                  <div
                    class="h-12 w-12 rounded-full bg-gradient-to-t from-[#FFF3B0] to-transparent lg:hidden
                  "
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute bottom-5 right-5 h-8 w-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
