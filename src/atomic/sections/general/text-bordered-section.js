import React from "react";
import {Heading} from "../../atoms/typography/heading";
import {Paragraph} from "../../atoms/typography/paragraph";
import TextBoxed from "../../molecules/text-blocks/text-boxed";
import styled from "styled-components";
import parse from "html-react-parser";
import {Link} from "gatsby";

const TextBorderedSection = ({title, content}) => (
    <TextBordered>
        <Heading size={3}>{title}</Heading>

        {typeof content.description === "string" ? <Paragraph big>{parse(content.description)}</Paragraph> : null}
        {typeof content.description === "object" ? <Paragraph big>{content.description.map((el) => (el.url ? <Link to={el.url}>{` ${parse(el.text)} `}</Link> : el.text))}</Paragraph> : null}

        <Paragraph big style={{marginBottom: "80px"}}>
            When it comes to starting an Airbnb business, you want to make sure that your property
            and listings are unique, so you can attract customers. You can do this by highlighting certain
            aspects in your listings:
        </Paragraph>

        <TextBorderedList>

            <TextBoxed>
                <Paragraph bottomPadding={0} bottomMargin={0}>
                    Get a professional to photograph your property, so it’s portrayed in the best way
                </Paragraph>
            </TextBoxed>

            <TextBoxed>
                <Paragraph bottomPadding={0} bottomMargin={0}>
                    Invest in making your property look good, with a fresh coat of paint, new furniture and
                    a deep clean
                </Paragraph>
            </TextBoxed>

            <TextBoxed>
                <Paragraph bottomPadding={0} bottomMargin={0}>
                    Highlight anything unique about the property, like original features or unusual
                    facilities
                </Paragraph>
            </TextBoxed>

            <TextBoxed>
                <Paragraph bottomPadding={0} bottomMargin={0}>
                    Show how close you are to public transport, local points of interest and restaurants
                </Paragraph>
            </TextBoxed>

            <TextBoxed>
                <Paragraph bottomPadding={0} bottomMargin={0}>
                    Maintain a listing that gets good reviews from guests and builds trust
                </Paragraph>
            </TextBoxed>

        </TextBorderedList>
    </TextBordered>
);


const TextBordered = styled.div`
    width: 100%;
    max-width: 670px;
    padding-top: 100px;
    
    @media (min-width: 670px) {
        margin: 0 auto;
    }
    
    h3{
        color: #1d1d1d;
        font-size: 40px;
        text-align: center;
        margin-bottom: 24px;
    }
`;

const TextBorderedList = styled.div`
    >div {
        margin-bottom: 8px;
    }
`;

export default TextBorderedSection;
