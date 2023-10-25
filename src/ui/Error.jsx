import { useNavigate } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();

	return (
		<div>
			<h1>NOT FOUND</h1>
			<button onClick={() => navigate(-1)}>&larr; Go back</button>
		</div>
	);
}

export default NotFound;
