function Card({ img, title, subtitle }) {
  return (
    <div className="border-bg300">
      <div className="h-82 w-72 rounded-2xl border-2  p-8">
        <div className="flex flex-col justify-between gap-3">
          <p className=" text-center text-sm font-bold capitalize text-accent200 ">
            {title}
          </p>

          <div
            className="h-0.5 w-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 87, 34, 0.00) 0%, #FF5722 51.62%, rgba(255, 87, 34, 0.00) 100%)",
            }}
          />
          <p className=" text-center text-sm font-normal capitalize text-text200 ">
            {subtitle}
          </p>
          <img
            src={img}
            alt="The chef is preparing a pizza"
            className="h-full w-full "
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
