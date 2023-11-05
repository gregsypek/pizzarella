import plus from "../images/pizza_plus.svg";
import Button from "./Button";

function FeatCard({ img, title, subtitle, buttonText, buttonTo }) {
  return (
    <div className="w-[300px] border-bg100 sm:w-full">
      <div className="  rounded-2xl border-2 bg-transparent p-2 sm:p-8">
        <div className="flex flex-col justify-between gap-8">
          <div className="relative">
            <img
              src={img}
              alt="The chef is preparing a pizza"
              className="h-[250px] w-auto sm:h-full sm:w-full "
            />
            <div className="absolute bottom-12 right-4 sm:right-0 ">
              <img src={plus} alt="plus" />
            </div>
          </div>
          <p className=" text-center text-lg font-bold capitalize text-text100 ">
            {title}
          </p>
          <div
            className="h-0.5 w-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 87, 34, 0.00) 0%, #FF5722 51.62%, rgba(255, 87, 34, 0.00) 100%)",
            }}
          />
          <p className="  text-center text-sm font-normal capitalize text-text200 ">
            {subtitle}o
          </p>

          <div className="flex justify-center">
            <Button to={`/${buttonTo}`} type="smallYellow">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatCard;
