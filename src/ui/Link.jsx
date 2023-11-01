import { Link } from "react-router-dom";

function LinkButton({ children, to }) {
  return (
    <Link className="flex items-center gap-3" to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
