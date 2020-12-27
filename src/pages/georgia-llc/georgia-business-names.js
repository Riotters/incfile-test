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
import BusinessNames from "../../atomic/states-llc/georgia/business-names";

// Content
import { businessNamesContent } from "../../static/states-llc/georgia/business-names";
import { tabPages } from "../../static/states-llc/georgia/general";
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

const GeorgiaBusinessNames = () => (
	<Layout>
		<SEO
			title="Georgia Business Entity Search | Naming Your GA LLC"
			description="Learn what you need to know about naming an LLC in Georgia with Incfile's helpful resources. Pick your perfect business name today!"
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

		<Rocket url="?entityType=LLC&entityState=GA" />

		<Helmet>
			<script type="application/ld+json">
				{`{
                    "@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How Do I Search for My Georgia LLC Business Name?","acceptedAnswer":{"@type":"Answer","text":"<p>You can use Incfile’s <a href='https://www.incfile.com/business-name-search/'>Business Name Search tool</a> or search the Georgia business registry yourself on the Secretary of State website. Just go to the Business Name Search tool and enter your proposed business name.</p>"}},{"@type":"Question","name":"Are There Any Rules on Naming My Georgia  LLC?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Georgia). We’ve detailed these rules above.</p>"}},{"@type":"Question","name":"Can I Do Business Under a Different Name Than My LLC Name in Georgia ?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.</p>"}},{"@type":"Question","name":"Can I Reserve a Name for My Georgia  LLC?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes. The Georgia Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.</p>"}}]
                }`}
			</script>
		</Helmet>
	</Layout>
);

export default GeorgiaBusinessNames;
