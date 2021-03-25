import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Cardpeopledetails } from "../component/cardpeopledetails";
import "../../styles/people.scss";

export const Peopledetails = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{store.people !== undefined
				? store.people.map((item, index) => {
						if (id == index) {
							return (
								<div key={index}>
									<Cardpeopledetails
										image={item.img}
										name={item.name}
										birth_year={item.birth_year}
										gender={item.gender}
										height={item.height}
										skin_color={item.skin_color}
										eye_color={item.eye_color}
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
