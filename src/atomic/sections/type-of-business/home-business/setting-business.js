import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";
import {gradient} from "../../../atoms/styles/colors";
import {Link} from "gatsby";

const SettingBusiness = () => (
    <WrapperContainer>

        <Oval>
            <OvalSvg />
        </Oval>

        <Oval2>
            <OvalSvg />
        </Oval2>

        <TextCenterLayout
            headline="Setting Up Business Operations in Your Home"
            headlineWidth={770}
            textWidth={770}
            text="Once you've legally created your home-based business, you’ll need to get some other things in place."
        />

        <Container>
            <ImageBoxes>

                <TopImageBox image="location" color={color.red3}>
                    <h4>Location</h4>
                    <p>
                        Of course, the whole point of a home-based business is that you run it from home. But it might not be quite that simple! You will probably want to put aside
                        a room in your home as your office, where you can work undistracted. If you’re selling goods, you will need space to store inventory, and if you provide services you may want a room where you can see clients who come for appointments.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-4" color={color.green3}>
                    <h4>Equipment</h4>
                    <p>
                        The equipment you need when you start a business from home will depend on the type of business you run. While a freelancer, consultant or accountant might only need a laptop and smartphone, an Etsy seller may need specialized equipment for crafting. Whatever you need, make sure you have the space and expertise to store and use your equipment safely.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        It’s very unlikely that you will need any employees
                        to begin with. You can always hire other freelancers for specific tasks who can work remotely. You can try platforms like Upwork, People Per Hour or Fiverr Pro.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software and Process</h4>
                    <p>
                        The right software and processes will make running your home-based business much easier. See our list of the best apps and software at the end of this guide.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing</h4>
                    <p>
                        Marketing will be a huge part of your online business. You will probably need a great website, but you'll also need to get branding, newsletters, digital ads, social media accounts and other channels in place.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finances and Taxes</h4>
                    <p>
                        You will need a separate business bank account
                        for your gym or personal training business. You might also want to consider a business credit
                        card. Additionally, you will need to keep careful bookkeeping records and file business and
                        personal taxes. Here at Incfile <Link to="https://www.incfile.com/business-accounting/">we can even help you file your taxes</Link>.
                    </p>
                </TopImageBox>

            </ImageBoxes>
        </Container>
    </WrapperContainer>
);

const WrapperContainer = styled.div`
    background: rgb(255,255,255);
    background-image: ${gradient.babyblue3};
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
    bottom: 79px;
    width: 100%;
    transform: scaleX(-1);
    opacity: 0.5;
  
    @media (min-width: 570px) {
        width: 570px;
    }
`;


export default SettingBusiness;
