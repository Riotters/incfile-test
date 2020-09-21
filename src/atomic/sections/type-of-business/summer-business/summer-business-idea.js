import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import OvalSvg from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import AdventagesWithLongText from "../../../molecules/mixed-blocks/adventages-with-long-text";
import {Paragraph} from "../../../atoms/typography/paragraph";

const SummerBusinessIdea = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg2/>
        </Oval2>
        <Service>
            <TextCenterLayout headlineWidth={770} textWidth={770} headline="Summer Business Ideas - What Type of Business Should You Start?"
                              text="Some businesses are especially well-suited to being run on a seasonal basis. Here are some great ideas:"/>
            <Container>

                <AdventagesBox>
                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={1}
                        title="Tutoring and Coaching"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="use-an-incfile-network-atorney-blue"
                        className="containerMargin"
                    >
                        <Paragraph mixed={true}>
                            With kids being out of school, they and their parents may be looking for extra practice for
                            sports, hobbies or academics. You can take advantage by offering private lessons.
                        </Paragraph>
                    </AdventagesWithLongText>

                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={2}
                        title="Babysitting and Childcare Services"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="provide-babysitting-services"
                        className="containerMargin"
                    >
                        <Paragraph mixed={true}>
                            Because kids can’t go to school or daycare in the summer months, some parents might want
                            additional help looking after their children.
                        </Paragraph>
                    </AdventagesWithLongText>

                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={3}
                        title="Yard Work and Chores"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="yard-work-and-chores-02"
                        className="containerMargin"
                    >
                        <Paragraph mixed={true}>
                            Summer is a busy time in the yard or garden, yet many people take longer vacations away from
                            home. Think about offering weeding services, mowing lawns, watering plants or caring for
                            animals.
                        </Paragraph>
                    </AdventagesWithLongText>

                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={4}
                        title="Local Tour Guide"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="local-tour-guide"
                        className="containerMargin"
                    >
                        <Paragraph mixed={true}>
                            If you know your city or the surrounding region well, you could set up a business providing
                            interesting tours to visitors. You can even theme tours around unique local features or
                            customs.
                        </Paragraph>
                    </AdventagesWithLongText>

                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={5}
                        title="Vacation Planning and Travel Agent"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="vacation-planing-and-local-agent"
                        className="containerMargin"
                    >
                        <Paragraph mixed={true}>
                            Vacation and itinerary planning can take up an enormous amount of time. You can reduce this
                            stress and hassle for other travelers by providing booking, administration and other tourism
                            services.
                        </Paragraph>
                    </AdventagesWithLongText>

                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={6}
                        title="Airbnb or Vacation Home Host"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="airbnb-logo"
                        className="containerMargin"
                    >
                        <Paragraph mixed={true}>
                            Airbnb’s are becoming increasingly popular - if you have a property that you can fully or
                            partially rent out, summer is going to be one of the busiest times. Alternatively, you could
                            also rent out a vacation home yourself or through a property management company.
                        </Paragraph>
                    </AdventagesWithLongText>

                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={6}
                        title="Activity and Summer Camp Coordinator"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="activity-and-summer-camp-coordinator"
                        className="containerMargin"
                    >
                        <Paragraph mixed={true}>
                            Kids are looking for something fun to do over the summer season. Enriching activities or
                            summer camp experiences can be very attractive to parents and children - you may be
                            surprised at the rates you can command, especially if you're a trained educator.
                        </Paragraph>
                    </AdventagesWithLongText>
                </AdventagesBox>
            </Container>

        </Service>
    </Wrapper>
);

const Wrapper = styled.div`
    background: rgba(255,255,255,1);
    background-image: ${gradient.orange3}; 
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

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 300px;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 627px;
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

export default SummerBusinessIdea;
