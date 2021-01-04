import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { color } from "../../../../components/styles/colors";
import Icon1 from "../../../../images/icons/with-no-money-icon1.inline.svg";
import Icon2 from "../../../../images/icons/with-no-money-icon2.inline.svg";
import Icon3 from "../../../../images/icons/with-no-money-icon3.inline.svg";
import Icon4 from "../../../../images/icons/with-no-money-icon4.inline.svg";
import Icon5 from "../../../../images/icons/with-no-money-icon5.inline.svg";
import Icon6 from "../../../../images/icons/with-no-money-icon6.inline.svg";
import Icon7 from "../../../../images/icons/with-no-money-icon7.inline.svg";
import Icon8 from "../../../../images/icons/with-no-money-icon8.inline.svg";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-green2.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";


const ContainerWrapper = styled.div`
  background: rgb(255, 255, 255);
  background-image: ${gradient.green3};
  padding-bottom: 100px;
  position: relative;
  padding-top: 120px;
`;

const GridSection = styled.div`
  width: 100%;
`;

const TitleBox = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  max-width: 750px;

  @media (min-width: 750px) {
    margin: 0 auto;
  }

  h2 {
    color: #1d1d1d;
    font-size: 40px;
    text-align: center;
    margin: 0 auto 24px;
  }
`;

const GridSectionList = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  justify-content: center;
  column-gap: 30px;
  row-gap: 70px;
  margin-top: 76px;
  margin-bottom: 76px;

  @media (min-width: 490px) {
    grid-template-columns: 470px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 470px 470px;
  }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 730px;
  width: 100%;
  transform: scaleX(-1);
  opacity: 0.5;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const TaxesIntroduce = () => (
  <ContainerWrapper>
    <OvalCenter>
      <OvalSvg />
    </OvalCenter>

    <Container>
      <GridSection>
        <TitleBox>
          <Heading size={2} template={3} left>
            Taxes
          </Heading>
          <Paragraph big>
            Taxes are a fact of life, and if you’re in business there are
            various ways you will need to file and pay them.
          </Paragraph>
        </TitleBox>

        <GridSectionList>
          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={Icon1}
            imageBackgroundColor={color.purple2}
            imageShadowColor={color.purple2}
          >
            <Heading size={3} template={4}>
              File with the IRS
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Let the IRS know you are setting up a business.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={Icon2}
            imageBackgroundColor={color.green2}
            imageShadowColor={color.green2}
          >
            <Heading size={3} template={4}>
              Payroll tax
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              If you pay employees, you will be liable for payroll tax.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={Icon3}
            imageBackgroundColor={color.yellow2}
            imageShadowColor={color.yellow2}
          >
            <Heading size={3} template={4}>
              Sales tax
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              If you’re selling locally, you may also be liable for collecting
              and paying sales tax. To register for sales tax, see your
              Secretary of State website.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={Icon4}
            imageBackgroundColor={color.babyblue2}
            imageShadowColor={color.babyblue2}
          >
            <Heading size={3} template={4}>
              State tax
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Most states do have a state income tax. If yours does, you will be
              taxed on your earnings as normal. To register for state tax, see
              your Secretary of State website.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={Icon5}
            imageBackgroundColor={color.orange2}
            imageShadowColor={color.orange2}
          >
            <Heading size={3} template={4}>
              Federal income tax
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              You will need to pay income tax on any profits or earnings you
              take from your business. In most cases, profits from the business
              will “flow through” to your individual tax return and you will be
              taxed there.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={Icon6}
            imageBackgroundColor={color.red2}
            imageShadowColor={color.red2}
          >
            <Heading size={3} template={4}>
              Corporation tax
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              If you incorporate as a C Corporation, you will also need to pay
              corporation tax — you will be taxed both on your profits as a
              business and when you extract earnings from your company. This
              “double taxation” is one of the reasons we normally recommend LLCs
              as a good business structure, since they avoid this.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={Icon7}
            imageBackgroundColor={color.blue2}
            imageShadowColor={color.blue2}
          >
            <Heading size={3} template={4}>
              Self-employment tax
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              Unlike employees, the earnings from your business will be taxed
              under a self-employment tax (FICA and Medicaid). This is just over
              15 percent of your earnings.
            </Paragraph>
          </TextBlockWithImage>

          <TextBlockWithImage
            width={100}
            widthUnit="%"
            SvgImage={Icon8}
            imageBackgroundColor={color.orange2}
            imageShadowColor={color.orange2}
          >
            <Heading size={3} template={4}>
              Other taxes
            </Heading>
            <Paragraph bottomPadding={0} bottomMargin={0}>
              In certain circumstances you may need to pay some other types of
              taxes. Talk to your accountant to find out what else you may be
              liable for.
            </Paragraph>
          </TextBlockWithImage>
        </GridSectionList>
      </GridSection>
      <TitleBox>
        <Paragraph big mixed maxWidth={770}>
          As a rule of thumb, we recommend keeping back around a third of your
          earnings to pay your taxes. We can{" "}
          <Link to="/business-accounting/">
            prepare and file your tax returns for you
          </Link>
        </Paragraph>
      </TitleBox>
    </Container>
  </ContainerWrapper>
);

export default TaxesIntroduce;
