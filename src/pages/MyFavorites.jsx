import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { DarkContext } from "../context/DarkProvider";
import FavouriteCard from "../components/FavouriteCard";

export default function MyFavorites() {
	const { user } = useContext(AuthContext);

	const [myFav, setMyFav] = useState([]);

	useEffect(() => {
		fetch(`https://server-ten-inky.vercel.app/favorite/${user?.email}`)
			.then((res) => res.json())
			.then((data) => {
				setMyFav(data);
			});
	}, [user?.email]);

	return (
		<div>
			<h3 className="text-2xl text-red-600 mt-10 font-bold bg-slate-950 inline-block p-4">
				MyFavorie Item
			</h3>
			<div className="flex justify-start gap-5 my-10">
				{myFav.length == 0 ? (
					<div className="my-10 w-full text-red-600 font-bold text-3xl flex justify-center">
						No Data Abilable
					</div>
				) : (
					myFav?.map((data) => {
						return (
							<FavouriteCard
								key={data._id}
								myFav={myFav}
								setMyFav={setMyFav}
								data={data}
							/>
						);
					})
				)}
			</div>
		</div>
	);
}
