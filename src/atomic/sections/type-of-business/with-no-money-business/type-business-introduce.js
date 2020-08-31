import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import React from "react";
import styled from "styled-components";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {color} from "../../../../components/styles/colors";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import ArrowSVG from "../../../../images/arrow.inline.svg";
import IconCircle from "../../../../components/icons/circle";
import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import SeriesIcon from "../../../../images/icons/limited-liability-company.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import ArrowsIcon from "../../../../images/icons/arrows.inline.svg"
import Button from "../../../molecules/buttons/button";
import Container from "../../../container";
import OvalGreen3 from "../../../../images/oval-green-3.inline.svg";
import {shadow} from "../../../atoms/styles/shadows";
import {gradient} from "../../../atoms/styles/colors";
import CkeckText from "../../../../components/static-check/text-only";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .colorbox {
    margin-bottom: 48px;
  }
`;

const OrangeContainer = styled.div`
    background: rgb(255,255,255);
    padding-bottom: 100px;
    position: relative;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 200px;
`

const TypeBusinessIntroduce = () => (
    <OrangeContainer>

        <Oval>
            <OvalGreen3 />
        </Oval>

        <Container>
            <BusinessOwnerResponsibilities>
                <ImageContent image="with-no-money-business-2" paddingTop="60">
                    <Heading size={4} style={{fontSize: "24px"}}>
                        Choosing a Type of Business to Start with Little
                        or No Money
                    </Heading>
                    <Paragraph big>
                        The type of business you start will be constrained by your lack of capital, but you still have hundreds of options available. Although bootstrapping is a major factor in the type of business you choose to start, there are several other factors at play.
                    </Paragraph>

                    <Heading size={4} style={{fontSize: "24px"}}>
                        What Are Your Current Skills, Interests, Expertise and Experiences?
                    </Heading>
                    <Paragraph big>
                        Go into a field you already know something about. Choose a business type that aligns with your expertise and insight.
                    </Paragraph>

                    <Heading size={4} style={{fontSize: "24px"}}>
                        Can You See Yourself Doing This in 10 Years?
                    </Heading>
                    <Paragraph big>
                        If you want to run a business for the long-term, think five or 10 years out. Can you still see yourself doing it after all that time? What will success look like to you then?
                    </Paragraph>

                    <Heading size={4} style={{fontSize: "24px"}}>
                        Have You Researched the Types of Businesses Out There?
                    </Heading>
                    <Paragraph big>
                        This part of the process is where you want to spend most of your time. Extensively research and take a deep dive into the various types
                        of business you could start. You could try:
                    </Paragraph>

                    <ListWrapper>
                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    A creative and design business like freelance writing, running an Etsy shop or starting a marketing agency
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    In-home services like with-no-money, yard maintenance, building, painting or other trades
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    A professional services business like accounting, real estate, law, architecture or consultancy
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Technical businesses like web design and creation or software and development
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    ...and many more
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                    </ListWrapper>
                </ImageContent>
            </BusinessOwnerResponsibilities>
        </Container>
    </OrangeContainer>
);

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListBox = styled.div`
    width: 100%;
    
    @media (min-width: 576px) { 
        width: 50%; 
    }
`;

export default TypeBusinessIntroduce;
