import { Outlet } from "react-router";
import { Nav } from "../components/Nav";

export const Layout = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};