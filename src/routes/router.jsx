import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import MyFavorites from "../pages/MyFavorites";
import AddMovie from "../pages/AddMovie";
import AllMovies from "../pages/AllMovies";
import MoviesDetails from "../pages/MoviesDetails";
import PrivateRoute from "../pages/PrivateRoute";
import Update from "../pages/Update";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("https://server-ten-inky.vercel.app/addmovie"),
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/allmovies",
				element: <AllMovies />,
				loader: () => fetch("https://server-ten-inky.vercel.app/allMovie"),
			},
			{
				path: "/addmovie",
				element: (
					<PrivateRoute>
						{" "}
						<AddMovie />
					</PrivateRoute>
				),
			},
			{
				path: "/update/:id",
				element: (
					<PrivateRoute>
						{" "}
						<Update />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://server-ten-inky.vercel.app/allMovie/${params.id}`),
			},
			{
				path: "/myfavorites",
				element: (
					<PrivateRoute>
						{" "}
						<MyFavorites />
					</PrivateRoute>
				),
			},
			{
				path: "/movieDetails/:id",
				element: (
					<PrivateRoute>
						{" "}
						<MoviesDetails />
					</PrivateRoute>
				),
				loader: async ({ params }) => {
					const res = await fetch(`https://server-ten-inky.vercel.app/allMovie`);
					const data = await res.json();

					const singledata = data.find((d) => d._id == params.id);

					return singledata;
				},
			},
		],
	},
]);
