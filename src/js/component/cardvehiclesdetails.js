import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export function CardVehiclesdetails(props) {
	const { store, actions } = useContext(Context);
	console.log(store);

	return (
		<div>
			<div className="card text-center border-0 mt-5" style={{ width: "1040px" }}>
				<div className="row no-gutters">
					<div className="col-md-6">
						<img
							src="https://fastly.syfy.com/sites/syfy/files/styles/1400xauto/public/wire/legacy/databank_alderaancruiser_01_169_c60ce268.jpeg"
							width="500"
							height="300"
							alt="Star Wars Vehicle Image"
						/>
					</div>
					<div className="col-md-6">
						<div className="card-body">
							<h5 className="card-title">{props.name}</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
						</div>
					</div>
				</div>
			</div>
			<table className="table mt-3">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Model</th>
						<th scope="col">Length</th>
						<th scope="col">Crew</th>
						<th scope="col">Passengers</th>
						<th scope="col">Consumables</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.name}</td>
						<td>{props.model}</td>
						<td>{props.length}</td>
						<td>{props.crew}</td>
						<td>{props.passengers}</td>
						<td>{props.consumables}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

CardVehiclesdetails.propTypes = {
	name: PropTypes.string,
	model: PropTypes.string,
	length: PropTypes.number,
	crew: PropTypes.number,
	passengers: PropTypes.number,
	consumables: PropTypes.string,
	img: PropTypes.string,
	id: PropTypes.number
};
