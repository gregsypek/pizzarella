import pizza1 from "../images/feat_pizza1.png";
import pizza2 from "../images/feat_pizza2.png";
import pizza3 from "../images/feat_pizza3.png";

import FeatCard from "./FeatCard";

import HeaderTitle from "./HeaderTitle";

function Features({ bgColor }) {
  return (
    <>
      <div
        className={` ${
          bgColor ? bgColor : ""
        } absolute left-0 right-1/3 top-0 -z-10 h-[110px] rounded-r-lg `}
      />
      <section
        id="features"
        className=" container mx-auto flex h-fit flex-col overflow-hidden p-6  px-7  "
      >
        <HeaderTitle h1="Discover" p="Our special offers" />
        <div
          className=" flex flex-wrap
       justify-around gap-16 py-24 sm:pt-28 md:gap-10 lg:px-12 lg:pb-36  "
        >
          {/* pizza1 */}
          <div className="  flex w-[30%] min-w-[350px] flex-col ">
            <FeatCard
              img={pizza1}
              title="Join Our Loyalty Program"
              subtitle="Enjoy exclusive benefits and rewards when you become a member"
              buttonText="Learn more"
              buttonTo="menu" //TODO; CREATE LOGIN PAGE
            />
          </div>
          {/* pizza2 */}
          <div className="  flex w-[30%] min-w-[350px] flex-col md:mt-[5rem]">
            <FeatCard
              img={pizza2}
              title="Convenient Online Ordering"
              subtitle="Order your favorite pizza from our great application or website page"
              buttonText="Order Now"
              buttonTo="cart"
            />
          </div>
          {/* pizza3 */}
          <div className="  flex w-[30%] min-w-[350px] flex-col  myCustom:mt-[11rem]">
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
