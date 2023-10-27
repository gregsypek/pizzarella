import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Button from "./Button";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-slate-200">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-y-scroll">
        <main className="mx-auto max-w-5xl ">
          <Button to="/order/new" type="orange">
            Order
          </Button>

          <Button type="red">Order</Button>
          <Button type="empty">Order</Button>

          <h1 className="bg-red-600 text-2xl text-bg100 hover:bg-red-600 focus:ring ">
            Content
          </h1>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
