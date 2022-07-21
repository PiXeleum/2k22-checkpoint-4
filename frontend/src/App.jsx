import Home from "@pages/Home";
import Project from "@pages/Project";
import Profile from "@pages/Profile";
import NavBar from "@components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
