import hero from "../images/hero_pizza.png";
import Button from "./Button";
import pizza1 from "../images/feat_pizza1.png";
import pizza2 from "../images/feat_pizza2.png";
import pizza3 from "../images/feat_pizza3.png";

// import pizzaBg from "../images/feat-bg.svg";

function Home() {
  return (
    <>
      <section
        id="hero"
        className=" mx-auto h-screen max-w-[1440px] p-6 pt-36  sm:pt-48 lg:px-8 lg:pt-60"
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
      {/* <div
        className=" absolute left-0 -z-[600] hidden h-full w-full overflow-visible bg-cover bg-center bg-no-repeat  xl:block"
        style={{ backgroundImage: `url(${pizzaBg})` }}
      /> */}
      <div className="absolute left-0 -z-50 h-[150px] w-3/4  rounded-br-xl rounded-tr-xl bg-accent100" />
      <section id="feature" className=" mx-auto max-w-[1440px]  p-6">
        <div className="relative top-0 h-full p-2 text-left sm:text-center">
          <h1 className="text-5xl font-bold tracking-tight text-black sm:text-5xl ">
            Discover
          </h1>
          <p className="mt-2 text-2xl font-bold capitalize leading-8 text-text200 md:text-3xl md:font-normal">
            Our special Offers
          </p>
        </div>
        <div className=" mt-20 flex flex-wrap justify-around gap-16 md:gap-10 ">
          {/* pizza1 */}
          <div className="  flex w-[30%] min-w-[350px] flex-col ">
            <figure className="relative flex  w-full flex-col items-center justify-center ">
              {/* pizza gradient */}
              <div
                class="absolute -left-5 top-0 -z-50 hidden h-[350px] w-[350px] rounded-full bg-gradient-to-t from-[#F3F3F3] to-transparent lg:block
              "
              />
              <img
                src={pizza1}
                alt="pizza with basil "
                className="relative -z-10"
              />
              <div className="-left-50 absolute right-0  -z-20 mt-40 flex h-[200px] w-screen items-center justify-center rounded-xl border-2 border-bg300 bg-bg100 p-2 sm:static sm:mt-0 sm:h-auto sm:w-full">
                <figcaption className="w-screen -translate-x-8 translate-y-20 p-2 text-right text-base font-medium sm:static sm:w-full sm:translate-y-0 ">
                  Fast delivery in your door
                </figcaption>
                <div className="h-16 w-16  sm:relative">
                  {/* icon gradient */}
                  <div className="absolute z-40 w-full">
                    <div
                      class="relative bottom-0 left-0 z-20 h-12  w-12 rounded-full bg-gradient-to-t from-[#FFF3B0] to-transparent sm:bottom-0  lg:hidden
                    "
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className=" relative bottom-10 left-0 z-50  h-10  w-10 sm:bottom-10 lg:-bottom-2
                      "
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          {/* pizza2 */}
          <div className="  flex w-[30%] min-w-[350px] flex-col xl:mt-[5rem]">
            <figure className="relative flex   flex-col items-center justify-center ">
              {/* pizza gradient */}
              <div
                class="absolute -top-5 left-5 -z-50 hidden h-[350px] w-[350px] rounded-full bg-gradient-to-t from-[#FFF3B0] to-transparent lg:block
              "
              />
              <img
                src={pizza2}
                alt="pizza with cheese "
                className="relative -z-10 "
              />
              <div className="-left-50 absolute left-0  -z-20 mt-40 flex h-[200px] w-screen items-center justify-center rounded-xl border-2 border-bg300 bg-bg100 p-2 sm:static sm:mt-0 sm:h-auto sm:w-full ">
                <figcaption className="w-screen translate-x-12  translate-y-20   p-2 ps-2 text-left text-base font-medium  sm:static sm:w-full sm:translate-y-0 ">
                  Convenient Online Ordering
                </figcaption>
                <div className="h-16  sm:relative">
                  {/* icon gradient */}
                  <div className="absolute -left-16 z-40 h-16 ">
                    <div
                      class="relative bottom-0 left-20 z-20 h-12  w-12 rounded-full bg-gradient-to-t from-[#FFF3B0] to-transparent sm:bottom-0 sm:left-0 lg:hidden
                    "
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className=" relative bottom-10 left-20 z-50  h-10  w-10 sm:bottom-10 sm:left-0 lg:-bottom-2
                      "
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          {/* pizza3 */}
          <div className="  flex w-[30%] min-w-[350px] flex-col  xl:mt-[11rem]">
            <figure className="relative flex h-full w-full flex-col items-center justify-center ">
              {/* pizza gradient */}
              <div
                class="absolute right-0 top-0 -z-50 hidden h-[350px] w-[350px] rounded-full bg-gradient-to-t from-[#F3F3F3] to-transparent lg:block
              "
              />
              <img
                src={pizza3}
                alt="pizza with salami "
                className="relative -z-10"
              />
              <div className="-left-50 absolute right-0  -z-20 mt-40 flex h-[200px] w-screen items-center justify-center rounded-xl border-2 border-bg300 bg-bg100  p-2 sm:static sm:mt-0 sm:h-auto sm:w-full ">
                <figcaption className="w-screen -translate-x-8 translate-y-20 p-2 text-right text-base font-medium sm:static sm:w-full sm:translate-y-0 ">
                  Delicious Pizza Selection
                </figcaption>
                <div className="h-16 w-16  sm:relative">
                  {/* icon gradient */}
                  <div className="absolute z-40 w-full">
                    <div
                      class="relative bottom-0 left-0 z-20 h-12  w-12 rounded-full bg-gradient-to-t from-[#FFF3B0] to-transparent sm:bottom-0  lg:hidden
                    "
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className=" relative bottom-10 left-0 z-50  h-10  w-10 sm:bottom-10 lg:-bottom-2
                      "
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
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
