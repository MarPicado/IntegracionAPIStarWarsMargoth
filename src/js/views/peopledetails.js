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
							console.log(store.people);
							return (
								<div key={index}>
									<Cardpeopledetails
										image={item.img}
										name={item.Name}
										birth_year={item.Birth_Year}
										gender={item.Gender}
										height={item.Height}
										skin_color={item.Skin_Color}
										eye_color={item.Eye_Color}
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
