import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "./card";

export const People = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
		<div className="container">
			<h1>Characters</h1>
			{store.people !== undefined
				? store.people.map((item, index) => {
						return (
							<div key={index} className="col">
								<Card name={item.name} gender={item.gender} />
							</div>
						);
				  })
				: "loading..."}
		</div>
	);
};
