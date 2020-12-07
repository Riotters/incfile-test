import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Map from "../atomic/sections/states-llc/main/map";
import States from "../atomic/sections/states-llc/main/states";
import Articles from "../atomic/sections/articles";
//Texts
import { map, states } from "../static/llc-state-information";

const StateInformation = () => (
	<Layout>
		<SEO
			title="LLC State Information Map - State by State | Incfile"
			description=""
		/>
		<Map content={map} />
		<States content={states} />
		<Articles />
	</Layout>
);

export default StateInformation;
