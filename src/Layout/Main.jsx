import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../Shared/Loading/Loading";

const Main = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loading fullScreen={true} />;
  }
  return (
    <div className="max-w-screen-2xl mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
