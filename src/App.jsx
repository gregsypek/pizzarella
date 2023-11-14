import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import CreateUser from "./features/user/CreateUser";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu bgColor={"bg-bg200"} />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart bgColor={"bg-bg200"} />,
      },
      {
        // path: "/order/new",
        path: "/order/new",
        element: <CreateOrder bgColor={"bg-bg200"} />,
      },
      {
        path: "/register",
        element: <CreateUser bgColor={"bg-bg200"} />,
      },
      {
        path: "/order/:orderId",
        element: <Order bgColor={"bg-bg200"} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
