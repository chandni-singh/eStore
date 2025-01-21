import MainComponent from "./MainComponent";
import { Routes, Route } from "react-router-dom";

const LandingPage = () => {
  return (
    <Routes>
      <Route path="/" Component={MainComponent} />
    </Routes>
  );
};

export default LandingPage;
