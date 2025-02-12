import React, { useContext, useRef } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.init";

export default function Login() {
	const { login, setUser, googleLogin } = useContext(AuthContext);
	const navigate = useNavigate();
	const emailRef = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		login(email, password)
			.then((result) => {
				
				setUser(result.user);
				navigate("/");
			})
			.catch((error) => {
				toast.error(error.toString(), {
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
	const handleGoogleLogin = () => {
		googleLogin()
			.then((result) => {
				setUser(result.user)
				navigate("/");
			})
			.catch((err) => {
				toast.warn('err.message', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
					});
			});
	};
	const handleforget = () => {
		const email = emailRef.current.value;
	
		if (!email) {
			alert("Please valid Email")
		}else{
			sendPasswordResetEmail(auth, email)
			.then(()=>{
				alert("reset email sent, please check Your Email")
			})
		}
	};
	return (
		<div className="hero   min-h-screen">
			<div className="hero-content w-full lg:w-1/3 flex-col lg:flex-row-reverse">
				<div className="card bg-base-100 w-full shadow-2xl">
					<form className="card-body" onSubmit={handleSubmit}>
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
								ref={emailRef}
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
							<label onClick={handleforget} className="label">
								<Link to="#" className="label-text-alt link link-hover">
									Forgot password?
								</Link>
							</label>
						</div>
						<div className="form-control mt-6 space-y-4">
							<button className="btn btn-primary">Login</button>
							<button
								type="button"
								onClick={handleGoogleLogin}
								className="btn btn-primary"
							>
								Google Login
							</button>
						</div>
					</form>
					<h3 className="text-center mb-4">
						New User?{" "}
						<NavLink to={"/register"} className={"text-[#4A00FF]"}>
							Register
						</NavLink>
					</h3>
				</div>
			</div>
		</div>
	);
}
