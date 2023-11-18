import { Link } from "react-router-dom";

function Button({ disabled, children, to, type, onClick }) {
  const base =
    "inline-block rounded-full font-semibold tracking-wide transition-colors duration-300 focus:outline-none focus:ring  focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed  ";
  const normal = base + "px-4 py-2.5 md:px-8 border-2 ";
  const small = base + " text-xs sm:text-sm px-2 md:px-3 py-2 md:px-6 text-sm ";
  const wide = base + " text-xs sm:text-sm px-6 md:px-11 py-2 text-sm  "

  const styles = {
    red:
      normal +
      "text-white bg-accent200 hover:bg-red-500 focus:ring-red-500 focus:ring border-accent200   ",
    orange:
      normal +
      "text-black bg-primary100 hover:bg-primary200 focus:primary200 focus:ring border-primary200  uppercase border-primary200",
    empty:
      normal +
      "border-text100 text-black hover:bg-bg300 hover:text-black focus:ring-text100 focus:ring ",
    round:
      base +
      "bg-text100 text-bg100 px-2 sm:px-2.5 py-1 px-2 sm:px-3 md:py-2 text-sm border-0 w-6 h-6 sm:w-9 sm:h-9 hover:bg-text200",
    gray:
      normal +
      "border-text100 bg-text200  text-white hover:bg-black focus:ring-text100 focus:ring ",
    smallYellow:
      small +
      "border-text200 bg-accent100 border-2 text-black texthover:bg-primary200 focus:ring-primary200 flex-nowrap focus:ring hover:text-text200 hover:bg-transparent ",
    smallGray:
      small +
      "border-text200 bg-bg200 border-2 text-black hover:bg-primary200 focus:ring-primary200 flex-nowrap focus:ring ",
    smallRed:
      small +
      "border-text100 bg-accent100 border-2 text-accent200  hover:bg-accent100 focus:ring-primary200 flex-nowrap focus:ring hover:bg-accent200  hover:text-bg100 bg-transparent ",
    normalRed:
      wide +
      "border-text100 bg-accent100 border-2 text-accent200  hover:bg-accent100 focus:ring-primary200 flex-nowrap focus:ring hover:bg-accent200  hover:text-bg100 bg-transparent ",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
