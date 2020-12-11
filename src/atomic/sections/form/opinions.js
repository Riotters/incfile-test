import React from "react";
import styled from "styled-components";
import Customers from "../manage-your-company/home-page-v3/customers";
import Oval from "../../atoms/icons/oval";
import TopLeftOvalSVG from "../../../images/ovals/home-page-v3-customers-top-left.inline.svg";
import TextCenterLayout from "../../partials/heading-center";
import PPCQuotesSection from "../../partials/ppc/quotes-section";

const Opinions = styled.section`
	position: relative;
	padding-top: 100px;
`;

const OpinionsSection = ({ className, content, quotes, customers, stateName }) => (
	<Opinions>
		<Oval className="oval" height="570" width="570" top="0" left="0">
			<TopLeftOvalSVG />
		</Oval>
		<TextCenterLayout
			headline={content.header}
			headlineWidth="770"
			text={content.text}
			textWidth="770"
		/>
        
        {customers && 
            <Customers content={{customers: customers}} padding="48px 0" />
        }
        
        {quotes &&
            <PPCQuotesSection quotes={quotes} stateName={stateName} />
        }
	</Opinions>
);

export default OpinionsSection;
