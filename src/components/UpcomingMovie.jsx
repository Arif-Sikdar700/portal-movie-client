import React from "react";
import { MovieCard } from "./MovieCard";

export default function UpcomingMovie() {
	const upcomingMovies = [
		{
			title: "Upcoming Movie 1",
			imageUrl: "https://i.ibb.co.com/nRZmn7c/download.jpg",
			releaseDate: "2024-12-15",
		},
		{
			title: "Upcoming Movie 2",
			imageUrl: "https://i.ibb.co.com/wYQ9Cph/images-1.jpg",
			releaseDate: "2024-12-22",
		},
		{
			title: "Upcoming Movie 3",
			imageUrl: "https://i.ibb.co.com/9qNyy43/images.jpg",
			releaseDate: "2024-12-28",
		},
	];
    


	return (
		<section >
			<h2 className="text-3xl font-semibold mb-4">Upcoming Releases</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{upcomingMovies.map((movie, index) =>{ 
					
						return <MovieCard key={index} movie={movie} />
					
				})}
			</div>
		</section>
	);
}
