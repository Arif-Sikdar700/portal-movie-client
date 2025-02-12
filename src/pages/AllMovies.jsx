import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllMoviesCard from "../components/AllMoviesCard";

export default function AllMovies() {
	const [search, setSearch] = useState("")
	const allMovies = useLoaderData();
	const [moviesData, setmoviesData] = useState(allMovies)
	console.log(search)
	useEffect(()=>{
		fetch(`https://server-ten-inky.vercel.app/addMovies?searchParams=${search}`)
		.then(res=>res.json())
		.then(data=>{
			setmoviesData(data)
		})
	},[search])
	return (
		<div>
			<h3 className="bg-red-600 rounded inline-block p-4 my-8 text-white">
				All Movies
			</h3>
			<div>
				<input
					type="text"
					value={search}
					onChange={(e)=>setSearch(e.target.value)}
					name=""
					id=""
					placeholder="Please Search Movie"
					className="outline-none border-none shadow-lg bg-gray-200 px-2 py-4 w-full max-h-96"
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6 md:my-8">
				{moviesData.map((AllMovieData) => {
					return (
						<AllMoviesCard key={AllMovieData._id} AllMovieData={AllMovieData} />
					);
				})}
			</div>
		</div>
	);
}



