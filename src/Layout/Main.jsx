import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
