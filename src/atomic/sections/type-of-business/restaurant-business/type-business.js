import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {typeBusiness} from "../../../../static/type-of-business/restaurant-business";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/oval-orange-4.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";

const TypeBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>

        <Container>
            <ContentCenter contentWidth={770}>
                <div>
                    <TextCenterLayout headline="Is Restaurant Entrepreneurship for You?" headlineWidth={770}/>

                    <Paragraph big>
                        Running restaurants requires resilience. You will need to combine a taste for the interesting
                        and unusual with great marketing and local presence. You will need
                        to attract patrons in a very competitive local marketplace. Then, you must create amazing
                        dishes, hire staff, acquire great chefs and create atmosphere and ambiance.
                    </Paragraph>

                    <Paragraph big style={{fontWeight: "bold", textAlign: "left"}}>
                        You can’t forget about the administrative side either.
                    </Paragraph>

                    <Paragraph big>
                        Sourcing ingredients, sorting out disputes, working out profits and more are all required. In
                        fact, running a restaurant requires one of the most well-rounded skill sets of any business you
                        might choose to go into. Along the way, you’ll learn amazing skills, develop great people
                        management techniques and build huge amounts of experience in creating and running a successful
                        business.
                    </Paragraph>
                </div>
            </ContentCenter>
        </Container>
        <Container>
            <Service>
                <ContentCenter contentWidth={770}>
                    <TextCenterLayout headlineWidth={770} headline="Business Ideas for Teens, Kids and Students"
                                      text="As we mentioned above, running a restaurant requires a huge and diverse range of skills. Among other areas, skills include:"/>
                </ContentCenter>
                <AdventagesBox>
                    <CurveWrapper>
                        <Curve color={color.orange1}/>
                    </CurveWrapper>
                    {typeBusiness.items.map(item => (
                        <Adventages
                            style={{textAlign: "center"}}
                            url={item.url}
                            urlText={item.urlText}
                            circleText={item.circleText}
                            headline={item.headline}
                            text={item.text}
                            circlePosition="center"
                            circleBackgroundColor={color.blue1}
                            circleBackgroundShadow={shadow.blue1}
                            imageName={item.imageName}
                        />
                    ))}
                </AdventagesBox>
            </Service>
        </Container>

        <Container>
            <ContentCenter contentWidth={770}>
                <div>
                    <TextCenterLayout headline="What Are the Main Challenges for a Restaurant Entrepreneur?"
                                      headlineWidth={770}/>

                    <Paragraph big>
                        There are several major challenges for any restaurant owner. These start with competition — your
                        local area only has a certain footfall, and you’re likely competing with dozens of other local
                        eateries. Although you will build up a good reputation over time, strong marketing is essential
                        in attracting patrons to your business from the start.
                    </Paragraph>

                    <Paragraph big style={{fontWeight: "bold", textAlign: "left"}}>
                        Another major issue for restaurant owners is financial management
                        and making a profit.
                    </Paragraph>

                    <Paragraph big>
                        The vast majority of payment you receive from patrons will go toward food ingredient costs
                        (30-35 percent), staff salaries and wages (30-35 percent), occupancy costs like utilities and
                        rent (5-10 percent) and other costs. After all expenses are taken into account, overall profit
                        margins typically clock in at between 2 and 6 percent.
                    </Paragraph>
                    <Paragraph big>
                        Staff management also comes with its own list of challenges. From unexpected absenteeism to
                        interpersonal conflicts, juggling staffing priorities will take up a lot
                        of your time!
                    </Paragraph>
                    <Paragraph big style={{paddingBottom: "100px"}}>
                        No two days are the same for a restaurant owner, but all those days will be long! From working
                        out menus, training staff, marketing and administration in the mornings through lunch and dinner
                        services, you can expect to start work before 8 a.m. and not finish until well after close. If
                        you open a restaurant, you need understanding family and friends...because they will not be
                        seeing much of you.
                    </Paragraph>
                </div>
            </ContentCenter>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    background: rgb(254,246,237);
    background: -moz-linear-gradient(0deg, rgba(254,246,237,1) 0%, rgba(255,255,255,1) 50%, rgba(254,246,237,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(254,246,237,1) 0%, rgba(255,255,255,1) 50%, rgba(254,246,237,1) 100%);
    background: linear-gradient(0deg, rgba(254,246,237,1) 0%, rgba(255,255,255,1) 50%, rgba(254,246,237,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fef6ed",endColorstr="#fef6ed",GradientType=1);
    padding-top: 100px;
    position: relative;
`;

const Service = styled.div`
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 970px;
  margin: 140px auto 0;
  position: relative;
 
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
`;

export default TypeBusiness;
