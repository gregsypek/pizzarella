import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart bgColor={"bg-bg200"} />,
      },
      {
        // path: "/order/new",
        path: "/order",
        element: <Order bgColor={"bg-bg200"} />,
      },
      {
        //TODO: delete after test
        path: "/test/:orderId",
        element: <CreateOrder bgColor={"bg-bg200"} />,
      },
      {
        path: "/order/:orderId",
        element: <CreateOrder bgColor={"bg-bg200"} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
