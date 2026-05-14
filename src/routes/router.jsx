import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Blog_List from "../pages/Blog/Blog_List";
import Single_Blog from "../pages/Blog/SinglePage/Single_Blog";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import ShoppingCart from "../pages/ShopingCart/ShoppingCart";
import Shops from "../pages/Shops";
import Wishlist from "../pages/WishListSctions/Wishlist";

import DashboardLayout from "../layout/DashboardLayout";
import About from "../pages/About/About";
import Register from "../pages/Authentication/Register";
import SignIn from "../pages/Authentication/SignIn";
import CheckoutCancel from "../pages/Checkout/CheckoutCancel";
import CheckoutSuccess from "../pages/Checkout/CheckoutSuccess";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardCart from "../pages/Dashboard/DashboardCart";
import DashboardSettings from "../pages/Dashboard/DashboardSettings";
import DashboardWishlist from "../pages/Dashboard/DashboardWishlist";
import OrderDetails from "../pages/Dashboard/OrderDetails";
import OrderHistory from "../pages/Dashboard/OrderHistoy";
import NotFound from "../pages/NotFound/NotFound";
import FAQ from "../pages/faq/FAQ";
import PrivateRoute from "./private/PrivateRoute";
import ForgotPassword from './../pages/Authentication/ForgetPassword';
import ResetPasswordConfirm from "../pages/Authentication/ResetPasswordConfirm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        children: [
          { index: true, element: <Shops /> },
          { path: ":slug", element: <ProductDetails /> },
        ],
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/shoppingCart",
        element: <ShoppingCart />,
      },
      {
        path: "/blog",
        element: <Blog_List />,
      },
      {
        path: "/singleblog/:id",
        element: <Single_Blog />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
         path: "/forgotPassword",
        element: <ForgotPassword/>,
      },
      {
         path: "/reset-password-confirm/:uid/:token",
        element: <ResetPasswordConfirm/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/checkout/success",
        element: (
          <PrivateRoute>
            <CheckoutSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/cancel",
        element: (
          <PrivateRoute>
            <CheckoutCancel />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/order-history",
        element: (
          <PrivateRoute>
            <OrderHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/order/:order_id",
        element: (
          <PrivateRoute>
            {" "}
            <OrderDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/wishlist",
        element: (
          <PrivateRoute>
            <DashboardWishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/shopping-cart",
        element: (
          <PrivateRoute>
            <DashboardCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/settings",
        element: (
          <PrivateRoute>
            <DashboardSettings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
