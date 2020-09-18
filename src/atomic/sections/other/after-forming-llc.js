import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import parse from 'html-react-parser';

// Components
import BoxCTA from '../../states-llc/box-cta';
import Button from "../../molecules/buttons/button";
import ArrowLink from "../../../components/arrow-link";
import PathLink from "../../molecules/buttons/path";
import { Heading } from "../../atoms/typography/heading";
import { color } from "../../../components/styles/colors";
import { Paragraph } from "../../atoms/typography/paragraph";
import NumericBoxedList from '../../organisms/lists/numeric-boxed-list';
import IconListColorBox from "../../molecules/text-blocks/icon-h4-list-color";
import AcccordionCounting from '../../states-llc/tab-acccordion-with-counting';
import Accordion from "../../organisms/accordion/accordion";
import TextBoxed from "../../molecules/static-check/circle-checkmark-text-boxed";
import Whitebox from "../../atoms/boxes/white-box";
import TextBlockWithImage from "../../molecules/mixed-blocks/text-block-with-absolute-image";
import ToolsList from "../../organisms/lists/tools-list";
import RelativeE from '../../../atomic/elements/relative-e';
import AbsoluteShapeCurve from '../../../atomic/elements/absolute-shape-curve-e';
import ShapeCurve from "../../atoms/shapes/curve";

import { toolsList } from '../../../static/type-of-business/digital-nomad';

const Wrapper = styled.div`
    h2, h3{
        text-align: left;
    }
    h2{
        font-size: 24px;
        line-height: 30px;
        margin-top: 55px;

        @media screen and (min-width: 769px) {
            font-size: 28px;
            line-height: 35px;
        }
    }

    // override the tools list styling
    [class*="tools-list__ToolsWrapper"]{
        @media (min-width: 1000px){
            width: 100%;
            margin: 0;
        }
    }
    [class*="white-box-with-tools-list__ToolsBox"] {
        flex: 1;
    }

    .flex-2-columns{
        @media screen and (max-width: 768px) {
            flex-direction: column;
        }

        p{
            font-size: 16px;
        }

        p:first-of-type{
            color: ${color.black};
            font-weight: bold;

            @media screen and (min-width: 769px) {
                width: 220px;
            }
        }

        p:last-of-type{
            flex: 1;

            @media screen and (min-width: 769px) {
                padding-left: 32px;
            }
        }
    }
`

const AfterFormingLLCSection = ({ content }) => {
    return (
        <Wrapper>
            {content.map((item, i) => (
                <div>
                    {item.type === 'heading' &&
                        <Heading size={item.size} style={item.styles}>{item.content}</Heading>
                    }
                                        
                    {item.type === 'paragraph' &&
                        <Paragraph big mixed={true} style={item.styles}>{parse(item.content)}</Paragraph>
                    }

                    {item.type === 'arrow-links' && item.content.map(link => (
                        <ArrowLink url={link.url} style={link.style}>{link.text}</ArrowLink>
                    ))}

                    {item.type === 'list-dot' &&
                        <IconListColorBox color={color.blue3} content={item.content} rounded />
                    }

                    {item.type === 'button' &&
                        <Button content={item.content} theme={item.theme} arrow width={item.width ?? `350px`} margin="16px 0 0 0" marginMD="42px 0 42px 0" />
                    }

                    {item.type === 'accordingTabWithCountingLeft' &&
                        <AcccordionCounting content={item.content} tab />
                    }

                    {item.type === 'numberBoxList' &&
                        <NumericBoxedList content={item.content} style={item.styles} />
                    }

                    {item.type === 'iconListColorBox' &&
                        <IconListColorBox color={item.boxColor} style={item.styles} content={item.content} rounded />
                    }

                    {item.type === 'textBoxWithCheckIcon' && item.content.map(i => (
                        <TextBoxed style={{ marginBottom: "8px" }}>
                            <Paragraph bottomMargin={0}>
                                {i}
                            </Paragraph>
                        </TextBoxed>
                    ))}

                    {item.type === 'box-cta' &&
                        <BoxCTA bgColor={item.color} bgImage={item.bgImage[0]} style={item.styles} content={item.content} />
                    }

                    {item.type === 'accordion' && (
                        <Accordion content={item.content} tab />
                    )}

                    {item.type === 'accordionWithCounting' && (
                        <AcccordionCounting content={item.content} tab />
                    )}

                    { item.type === 'whiteBoxWithTopLink' && item.content.map(item => (
                        <Whitebox padding="32px 40px" style={{ marginBottom: "8px" }}>
                            <PathLink to={item.url} textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                                { item.linkText}
                            </PathLink>
                            <Paragraph bottomMargin={0} topMargin={8}>
                                { parse(item.text) }
                            </Paragraph>
                        </Whitebox>
                    ))}

                    { item.type === 'whiteBox2Columns' && (
                        <RelativeE margin="0 0 42px 0">
                            <AbsoluteShapeCurve right="-25px" top="-30px">
                                <ShapeCurve color={color.purple1} />
                            </AbsoluteShapeCurve>
                            { item.content.map(item => (
                            <Whitebox className="flex-2-columns" flex padding="20px" style={{ marginBottom: "8px" }}>
                                <p>{item.text1}</p>
                                <p>{parse(item.text2)}</p>
                                </Whitebox>
                            ))}
                        </RelativeE>
                    )}

                    { item.type === 'textBlockWithImage' && item.content.map(i => (
                        <TextBlockWithImage
                            SvgImage={i.iconName[0]}
                            textBackgroundColor="transparent"
                            imageBackgroundColor={i.imageBackgroundColor}
                            imageShadowColor={i.imageShadowColor}
                            imageShadowOpacity={0.5}
                            boxShadow={false}
                            paddingLeft={0}
                            style={{marginTop: "40px"}}
                            circleShadowY={40}
                            circleShadowBlure={80}
                            width={100}
                            widthUnit="%">
                            <Paragraph big style={{color: color.black, fontWeight: "bold"}} mixed={true}>
                                { i.header}
                            </Paragraph>

                            <Paragraph big>
                                { i.text}
                            </Paragraph>
                        </TextBlockWithImage>
                    ))}
                </div>
            ))}

            <ToolsList tools={toolsList.tools} />
            
        </Wrapper>
    )
};

export default AfterFormingLLCSection;