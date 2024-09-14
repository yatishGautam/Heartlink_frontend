import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/Login";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<LoginPage></LoginPage>
		</>
	);
}

export default App;
