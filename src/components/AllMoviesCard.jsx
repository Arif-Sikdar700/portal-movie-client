import React from "react";
import { Link } from "react-router-dom";

export default function AllMoviesCard({ AllMovieData }) {
	const {
		_id,
		moviePoster,
		movieTitle,
		genre,
		duration,
		releaseYear,
		summary,
		rating,
	} = AllMovieData;
	const date = new Date(duration * 60000);
	const timeString = date.toISOString().substr(11, 5);
	return (
		<div>
			<div className="card bg-[#02040F] text-white shadow-xl">
				<figure className="w-full h-60 hidden">
					<img
						src={moviePoster}
						alt={movieTitle}
						className="w-full max-h-full aspect-[5/3] object-cover object-top"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						<b>Title:</b>
						<small> {movieTitle}</small>
					</h2>
					<h2 className="card-title">
						<b>Genre:</b>
						<small> {genre}</small>
					</h2>
					<h2 className="card-title flex items-center">
						<b>Rating:</b>
						<div className="rating">
							<input
								type="radio"
								name="rating-2"
								className="mask mask-star-2 bg-orange-400"
							/>
						</div>
						<p>{rating} / 10</p>
					</h2>
					<p>
						<b>Summary:</b>
						<small> {summary}</small>
					</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline p-4">
							<b>Duration: </b> <small className="pl-3"> {timeString}</small>
						</div>
						<div className="badge badge-outline p-4">
							<b>ReleaseYear: </b>{" "}
							<small className="pl-3"> {releaseYear}</small>
						</div>
					</div>
					<button className="btn btn-ghost mt-2">
						<Link to={`/movieDetails/${_id}`}>See Details</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
