import { Outlet } from "react-router-dom";
import NavBar from "./header/NavBar";
import Footer from "./footer/Footer";

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
