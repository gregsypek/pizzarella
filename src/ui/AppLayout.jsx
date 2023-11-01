import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div className="relative grid h-screen grid-rows-[auto_1fr_auto]  bg-bg100 ">
      {isLoading && <Loader />}
      <nav>
        <Header />
      </nav>

      <Outlet />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
