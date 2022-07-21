import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="flex items-center justify-center text-xs text-zinc-50 bg-gray-500 ">
        <Link className=" hover:bg-slate-400 p-3" to="/Home">
          Home
        </Link>
        <Link className=" hover:bg-slate-400 p-3" to="/Project">
          Project
        </Link>
        <Link className=" hover:bg-slate-400 p-3" to="/Profile">
          Profile
        </Link>
      </nav>
    </header>
  );
}
