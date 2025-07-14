import { Outlet } from "react-router-dom";
import NavBar from "../components/header/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
