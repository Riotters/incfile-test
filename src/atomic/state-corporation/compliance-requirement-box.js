import React from "react";
import styled from "styled-components";
import { color } from "../../components/styles/colors";
import parse from "html-react-parser";
import TitleWithInfoBox from "../molecules/blocks/table-title";

const ComplianceRequirementBox = ({ margin, data, className, ...rest }) => {
	const title = {
		text: `${data?.prices ? data.prices.state : ""} Compliance Requirements`,
		popContent: `This report is mandatory and must be filed within the specified time frame in order for the entity to remain in good standing with the state. Failure to file this report can lead to the company being revoked or administratively dissolved.`,
	};
	return (
		<>
			<TitleWithInfoBox
				title={title.text}
				style={{ marginBottom: "24px" }}
				hasInfoBox
				infoBoxText={title.popContent}
				questionMarkColor={color.blue1}
			/>

			<Filing margin={margin} className={className} {...rest}>
				{parse(data?.filings ? data.filings.requirement : "loading...")}
			</Filing>
		</>
	);
};

export default ComplianceRequirementBox;

const Filing = styled.div`
    width: 100%;
    margin: ${(props) => (props.margin ? props.margin : "52px 0 42px 0")};

    h3, h4{
        font-family: Avenir;
        font-weight: 900;
        font-size: 20px;
        line-height
        margin-bottom: 15px;
        margin-top: 42px;

        &:nth-child(1) {
            margin-top: 0;
        }
    }
   
    div.full-width {
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0 24px 32px 0 rgba(236,236,236,0.50);
        border-radius: 5px;
        margin-bottom: 8px;
        font-size: 16px;
        line-height: 24px;
        padding: 24px;
        color: #1d1d1d;
        font-family: Avenir,sans-serif;
    }

    p{
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0 24px 32px 0 rgba(236,236,236,0.50);
        border-radius: 5px;
        margin-bottom: 8px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        font-size: 16px;
        line-height: 24px;
        color: #1d1d1d;
        font-family: Avenir,sans-serif;

        strong, span{
            padding: 24px;
        }
        strong{
            line-height: 24px;
            margin-bottom: 0px;
            border-right: 2px solid rgb(244, 244, 244);
        }
    }
`;
