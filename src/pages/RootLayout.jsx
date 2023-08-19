import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../sections/Footer";
import MapSection from "../sections/MapSection";
import { useEffect } from "react";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // При каждом изменении маршрута, прокручиваем страницу вверх.
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <MainNavigation />

      <main>
        <Outlet></Outlet>
      </main>

      <MapSection />
      <Footer />
    </>
  );
};

export default RootLayout;
