import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import Products from "../pages/Products";
function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/brands",
          element: <Brands />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
