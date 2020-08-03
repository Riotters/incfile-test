import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Image from "../../../atoms/image/image"

const Unboxing = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .heading {
      h2 {
          padding-bottom: 48px;
      }

      p {
          padding-bottom: 48px;
      }
  }

  .gatsby-image-wrapper {
    width: 100%;
    max-width: 1050px;
  }
`;

const UnboxingSection = ({ className, content }) => (
    <Unboxing className={className}>
        <HeadingCenter className="heading" headline={content.header} headlineWidth="770" text={content.text} />
        <ContentCenter>
            <Image filename="corporate-llc-kit" />
        </ContentCenter>
    </Unboxing>
  );
  
  export default UnboxingSection;