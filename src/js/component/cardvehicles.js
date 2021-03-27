import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/people.scss";

export function Cardvehicles(props) {
	const { store, actions } = useContext(Context);
	console.log(store);

	const handleOnClick = e => {
		let fav = props.name;
		actions.addFavorites(fav);
	};

	return (
		<div className="col">
			<div className="card d-flex" style={{ width: "18rem" }}>
				<img
					className="card-img-top"
					src="https://i.pinimg.com/originals/5c/74/bd/5c74bdb7e78643598a20c01da29ab667.jpg"
					alt="Star Wars Vehicles Image"
				/>
				<div className="card-body">
					<h5 className="card-title text-xl-left">Name: {props.name}</h5>
					<p className="card-text text-lg-left">Model: {props.model}</p>
					<p className="card-text text-lg-left">Cargo Capacity: {props.cargo_capacity}</p>
					<p className="card-text text-lg-left">Vehicle Class: {props.vehicle_class}</p>
					<Link to={"/vehicles/" + props.id}>
						<button className="btn btn-light float-left">Learn More!</button>
					</Link>
					<a
						href="#"
						className="btn btn-warning float-right"
						onClick={() => actions.addFavorites(props.name)}>
						<i className="fas fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
}

Cardvehicles.propTypes = {
	name: PropTypes.string,
	model: PropTypes.string,
	cargo_capacity: PropTypes.number,
	vehicle_class: PropTypes.string,
	img: PropTypes.string,
	id: PropTypes.number
};
