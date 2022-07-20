import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="flex items-center justify-center text-xs text-zinc-50 bg-slate-900">
        <Link to="/Home">Home</Link>
        <Link to="/Project">Project</Link>
        <Link to="/Profile">Profile</Link>
      </nav>
    </header>
  );
}
