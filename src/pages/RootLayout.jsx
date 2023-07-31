import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../sections/Footer";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />

      <main>
        <Outlet></Outlet>
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
