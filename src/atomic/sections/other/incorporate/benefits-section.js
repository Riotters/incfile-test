import React from "react";
import styled from "styled-components";
import {Heading} from "../../../atoms/typography/heading";
import CheckSVG from "../../../../images/circle-status-check.inline.svg";

import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import {color} from "../../../atoms/styles/colors";
import {shadow} from "../../../atoms/styles/shadows";
import backSVG from "../../../../images/icons/calendar.inline.svg";

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    
    svg {
        min-width: 32px;
    }

    .card-wrapper {
        position: absolute;
        bottom: calc(100% + 15px);
        left: -15px;
        z-index: 2;
        
        visibility: hidden;
        height: 0;
        width: 0;
        overflow: hidden;
        
        &.visible {
            visibility: visible;
            height: auto;
            width: 150%;
            overflow: visible;
        }
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    
    grid-gap: 24px 50px;
    
    @media screen and (max-width: 512px) {
        grid-template-columns: 100%;
    }
`;

function showPopup(self) {
    let card = self?.target.querySelector(".card-wrapper");

    if(card != null && card.className.indexOf("visible") === -1) {
        card.className += " visible";
    }
}

function hidePopup(e) {
    let card = e?.target.querySelector(".card-wrapper");

    if(card != null) {
        card.className = card.className.replace(" visible", "");
    }
}

function hidePopupFromWrapper(e) {
    let card = e?.target;

    card.className = card.className.replace(" visible", "");
}

const BenefitsSection = ({ className, content }) => {
    return (
        <Grid>
            {content.map((item, i) => {
                return (
                    <Flex className="benefit-box" onMouseEnter={showPopup} onMouseLeave={hidePopup}>
                        <CheckSVG />
                        <Heading bottomMargin="0" style={{ "margin-left": "16px" }} size={5}>{item.label}</Heading>
                        {(item.header && item.text) && (
                            <div className="card-wrapper" onMouseLeave={hidePopupFromWrapper}>
                                <TextBlockWithImage SvgImage={item?.svg ?? backSVG}
                                                    imageBackgroundColor={item?.circleBackground ?? color.white}
                                                    imageShadowColor={item?.circleShadow ?? shadow.white}
                                                    width={150}
                                                    widthUnit="%">
                                    <Heading size={4}>
                                        {item.header}
                                    </Heading>
                                    <Paragraph>
                                        {item.text}
                                    </Paragraph>
                                </TextBlockWithImage>
                            </div>
                        )}
                    </Flex>
                )
                })
            }
        </Grid>
    );
};

export default BenefitsSection;