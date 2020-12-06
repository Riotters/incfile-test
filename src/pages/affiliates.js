import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
//Sections
import Top from "../atomic/partials/top";
import ExternalLink from "../atomic/molecules/buttons/external-link";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";

import { affiliates, payouts, top } from "../static/other/affiliates";
import HowItWorksSection from "../atomic/sections/other/affiliates/how-it-works";
import EnjoyHighestPayouts from "../atomic/sections/other/affiliates/enjoy-highest-payouts";

const VirtualMailBoxes = () => (
	<Layout>
		<SEO
			title="IncFile Affiliate Program"
			description="Sign up form for the Incfile.com affiliate program"
		/>
		<Top
			imageName="affilitates-top-8164"
			imageAlt="Affiliates"
			ovalColor="red-2"
			headlineWidth="500"
			textWidth="800"
		>
			<h1>{top.header}</h1>
			<p>{top.text}</p>
			<Buttonsbox>
				<ExternalLink content={top.button[0]} theme="primary56" arrow />
			</Buttonsbox>
		</Top>
		<HowItWorksSection content={affiliates} />
		<EnjoyHighestPayouts content={payouts} />
	</Layout>
);

export default VirtualMailBoxes;
