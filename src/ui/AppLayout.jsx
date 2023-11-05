import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const location = useLocation();

  const isLoading = navigation.state === "loading";

  const currentPage = location.pathname;
  console.log(
    "🚀 ~ file: AppLayout.jsx:13 ~ AppLayout ~ currentPage:",
    currentPage,
  );
  let footerType;
  if (currentPage === "/" || currentPage === "/order/new") {
    footerType = "bg-transparent";
  } else {
    footerType = "bg-bg200";
  }
  return (
    <div className="relative grid h-screen grid-rows-[auto,1fr,auto] bg-bg100 ">
      {isLoading && <Loader />}

      <Header />
      <Outlet />
      <Footer bgColor={footerType} />
    </div>
  );
}

export default AppLayout;
