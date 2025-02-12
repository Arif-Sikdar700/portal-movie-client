import React, { useContext } from "react";
import Banner from "../components/Banner";
import { NavLink, useLoaderData } from "react-router-dom";
import FeautersMovies from "../components/FeautersMovies";
import { DarkContext } from "../context/DarkProvider";
import UpcomingMovie from "../components/UpcomingMovie";
import About from "../components/About";


export default function Home() {
	const allmovies = useLoaderData();
	const {dark, isDark} = useContext(DarkContext)
	return (
		<div className={`${dark&&"dark"}`}>
			<Banner />
			<FeautersMovies allmovies={allmovies} />
			<div className="flex justify-center mb-5"> 
				<button className="btn btn-info">
					<NavLink to={"/allmovies"}>See All Movie</NavLink>
				</button>
			</div>

        <div className="my-5">
          <UpcomingMovie/>
        </div>
		<About/>
		</div>
	);
}
