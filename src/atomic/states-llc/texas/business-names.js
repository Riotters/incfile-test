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

const Wrapper = styled.div``

const ListFlex = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 15px;
  margin: 40px 0;

  @media (min-width: 400px) {
    flex-flow: row wrap;
  }

  @media (min-width: 992px) {
    justify-content: flex-start;
  }

  & > div {
    width: 100%;
    max-width: calc(50% - 30px);

    @media (min-width: 769px) {
        max-width: 100%;
    }

    p{
      width:100%;
    }
  }
`;

const WrapperLink = styled(Link)`
  margin-bottom: 8px;

  .box {
    display: flex;
    align-items: flex-started;
    border-radius: 5px;
    padding: 24px;

    .circle{
      transform: rotate(90deg);
      margin-right: 24px;
    }

    p{
      margin-bottom: 0;
    }
  }
`;

const BoxButtonLinks = styled.div`
	.article-link:not(:last-child) {
		display: block;
		margin-bottom: 8px;
	}
`

const BusinessNames = ({ content }) => {
    return (
        <Wrapper>              
            {content.map((item, i) => (
                <div>
                    {item.type === 'heading' && 
                        <Heading size={item.size} style={{ marginTop: `42px` }}>{item.content}</Heading>
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
                        <IconListColorBox color={item.boxColor} content={item.content} rounded />
                    }

                    {item.type === 'textBoxWithCheckIcon' && item.content.map(i => (
                        <TextBoxed style={{marginBottom: "8px"}}>
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
                </div>
            ))}

        </Wrapper>
    )
}

export default BusinessNames