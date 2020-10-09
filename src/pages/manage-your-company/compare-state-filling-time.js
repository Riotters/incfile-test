import React from "react";
import Layout from "../../components/layout";
import styled from "styled-components";
import SEO from "../../components/seo";
//Sections
import {rocket, top, compare, states} from "../../static/manage-your-company/compare-state-filing-time";
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";
import {shadow} from "../../atomic/atoms/styles/shadows";
import {color, gradient} from "../../atomic/atoms/styles/colors";
import Top from "../../atomic/sections/manage-your-company/compare-state-filling-time/top";
import WhichStatesAreFast from "../../atomic/sections/manage-your-company/compare-state-filling-time/which-states-are-fast";
import ComparisonStateFillingTime from "../../atomic/sections/manage-your-company/compare-state-filling-time/comparison-chart";
import OvalSVG from "../../images/ovals/easily-compare-state-filling-time-fast-top-left.inline.svg";
import Oval from "../../atomic/atoms/icons/oval";

//mrs-review-stars-5481

const ItemColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align ?? "center"};
    justify-content: ${props => props.justify ?? "center"};
    color: ${color.grey2};
    
    * {
        font-size: 14px;
    }
    
    strong {
        color: ${color.black};
    }
`;

const ItemRow = styled.div`
    ${props => props.marginTop ? ("margin-top:" + props.marginTop + "px") : ""};
    margin-right: ${props => props.marginRight ?? 43}px;
    display: flex;
    flex-direction: row;
    align-items: ${props => props.align ?? "flex-start"};
    justify-content: ${props => props.justify ?? "space-between"};
    
    & > svg {
        margin-right: 8px;
        margin-top: 2px;
    }
`;

const ImageWrapper = styled.div`
    width: 80px;
    height: 80px;
    box-shadow: ${shadow.white1};
    background-color: ${color.white};
    border-radius: 40px;
    margin-right: 12px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    .gatsby-image-wrapper {
        width: ${props => props.width ?? 0}px;
        height: ${props => props.height ?? 0}px;
    }
`;

const GradientWrapper = styled.section`
    background: ${gradient.blue3};
    padding-top: 100px;
    position: relative;
    
    .oval {
        overflow: hidden;
        max-width: 100%;
    }
`;

const CompareStateTimes = () => (
    <Layout>
        <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
        <Top content={top}/>
        <ComparisonStateFillingTime content={compare} />
        <GradientWrapper>
            <Oval width={570} height={570} className="oval" top="0" left="0">
                <OvalSVG />
            </Oval>
            <WhichStatesAreFast content={states} />
            <Rocket content={rocket} />
        </GradientWrapper>
    </Layout>
);

export default CompareStateTimes;