import pizza1 from "../images/feat_pizza1.png";
import pizza2 from "../images/feat_pizza2.png";
import pizza3 from "../images/feat_pizza3.png";
import leaves from "../images/leaves.svg";

import FeatCard from "./FeatCard";

import HeaderTitle from "./HeaderTitle";

function Features({ bgColor }) {
  return (
    <>
      <div
        className={` ${
          bgColor ? bgColor : ""
        } absolute left-0 right-1/3 top-0 z-10 h-[110px] rounded-r-lg xl:right-2/3 `}
      />
      <img
        src={leaves}
        alt="leaves"
        className="absolute right-20 top-10 hidden xl:block"
      />
      <section
        id="features"
        className=" container mx-auto flex  flex-col  p-6  px-7  "
      >
        <div className="relative z-20">
          <HeaderTitle h1="Discover" p="Our special offers" />
        </div>
        <div
          className=" flex flex-wrap justify-center
       gap-16 py-24 sm:justify-around sm:pt-28 md:gap-10 lg:px-12  "
        >
          {/* pizza1 */}
          <div className=" flex  min-w-[260px] flex-col items-center  sm:w-[30%] ">
            <FeatCard
              img={pizza1}
              title="Join Our Loyalty Program"
              subtitle="Enjoy exclusive benefits and rewards when you become a member"
              buttonText="Learn more"
              buttonTo="register"
            />
          </div>
          {/* pizza2 */}
          <div className=" flex  min-w-[260px] flex-col  items-center sm:w-[30%]  2xl:mt-[5rem]">
            <FeatCard
              img={pizza2}
              title="Convenient Online Ordering"
              subtitle="Order your favorite pizza from our great application or website page"
              buttonText="Order Now"
              buttonTo="order/new"
            />
          </div>
          {/* pizza3 */}
          <div className=" flex  min-w-[260px] flex-col  items-center sm:w-[30%] 2xl:mt-[10rem]">
            <FeatCard
              img={pizza3}
              title="Delicious Pizza Selection"
              subtitle="Choose from a wide variety of mouthwatering pizzas"
              buttonText="Explore"
              buttonTo="menu"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
