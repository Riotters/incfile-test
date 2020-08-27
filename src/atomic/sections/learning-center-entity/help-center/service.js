import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import Image from "../../../atoms/image/image_nobase64"
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-pink1.inline.svg";
import BoxedButton from "../../../molecules/buttons/boxed";
import PlayerSVG from "../../../../images/icons/player.inline.svg";

const Service = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 120px;
`;

const Video = styled.div`
    width: 100%;
    max-width: 770px;
    background-color: ${color.orange3};
    border-radius: 6px;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        display: block;
        padding-top: 56.23%;
    }

    .gatsby-image-wrapper {
        position: absolute !important;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;

const PlayButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background-color: ${color.orange1};
    border: 0;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform .3s ease;
    cursor: pointer;

    &:hover {
        transform: translate(-50%, -50%) scale(1.05);
    }
`;

const ServiceSection = ({ className, content }) => (
    <Service className={className}>
        <Oval className="oval" height="652" width="652" top="0" left="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter headline={content.header} textWidth="770" text={content.text} bottomMargin="80" />
        <ContentCenter>
            <Video>
                <Image filename="newspaper-433445" />
                <PlayButton>
                    <PlayerSVG />
                </PlayButton>
            </Video>
        </ContentCenter>
    </Service>
);
  
export default ServiceSection;