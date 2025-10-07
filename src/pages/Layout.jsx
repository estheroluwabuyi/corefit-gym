import { Outlet } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
