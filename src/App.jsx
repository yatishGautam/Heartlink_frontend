import { useState } from "react";
import "./App.css";
import SingupPage from "./pages/SingupPage";
import LoginPage from "./pages/LoginPage";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<LoginPage></LoginPage>
		</>
	);
}

export default App;
