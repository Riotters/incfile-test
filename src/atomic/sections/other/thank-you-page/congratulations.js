import React from "react";
import styled from "styled-components";
import {color, gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import ContentCenter from "../../../partials/content-center";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Button from "../../../molecules/buttons/button";
import parse from "html-react-parser";
import Image from "../../../atoms/image/image";
import Whitebox from "../../../atoms/boxes/white-box";
import ArrowLink from "../../../molecules/buttons/text";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";
import Curve from "../../../atoms/icons/curve";

const Wrapper = styled.div`
    padding: 180px 0 100px;
    background: ${gradient.green3};
    
    h1, h2 {
        text-align: center;
    }
    
    .recommendations {
        padding-top: 100px
    }
    
    .anchor {
        position: relative;
    }
    
    .oval {
        overflow: hidden;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto 50%;
    grid-gap: 30px;
    position: relative;
    
    .improvement__item {
        padding: 24px 40px 40px;
        align-items: center;
        flex-direction: column;
        
        .improvement_item__link {
            align-self: flex-start;
        }
    }
    
    @media screen and (max-width: 768px) {
        grid-template-columns: auto;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${color.white};
    margin-bottom: 32px;
    
    .gatsby-image-wrapper {
        width: 143px;
    }
`;

const ImageWrapper2 = styled.div`
    width: ${props => props.width ?? 69}px;
    position: absolute;
    
    ${props => ("top: " + props.top + "px") ?? ""};
    ${props => ("left: " + props.left + "px") ?? ""};
    ${props => ("right: " + props.right + "px") ?? ""};
    ${props => ("bottom: " + props.bottom + "px") ?? ""};
    
    @media screen and (max-width: 558px) {
        display: none;
    }
`;

const CongratulationsSection = ({ className, content }) => (
    <Wrapper>
            <ContentCenter contentWidth={770} className="anchor">
                <div className="anchor">
                    <Heading size={1} bottomMargin={24} maxWidth={770}>{content.header}</Heading>
                    <ImageWrapper2 top="0" right="-169">
                        <Image filename="single-checkmark-green-5062" />
                    </ImageWrapper2>
                </div>
                <Paragraph big bottomMargin={0}>{content.text}</Paragraph>
                <Paragraph big bottomMargin={32}>{content.text2}</Paragraph>
                <Button content={content.button} theme="primary56" arrow />

                <ImageWrapper2 top="-67" left="-30" width="442">
                    <Image filename="checkmarks-5498" />
                </ImageWrapper2>
            </ContentCenter>
            <ContentCenter contentWidth={970} className="recommendations">
                <Heading size={2} bottomMargin={80}>{content.header2}</Heading>
                <GridContainer>
                    <Curve top="-109" left="-113" color={color.green2}>
                        <CurveSVG />
                    </Curve>
                    {content.cards.map((item) => (
                        <Whitebox flex className="improvement__item">
                            <ImageWrapper>
                                <Image filename={item.image} alt={item.title} />
                            </ImageWrapper>
                            <Paragraph big mixed={true} style={{  fontWeight: `bold` }} bottomMargin="16">{item.header}</Paragraph>
                            <Paragraph mixed={true}>{parse(item.text)}</Paragraph>
                            {item.link && (
                                <ArrowLink className="improvement_item__link" bottomMargin="0" content={item.link}/>
                            )}
                        </Whitebox>
                    ))}
                </GridContainer>

            </ContentCenter>
    </Wrapper>
);

export default CongratulationsSection;
