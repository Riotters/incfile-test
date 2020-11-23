import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors"
import HeadingCenter from "../../../partials/heading-center"
import ContentCenter from "../../../partials/content-center";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import Button from "../../../molecules/buttons/button-action";
import { Paragraph } from "../../../atoms/typography/paragraph";
import parse from "html-react-parser"

const Forming = styled.section`
  background-color: ${color.blue3};
  position: relative;
  padding-top: 104px;
  padding-bottom: 56px;
  
  @media (min-width: 576px) {
    padding-bottom: 112px;
  }
`;

const FormingSection = ({ className, content, onClick }) => (
    <Forming className={className}>
        <HeadingCenter className="heading" headline={content.header} headlineWidth="770" text={content.text} />
        <ContentCenter contentWidth="770">
            <NumericList content={content.list} bottomMargin="48" />
            <Paragraph mixed style={{ textAlign: "center" }}>
                {parse(content.text2)}
            </Paragraph>

            <Button content={{ text: `Download our Completed Guide to C Corp`, url: `/` }} onClick={onClick} theme="primary56" margin="72px auto 40px" />
            <Paragraph big maxWidth="770" style={{ textAlign: "center" }}>
                From developing your business idea to measuring success, our free guide has
                all the info you need to get your business off the ground.
            </Paragraph>
        </ContentCenter>
    </Forming>
  );
  
  export default FormingSection;