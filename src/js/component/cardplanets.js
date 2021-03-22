import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function Cardplanets(props) {
	const { store, actions } = useContext(Context);
	console.log(store);

	const handleOnClick = e => {
		actions.addFavorites();
	};

	return (
		<div className="col">
			<div className="card" style={{ width: "18rem" }}>
				<img
					className="card-img-top"
					src="https://www.telokwento.com/wp-content/uploads/2020/04/starwaars.jpg"
					alt="Star Wars Image"
				/>
				<div className="card-body">
					<h5 className="card-title text-xl-left">Name: {props.name}</h5>
					<p className="card-text text-lg-left">Population: {props.population}</p>
					<p className="card-text text-lg-left">Terrain: {props.terrain}</p>
					<a href="#" className="btn btn-primary mr-5">
						Learn More!
					</a>
					<a href="#" className="btn btn-warning ml-3" onClick={e => handleOnClick(e)}>
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
	terrain: PropTypes.string
};
