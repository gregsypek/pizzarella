import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" block w-64  rounded-md border-0  bg-bg100 px-3.5 py-2 text-gray-900  shadow-sm ring-1 ring-inset ring-text100 transition-all duration-300 placeholder:text-gray-400 focus:w-72 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-text100 sm:text-sm sm:leading-6"
      />
    </form>
  );
}

export default SearchOrder;
