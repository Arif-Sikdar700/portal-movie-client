import React from "react";

export default function Banner() {
	return (
		<div className="carousel mt-5 w-full">
			<div id="slide1" className="carousel-item relative w-full">
				<img
					src="https://i.ibb.co.com/tsnggnZ/wallpapersden-com-arcane-season-2-wxl.jpg"
					className="w-full object-cover h-96"
				/>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide4" className="btn btn-circle">
						❮
					</a>
					<a href="#slide2" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<img
					src="https://i.ibb.co.com/jvr8jzS/wallpapersden-com-deadpool-and-wolverine-digital-poster-wxl.jpg
"
					className="w-full object-cover h-96"
				/>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide1" className="btn btn-circle">
						❮
					</a>
					<a href="#slide3" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<img
					src="https://i.ibb.co.com/PNvscnK/wallpapersden-com-cool-venom-horse-riding-3840x2160.jpg"
					className="w-full object-cover h-96"
				/>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide2" className="btn btn-circle">
						❮
					</a>
					<a href="#slide4" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full">
				<img
					src="https://i.ibb.co.com/3fN2G5s/wallpapersden-com-venom-3-symbiote-wxl.jpg"
					className="w-full object-cover h-96"
				/>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide3" className="btn btn-circle">
						❮
					</a>
					<a href="#slide1" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
		</div>
	);
}

