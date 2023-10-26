import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
	return (
		<div>
			<Header />
			<main>
				<h1>Content</h1>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}

export default AppLayout;
