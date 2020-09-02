import React from "react";
import styled from "styled-components";
import TextCenterLayout from "../../../partials/heading-center";
import Container from "../../../container";
import Image from "../../../atoms/image/image";
import {Link} from "gatsby";
import Arrow from "../../../../images/arrow-circle.inline.svg";
import {color, gradient} from "../../../atoms/styles/colors";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Adventages from "../../../../components/adventages";
import {shadow} from "../../../atoms/styles/shadows";
import ContentCenter from "../../../partials/content-center";

const Statistics = () => (
    <Wrapper>
        <Container>
            <ContentCenter contentWidth={770}>
                <TextCenterLayout headline="Key Photography Business and Background Data and Statistics" headlineWidth={770} textWidth={770} />

                <Paragraph big>
                    The photography business is growing, albeit slowly at around 1.7 percent a year.
                    It’s still a lucrative field though, with photographers and photography businesses pulling in a combined $10 billion a year and employing over 230,000 people.
                </Paragraph>
                <Paragraph big>
                    This growth is being driven by several strong areas:
                </Paragraph>
            </ContentCenter>

            <ContentCenter contentWidth={970}>
                <AdventagesWrapper>
                    <Adventages
                        text="Disposable incomes of both individuals and businesses are growing, freeing up both household and commercial budgets for creative, art and photography products and services. This is especially true in the advertising and marketing space."
                        width="470px" circleBackgroundColor={color.blue1} circleBackgroundShadow={shadow.blue1}
                    />

                    <Adventages
                        text="Over half of all photographers are self-employed freelancers, which is a significantly higher percentage than among similar professions. Competition among photographers tends to be fierce, as there are often more photographers than there are jobs to go around."
                        width="470px" circleBackgroundColor={color.blue1} circleBackgroundShadow={shadow.blue1}
                    />

                    <Adventages
                        text="A strong portfolio that demonstrates flair and creativity is one of a photographer’s most powerful marketing tools. As they continue to showcase a unique approach, they can attract eclectic clients."
                        width="470px" circleBackgroundColor={color.blue1} circleBackgroundShadow={shadow.blue1}
                    />

                    <Adventages
                        text="Photographers who can provide additional services like Photoshop editing, post-production support, website publishing and more are demanding extra business due to these value-add services."
                        width="470px" circleBackgroundColor={color.blue1} circleBackgroundShadow={shadow.blue1}
                    />

                </AdventagesWrapper>
            </ContentCenter>
        </Container>

    </Wrapper>
);

const Wrapper = styled.section`
    padding-top: 104px;
`;

const BoxWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 104px;
`;

const Franchise = styled(Link)`
    display: block;
    width: 370px;
    border-radius: 5px;
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    background-color: #ffffff;
    margin-bottom: 72px;
    transition: all 0.5s ease-in-out;
    
    &:hover {
        box-shadow: 0 40px 80px 0 rgba(171, 171, 171, 0.5);
        
        .topContent{
            opacity: 1;
            filter: grayscale(0%);
        }
    }
`;

const TopContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 140px;
    filter: grayscale(100%);
    opacity: 0.3;
    transition: all 0.5s ease-in-out;

    > div {
        width: ${props => props.width}px;
        height: ${props => props.height}px;
    }
`;

const BottomContent = styled.div`
    margin: 0 24px;
    border-top: 1px solid rgba(171, 171, 171, 0.5);
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Content = styled.div``;

const Title = styled.div`
    font-weight: bold;
    font-family: "Avenir-Heavy", sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #1d1d1d;
`;

const Description = styled.div`
    font-family: "Avenir-Roman", sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
`;

const Icon = styled.div`
    transform: rotate(90deg);
`;

const AdventagesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
export default Statistics;
