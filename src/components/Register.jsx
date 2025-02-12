import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { Bounce, toast } from "react-toastify";

export default function Register() {
	const { createuser, setUser,  userUpdateProfile } =
		useContext(AuthContext);
	const [registerError, setRegisterError] = useState("");
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = new FormData(e.target);
		const name = form.get("name");
		const photo = form.get("PhotoUrl");

		const password = form.get("password");
		const email = form.get("email");
		const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
		setRegisterError("");
		if (!regex.test(password)) {
			toast.warn(
				"Must have an Uppercase letter & Lowercase & Length  least 6 character  ",
				{
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				}
			);
			return;
		}
		createuser(email, password)
			.then((result) => {
				setUser(result.user);
				userUpdateProfile({ photoURL: photo, displayName: name }).then(() => {
					setUser((prv) => ({ ...prv, photoURL: photo, displayName: name }));
					navigate("/");
				});
			})
			.catch((err) => {
				toast.warn("Already Have An Account  ", {
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				});
				return;
			});

		e.target.reset();
	};
	return (
		<div className="hero   min-h-screen">
			<div className="hero-content w-full lg:w-1/3 flex-col lg:flex-row-reverse">
				<div className="card bg-base-100 w-full shadow-2xl animate__animated animate__backInLeft">
					<form className="card-body" onSubmit={handleSubmit}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="name"
								name="name"
								placeholder="Name"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">PhotoUrl</span>
							</label>
							<input
								type="text"
								name="PhotoUrl"
								placeholder="PhotoUrl"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Register</button>
						</div>
					</form>
					<h3 className="text-center mb-4">
						You Have Already Account?{" "}
						<NavLink to={"/login"} className={"text-[#4A00FF]"}>
							Login
						</NavLink>
					</h3>
				</div>
			</div>
		</div>
	);
}
