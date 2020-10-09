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
    <WrapperContainer>

        <Oval>
            <OvalSvg/>
        </Oval>

        <TextCenterLayout
            headline="Setting Up Your Bookstore Business Operations"
            headlineWidth={770}
            textWidth={770}
            text="Once you've legally created your bookstore business, you’ll need to get some other things in place."
        />

        <Container>

            <ImageBoxes>

                <TopImageBox image="location" color={color.red3}>
                    <h4>Location of Your Bookstore</h4>
                    <p>
                        The location of your bookstore will be vital. You’ll need somewhere that has good passing
                        traffic with enough space so you can display a decent selection of books. You’ll also need
                        storage space for your inventory. Talk to other local business owners
                        to establish the best places in your city and inquire with commercial real estate agents so you
                        can figure your lease and rental costs into your business plan.
                    </p>
                </TopImageBox>

                <TopImageBox image="display-ads" color={color.red3}>
                    <h4>Marketing Your Bookstore</h4>
                    <p>
                        Marketing will be a huge part of your bookstore business. Naturally, you will need an awesome
                        website, but you'll also need to get branding, newsletters, digital ads, social media accounts
                        and other channels in place. You should leverage your local community offerings in your
                        marketing to make your bookstore attractive to your niche customers.
                    </p>
                </TopImageBox>

                <TopImageBox image="we-doubled-the-size-of-customer-service" color={color.orange3}>
                    <h4>Employees</h4>
                    <p>
                        You may not need employees to begin with, especially if you’re operating on a low budget. As
                        your bookstore expands and becomes more popular, consider taking on some part-time help to cover
                        busy periods. You may also hire temporary employees during busy times of year like the holidays.
                    </p>
                </TopImageBox>

                <TopImageBox image="state-filling-fees" color={color.yellow3}>
                    <h4>Finances and Taxes</h4>
                    <p>
                        You will need a separate business bank account
                        for your bookstore business. You might also want
                        to consider a business credit card. Additionally, you will also need to keep careful bookkeeping
                        records and file business and personal taxes. Here at Incfile we can even <Link to="/">help you file your
                        taxes</Link>.
                    </p>
                </TopImageBox>

                <TopImageBox image="side-4" color={color.green3}>
                    <h4>Stock and Equipment for Bookstores</h4>
                    <p>
                        You will need a fair amount of fixtures, fittings, equipment and inventory to get going. You’ll
                        need
                        to furnish your store, including bookshelves and displays. You’ll also need a cash register and
                        a counter
                        for taking payment. You may need to carpet and paint the space, and you will also need a good
                        stock
                        of books.
                    </p>
                </TopImageBox>

                <TopImageBox image="software" color={color.blue3}>
                    <h4>Software and Processes</h4>
                    <p>
                        Bookstore entrepreneurs make extensive use
                        of software; see our great list of the top apps at the end of this guide.
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
  max-width: 970px;
  
  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 970px) {
    margin: 0 auto;
  }
`;

const Oval = styled.div`
    position: absolute;
    left: 0;
    top: 394px;
    width: 100%;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

export default SettingBusiness;
