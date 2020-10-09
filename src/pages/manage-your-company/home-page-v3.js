import React from "react";
import Layout from "../../components/layout";
import styled from "styled-components";
import SEO from "../../components/seo";
//Sections
import Top from "../../atomic/partials/top";
import {business_formation, setup, top, rocket} from "../../static/manage-your-company/home-page-v3";
import Button from "../../atomic/molecules/buttons/button";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import BusinessFormation from "../../atomic/sections/manage-your-company/home-page-v3/business-formation";
import SetupYourBusiness from "../../atomic/sections/manage-your-company/home-page-v3/setup-your-business";
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";
import StarSVG from "../../images/icons/star-yellow.inline.svg";
import {shadow} from "../../atomic/atoms/styles/shadows";
import {color} from "../../atomic/atoms/styles/colors";
import Image from "../../atomic/atoms/image/image";

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

const FiveStarRow = styled.div`
    display: flex;
    flex-direction: row;
    
    svg:not(:first-child) {
        margin-left: 2px;
    }
`;

const HomePageV3 = () => (
    <Layout>
        <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
        <Top imageName="home-page-v3-top-9458" imageAlt="Start your own company" ovalColor="green" headlineWidth="700" textWidth="700">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
            <Buttonsbox>
                <Button content={top.button[0]} theme="primary56" arrow />
            </Buttonsbox>
            <ItemRow marginTop={32}>
                <ItemRow align="center">
                    <ImageWrapper width={42} height={46}>
                        <Image filename="verified-cart-6601" />
                    </ImageWrapper>
                    <ItemColumn>
                        <FiveStarRow>
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                            <StarSVG />
                        </FiveStarRow>
                        <div>
                            <strong>1400</strong>
                            <span>&nbsp;ratings</span>
                        </div>
                    </ItemColumn>
                </ItemRow>
                <ItemRow align="center">
                    <ImageWrapper width={31} height={45}>
                        <Image filename="bbb-logo-blue-5493" />
                    </ImageWrapper>
                    <ItemColumn align="flex-start">
                        <div>
                            <strong>A+</strong>
                        </div>
                        <div>
                            Rating
                        </div>
                    </ItemColumn>
                </ItemRow>
            </ItemRow>
        </Top>
        <BusinessFormation content={business_formation}/>
        <SetupYourBusiness content={setup} />
        <Rocket content={rocket} />
    </Layout>
);

export default HomePageV3;