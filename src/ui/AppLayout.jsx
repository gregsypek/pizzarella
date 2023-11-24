import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  const location = useLocation();

  const isLoading = navigation.state === "loading";

  const currentPage = location.pathname;

  let footerType;
  if (currentPage === "/order/new") {
    footerType = "bg-bg200";
  } else {
    footerType = "bg-bg100";
  }
  return (
    // <div className="relative mx-auto flex-1  flex-col overflow-x-hidden bg-bg100">
       <div className="grid-rows-[auto,minmax(1fr, 1fr),auto] relative grid h-screen bg-bg100 overflow-x-hidden"> 
      {isLoading && <Loader />}
      <Header />
      {/* <div className=" "> */}
        <Outlet />
      {/* </div> */}
 

      <Footer bgColor={footerType} />

    
    </div>
  );
}

export default AppLayout;
