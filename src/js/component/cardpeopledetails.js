import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Cardpeopledetails(props) {
	const { store, actions } = useContext(Context);
	console.log(store);

	return (
		<div className="card mb-3" style={{ width: "1040px" }}>
			<div className="row no-gutters">
				<div className="col-md-4">
					<img
						src="https://assets.tonica.la/__export/1609876034823/sites/debate/img/2021/01/05/star-wars-yoda-r2-d2.jpg_242310155.jpg"
						width="30"
						height="30"
						alt="Yoda and R2-D2"
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

Cardpeopledetails.propTypes = {
	name: PropTypes.string,
	img: PropTypes.string,
	id: PropTypes.number
};
