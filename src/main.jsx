import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import DarkProvider from "./context/DarkProvider";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<DarkProvider>
			<AuthProvider>
				<RouterProvider router={router} />
				<ToastContainer />
			</AuthProvider>
		</DarkProvider>
	</StrictMode>
);
