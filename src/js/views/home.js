import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center homebg">
		<h1>Welcome to the Star Wars Databank</h1>
		<p>
			<img src="https://cdn.pixabay.com/photo/2017/11/01/14/24/star-wars-2908139_960_720.jpg" />
		</p>
		<Link to="/register" className="btn btn-warning">
			Register!
		</Link>
		<Link to="/login" className="btn btn-dark">
			Log In
		</Link>
	</div>
);
