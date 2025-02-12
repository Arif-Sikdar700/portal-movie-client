import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";

export default function Update() {
	const data = useLoaderData();
	const {
		_id,
		moviePoster,
		movieTitle,
		genre,
		duration,
		releaseYear,
		summary,
		rating,
	} = data;

	const [ratings, setRatings] = useState(0);
	const handleRating = (rate) => {
		setRatings(rate);
	};
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		const UpdateData = {
			...data,
			ratings,
		};

		fetch(`https://server-ten-inky.vercel.app/allMovie/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(UpdateData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire({
						title: "Update Success!",
						text: "Movies Add Succesul",
						icon: "success",
						confirmButtonText: "Close",
					});
				}
			});
	};
	return (
		<div className="w-full my-10 min-h-screen bg-red-600 flex justify-center items-center">
			<form
				action=""
				onSubmit={handleSubmit(onSubmit)}
				className="my-20 grid grid-cols-1  lg:grid-cols-2 gap-6 "
			>
				<div className="flex flex-col gap-2 ">
					<label htmlFor="">Movie Poster:</label>
					<input
						defaultValue={moviePoster}
						{...register("moviePoster")}
						type="text"
						className="px-2 py-2 rounded"
						placeholder="Movie Poster"
					/>
				</div>
				<div className="flex flex-col gap-2 ">
					<label htmlFor="">Movie Title:</label>
					<input
						defaultValue={movieTitle}
						{...register("movieTitle")}
						type="text"
						className="px-2 py-2 rounded"
						placeholder="Movie Title"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="">genre: </label>
					<select
						{...register("genre")}
						className="py-2 rounded"
						defaultValue={genre}
					>
						<option disabled>Pick your favorite Genre</option>
						<option>comedy</option>
						<option>horror</option>
						<option>drama</option>
						<option>action</option>
						<option>love</option>
					</select>
				</div>
				<div className="flex  flex-col gap-2 ">
					<label htmlFor="">Duration:</label>
					<input
						{...register("duration")}
						type="number"
						className="px-2 py-2 rounded"
						defaultValue={duration}
						placeholder="Duration"
					/>
				</div>
				<div className="flex flex-col gap-2 ">
					<label htmlFor="">Release:</label>
					<input
						{...register("releaseYear")}
						placeholder="Release year"
						type="number"
						defaultValue={releaseYear}
						className="px-2 py-2 rounded"
					/>
				</div>
				<textarea
					defaultValue={summary}
					className="textarea"
					placeholder="sort summary movies related"
					{...register("summary")}
				></textarea>
				<Rating
					onClick={handleRating}
					initialValue={rating}
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
				<input type="submit" value="Update" className="btn" />
			</form>
		</div>
	);
}
