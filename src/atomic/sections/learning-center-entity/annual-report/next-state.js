import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentObject from "../../../partials/left-content-right-object";
import Form from "../../../organisms/forms/annual-report-form";
import ContentResult from "../../../organisms/forms/result-check-due-date";

import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-orange1-to-transparent.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";

import { getAnnualReportDueDate } from "../../../../api/Api";

const NextState = styled.section`
  position: relative;
  padding: 108px 0;
  background-color: ${color.orange3};
`;

const NextStateSection = ({ className, content, id }) => {
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const [contentResult, setContentResult] = React.useState({
        state: ``,
        compName: ``, 
        dueDate: ``,
        itemType: ``,
        filings: {
            requirement: ``,
        },
    });

    const toggleForm = (status) => {
        setFormSubmitted(status);
    }

    const handleForm = (data) => {
        getAnnualReportDueDate(data).then(res => {
            console.log('RES', data.get('companyName'));

            if (res.response.status === 1) {
                setFormSubmitted(!formSubmitted);
                setContentResult((prevState) => ({
                    ...prevState,
                    state: data.get('entityState'),
                    compName: data.get('companyName'),
                    itemType: res.response.item_type,
                    dueDate: res.response.due_date,
                    filings: { 
                        requirement: res.response.ongoing_requirement_content,
                    }
                }));

                // Fire GTM dataLayer
                // dataLayer.push({
                //     'event': 'stateFilingReportSearchCompleted'
                // });
            }
        });
    }

    return (
        <NextState className={className} id={id}>
            { formSubmitted
                ? <ContentResult content={contentResult} toggleForm={toggleForm} />
                : (
                <>
                    <Oval className="oval" height="720" width="720" top="0" right="0">
                        <OvalSVG />
                    </Oval>
                    <Oval className="oval" height="420" width="420" bottom="0" left="0">
                        <Oval2SVG />
                    </Oval>

                    <ContentObject object={<Form content={content.form} checkDueDate={handleForm} />} contentWidth="500" contentCenter>
                        <Heading size="2" bottomMargin="48" style={{ position: `relative` }}>
                            <Curve top="-85" left="-85" color={color.orange2}>
                                <CurveSVG />
                            </Curve>
                            {content.header}
                        </Heading>
                        <Heading size="4">{content.header2}</Heading>
                        <Paragraph big bottomMargin="0">
                            {content.text}
                        </Paragraph>
                    </ContentObject>
                </>
            )}
        </NextState>
    );
};

export default NextStateSection;
