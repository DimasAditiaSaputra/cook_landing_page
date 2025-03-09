import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";

export default function App() {
  return (
    <div className="container">
      <header>
        <Navbar></Navbar>
        <Home></Home>
      </header>
    </div>
  );
}
