import React from "react";
import styled from "styled-components";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ContentCenter from "../../partials/content-center";
import Buttonsbox from "../../atoms/boxes/top-buttons-box";
import ButtonLink from "../../molecules/buttons/button";
import ButtonAction from "../../molecules/buttons/button-action";
import DueDateSVG from "../../../images/due_date.inline.svg";
import FilingRequirementBox from "../../states-llc/filing-requirement-box";
import { scrollToElement } from '../../../helpers/utils';

const Icon = styled.div`
`

const ResultCheckDueDate = ({ content, toggleForm }) => {
    const openForm = e => {
        e.preventDefault();
        scrollToElement(e, 'js-check-duedate-form');
        toggleForm(false);
    }


    return (
        <ContentCenter>
            <Icon><DueDateSVG /></Icon>
            <Heading size={3} style={{ textAlign: `center`, marginTop: `42px` }}>
                State Requirement: {content.itemType}
            </Heading>
            <Paragraph big mixed={true} style={{ maxWidth: `670px` }}>
                The {content.itemType} required by the State of {content.state} for <strong>{content.compName}</strong> is due on <strong>{content.dueDate}</strong>
            </Paragraph>
            
            <Heading size={4}>
                What are the ongoing compliance requirements in {content.state}?
            </Heading>

            <FilingRequirementBox data={content} margin="0px 0 42px 0" />

            <Paragraph big mixed={true}>
                Fortunately, we can save you time and hassle by filing this compliance requirement on your behalf.
            </Paragraph>

            <Buttonsbox style={{ justifyContent: `center` }}>
                <ButtonLink
                    content={{ text: `File your annual or biennial report`, url: `${process.env.ORDER_URL}/annual-report.php` }}
                    theme="primary56" margin="15px"
                    arrow
                />
                <ButtonAction
                    onClick={e => openForm(e)}
                    content={{ text: `Check Another Due Date`, url: `#` }}
                    theme="secondary56"
                    margin="15px"
                />
            </Buttonsbox>
        </ContentCenter>
    );
}

export default ResultCheckDueDate;