import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductionPage from "./pages/ProductionPage";
import DesignPage from "./pages/DesignPage";
import ServicesPage from "./pages/ServicesPage";
import PartnersPage from "./pages/PartnersPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "production", element: <ProductionPage /> },
      { path: "design", element: <DesignPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "partners", element: <PartnersPage /> },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
