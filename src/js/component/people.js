import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Cardpeople } from "./cardpeople";
import "../../styles/people.scss";

export const People = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
		<div className="container-fluid characters mt-5">
			<h1 className="title">Characters</h1>
			<div className="row">
				{store.people !== undefined
					? store.people.map((item, index) => {
							return (
								<div key={index}>
									<Cardpeople
										image={item.img}
										name={item.name}
										gender={item.gender}
										hair_color={item.hair_color}
										eye_color={item.eye_color}
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
