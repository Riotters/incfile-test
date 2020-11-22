import React from "react"
import { Link } from "gatsby";
import styled from "styled-components"
import parse from 'html-react-parser'

// Components
import BoxCTA from '../box-cta';
import Button from "../../molecules/buttons/button";
import ArrowLink from "../../../components/arrow-link"
import { Heading } from "../../atoms/typography/heading"
import { color } from "../../../components/styles/colors"
import { Paragraph } from "../../atoms/typography/paragraph"
import NumericBoxedList from '../../organisms/lists/numeric-boxed-list'
import IconListColorBox from "../../molecules/text-blocks/icon-h4-list-color"
import AcccordionCounting from '../tab-acccordion-with-counting';
import Accordion from "../../organisms/accordion/accordion";
import TextBoxed from "../../molecules/static-check/circle-checkmark-text-boxed";
import GridTableRow from "../../molecules/blocks/grid-table-row";
import FilingRequirementBox from '../filing-requirement-box';
import AnnualReportBoxOnly from '../annual-report-box-only';

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
            line-height: 30px;
        }
    }

    // Just override something for cells of grid table
    [class*="grid-table-row__ListItem"]{
        padding-left: 0;

        &:before{
            display: none;
        }
    }

    [class*="grid-table-row__Cell"]:first-of-type p {
        border-radius: 20px;
        background-color: #f2f8f3;
        padding: 8px 25px;
    }
`

const FeeFilingRequirementSection = ({ content, data }) => {
    return (
        <Wrapper>              
            {content.map((item, i) => (
                <div>
                    {item.type === 'heading' && 
                        <Heading size={item.size} style={item.styles}>{item.content}</Heading>
                    }
                                        
                    {item.type === 'paragraph' && 
                        <Paragraph big mixed={true} style={item.styles }>{parse(item.content)}</Paragraph>
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
                        <AcccordionCounting content={item.content} tab/>
                    }

                    {item.type === 'numberBoxList' && 
                        <NumericBoxedList content={item.content} style={item.styles}/>
                    }

                    {item.type === 'iconListColorBox' && 
                        <IconListColorBox color={item.boxColor} style={item.styles} content={item.content} rounded />
                    }

                    {item.type === 'textBoxWithCheckIcon' && item.content.map(i => (
                        <TextBoxed style={{ marginBottom: "8px"}}>
                            <Paragraph bottomMargin={0}>
                                {i}
                            </Paragraph>
                        </TextBoxed>
                    ))}

                    {item.type === 'box-cta' && 
                        <BoxCTA bgColor={item.color} bgImage={item.bgImage[0]} style={item.styles} content={item.content} />
                    }

                    {item.type === 'accordion' && (
                        <Accordion content={item.content} tab/>
                    )}

                    {item.type === 'accordionWithCounting' && (
                        <AcccordionCounting content={item.content} tab/>
                    )}

                    {item.type === 'gridTable' && (
                        <div className="grid-table" style={{ marginBottom: `32px` }}>
                            <GridTableRow textCenter columns={item.columns} content={item.content.headers} header headerSize={item.headerSize} />
                            {item.content.rows && (item.content.rows.map(row => (
                                <GridTableRow textCenter content={row} columns={item.columns} list />
                            )))}
                        </div>
                    )}

                    {item.type === 'dynamic_ar_box' && (
                        <AnnualReportBoxOnly data={data} />
                    )}

                    {item.type === 'dynamic_filing_requirement' && (
                        <FilingRequirementBox data={data} />
                    )}
                </div>
            ))}

        </Wrapper>
    )
}

export default FeeFilingRequirementSection