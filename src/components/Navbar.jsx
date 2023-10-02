import { useState } from "react";
// import { Navigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <section className="w-full bg-sky-100 flex justify-between items-center shadow-xl rounded-2xl px-5 py-3 my-2">
      <Link to="/" className="text-xl font-bold text-gray-600">
        Car Showcase
      </Link>
      <form
        className="flex items-center bg-white px-3 py-2 gap-2 rounded-xl"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-white-100 text-gray-400 outline-none border-none"
        />
        <AiOutlineSearch className="text-gray-600 text-xl font-semibold" />
      </form>
    </section>
  );
};

export default Navbar;
