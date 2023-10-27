import { Link } from "react-router-dom";

function Button({ disabled, children, to, type }) {
  const base =
    "inline-block rounded-full font-semibold tracking-wide transition-colors duration-300 focus:outline-none focus:ring  focus:ring-offset-1 disabled:cursor-not-allowed border-2 ";
  const normal = base + "px-4 py-2 md:px-6 md:py-3 lg:px-8  ";
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
    gray:
      normal +
      "border-text100 bg-text100  text-white hover:bg-black focus:ring-text100 focus:ring ",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
