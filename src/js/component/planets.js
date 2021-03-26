import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Cardplanets } from "./cardplanets";
import "../../styles/people.scss";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
		<div className="container-fluid characters mt-5">
			<h1 className="title">Planets</h1>
			<div className="row">
				{store.planets !== undefined
					? store.planets.map((item, index) => {
							return (
								<div key={index}>
									<Cardplanets
										image={item.img}
										name={item.name}
										population={item.population}
										terrain={item.terrain}
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
