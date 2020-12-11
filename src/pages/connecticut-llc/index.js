import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

// Components
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import LLCLayout from "../../atomic/partials/states-llc/louisiana";
import ContentMap from "../../atomic/partials/content-map";

// Content
import { top, howToGuide } from "../../static/states-llc/connecticut/home";
import { tabPages } from "../../static/states-llc/connecticut/general";

import { getFullPricesAndFilings } from "../../api/Api";

function ConnecticutIndexPage() {
	const [dataApi, setDataApi] = React.useState({});

	React.useEffect(() => {
		getFullPricesAndFilings("Connecticut").then((data) => {
			setDataApi(data);
		});
	}, []);

	return (
		<Layout>
			<SEO
				title="LLCs in CT | Starting a Connecticut LLC"
				description="Ready to file your CT LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more."
			/>
			<LLCLayout data={dataApi} top={top}>
				<LeftTabPages content={tabPages} nonDIY />
				<MainPageContent>
					<ContentMap content={howToGuide} data={dataApi} />
				</MainPageContent>
			</LLCLayout>
		</Layout>
	);
}

export default ConnecticutIndexPage;
