import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import {gradient} from "../../../atoms/styles/colors";
import {Link} from "gatsby";

const SettingBusiness = () => (
    <ColorContainer>

        <Oval>
            <OvalSvg />
        </Oval>

        <TextCenterLayout
            headline="Setting Up Your Unique Business and Business Operations"
            headlineWidth={770}
            textWidth={770}
            text="Once you've legally created your business, you’ll need to get some other things in place."
        />

        <Container>
            <ImageBoxes>

                <TopImageBox image="location" color={color.red3}>
                    <h4>Location</h4>
                    <p>
                        The location you work from will be defined by the type of business you start. Many unique businesses can be run successfully from home, although other businesses may need a specialized location. Don't forget that if you work from home, you can write
                        off part of your utility and housing costs
                        against your taxes.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing</h4>
                    <p>
                        Marketing to a very defined niche is much easier than marketing to a broader audience. Spend some time and effort identifying who your audience is and the best channels to reach them. You will probably want an awesome website, but you'll also need to get branding, newsletters, digital ads, social media accounts and other channels in place.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software</h4>
                    <p>
                        The right software and processes will make running your unique business much easier. See our list of the best apps and software at the end of this guide.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-4" color={color.green3}>
                    <h4>Equipment</h4>
                    <p>
                        Depending on the type of unique business you run, equipment needs will vary widely. For selling services, you will probably only need a computer, laptop, tablet or smartphone.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        To begin with, you probably won’t need to hire anyone else for your unique business, especially
                        if you’re a good administrator. But start thinking about who else you may want to bring on board as your business grows.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" color={color.blue3}>
                    <h4>Finances and Taxes</h4>
                    <p>
                        You will need a separate <Link to="/">business bank account</Link>
                        for your business, and you might also want
                        to consider a <Link to="/">business credit card</Link>. Additionally, you will need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile
                        <Link to="/">we can even help you file your taxes</Link>.
                    </p>
                </TopImageBox>

            </ImageBoxes>
        </Container>
    </ColorContainer>
);

const ColorContainer = styled.div`
    background-image: ${gradient.blue3};
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
  
  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 970px) {
    margin: 0 auto;
  }
`;

const GreenCurve = styled.div`
    position: absolute;
    right: -115px;
    bottom: -122px;
    width: 115px;
`;

const Oval = styled.div`
    position: absolute;
    left: 0;
    top: 394px;
    width: 100%;
    
    @media (min-width: 570px) {
        width: 570px;
    }
`;

export default SettingBusiness;
