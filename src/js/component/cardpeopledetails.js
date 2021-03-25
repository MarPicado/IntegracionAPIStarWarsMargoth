import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

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
			<ul className="list-group list-group-horizontal border-top">
				<li className="list-group-item">
					Name
					<br>{props.name}</br>
				</li>
				<li className="list-group-item">Birth Year</li>
				<li className="list-group-item">Gender</li>
				<li className="list-group-item">Height</li>
				<li className="list-group-item">Skin Color</li>
				<li className="list-group-item">Eye Color</li>
			</ul>
			{/* <ul className="list-group list-group-horizontal-sm border-0">
				<li className="list-group-item">{props.name}</li>
				<li className="list-group-item">{props.gender}</li>
				<li className="list-group-item">{props.height}</li>
				<li className="list-group-item">{props.skin_color}</li>
				<li className="list-group-item">{props.eye_color}</li>
			</ul> */}
		</div>
	);
}

Cardpeopledetails.propTypes = {
	name: PropTypes.string,
	birth_year: PropTypes.number,
	gender: PropTypes.string,
	height: PropTypes.number,
	skin_color: PropTypes.number,
	eye_color: PropTypes.string,
	img: PropTypes.string,
	id: PropTypes.number
};
