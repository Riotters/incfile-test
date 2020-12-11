import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../partials/heading-center";
import { shadow } from "../../atoms/styles/shadows";
import ContentCenter from "../../partials/content-center";
import { Heading } from "../../atoms/typography/heading";
import { color } from "../../atoms/styles/colors";
import Image from "../../atoms/image/image";
import ArrowLink from "../../molecules/buttons/text";

const Comparison = () => (
  <Wrapper>
    <HeadingCenter headline="What's the difference between an LLC and a Corporation?"
                   textWidth="590"
                   headlineSize={3}
                   text="Not sure if a Corporation or an LLC is right for you? Read the comparison below to review the fundamental differences."
                   bottomMargin="48"
                   bottomMarginLG="80" />

    <ContentCenter contentWidth={970}>
      <ComparisonWrapper>
        <ComparisonItem>
          <BoxWithImage bgColor={color.blue3}>
            <ImageBox>
              <Image filename="learn-more-comparision-llc" />
            </ImageBox>
          </BoxWithImage>

          <Heading size={4} style={{ fontSize: "24px", padding: "40px 40px 0 40px", marginBottom: 0 }}>
            LLC
          </Heading>

          <div>
            <ContentBox>
              <Title>Informal and easy to maintain</Title>
              <Content>Unlike the corporation the LLC is not required to hold meetings annually or maintain bylaws furthermore ownership is expressed by the % each member owns unlike the corporation where ownership is represented by shares of stock.</Content>
            </ContentBox>

            <ContentBox>
              <Title>Most Versatile</Title>
              <Content>The LLC is the most versatile of all entity types as members can elect receive the same tax treatment of an S or C Corporation. The ease of management, limited liability and ability to designate corporate tax treatment make the LLC our most favored entity type.</Content>
            </ContentBox>

            <ContentBox>
              <Title>Pass through Tax Entity</Title>
              <Content>Any profits or losses on the business will pass through directly to the member's personal tax return and are treated as personal income and taxed on an individual level.</Content>
            </ContentBox>
          </div>
          <LearnMoreLink content={{ text: "Learn more about LLC", url: "/limited-liability-company/" }} />
        </ComparisonItem>
        <ComparisonItem>
          <BoxWithImage bgColor={color.orange2}>
            <ImageBox>
              <Image filename="learn-more-comparision-cc" />
            </ImageBox>
          </BoxWithImage>

          <Heading
            size={4}
            style={{
              fontSize: "24px",
              padding: "40px 40px 0 40px",
              marginBottom: 0,
            }}
          >
            Corporation
          </Heading>

          <div>
            <ContentBox>
              <Title>Plan to raise money from investors</Title>
              <Content>The stricter formalities give investors the knowledge they desire about how your company is run.</Content>
            </ContentBox>

            <ContentBox>
              <Title>Plan to go public in the future</Title>
              <Content>If you are planning to raise capital or to take the company public in the future the corporation is structured for that purpose.</Content>
            </ContentBox>

            <ContentBox>
              <Title>Subject to double taxation</Title>
              <Content>The corporation itself pays taxes, and any dividends paid to the shareholders are treated as personal income and are subject to additional taxation at the individual level.</Content>
            </ContentBox>
          </div>
          <LearnMoreLink content={{ text: "Learn more about Corporation", url: "/what-is-c-corporation/" }} />
        </ComparisonItem>
      </ComparisonWrapper>
    </ContentCenter>
  </Wrapper>
);

const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
  
  @media (min-width: 576px) {
    padding-top: 100px;  
    padding-bottom: 120px;  
  }
`;

const ComparisonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 30px;
  row-gap: 30px;

  @media (min-width: 940px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ComparisonItem = styled.div`
  box-shadow: ${shadow.white1};
  width: 100%;
  overflow: hidden;

  @media (min-width: 940px) {
    &:first-child {
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
    }

    &:last-child {
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
    }
  }
`;

const BoxWithImage = styled.div`
  background-color: ${(props) => props.bgColor};
  padding: 20px;
`;

const ImageBox = styled.div`
  width: 160px;
  margin: 0 auto;
`;

const ContentBox = styled.div`
  margin: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #f4f4f4;
  min-height: 200px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const Title = styled.h5`
  font-family: Avenir;
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 8px;
`;

const Content = styled.p`
  font-family: Avenir;
  font-size: 16px;
  line-height: 24px;
`;

const LearnMoreLink = styled(ArrowLink)`
  padding: 26px 40px 0;
  
  @media (min-width: 576px) {
    padding: 0 40px;
  }
`;

export default Comparison;
