import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import Container from "../../../container";
import ContentLeft from "../../../partials/content-left";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Image from "../../../atoms/image/image";
import ContentCenter from "../../../partials/content-center";
import IncludedInAll from "./included-in-all-packages";
import SetupYourBusiness from "./setup-your-business";
import OpinionsCarousel from "../../../organisms/carousels/opinions";

const Wrapper = styled.div`
  position: relative;
  padding: 148px 0 80px;
`;

const Customers = ({ className, content }) => (
    <Wrapper className={className}>
        <ContentCenter contentWidth={770}>
            <Heading size={2}>{content.header}</Heading>
            <Paragraph big bottomMargin={104}>{content.text}</Paragraph>

            <OpinionsCarousel content={content.opinions} />
        </ContentCenter>
    </Wrapper>
);

export default Customers;
