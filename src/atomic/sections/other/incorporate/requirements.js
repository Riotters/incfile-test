import React from "react";
import styled from "styled-components";
import ContentCenter from "../../../partials/content-center";
import Container from "../../../container";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {Heading} from "../../../atoms/typography/heading";
import GenericTable from "../../../organisms/tables/generic-table";
import OvalSVG from "../../../../images/ovals/incorporate-requirements-bottom-right.inline.svg";
import Oval from "../../../atoms/icons/oval";
import {color} from "../../../atoms/styles/colors";
import Curve from "../../../../atomic/atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-right-babyblue1.inline.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 52px;
  overflow: hidden;

  @media (min-width: 992px) {
    flex-direction: row;
  }
  
  @media screen and (max-width: 512px) {
    .oval {
        max-width: 100vw;
        overflow: hidden;
    }
  }
  
  h3 {
    width: auto;
  }
  
  .section-description {
    text-align: center;
  }
`;

const RequirementsSection = ({ className, content, settings }) => {
    return (
        <Wrapper className={className}>
            <Oval className="oval" height="720" width="713" top="0" right="0" y={25}>
                <OvalSVG />
            </Oval>

            <ContentCenter>
                <Heading maxWidth={770} size={2}>{content.header}</Heading>
                <Paragraph big className="section-description" maxWidth={770} bottomMargin={56}>{content.text}</Paragraph>
                <GenericTable className="blue3 headers-start left" content={content.table} style={{ "margin-bottom": "56px" }} settings={settings} />

                <Heading size={3} bottomMargin={40}>{content.header2}</Heading>
                <div style={{position: "relative"}}>
                    <Curve top="-34" right="-27" color={color.orange1}>
                        <CurveSVG />
                    </Curve>
                    <GenericTable className="blue3 headers-start left" content={content.table2} settings={settings} />
                </div>
            </ContentCenter>
        </Wrapper>
    );
};

export default RequirementsSection;