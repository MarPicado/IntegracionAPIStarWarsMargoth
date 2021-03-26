import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CardVehiclesdetails } from "../component/cardvehiclesdetails";
import "../../styles/people.scss";

export const Vehiclesdetails = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{store.vehicles !== undefined
				? store.vehicles.map((item, index) => {
						if (id == index) {
							return (
								<div key={index}>
									<CardVehiclesdetails
										image={item.img}
										name={item.name}
										model={item.model}
										length={item.length}
										crew={item.crew}
										passengers={item.passengers}
										consumables={item.consumables}
									/>
								</div>
							);
						}
				  })
				: "loading..."}
			<Link to="/">
				<button type="button" className="btn btn-warning">
					Go Back
				</button>
			</Link>
		</div>
	);
};
