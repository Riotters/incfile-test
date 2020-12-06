import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
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
	afterFormation,
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
				title="Managing Your Delaware S Corp or C Corp After Formation"
				description="Learn about the taxes and fees you&#039;ll be required to pay for your Delaware corporation, plus find out the tax differences between DE S Corps and C Corps."
			/>
			<Top
				imageName="mr-bulb-corporation-california-8302"
				imageAlt="Mrs Bulb and with checklist"
				ovalColor="purple-2"
				textWidth="530"
			>
				<h1>{top.header}</h1>
				<p>{top.text}</p>
				<Buttonsbox>
					<Button content={top.buttons[0]} theme="primary56" arrow />
				</Buttonsbox>
			</Top>
			<CorporationLayout>
				<LeftTabPages content={tabPages} nonDIY />
				<MainPageContent>
					<ContentMap content={afterFormation} data={dataApi} />
				</MainPageContent>
			</CorporationLayout>
			<Rocket content={launchBusiness} />
			<Requirements data={dataApi} />
			<LearnMore data={dataApi} />
			<QuickLinks />
			<Variants data={dataApi} />
			<Subscription content={subscription} />
			<Articles />
		</Layout>
	);
};

export default DelawareCorporation;
