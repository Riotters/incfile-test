import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/oval-green-2.inline.svg";
import {gradient} from "../../../atoms/styles/colors";

const SettingBusiness = () => (
    <WrapperContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <Container>
            <TextCenterLayout
                headline="Setting Up Your Dog Walking or Pet Sitting Business and Business Operations"
                headlineWidth="700"
                text="Once you've legally created your dog walking or pet sitting business, you’ll need to get some other things in place."
            />
            <ImageBoxes>

                <TopImageBox image="location" color={color.red3}>
                    <h4>Location of your Dog Walking or Pet Sitting business</h4>
                    <p>
                        Your business location depends entirely on the type
                        of canine business you’re running. If you’re walking dogs, you only need a place to administer your business, like a small home office. If you’re running
                        a doggy daycare or a groomer, you may well need
                        a specialized facility. It’s best to start small so you
                        can prove out your dog business before committing to longer-term, expensive leases, rents or fees.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.red3}>
                    <h4>Marketing Your Dog Walking or Pet Sitting Business</h4>
                    <p>
                        Marketing will be a huge part of your dog walking, pet sitting or other business. Naturally, you will need an awesome website, but you'll also need to get branding, digital ads, social media accounts and other channels in place. Most of your advertising will
                        be local, and you may want to get involved with local animal shelters, dog events and similar to get the word out.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        To start with, you will probably be running your business by yourself. Don’t think about hiring anyone else until you have a good customer base and can afford to expand.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software and Process</h4>
                    <p>
                        The right software and processes will make running your dog walking or pet sitting business much easier. See our list of the best apps and software at the end of this guide.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-4" color={color.green3}>
                    <h4>Equipment for Your Dog Walking or Pet Sitting business</h4>
                    <p>
                        Like the location, your equipment needs will vary depending on the type of business you run. A dog walking business might only need leashes, collars and treats, whereas a groomer will need all sorts of specialized tools and products.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finances and Taxes</h4>
                    <p>
                        If you’re set up as an LLC or corporation, you will need a separate business bank account for your canine concern. Additionally, you will also need
                        to keep careful bookkeeping records and file business and personal taxes. Here at Incfile we can even help you file your taxes.
                    </p>
                </TopImageBox>

            </ImageBoxes>
        </Container>
    </WrapperContainer>
);

const WrapperContainer = styled.div`
    background: rgb(255,255,255);
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

  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 970px) {
    width: 970px;
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
    top: 220px;
`;

export default SettingBusiness;
