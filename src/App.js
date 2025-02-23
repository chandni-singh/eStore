import "./App.css";
import TopNav from "./Components/TopNav";
import CatNav from "./Components/CatNav";
import MainComponent from "./Components/MainComponent";
import LandingPage from "./Components";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/productDetails" Component={ProductDetails} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;
