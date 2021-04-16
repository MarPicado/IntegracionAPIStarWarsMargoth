import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Cardvehicles } from "./cardvehicles";
import "../../styles/people.scss";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
		<div className="container-fluid characters mt-5">
			<h1 className="title">Vehicles1</h1>
			<div className="row">
				{store.vehicles !== undefined
					? store.vehicles.map((item, index) => {
							return (
								<div key={index}>
									<Cardvehicles
										image={item.img}
										name={item.name}
										model={item.model}
										cargo_capacity={item.cargo_capacity}
										vehicle_class={item.vehicle_class}
										id={index}
									/>
								</div>
							);
					  })
					: "loading..."}
			</div>
		</div>
	);
};
