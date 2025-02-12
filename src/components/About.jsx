import React from "react";
import aboutImage from "../assets/about.jpg"
export default function About() {
	return (
		<div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24 my-10">
			<div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
				{/* Image Section */}
				<div className="flex-1">
					<img
						src={aboutImage}
						alt="Mountain Adventure"
						className="rounded-lg h-96 shadow-lg"
					/>
				</div>

				{/* Text Content */}
				<div className="flex-1 text-center md:text-left">
					<h2 className="text-4xl font-bold text-gray-800 mb-4">
						Latest Movie
					</h2>
					<p className="text-lg text-gray-600 mb-6">
						Discover breathtaking mountain trails, majestic peaks, and serene
						landscapes. Our adventures are crafted to bring you closer to nature
						while ensuring eco-friendly practices every step of the way.
					</p>
					<p className="text-lg text-gray-600 mb-6">
						Whether you're an avid climber or a casual trekker, there's
						something here for everyone. Embark on a journey to explore the
						untouched beauty of the great outdoors.
					</p>
					<button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition-all">
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
}
