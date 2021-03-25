import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Cardplanetdetails } from "../component/cardplanetdetails";
import "../../styles/people.scss";

export const Planetdetails = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{store.planets !== undefined
				? store.planets.map((item, index) => {
						if (id == index) {
							return (
								<div key={index}>
									<Cardplanetdetails
										image={item.img}
										name={item.name}
										climate={item.climate}
										population={item.population}
										orbital_period={item.orbital_period}
										rotation_period={item.rotation_period}
										diameter={item.diameter}
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
