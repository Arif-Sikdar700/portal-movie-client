import React, { useContext } from "react";
import { DarkContext } from "../context/DarkProvider";

export const MovieCard = ({ movie }) => {
    const {dark, isDark} = useContext(DarkContext)
    const {title, imageUrl, releaseDate} = movie
 
	return (
		<div className={`card  shadow-xl ${dark? "bg-[#02040F] text-white": "bg-white shadow-lg text-[#02040F]"}`}>
			<figure>
				<img
					src={imageUrl}
					alt={title}
                    className="w-full h-56 object-cover object-top"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p><b>releaseDate: </b>{releaseDate}</p>
				
			</div>
		</div>
	);
};
