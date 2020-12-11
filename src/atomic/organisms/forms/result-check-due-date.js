import React from "react";
import styled from "styled-components";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ContentCenter from "../../partials/content-center";
import Buttonsbox from "../../atoms/boxes/top-buttons-box";
import ButtonLink from "../../molecules/buttons/button";
import ButtonAction from "../../molecules/buttons/button-action";
import DueDateSVG from "../../../images/icons/icon-due-date-card.inline.svg";
import FilingRequirementBox from "../../states-llc/filing-requirement-box";
import { scrollToElement } from '../../../helpers/utils';
import Whitebox from "../../atoms/boxes/white-box";
import {shadow} from "../../atoms/styles/shadows";
import Circle from "../../atoms/icons/circle";
import {color} from "../../../components/styles/colors";
import ContentLeft from "../../partials/content-left";

const Icon = styled.div``;

const Wrapper = styled.div`
    .results-box {
       padding: 88px 15px 48px;
       margin-bottom: 48px;
            
       @media (min-width: 440px) {
          padding: 88px 40px 48px;
       }
    }
`;

const GreenBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 153px;
  background-color: ${color.green3};
  position: relative;
  border-radius: 32px;
  padding: 64px 32px 46px;
  margin-bottom: 48px;
  
  @media (max-width: 439px) {
    p {
        text-align: center;
    }
  }
`;

const AbsoluteCircle = styled.div`
  position: absolute;
  top: -40px;
  left: ${(props) => props.paddingLeft};
  border-radius: 50%;
  box-shadow: ${(props) => (props.imageShadowColor ? props.imageShadowColor : "")};
`;

const FlexRowSpaceBetween = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 439px) {
        h4 {
            margin-bottom: 16px;
        }
        
        p {
            margin-bottom: 24px;
        }
    }
    
    @media (min-width: 440px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
    
    :last-child {
        text-align: right;
    }
`;

const ResultCheckDueDate = ({ content, toggleForm }) => {
    const openForm = e => {
        e.preventDefault();
        scrollToElement(e, 'js-check-duedate-form');
        toggleForm(false);
    }


    return (
        <Wrapper>
            <ContentCenter contentWidth={770} headlineWidth={770}>
                <Heading size={2} maxWidth={770} bottomMargin={104}>Next state filling due date for {content.compName}</Heading>
                <Whitebox className="results-box">
                    <GreenBox>
                        <AbsoluteCircle imageShadowColor={shadow.green2}>
                            <Circle circleColor={color.green2} padding={0} height={80} width={80}>
                                <DueDateSVG />
                            </Circle>
                        </AbsoluteCircle>
                        <Heading size={4} bottomMargin={8}>{content.dueDate}</Heading>
                        <Paragraph mixed bottomMargin={0}>{content.itemType} due date for {content.compName}</Paragraph>
                    </GreenBox>
                    <FlexRowSpaceBetween>
                        <Heading size={4} bottomMargin={20}>State Requirement</Heading>
                        <Paragraph style={{ color: color.grey2 }} bottomMargin={0}>{content.itemType}</Paragraph>
                    </FlexRowSpaceBetween>
                    <FlexRowSpaceBetween>
                        <Heading size={4} bottomMargin={0}>Due date</Heading>
                        <Paragraph style={{ color: color.grey2 }} bottomMargin={0}>{content.dueDate}</Paragraph>
                    </FlexRowSpaceBetween>
                </Whitebox>
            </ContentCenter>
            <ContentLeft contentWidth={770} headlineWidth={770}>

                <Heading size={2}>
                    What are the ongoing compliance requirements in {content.state}?
                </Heading>

                <FilingRequirementBox data={content} margin="0px 0 42px 0" />

                {/*<Paragraph big mixed={true}>*/}
                {/*Fortunately, we can save you time and hassle by filing this compliance requirement on your behalf.*/}
                {/*</Paragraph>*/}

                <Buttonsbox style={{ justifyContent: `center` }}>
                    <ButtonLink
                        content={{
                            text: `File your annual or biennial report`,
                            url: `${process.env.ORDER_URL}/annual-report.php`
                        }}
                        externalLink
                        theme="primary56"
                        margin="0 0 15px"
                        marginMD="15px"
                        arrow
                    />
                    <ButtonAction
                        onClick={e => openForm(e)}
                        content={{ text: `Check Another Due Date`, url: `#` }}
                        theme="secondary56"
                        margin="0"
                        marginMD="15px"
                    />
                </Buttonsbox>
            </ContentLeft>
        </Wrapper>
    );
}

export default ResultCheckDueDate;