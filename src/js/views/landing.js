import React from "react";
import "../../styles/home.scss";
import { People } from "../component/people";
import { Planets } from "../component/planets";

export const Mainpage = () => (
	<div className="text-center landingbg">
		<People />
		<Planets />
	</div>
);
