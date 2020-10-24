import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentLeft from "../../../partials/content-left";
import ObjectContent from "../../../partials/left-object-right-content";
import ColorBox from "../../../molecules/colored-blocks/color-box-with-top-icon";
import ArrowLink from "../../../molecules/buttons/text";
import ClockSVG from "../../../../images/icons/clock.inline.svg";
import TaxesSVG from "../../../../images/icons/taxes4.inline.svg";
import CalendarSVG from "../../../../images/icons/calendar.inline.svg";
import FilingRequirementBox from "../../../states-llc/filing-requirement-box";

const Requirements = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .row {
    &--1,
    &--2 {
      padding-bottom: 120px;
    }
  }
`;

const TextWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

const RequirementsSection = ({ className, content, data }) => {
    const headerSection = `Fees and requirements in ${data?.prices ? data.prices.state : ''}.`;
    let stateFee = data?.prices ? data.prices.statefee : 0; 

    const boxFilingTimeAndFees = {
        fields: [
            {
                header: `$${stateFee}`,
                text: `State fee`,
            },
            {
                header: `${data?.prices ? data.prices.slow: 0}`,
                text: `State filing time`,
            },
            {
                header: `${data?.prices ? data.prices.fast : 0}`,
                text: `Expected filling time`,
            },
        ],
    };

    const FirstSectionColumns = [
        {
            content: [
                {
                    type: `heading`,
                    size: 3,
                    content: `Filing time and price`,
                },
                {
                    type: `paragraph`,
                    content: `The state charges this amount to file a new business entity. This fee goes directly to the Secretary of State.`,
                },
                {
                    type: `arrow-links`,
                    content: {
                        text: `State Filing Times`,
                        url: `/state-filing-times/`,
                    },
                    bottomMargin: 16,
                },
                {
                    type: `arrow-links`,
                    content: {
                        text: `State Filing Prices`,
                        url: `/state-filing-fees/`,
                    },
                },
            ],
        },
        {
            header: `Compliance  Requirements`,
            text: `This report is mandatory and must be filed within the specified time frame in order for the entity to remain in good standing with the state.`,
            text2: `Failure to file these reports can lead to the company being revoked or administrative dissolution. Included with all incorporation packages are lifetime company alerts that will provide courtesy email reminders to inform clients of an upcoming filing requirement.`,
            link: {
                text: `Other State's Ongoing`,
                url: `/compliance-filing-requirement/`,
            },
        },
    ];

    return (
        <Requirements className={className}>
            <ContentLeft>
                <Heading size="2" bottomMargin="160" maxWidth="500">
                    {headerSection}
                </Heading>
            </ContentLeft>
            <ObjectContent className="row row--1" headlineWidth="450" object={<ColorBox content={boxFilingTimeAndFees} color={color.green3} icon={<ClockSVG />} radius="50px 5px 5px 100px" curve curveLeft />} objectWidth="400" objectPadding="130" contentWidth="900">
                <Grid>
                    <TextWrapper>
                        {FirstSectionColumns[0].content.map((item, i) => (
                            <>
                                {item.type === "heading" && (
                                    <Heading size={item.size} bottomMargin={item.bottomMargin}>
                                        {item.content}
                                    </Heading>
                                )}

                                {item.type === "paragraph" && (
                                    <Paragraph mixed={true} bottomMargin={item.bottomMargin} style={{ fontSize: `18px` }}>
                                        {parse(item.content)}
                                    </Paragraph>
                                )}

                                {item.type === "arrow-links" && <ArrowLink content={item.content} bottomMargin={item.bottomMargin} />}
                            </>
                        ))}

                    </TextWrapper>
                    <TextWrapper>
                        <Heading size="3">{FirstSectionColumns[1].header}</Heading>
                        <Paragraph style={{ fontSize: `18px` }}>{FirstSectionColumns[1].text}</Paragraph>
                        <Paragraph bottomMargin="24"style={{ fontSize: `18px` }}>
                            {FirstSectionColumns[1].text2}
                        </Paragraph>
                        <ArrowLink content={FirstSectionColumns[1].link} bottomMargin="0" />
                    </TextWrapper>
                </Grid>
            </ObjectContent>

            <ContentLeft>
                <FilingRequirementBox data={data} style={{ margin: 0 }} />
            </ContentLeft>

        </Requirements>
    );
};

export default RequirementsSection;
