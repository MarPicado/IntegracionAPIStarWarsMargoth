import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function Personprofile(props) {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
		<div className="card mb-3" style={{ width: "540px" }}>
			<div className="row no-gutters">
				<div className="col-md-4">
					<img
						className="card-img-top"
						src="https://www.telokwento.com/wp-content/uploads/2020/04/starwaars.jpg"
						alt="Star Wars Image"
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title text-xl-left">Name: {props.name}</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel
							beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia
							quibusdam deleniti eos cupiditate dolore doloribus
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

Personprofile.propTypes = {
	name: PropTypes.string,
	img: PropTypes.string
};
