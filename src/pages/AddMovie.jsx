import React, { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { AuthContext } from "../context/AuthProvider";
import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";
export default function AddMovie() {
	const [rating, setRating] = useState(0);
	const { user } = useContext(AuthContext);
	const emailUser = user?.email;
	const handleAddMovie = (e) => {
		e.preventDefault();

		const moviePoster = e.target.moviePoster.value;
		const movieTitle = e.target.movieTitle.value;
		const genre = e.target.genre.value;
		const duration = e.target.duration.value;
		const releaseYear = e.target.releaseYear.value;
		const summary = e.target.summary.value;
		if (rating == 0) {
			toast.warn("please selct rating  ", {
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
		}
		const AddMovieData = {
			moviePoster,
			movieTitle,
			genre,
			duration,
			releaseYear,
			summary,
			rating,
			emailUser,
		};

		fetch("https://server-ten-inky.vercel.app/addMovie", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				
			},
			
			body: JSON.stringify(AddMovieData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "Movies Add Succesul",
						icon: "success",
						confirmButtonText: "Close",
					});
				}
			});
	};
	const handleRating = (rate) => {
		setRating(rate);
	};
	return (
		<form action="" className="my-20" onSubmit={handleAddMovie}>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center md:gap-4 justify-center">
				<div className="form-control">
					<label className="label">
						<span className="label-text">Movie Poster</span>
					</label>
					<input
						type="text"
						name="moviePoster"
						placeholder="Movie Poster Url"
						className="input input-bordered"
						required
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Movie Title</span>
					</label>
					<input
						type="text"
						name="movieTitle"
						placeholder="Movie Title"
						className="input input-bordered"
						required
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Genre</span>
					</label>
					<select
						className="select w-full outline"
						defaultValue={"Pick your favorite Genre"}
						name="genre"
					>
						<option disabled>Pick your favorite Genre</option>
						<option>comedy</option>
						<option>horror</option>
						<option>drama</option>
						<option>action</option>
						<option>love</option>
					</select>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Duration</span>
					</label>
					<input
						type="number"
						name="duration"
						placeholder="duration"
						className="input input-bordered"
						required
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Release Year</span>
					</label>
					<input
						type="number"
						name="releaseYear"
						placeholder="Release Year"
						className="input input-bordered"
						required
					/>
				</div>
				<div className="flex items-center md:mt-6">
					<Rating
						onClick={handleRating}
						iconsCount={10}
						showTooltip
						tooltipArray={[
							"Terrible",
							"Terrible+",
							"Bad",
							"Bad+",
							"Average",
							"Average+",
							"Great",
							"Great+",
							"Awesome",
							"Awesome+",
						]}
					/>
				</div>
				<textarea
					name="summary"
					className="textarea"
					placeholder="sort summary movies related"
					required
				></textarea>
			</div>
			<input
				type="submit"
				value="Add Movie"
				className="btn w-full mt-5 btn-success"
			/>
		</form>
	);
}
