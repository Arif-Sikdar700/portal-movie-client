import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { DarkContext } from "../context/DarkProvider";

export default function Navbar() {
	const { user, logout } = useContext(AuthContext);
	const { dark, isDark } = useContext(DarkContext);
	const handleDark = () => {
		isDark(!dark);
	};

	const links = (
		<div className="lg:flex space-y-3 md:space-y-0 md:gap-4">
			<li>
				<NavLink to={"/"}>Home</NavLink>
			</li>
			<li>
				<NavLink to={"/allmovies"}>All Movies</NavLink>
			</li>
			{user && (
				<>
					<li>
						<NavLink to={"/addmovie"}>Add Movie</NavLink>
					</li>
					<li>
						<NavLink to={"/myfavorites"}>My Favorites</NavLink>
					</li>
				</>
			)}
		</div>
	);
	return (
		<div
			className={`navbar    ${
				dark ? "bg-[#02040F] text-white" : "bg-white shadow-lg text-[#02040F]"
			}`}
		>
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						{links}
					</ul>
				</div>
				<a className="btn btn-ghost text-xl">
					Protal<span className="text-red-800 font-black text-2xl">Movies</span>
				</a>
				<button onClick={handleDark} className="ml-2 btn btn-sm">
					{dark ? "Dark" : "Light"}
				</button>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{links}</ul>
			</div>
			{user ? (
				<div className="flex items-center gap-4">
					<img
						src={user?.photoURL}
						className="w-10 h-10 object-cover rounded-full"
						title={user?.displayName}
						alt=""
					/>
					<NavLink to="/login" className="btn bg-[#4A00FF] text-white">
						<button onClick={() => logout()}>LogOut</button>
					</NavLink>
				</div>
			) : (
				<NavLink to="/login" className="btn bg-[#4A00FF] text-white">
					Login
				</NavLink>
			)}
		</div>
	);
}
