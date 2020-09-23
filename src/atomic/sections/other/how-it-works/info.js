import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Image from "../../../atoms/image/image_nobase64";
import CalculatorSVG from "../../../../images/icons/calculator-color.inline.svg";
import DocumentSVG from "../../../../images/icons/document-color.inline.svg";
import CalendarSVG from "../../../../images/icons/calendar-color.inline.svg";
import CategoryButton from "../../../molecules/buttons/category-button";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green2.inline.svg";
import Button from "../../../molecules/buttons/button";

const Info = styled.section`
    position: relative;
    padding-top: 104px;
    padding-bottom: 104px;
    background-image: ${gradient.green3};
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    grid-gap: 30px;
`;

const icons = [<CalculatorSVG />, <CalendarSVG />, <DocumentSVG />]

const InfoSection = ({ className, content }) => (
    <Info className={className}>
        <Oval className="oval" height="570" width="570" top="0" left="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter className="heading" headline={content.header} headlineWidth="770" text={content.text} bottomMargin="40" />
        <ContentCenter>
            <Grid>
                {content.boxes.map((box, i) => (
                    <CategoryButton content={box} icon={icons[i]} />
                ))}
            </Grid>
            <Button theme="primary56" content={content.button} arrow margin="48px 0 0" />
        </ContentCenter>
    </Info>
  );
  
  export default InfoSection;