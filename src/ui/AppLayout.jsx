import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-bg100">
      {isLoading && <Loader />}
      <nav className="mx-auto max-w-7xl">
        <Header />
      </nav>

      <main className="mx-auto max-w-7xl">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
