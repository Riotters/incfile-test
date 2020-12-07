import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";

// Components
import LinearBgHeader from "../../atomic/states-llc/linear-bg-header";
import ContentHeader from "../../atomic/states-llc/taxes-header";
import WrapperContent from "../../atomic/states-llc/wrapper-content";
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import Rocket from "../../atomic/sections/rocket";
import BusinessNames from "../../atomic/states-llc/florida/business-names";

// Content
import { businessNamesContent } from "../../static/states-llc/florida/business-names";
import { tabPages } from "../../static/states-llc/florida/general";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 769px) {
		flex-direction: ${(props) => (props.layout !== "grid" ? "row" : "column")};
	}

	.ReactCollapse--collapse {
		width: 100%;
		transition: height 500ms;
		margin-left: auto;

		@media (min-width: 769px) {
			max-width: ${(props) => (props.layout !== "grid" ? "55%" : "")};
		}

		@media (min-width: 1200px) {
			max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
		}
	}
`;

const FloridaBusinessNames = () => (
	<Layout>
		<SEO
			title="Florida Business Search | How to Name Your FL LLC"
			description="Learn what you need to know about naming an LLC in Florida with Incfile's helpful resources. Pick your perfect business name today!"
		/>

		<LinearBgHeader position="to top" imageMapName="tx-map-2x">
			<ContentHeader content={businessNamesContent.header} />
		</LinearBgHeader>

		<WrapperContent>
			<Wrapper>
				<LeftTabPages content={tabPages} />
				<MainPageContent>
					<BusinessNames content={businessNamesContent.content} />
				</MainPageContent>
			</Wrapper>
		</WrapperContent>

		<Rocket url="?entityType=LLC&entityState=FL" />
		<Helmet>
			<script type="application/ld+json">
				{`{
                      "@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How Do I Search for My Florida LLC Business Name?","acceptedAnswer":{"@type":"Answer","text":"<p>Just go to the <a href='https://www.incfile.com/business-name-search/'>business name search tool</a> and enter your proposed business name. You can search the register of the Florida  Secretary of State, which will tell you if there are any Florida  corporations or LLCs with that name.</p>"}},{"@type":"Question","name":"Are There Any Rules on Naming My Florida  LLC?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Florida ). We’ve detailed these rules above.</p>"}},{"@type":"Question","name":"Can I Do Business Under a Different Name Than My LLC Name in Florida ?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.</p>"}},{"@type":"Question","name":"Can I Reserve a Name for My Florida  LLC?","acceptedAnswer":{"@type":"Answer","text":"<p>No. The Florida Department of State does not have any provisions to allow you to reserve your business name.</p>"}}]
                  }`}
			</script>
		</Helmet>
	</Layout>
);

export default FloridaBusinessNames;
