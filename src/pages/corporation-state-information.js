import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Map from "../atomic/sections/states-corporation/main/map";
import States from "../atomic/sections/states-corporation/main/states";
import Articles from "../atomic/sections/articles";
//Texts
import { map, states } from "../static/corporation-state-information";

const StateInformation = () => (
	<Layout>
		<SEO
			title="Find Corporate Information for Your State | Incfile"
			description=""
		/>
		<Map content={map} />
		<States content={states} />
		<Articles />
	</Layout>
);

export default StateInformation;
