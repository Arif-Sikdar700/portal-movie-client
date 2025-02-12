import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

export default function FavouriteCard({ data, setMyFav, myFav }) {
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
	const handleFav = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://server-ten-inky.vercel.app/favorite/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							Swal.fire({
								title: "Deleted!",
								text: "Your file has been deleted.",
								icon: "success",
							});
							const filter = myFav.filter((curData) => curData._id != _id);
							setMyFav(filter);
						}
					});
			}
		});
	};
	const date = new Date(duration * 60000);
	const timeString = date.toISOString().substr(11, 5);
	return (
		<div className={`card   shadow-xl  `}>
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
						<b>ReleaseYear: </b> <small className="pl-3"> {releaseYear}</small>
					</div>
				</div>
				<button
					className="btn btn-warning mt-2 "
					onClick={() => handleFav(_id)}
				>
					Delete Favorites
				</button>
			</div>
		</div>
	);
}
