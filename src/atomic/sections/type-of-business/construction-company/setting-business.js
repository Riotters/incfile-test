import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import {Link} from "gatsby";

const SettingBusiness = () => (
    <WrapperContainer>

        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg/>
        </Oval2>

        <TextCenterLayout
            headline="Setting up Your Construction Business and Business Operations"
            headlineWidth={770}
            textWidth={770}
            text="Once you've legally created your construction business, you’ll need to get some other things in place."
        />

        <Container>

            <ImageBoxes>
                <TopImageBox image="display-ads" color={color.purple3}>
                    <h4>Marketing Your Construction Business</h4>
                    <p>
                        Marketing will be a huge part of your construction business. Naturally, you will need an awesome
                        website, but you'll also need specialized marketing
                        so you can find the best channels to your clients.
                        In many cases this may be areas like trade magazines, conferences and networking events.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-4" color={color.green3}>
                    <h4>Construction Equipment</h4>
                    <p>
                        In addition to a computer or laptop, you will need many specialized tools for your construction
                        business. As well as hand tools, you may also require cranes, diggers and other heavy machinery.
                        In almost all cases, you should be able to lease or rent any equipment, especially if you only
                        need
                        it for a small job.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        To begin with, you may want to hire independent contractors and other tradesmen for your fledgling construction company. Once you get a good idea
                        of demand for your construction services, you can branch out into hiring permanent employees.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software and Processes</h4>
                    <p>
                        Construction entrepreneurs make extensive use
                        of software; see our great list of the top apps at the end of this guide. There’s also plenty of specialized software you can use to make planning and managing any construction project a little bit easier.
                    </p>
                </TopImageBox>

                <TopImageBox image="location" color={color.red3}>
                    <h4>Location</h4>
                    <p>
                        Although you can likely do your planning from home, you’ll probably be spending most of your time
                        on a building site. In some cases, you might even want a small office space so you can conduct meetings with other tradesmen, suppliers, architects or engineers.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees"
                             color={color.yellow3}>
                    <h4>Finances and Taxes</h4>
                    <p>
                        You will need a separate business bank account
                        for your construction business. You might also want
                        to consider a business credit card. Additionally, you will also need to keep careful bookkeeping records and file business and personal taxes. Here at Incfile <Link to="https://www.incfile.com/business-accounting/">we can even help you file your taxes</Link>.
                    </p>
                </TopImageBox>

            </ImageBoxes>
        </Container>
    </WrapperContainer>
);

const WrapperContainer = styled.div`
    background: rgb(255,255,255);
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 50%, #f2f6ff);
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
    top: 50%;
    width: 100%;
    
    svg {
        transform: scaleX(-1);
    }
  
    @media (min-width: 420px){
        width: 420px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    top: 394px;
    width: 100%;
  
  @media (min-width: 570px){
    width: 570px;
  }
`;

export default SettingBusiness;
