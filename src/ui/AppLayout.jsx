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
    <div className="relative flex h-screen flex-col bg-bg100">
      {/* <div className="grid-rows-[auto,minmax(1fr, 1fr),auto] relative grid h-screen bg-bg100"> */}
      {isLoading && <Loader />}
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer bgColor={footerType} />
    </div>
  );
}

export default AppLayout;
