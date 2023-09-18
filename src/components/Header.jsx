import { Link } from "react-router-dom";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-[#0f0f0f] text-white">
      <Link className="flex items-center gap-3 text-3xl" to={"/"}>
        <img width={50} src="/youtube_logo.png" /> <h1>YouTube</h1>
      </Link>
      <form className="bg-white rounded flex items-center text-black">
        <input
          className="rounded px-4 py-1 outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="text-black mr-2 text-2xl rounded-full p-1 transition duration-300 hover:bg-gray-300">
          <AiOutlineSearch />
        </button>
      </form>

      <AiFillBell className="cursor-pointer text-xl " />
    </header>
  );
};

export default Header;
