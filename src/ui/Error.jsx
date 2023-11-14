import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  return (
    <div className=" flex h-full flex-1 flex-col items-center justify-center gap-4">
      <h1>NOT FOUND :(</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
