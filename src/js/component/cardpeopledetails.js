import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export function Cardpeopledetails(props) {
	const { store, actions } = useContext(Context);
	console.log(store);

	return (
		<div>
			<div className="card text-center border-0 mt-5" style={{ width: "1040px" }}>
				<div className="row no-gutters">
					<div className="col-md-6">
						<img
							src="https://assets.tonica.la/__export/1609876034823/sites/debate/img/2021/01/05/star-wars-yoda-r2-d2.jpg_242310155.jpg"
							width="500"
							height="300"
							alt="Yoda and R2-D2"
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
						<th scope="col">Birth Year</th>
						<th scope="col">Gender</th>
						<th scope="col">Height</th>
						<th scope="col">Skin Color</th>
						<th scope="col">Eye Color</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.name}</td>
						<td>{props.birth_year}</td>
						<td>{props.gender}</td>
						<td>{props.height}</td>
						<td>{props.skin_color}</td>
						<td>{props.eye_color}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

Cardpeopledetails.propTypes = {
	name: PropTypes.string,
	birth_year: PropTypes.number,
	gender: PropTypes.string,
	height: PropTypes.number,
	skin_color: PropTypes.string,
	eye_color: PropTypes.string,
	img: PropTypes.string,
	id: PropTypes.number
};
