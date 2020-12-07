import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

// Components
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import LLCLayout from "../../atomic/partials/states-llc/arizona";
import ContentMap from "../../atomic/partials/content-map";

// Content
import {
	top,
	namingYourBusiness,
} from "../../static/states-llc/louisiana/home";
import { tabPages } from "../../static/states-llc/louisiana/general";
import { getFullPricesAndFilings } from "../../api/Api";

const BusinessNamesPage = () => {
	const [dataApi, setDataApi] = React.useState({});

	React.useEffect(() => {
		getFullPricesAndFilings("Louisiana").then((data) => {
			setDataApi(data);
		});
	}, []);

	return (
		<Layout>
			<SEO
				title="Louisiana Business Search | Register a Business Name in LA"
				description="Learn what you need to know about naming an LLC in Louisiana with Incfile's helpful resources. Pick your perfect business name today!"
			/>
			<LLCLayout data={dataApi} top={top}>
				<LeftTabPages content={tabPages} />
				<MainPageContent>
					<ContentMap content={namingYourBusiness} />
				</MainPageContent>
			</LLCLayout>
		</Layout>
	);
};

export default BusinessNamesPage;
