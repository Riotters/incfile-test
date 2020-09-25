import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-pink2.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import TopImageBox from '../../../molecules/mixed-blocks/top-image-box';
import Container from '../../../container';
import VisibilitySensor from '../../../VisibilitySensor';

const Wrapper = styled.div`
    position: relative;
    padding: 100px 0;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    grid-gap: 1em;

    @media screen and (min-width:992px) {
        grid-template-columns: repeat(3, minmax(370px, 1fr));
    }
`
const TextLeftLayout = styled.div`
    display: block;
    text-align: left;
    margin-bottom: 80px;
    h2{
        text-align: left;
    }
`

const ourProcessSection = ({ content }) => (
    <Wrapper>
        <Oval className="oval" height="570" width="570" top="5" right="0" y="-20">
            <OvalSVG />
        </Oval>

        <Container>
            <VisibilitySensor partialVisibility once>
                {({ isVisible }) => (
                    <TextLeftLayout className={isVisible ? "slideLeft enter" : "slideLeft"}>
                        <Heading size={2}>{content.header}</Heading>
                        <Paragraph big mixed={true}>{content.text}</Paragraph>
                    </TextLeftLayout>
                )}
            </VisibilitySensor>
            <Grid>
                {content.items.map(item => (
                    <TopImageBox content={item} image={item.icon}/>
                ))}
            </Grid>

        </Container>
    </Wrapper>
)

export default ourProcessSection;