import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import AdventagesWithLongText from "../../../molecules/mixed-blocks/adventages-with-long-text";
import {gradient} from "../../../atoms/styles/colors";
import {Link} from "gatsby";

const TypeBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>

        <TextCenterLayout headlineWidth={770} textWidth={770}
                          headline="What Type of Fitness-Based Business Should You Start?"
                          text="There are lots of different options for the type of fitness business you can start. We’ve provided several suggestions below."/>

        <Container>
            <Service>
                <AdventagesBox>
                    <CurveWrapper>
                        <Curve color={color.orange1}/>
                    </CurveWrapper>

                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={1}
                        title="Think About Your Main Skills"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="star-01"
                        width="100%"
                    >
                        <Paragraph>
                            We’ve all got skills we could turn into business ideas, and it’s time to harness them into
                            your own business. Start by looking at the various parts of your life and writing down your
                            talents and areas you’re good at.
                        </Paragraph>
                        <Paragraph>
                            This doesn’t just have to be formal training like home improvement or bookkeeping — it could
                            also include other skills like writing or cooking. Make sure to capture a good number of
                            skills across various areas like training, qualifications, work, social, hobbies, etc.
                        </Paragraph>
                    </AdventagesWithLongText>

                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={2}
                        title="Think About Your Interests"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="business-licence-search-copy-5"
                        width="100%"
                    >
                        <Paragraph>
                            Similar to how you explored your skills, start thinking about the things that inspire you —
                            your passions and interests. These are the things you choose to do in your spare time. They
                            could be hobbies and pastimes or things you care about and think about often. Look at the
                            social media groups you belong to, what you chat about with your friends, or the books and
                            other media that you consume for inspiration.
                        </Paragraph>
                    </AdventagesWithLongText>

                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={3}
                        title="Decide What Really Matters to You"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="decide-what-really-matters-to-you"
                        width="100%"
                    >
                        <Paragraph>
                            The most successful businesses happen because the founder has a great idea that they care
                            about. Even if you’re awesome at Excel spreadsheets, you’re not going to be able to sustain
                            a business doing data analysis if they don’t interest you.
                        </Paragraph>
                        <Paragraph>
                            Go through each of your skills and interests and prioritize them — how good are you at this
                            particular area? Could you see yourself doing it as a business? Are you enthusiastic about
                            it?
                        </Paragraph>
                    </AdventagesWithLongText>

                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={4}
                        title="Think About Your Main Skills"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="no-money"
                        width="100%"
                    >
                        <Paragraph>
                            The most successful businesses happen because the founder has a great idea that they care
                            about. Even if you’re awesome at Excel spreadsheets, you’re not going to be able to sustain
                            a business doing data analysis if they don’t interest you.
                        </Paragraph>
                        <Paragraph>
                            Go through each of your skills and interests and prioritize them — how good are you at this
                            particular area? Could you see yourself doing it as a business? Are you enthusiastic about
                            it?
                        </Paragraph>
                        <Paragraph mixed={true}>
                            <ul style={{paddingLeft: "20px"}}>
                                <li>
                                    Nonfiction writing on veganism, classic cars
                                    or fitness
                                </li>
                                <li>
                                    Programming a vegan, car or fitness app
                                </li>
                            </ul>
                        </Paragraph>

                        <Paragraph>
                            You can continue to expand into your other skill and interest areas too. Once you have a
                            collection of ideas, it’s time to start validating them to see if they would work as a
                            business.
                        </Paragraph>

                    </AdventagesWithLongText>
                </AdventagesBox>
            </Service>

        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    background-image: ${gradient.blue3}; 
    padding-top: 100px;
    position: relative;
`;

const Service = styled.div`
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 20px;
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -24px;
    top: 0px;
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 300px;
    width: 100%;
    
    svg {
        transform: scaleX(-1);
    }
    
    @media (min-width: 720px) {
        width: 720px;
    }
`;

export default TypeBusiness;
