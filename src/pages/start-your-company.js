import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/review-entity-types/home/about";
import Rocket from "../atomic/sections/review-entity-types/home/rocket";
import BusinessStructure from "../atomic/sections/learning-center-entity/comparison-chart/business-structure";
import Articles from "../components/partials/sections/articles";
import Cta from "../atomic/sections/general/cta";
//Texts
import { top, about, businessStructure, rocket, cta } from "../static/review-entity-types";
import styled from "styled-components";
import Image from "../atomic/atoms/image/image";
import {Heading} from "../atomic/atoms/typography/heading";
import {Paragraph} from "../atomic/atoms/typography/paragraph";
import Button from "../atomic/molecules/buttons/button-action";
import {color} from "../atomic/atoms/styles/colors";
import Circle from "../atomic/atoms/icons/circle";
import ExSVG from "../images/icons/icon-status-x.inline.svg";

const LightBoxModal = styled.div`
  transition: all .8s;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const LightBoxContent = styled.div`
  transition: all .8s;

  background-color: #fff;
  width: 100%;
  max-width: 782px;
  position: relative;
  margin: 0 30px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 48px;
  pointer-events: all;
  
  @media screen and (min-width: 768px) {
    max-height: 289px;
    height: 289px;
    overflow-y: visible;
  }
  
  .header-top {
    color: ${color.grey2};
  }
  
  &.form-submitted {
    height: 40vh;
    max-width: 500px;
  }
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Column = styled.div`
    width: 100%;
    margin-bottom: 32px;
    
    @media (min-width: 768px) {
        position: relative;
    }
    text-align: center;
    
    &.image-col {
        display: flex;
        justify-content: center;
        
        .gatsby-image-wrapper {
            min-height: 200px;
            width: 100%;
        }
    }
    
    @media (min-width: 768px) {
        margin-bottom: 0;
        text-align: initial;
        width: ${props => props?.width ?? 50}%;
    }
    
    .modal-close {
        position: absolute;
        z-index: 10;
        right: 16px;
        top: 16px;
        pointer-events: all;
        cursor: pointer;
        
        @media (min-width: 768px) {
            right: -32px;
            top: -32px;
        }
    }
`;

const OutsideImage = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    min-height: 200px;
    
    @media (min-width: 768px) {
        top: ${props => props?.top ?? "0"};
        width: ${props => props?.width ?? "100%"};
        position: absolute;
    }
`;

const ReviewEntityType = () => {
    const [ modalVisible, setModalVisible ] = React.useState(false);
    const [formSubmitted, setFormSubmitted] = React.useState(false);

    const popup = (e) => {
        e.preventDefault();

        if (!e.target.className.includes("modal-overlay") && !e.target.className.includes("modal-close") &&
            modalVisible === true)
            return;

        setModalVisible(!modalVisible);
    };

    let modalClases = ["lightbox-content"];
    if (formSubmitted) modalClases.push("form-submitted");

    return (
        <Layout>
            <SEO title="Start a Company | Learn about Business Entity Types"
                 description="Want to start a business? Learn about different types of business structures—from LLC to S Corp to non profit—and find the entity that suits your needs."/>
            <Top imageName="mr-bulb-main-header-illustration-7201" imageAlt="Mrs Bulb and with checklist"
                 ovalColor="purple-2" headlineWidth="560" textWidth="450" tabletVariantClass="tablet--shopper" tabletImgPosX={45}>
                <h1>{top.header}</h1>
                <p>{top.text}</p>
            </Top>
            <About content={about}/>
            <Rocket content={rocket}/>
            <BusinessStructure content={businessStructure}/>
            <Cta cta={cta} storageKey="start-your-company-modal-1" onViewportEntry={() => setModalVisible(true)} />
            <Articles/>
            <LightBoxModal visible={modalVisible} onClick={(e) => popup(e)} className="modal-overlay">
                <LightBoxContent style={{pointerEvents: "all"}} class={modalClases.join(" ")}>
                    <Flex>
                        <Column width={35} style={{marginRight: "32px"}} className="image-col">
                            <OutsideImage width="218px" top="-96px">
                                <Image filename="complete-business-entity-guide-3401" alt="The Complete Business Entity Guide" />
                            </OutsideImage>
                        </Column>
                        <Column width={65}>
                            <Heading size={6} bottomMargin={4} className="header-top">DOWNLOAD</Heading>
                            <Heading size={4} bottomMargin={16}>The Complete Business Entity Guide.</Heading>
                            <Paragraph bottomMargin={32}>We’ll help you choose the right business structure
                                for your company.</Paragraph>
                            <Button theme="primary56" arrow onClick={() => setModalVisible(false)}>Download Now</Button>
                            <Circle circleColor={color.orange3} width={32} height={32} theme="normal" onClick={() => setModalVisible(false)} className="modal-close">
                                <ExSVG />
                            </Circle>
                        </Column>
                    </Flex>
                </LightBoxContent>
            </LightBoxModal>
        </Layout>
    );
};

export default ReviewEntityType;
