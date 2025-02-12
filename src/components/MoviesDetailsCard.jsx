import React, { useContext } from "react";
import { MdDelete, MdFavorite, MdOutlineSecurityUpdate } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";
import { DarkContext } from "../context/DarkProvider";
import { Link, Navigate } from "react-router-dom";

export default function MoviesDetailsCard({ curData, setData }) {
	const { user } = useContext(AuthContext);

	const handleFav = () => {
		fetch(`https://server-ten-inky.vercel.app/favorite`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ ...curData, curEmail: user.email }),
		})
			.then((res) => res.json())
			.then((data) => {
				Swal.fire({
					title: "Add Fovorite!",
					text: "Movies Add Succesul",
					icon: "success",
					confirmButtonText: "Close",
				});
			});
	};

	const {
		_id,
		moviePoster,
		movieTitle,
		genre,
		duration,
		releaseYear,
		summary,
		rating,
	} = curData || null;
	const handleDelete = (id) => {
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
				fetch(`https://server-ten-inky.vercel.app/allMovie/${id}`, {
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
							setData(0);
						}
					});
			}
		});
	};
	const date = new Date(duration * 60000);
	const timeString = date.toISOString().substr(11, 5);
	return (
		<div className="grid grid-cols-1 mx-auto max-w-96 my-10">
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
					<div className="flex justify-center gap-3 my-3">
						<button className="btn btn-sm" onClick={() => handleDelete(_id)}>
							<MdDelete className="text-red-600  text-2xl" />
						</button>
						<button className="btn btn-sm">
							<Link to={`/update/${_id}`}>
								<MdOutlineSecurityUpdate className="text-cyan-500  text-2xl" />
							</Link>
						</button>
						<button className="btn btn-sm" onClick={() => handleFav()}>
							<MdFavorite className="text-yellow-400  text-2xl" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
