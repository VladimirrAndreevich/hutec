import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductionPage from "./pages/ProductionPage";
import DesignPage from "./pages/DesignPage";
import PartnersPage from "./pages/PartnersPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutCompany from "./pages/AboutCompany";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "production", element: <ProductionPage /> },
      { path: "design", element: <DesignPage /> },
      { path: "partners", element: <PartnersPage /> },
      { path: "about-company", element: <AboutCompany /> },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
