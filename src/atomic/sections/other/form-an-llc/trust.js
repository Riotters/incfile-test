import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors"
import HeadingCenter from "../../../partials/heading-center"
import ContentCenter from "../../../partials/content-center";
import TopImageBox from "../../../../components/top-image-box";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";

const Trust = styled.div`
    padding-top: 75px;
    padding-bottom: 64px;
    position: relative;
`;

const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 80px;
  padding-bottom: 48px;
  width: 100%;

  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media (min-width: 970px) {
    width: 970px;
    margin: 0 auto;
  }

  .box {
      padding: 16px 16px 56px;

    h4 {
        text-align: center;
        padding: 24px 0 0;
    }

    &:first-child {
        border-radius: 5px;

        @media (min-width: 769px) {
            border-radius: 50px 5px 5px 50px;
        }
        
    
        .top {
            border-radius: 5px;

            @media (min-width: 769px) {
                border-radius: 35px 5px 5px 5px;
            }
        }
    }

    &:last-child {
        border-radius: 5px;

        @media (min-width: 769px) {
            border-radius: 5px 50px 50px 5px;
        }
    
        .top {
            border-radius: 5px;

            @media (min-width: 769px) {
                border-radius: 5px 35px 5px 5px;
            }
        }
    }
  }
`;

const colors = [color.yellow3, color.blue3, color.green3];
const icons = [`your-state`, `your-state`, `your-state`]

const TrustSection = ({ className, content }) => (
    <Trust className={className}>
        <Oval className="oval" height="570" width="570" top="0" right="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter
            headline={content.header}
            headlineWidth="770"
        />
        <ContentCenter>
            <ImageBoxes>
                {content.cards.map((card, i) => (
                    <TopImageBox className="box" image={icons[i]} color={colors[i]}>
                        <Heading size="4">{card.header}</Heading>
                        <Paragraph>{card.text}</Paragraph>
                    </TopImageBox>
                ))}
            </ImageBoxes>
        </ContentCenter>
    </Trust>
);
  
export default TrustSection;