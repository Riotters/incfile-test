import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
import {Heading} from "../../../atoms/typography/heading";

const TheArtOfBootstrapping = () => (
    <GreenContainer>

        <Oval>
            <OvalSvg />
        </Oval>

        <TextCenterLayout
            headline="The Art of Bootstrapping"
            headlineWidth={770}
            textWidth={770}
            text="If you’re going to bootstrap your business, you’ll need to learn the art of the hustle. Here are some tips for making your money go further, keeping costs down and generating that all-important revenue."
        />

        <Container>
            <ImageBoxes>

                <TopImageBox image="additional-accounting-fees" imageAlt="Strong research abilities" color={color.red3}>
                    <Heading size={3} template={4}>Stay Away From Loans and Debts</Heading>
                    <p>
                        If possible, don’t go into debt to start your business. That means no putting expenses on credit cards, taking out a bank loan or remortgaging your home. Likewise, try to avoid borrowing money from family
                        or friends.
                    </p>
                </TopImageBox>

                <TopImageBox image="understand-where-every-penny-is-going" imageAlt="Powerful attention to detail" color={color.green3}>
                    <Heading size={3} template={4}>Understand Where Every Penny Is Going</Heading>
                    <p>
                        Make sure you understand exactly how you’re spending money. Review your finances every day, including your income, spending, cash flow, emergency savings and more. Having a separate business-only <a className="partner_link" data-name="Bank of America" href="https://utility.bankofamerica.com/alliance/?formid=IF1" target="_blank" rel="noopener noreferrer" >bank account</a> can help you see things more clearly. If you don’t need to spend the money, don’t spend the money.
                    </p>
                </TopImageBox>

                <TopImageBox image="using-your-knowledge" imageAlt="Excellent forecasting abilities" color={color.blue3}>
                    <Heading size={3} template={4}>Don't Outsource What You Can Learn Yourself</Heading>
                    <p>
                        If you don’t have money to hire others, you will need to learn skills yourself. Fortunately, there are lots of great courses, videos, interactive guides and books to teach you almost any talent. Again, you will want to prioritize the areas that will have the greatest beneficial impact on your business.
                    </p>
                </TopImageBox>

                <TopImageBox image="how-ready-are-you-to-start-a-business" imageAlt="Good math skills" color={color.blue3}>
                    <Heading size={3} template={4}>Launch as Soon as You Can</Heading>
                    <p>
                        You need a business model that lets you get your product or service out there as soon as possible. You don’t need to be perfect before you launch; you just need to be “good enough.” Work out what “good enough” looks like, and when you have a product
                        or service that meets those needs, put it into the world. You can always refine and adjust toward perfection later.
                    </p>
                </TopImageBox>

                <TopImageBox image="measuring-business-success" imageAlt="Excellent forecasting abilities" color={color.babyblue3}>
                    <Heading size={3} template={4}>Know Your Profit Margins</Heading>
                    <p>
                        A healthy profit margin is essential to your success. Work out exactly how much money goes into the products and services you sell - that includes the base cost, packing, shipping, distribution, customer service and more. It also includes shared costs that your business is responsible for like utilities, rent, software, hardware and other areas.
                    </p>
                </TopImageBox>

                <TopImageBox image="total-revenue-from-sales" imageAlt="Excellent forecasting abilities" color={color.yellow3}>
                    <Heading size={3} template={4}>Maximize Your Return on Investment</Heading>
                    <p>
                        Only spend money on activities or things that are going to either help you create more revenue
                        or reduce your costs. If an expense isn’t going
                        to accomplish either of those things, don’t spend the cash. You will also want to prioritize your expenses and put off non-essential spending for as long as possible.
                    </p>
                </TopImageBox>

                <TopImageBox image="work-out-your-personal-budget" imageAlt="Excellent forecasting abilities" color={color.purple3}>
                    <Heading size={3} template={4}>Work Out Your Personal Budget</Heading>
                    <p>
                        Your business has to make enough money for you
                        to survive, and that means you need to take money out as a salary you can live on. Calculate exactly how much money you need to live, and work that into your business as your minimum salary.
                    </p>
                </TopImageBox>

                <TopImageBox image="executive-relationship-and-culture-coaching" imageAlt="entrepreneur" color={color.blue3}>
                    <Heading size={3} template={4}>Partner With Other Entrepreneurs</Heading>
                    <p>
                        If you need expertise but don’t want to do something yourself, look for other small businesses with those skills and see if you can exchange services. Entrepreneurs are often happy to barter - perhaps you can get a designer to build a website for you
                        if you take care of their social media marketing.
                    </p>
                </TopImageBox>
            </ImageBoxes>
        </Container>
    </GreenContainer>
);

const GreenContainer = styled.div`
    background: rgb(255,255,255);
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
    top: 668px;
    width: 100%;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

export default TheArtOfBootstrapping;
