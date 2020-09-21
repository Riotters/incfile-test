import React from "react";
import styled from "styled-components";
import TextCenterLayout from "../../../partials/heading-center";
import {color} from "../../../atoms/styles/colors";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Adventages from "../../../../components/adventages";
import {shadow} from "../../../atoms/styles/shadows";
import ContentCenter from "../../../partials/content-center";
import OvalSvg from "../../../../images/ovals/top-right-transparent-green2.inline.svg";

const Statistics = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>

        <ContentCenter contentWidth={770}>
            <TextCenterLayout headline="Key Photography Business and Background Data and Statistics" headlineWidth={770}
                              textWidth={770}/>

            <Paragraph big>
                The photography business is growing, albeit slowly at around 1.7 percent a year.
                It’s still a lucrative field though, with photographers and photography businesses pulling in a combined
                $10 billion a year and employing over 230,000 people.
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

    </Wrapper>
);

const Wrapper = styled.section`
    position: relative;
    padding-bottom: 100px;
`;

const AdventagesWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 20px;
    margin-top: 76px;
    margin-bottom 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const Oval = styled.div`
    position: absolute;
    bottom: 307px;
    right: 0;
    width: 100%;
    opacity: 0.5;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

export default Statistics;
