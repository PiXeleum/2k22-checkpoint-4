import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="App-header">
      <nav>
        <Link to="/">azerty</Link>
        <Link to="/Project">qsdfgh</Link>
        <Link to="/Profile">wxcvbn</Link>
      </nav>
    </header>
  );
}
