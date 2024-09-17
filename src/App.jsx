import { useState } from "react";
import "./App.css";
import SingupPage from "./pages/SingupPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupForm from "./components/Auth/Signup";

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/signup" element={<SingupPage />} />
				<Route path="/login" element={<LoginPage></LoginPage>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
