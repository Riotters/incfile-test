import styled from "styled-components";
import {Heading} from "../../atoms/typography/heading";
import ImageContent from "../../partials/left-image-right-content";
import React from "react";
import Buttonsbox from "../../atoms/boxes/top-buttons-box";
import Button from "../../molecules/buttons/button";
import {Paragraph} from "../../atoms/typography/paragraph";
import ContentCenter from "../../partials/content-center";
import Card from "../../molecules/mixed-blocks/adventages";
import {shadow} from "../../../components/styles/shadows";
import {color} from "../../../components/styles/colors";
import Adventages from "../../../components/adventages";


const Wrapper = styled.div`
    position: relative;
    padding: 38px 0 8px;
    
    @media (min-width: 576px) {
        padding: 38px 0 100px;
    }
`;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    
    @media screen and (min-width: 768px) {
        grid-template-columns: auto auto;    
    }
`;

const AllPackagesInclude = ({ content }) => (
    <Wrapper>
        <ContentCenter contentWidth={970}>
            <GridWrapper>
                {content.map((card) => (
                    <Adventages style={{marginLeft: "15px"}}
                                headline={card.header}
                                circleText={card.circleText}
                                circlePosition="center"
                                circleBackgroundShadow={shadow.blue1}
                                circleBackgroundColor={color.blue1}
                                className="center"
                                imageName={card.imageName}
                                text={card.text} />
                ))}
            </GridWrapper>
        </ContentCenter>
    </Wrapper>
);

export default AllPackagesInclude;