import { createBrowserRouter } from "react-router-dom";
import Layout from "../Page/Layout";
import Home from "../Page/Home/Home";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import MyCart from "../Page/Cart/MyCart";
import ErrorPage from "../Page/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Page/Event/AddProduct";
import CardDetails from "../Page/Home/Card-details/CardDetails";
import AddCart from "../Page/Home/Card-details/AddCart/AddCart";
import UpdateCard from "../Page/Home/Card-details/UpdateCard";
import PageTransition from "../FramerMotion/PageTransition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: (
          <PageTransition>
            <Home></Home>
          </PageTransition>
        ),
        loader: () => fetch("/brandData.json"),
      },
      {
        path: "product/:brand",
        element: (
          <PrivateRoute>
            <PageTransition>
              <CardDetails></CardDetails>
            </PageTransition>
          </PrivateRoute>
        ),
        loader: () => fetch("/brandData.json"),
      },
      {
        path: "/update/:id",
        element: (
          <PageTransition>
            <UpdateCard></UpdateCard>
          </PageTransition>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-bites.vercel.app/products/${params.id}`),
      },
      {
        path: "addCart/:_id",
        element: (
          <PageTransition>
            <AddCart></AddCart>
          </PageTransition>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-bites.vercel.app/products/${params._id}`),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <PageTransition>
              <AddProduct></AddProduct>
            </PageTransition>
          </PrivateRoute>
        ),
        loader: () => fetch("https://brand-bites.vercel.app/products"),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <PageTransition>
              <MyCart></MyCart>
            </PageTransition>
          </PrivateRoute>
        ),
        loader: () => fetch("https://brand-bites.vercel.app/userCartData"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
