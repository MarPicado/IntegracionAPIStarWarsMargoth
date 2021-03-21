import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { People } from "../component/people";
import { Planets } from "../component/planets";

export const Home = () => (
	<div className="text-center">
		<People />
		<Planets />
	</div>
);
