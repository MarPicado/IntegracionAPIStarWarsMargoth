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
									<Cardpeopledetails image={item.img} name={item.name} />
								</div>
							);
						}
				  })
				: "loading..."}
			<Link to="/">Go Back</Link>
		</div>
	);
};

// {
// 	store.people !== undefined
// 		? store.people.map((item, index) => {
// 				return (
// 					<div key={index}>
// 						<Cardpeople
// 							image={item.img}
// 							name={item.name}
// 							gender={item.gender}
// 							hair_color={item.hair_color}
// 							eye_color={item.eye_color}
// 							id={index}
// 						/>
// 					</div>
// 				);
// 		  })
// 		: "loading...";
// }
