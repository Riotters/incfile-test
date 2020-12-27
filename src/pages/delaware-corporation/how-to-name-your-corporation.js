import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import { HeadingP } from "../../atomic/atoms/typography/heading-to-p";
import { color } from "../../atomic/atoms/styles/colors";
//Sections
import Top from "../../atomic/partials/top";
import Rocket from "../../atomic/sections/review-entity-types/c-corporation/rocket";
import Requirements from "../../atomic/sections/learning-center-entity/state-information-california/requirements";
import LearnMore from "../../atomic/sections/learning-center-entity/state-information-california/learn-more";
import QuickLinks from "../../atomic/sections/learning-center-entity/state-information-california/quick-links";
import Variants from "../../atomic/sections/learning-center-entity/state-information-california/variants";
import Subscription from "../../atomic/sections/learning-center-entity/state-information-california/subscription";
import Articles from "../../atomic/sections/articles";
//Texts
import {
	top,
	tabPages,
	naming,
	launchBusiness,
	subscription,
} from "../../static/learning-center-entity/state-information-delaware";
import LeftTabPages from "../../atomic/sections/choose-your-business/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import ContentMap from "../../atomic/partials/content-map";
import CorporationLayout from "../../atomic/partials/corporation-layout";
import { getFullPricesAndFilings } from "../../api/Api";

const DelawareCorporation = () => {
	const [dataApi, setDataApi] = React.useState({});
	React.useEffect(() => {
		getFullPricesAndFilings("Delaware", "Corporation").then((data) => {
			setDataApi(data);
		});
	}, []);
	return (
		<Layout>
			<SEO
				title="Naming a Delaware Corporation | DE Business Name Rules"
				description="Choosing the right name for your business helps you get off on the right foot. Learn about the rules for naming a business in Delaware."
			/>
			<Top
				imageName="mr-bulb-corporation-california-8302"
				imageAlt="Mrs Bulb and with checklist"
				ovalColor="purple-2"
				textWidth="530"
			>
				<h1>{top.header}</h1>
				<HeadingP size={2} big color={color.grey2}>
					{top.text}
				</HeadingP>
				<Buttonsbox>
					<Button externalLink content={top.buttons[0]} theme="primary56" arrow />
				</Buttonsbox>
			</Top>
			<CorporationLayout>
				<LeftTabPages content={tabPages} nonDIY />
				<MainPageContent>
					<ContentMap content={naming} />
				</MainPageContent>
			</CorporationLayout>
			<Rocket content={launchBusiness} />
			<Requirements data={dataApi} />
			<LearnMore data={dataApi} />
			<QuickLinks />
			<Variants data={dataApi} entityType="CCorporation" />
			<Subscription content={subscription} />
			<Articles />
		</Layout>
	);
};

export default DelawareCorporation;
