import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/people.scss";

export function Cardpeople(props) {
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
					src="https://www.telokwento.com/wp-content/uploads/2020/04/starwaars.jpg"
					alt="Star Wars Image"
				/>
				<div className="card-body">
					<h5 className="card-title text-xl-left">Name: {props.name}</h5>
					<p className="card-text text-lg-left">Gender: {props.gender}</p>
					<p className="card-text text-lg-left">Hair Color: {props.hair_color}</p>
					<p className="card-text text-lg-left">Eyes Color: {props.eye_color}</p>
					<Link to={"/people/" + props.id}>
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

Cardpeople.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	img: PropTypes.string,
	id: PropTypes.number
};
