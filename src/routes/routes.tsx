import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import DashBoardLayout from "../components/layout/DashBoardLayout";
import About from "../pages/About/About";
import Product from "../pages/Product/Product";
import ProductDetails from "../pages/Product/ProductDetails";
import CreateAProduct from "../pages/Product/CreateAProduct";
import AdminProducts from "../pages/Product/AdminProducts";
import UpdateProductForm from "../pages/Product/UpdateProductForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashBoard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "/dashBoard/",
        element: <AdminProducts></AdminProducts>,
      },
      {
        path: "dashBoard/products/update/:id",
        element: <UpdateProductForm></UpdateProductForm>,
      },
      {
        path: "/dashBoard/products",
        element: <CreateAProduct></CreateAProduct>,
      },
      
    ],
  },
]);

export default router;
