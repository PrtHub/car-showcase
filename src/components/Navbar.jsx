import { useState } from "react";
// import { Navigate } from "react-router-dom";
import { AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <section className="w-full bg-sky-100 flex justify-between items-center shadow-xl rounded-2xl px-5 py-3 my-2">
      <h1 className="text-xl font-bold text-gray-600">Car Showcase</h1>
    <form
    className="flex items-center bg-white px-3 py-2 gap-2 rounded-xl"
    // onSubmit={handleSearch}
  >
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="bg-white-100 text-gray-400 outline-none border-none"
    />
    <AiOutlineSearch className="text-gray-600 text-xl font-semibold" />
  </form>
  </section>
  )
}

export default Navbar