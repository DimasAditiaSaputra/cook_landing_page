import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Recipes from "./recipes/Recipes";
import Footer from "./footer/Footer";

export default function App() {
  return (
    <div className="container">
      <header>
        <Navbar></Navbar>
        <Home></Home>
        <Recipes></Recipes>
        <Footer></Footer>
      </header>
    </div>
  );
}
