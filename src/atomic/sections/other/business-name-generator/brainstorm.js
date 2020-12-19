import styled from "styled-components";
import React from "react";
import {color, gradient} from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import ContentCenter from "../../../partials/content-center";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import parse from "html-react-parser";
import Adventages from "../../../molecules/mixed-blocks/adventages";
import LightBox from "../../../../components/LightBox";

const Wrapper = styled.section`
  background: ${gradient.orange3};
  padding: 30px 0;
  width: 100%;
  position: relative;
  
  @media (min-width: 992px) {
    padding: 100px 0;
  }
`;

const AdvantagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 54px 30px;
  width: 100%;
  max-width: 970px;
  margin-bottom: 48px;
  
  @media (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }
`;

const Brainstorm = ({ className, content }) => (
    <Wrapper>
        <ContentCenter textWidth={770} headlineWidth={700}>
            <Heading size={2} center maxWidth={770}>{content.header}</Heading>
            <LightBox
                        alt="how to name a business"
                        bottomMargin={42}
                        thumbnailVideo="how-to-name-business-video-thumb-09122020"
                        videoID="ZskqgrXViUA"
                    />
            <Paragraph big mixed bottomMargin={80} maxWidth={770} center>{parse(content.text)}</Paragraph>

            <AdvantagesWrapper>
                {content.advantages.map((item, i) => (
                    <Adventages
                        key={i}
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue2}
                        content={item.content}
                    />
                ))}
            </AdvantagesWrapper>

            <Paragraph big mixed>{parse(content.text2)}</Paragraph>
        </ContentCenter>
    </Wrapper>
);

export default Brainstorm;