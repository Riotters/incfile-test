import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import { Link } from "gatsby";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";
import ContentCenter from "../../../partials/content-center";

const SettingBusiness = () => (
  <GreenContainer>
    <Oval>
      <OvalSvg />
    </Oval>
    <Oval2>
      <OvalSvg2 />
    </Oval2>

    <ContentCenter>
      <TextCenterLayout headline="Setting Up Your Side Business and Business Operations" headlineWidth="770" textWidth="770" text="Once you've legally created your side business, you’ll need to get some other things in place." />
    </ContentCenter>

    <Container>
      <ImageBoxes>
        <TopImageBox image="location" color={color.red3}>
          <h4>Location of your business</h4>
          <p>
            The location of your side business will depend on the type of business you run. In almost all cases, you’ll run your side business mainly from home, even if your main place of work is your car or property that you’re renting out. Remember that if you’re selling products, you will need
            space to store your stock.
          </p>
        </TopImageBox>

        <TopImageBox image="side-3" color={color.orange3}>
          <h4>Equipment</h4>
          <p>Just like the location of your business, the equipment you need will depend on the type of side business you’re running. In most cases a laptop and smartphone will be sufficient, although other types of side businesses may need more specialized equipment.</p>
        </TopImageBox>

        <TopImageBox image="display-ads" color={color.purple3}>
          <h4>Marketing</h4>
          <p>
            If you’re in an online marketplace, you probably won’t need to do much marketing. It’s important to represent yourself in the best possible way and gather good reviews. For people with another type of side business, your marketing needs will vary depending on the specifics of what you’re
            selling.
          </p>
        </TopImageBox>

        <TopImageBox image="state-filling-fees" color={color.yellow3}>
          <h4>Finances and Taxes</h4>
          <p>
            You will need a separate{" "}
            <a href="https://utility.bankofamerica.com/alliance/?formid=IF1" target="_blank" rel="noopener noreferrer">
              business bank account
            </a>{" "}
            for your side business. You might also want to consider a business credit card. Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile <Link to="/business-accounting/">we can even help you file your taxes</Link>.
          </p>
        </TopImageBox>

        <TopImageBox image="software" color={color.blue3}>
          <h4>Software and Processes</h4>
          <p>The right software can make running your side business quicker and more efficient. See our great list of the top apps at the end of this guide.</p>
        </TopImageBox>
      </ImageBoxes>
    </Container>
  </GreenContainer>
);

const GreenContainer = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, #f2f6ff 100%);
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;
`;

const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 112px;
  width: 100%;
  max-width: 970px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 970px) {
    margin: 0 auto;
  }
`;

const Oval = styled.div`
  position: absolute;
  right: 0;
  top: 266px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  left: 0;
  bottom: 55px;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 570px) {
    width: 570px;
  }
`;

export default SettingBusiness;
