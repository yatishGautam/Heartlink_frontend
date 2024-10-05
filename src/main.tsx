import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error("Root element not found");
}

// Create the root and render the application
const root = createRoot(rootElement as HTMLElement);
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
