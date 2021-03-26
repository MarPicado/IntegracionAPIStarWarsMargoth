import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Cardplanets(props) {
	const { store, actions } = useContext(Context);
	console.log(store);

	const handleOnClick = e => {
		let fav = props.name;
		actions.addFavorites(fav);
	};

	return (
		<div className="col">
			<div className="card" style={{ width: "18rem" }}>
				<img
					className="card-img-top"
					src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/07/star-wars-death-star-earth.jpg"
					alt="Star Wars Planets Image"
				/>
				<div className="card-body">
					<h5 className="card-title text-xl-left">Name: {props.name}</h5>
					<p className="card-text text-lg-left">Population: {props.population}</p>
					<p className="card-text text-lg-left">Terrain: {props.terrain}</p>
					<Link to={"/planets/" + props.id}>
						<button href="#" className="btn btn-light float-left">
							Learn More!
						</button>
					</Link>
					<a href="#" className="btn btn-warning float-right" onClick={e => handleOnClick(e)}>
						<i className="fas fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
}

Cardplanets.propTypes = {
	name: PropTypes.string,
	img: PropTypes.string,
	population: PropTypes.number,
	terrain: PropTypes.string,
	id: PropTypes.number
};
