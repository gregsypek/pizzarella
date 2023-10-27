import { Link } from "react-router-dom";

function LinkButton({ children, to }) {
  return <Link to="/menu">{children}</Link>;
}

export default LinkButton;
