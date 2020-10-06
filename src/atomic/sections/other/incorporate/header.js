import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import React from "react";
import styled from "styled-components";
import {color} from "../../../atoms/styles/colors";
import ContentCenter from "../../../partials/content-center";
import Container from "../../../container";
import Dropdown from "../../../molecules/form/dropdown-with-events";
import Image from "../../../atoms/image/image";
import OvalSVG from "../../../../images/ovals/header-incorporate-left.inline.svg";
import OvalSVG2 from "../../../../images/ovals/header-incorporate-right.inline.svg";
import Oval from "../../../atoms/icons/oval";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 20px;
  margin-top: 80px;
  background-color: ${ color.orange2 };

  @media (min-width: 992px) {
    flex-direction: row;
    height: ${ (props) => (props.heightSM ? props.heightSM : "100vh") };
    max-height: 517px;
  }
  
  @media screen and (max-width: 512px) {
    .oval {
        max-width: 100vw;
        overflow: hidden;
    }
  }
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: ${ props => props.Width ? props.Width : 0 }px;
    margin-top: ${ props => props.MarginTop ? props.MarginTop : 0 };
    margin-bottom: ${ props => props.MarginBottom ? props.MarginBottom : 0 };
    
    .dropdown:first-child {
        margin-right: 29px;
    }
    
    @media screen and (max-width: 512px) {
        flex-direction: column;
        max-width: 100%;
        
        .dropdown:first-child {
            margin-right: 0;
            margin-bottom: 29px;
        }
    }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function getOptionLabel(options, value) {
    let search = null;

    options.forEach(function(item) {
        if(item.value === value) search = item.label;
    });

    return search;
}

const FlexImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: ${props => props?.maxWidth ?? "391" }px;
    min-width: ${props => props?.minWidth ?? "391" }px;
    margin-top: 62px;
    
    @media screen and (max-width: 512px) {
        margin-top: 30px;
        margin-bottom: 30px;
        min-width: 100%;
        max-width: 100%;
    }
`;

const ImageWrapper = styled.div`
    

    .gatsby-image-wrapper {
        width: ${props => props.width}px;
    }
`;

const HeaderSection = ({ content, initialState, eventHandlers }) => {
    return (
        <Wrapper>
            <div className="oval-wrapper">
                <Oval className="oval" height="420" width="420" top="0" left="0">
                    <OvalSVG />
                </Oval>
                <Oval className="oval" height="570" width="570" top="0" right="0" y={30}>
                    <OvalSVG2 />
                </Oval>
            </div>
            <ContentCenter>
                    <Heading size={1}>{content.header}</Heading>
                    <Paragraph big bottomMargin={64}>{content.text}</Paragraph>

                    <FlexContainer Width="1070">
                        <Dropdown className="dropdown" badge={content.form.dropdown.badge} selected={getOptionLabel(content.form.dropdown.options, initialState.entity)} options={content.form.dropdown.options} onSelect={eventHandlers.entityChange} label={content.form.dropdown.label} placeholder={content.form.dropdown.placeholder} />
                        <Dropdown className="dropdown" badge={content.form.dropdown2.badge} selected={getOptionLabel(content.form.dropdown2.options, initialState.state)} options={content.form.dropdown2.options} onSelect={eventHandlers.stateChange} label={content.form.dropdown2.label} placeholder={content.form.dropdown2.placeholder} />
                    </FlexContainer>

                    <FlexImageWrapper>
                        <ImageWrapper width={163}>
                            <Image filename={content.logo1} alt="" />
                        </ImageWrapper>
                        <ImageWrapper width={128}>
                            <Image filename={content.logo2} alt="" />
                        </ImageWrapper>
                    </FlexImageWrapper>
            </ContentCenter>
        </Wrapper>
    );
};

export default HeaderSection;