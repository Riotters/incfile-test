import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import styled from "styled-components"
import { color, gradient } from '../components/styles/colors'
import { shadow } from "../components/styles/shadows"
import Button from "../components/button"
import ArrowLink from "../components/arrow-link"
import ArrowButton from "../components/arrow-button"
import IconCircle from "../components/icons/circle"
import ArrowSVG from "../images/arrow.inline.svg"
import State from "../components/icons/state"
import Rating from "../components/icons/rating"
import CheckBlueSVG from "../images/circle-status-check-blue.inline.svg"
import CheckSVG from "../images/circle-status-check.inline.svg"
import ExSVG from "../images/circle-status-x.inline.svg"
import Top from "../components/partials/top"
import Footer from "../components/partials/footer"
import NavigationTabs from "../components/tabs/navigation-tabs"
import AboutTabs from "../components/tabs/tabs"
import Accordion from "../components/tabs/accordion"
import Searchbox from "../components/searchbar"
import Label from "../components/form/label"
import Input from "../components/form/input"
import Radio from "../components/form/radio"
import Checkbox from "../components/form/checkbox"
import Dropdown from "../components/form/dropdown"
import CheckText from "../components/static-check/text-only"
import CheckBox from "../components/static-check/text-boxed"
import Checklist from "../components/checklist/checklist"
import TopImageBox from "../components/top-image-box"

const Section = styled.div`
    width: 100%;
    position: relative;
    background-color: ${color.grey4};
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    alig-items: center;
    padding-top: 50px;

    @media (min-width: 768px) {
        padding-top: 150px;
    }

    & > h1, h2, h3, h4, h5, hs6 {
        width: 100%;
        max-width: 600px;
    }

    & > h1 {
        text-align: left;
        margin: 35px 0 25px;
    }

    & > h2 {
        text-align: left;
        margin: 35px 0 25px;
    }

    & > h3 {
        margin: 25px 0 15px;
    }

    & > h4 {
        margin: 20px 0;
    }

    & > h5 {
        margin: 15px 0 0;
    }

    & > h6 {
        margin: 15px 0 0;
    }
`;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => Math.round(props.columns/2)}, 1fr);
    grid-gap: 30px;

    @media(min-width: 768px) {
        grid-template-columns: repeat(${props => props.columns}, 1fr);
    }
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const GreyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.grey4};
    padding: 15px;

    @media (min-width: 768px) {
        padding: 25px 75px;
    }
`;

const DarkGreyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.grey1};
    padding: 15px;

    @media (min-width: 768px) {
        padding: 25px 75px;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${color.grey4};

    &::before {
        content: '';
        display: block;
        padding-top: 100%;
    }
`;

const Color = styled.div`
    width: 100%;
    border: 1px solid rgba(0,0,0,.1);
    background: ${props => props.color};
    box-shadow: ${props => props.shadow};
    border-radius: 3px;

    &::before {
        content: '';
        display: block;
        padding-top: 100%;
    }
`;

const ComponentsPage = () => (
  <Layout>
    <SEO
      title="Components"
      description="Incfile components presentation page."
    />
    <Container>
        <Wrapper>
            <h1>Components!</h1>
            <h2>Typography</h2>
            <h3>Header</h3>
            <h6>H1</h6>
            <h1>The five boxing wizards jump quickly</h1>
            <h6>H2</h6>
            <h2>The quick brown fox jumps over the lazy dog</h2>
            <h6>H3</h6>
            <h3>The five boxing wizards jump quickly</h3>
            <h6>H4</h6>
            <h4>The quick brown fox jumps over the lazy dog</h4>
            <h6>H5</h6>
            <h5>The five boxing wizards jump quickly</h5>
            <h6>H6</h6>
            <h6>The quick brown fox jumps over the lazy dog</h6>
            <h2>Colors</h2>
            <h3>Primary colors</h3>
            <GridWrapper columns="7">
                <Color color={color.black}/>
                <Color color={color.grey1}/>
                <Color color={color.grey2}/>
                <Color color={color.grey3}/>
                <Color color={color.grey4}/>
                <Color color={color.grey5}/>
                <Color color={color.white}/>
            </GridWrapper>
            <h3>Color 1</h3>
            <GridWrapper columns="7">
                <Color color={color.babyblue1}/>
                <Color color={color.blue1}/>
                <Color color={color.green1}/>
                <Color color={color.orange1}/>
                <Color color={color.purple1}/>
                <Color color={color.red1}/>
                <Color color={color.yellow1}/>
            </GridWrapper>
            <h3>Color 2</h3>
            <GridWrapper columns="7">
                <Color color={color.babyblue2}/>
                <Color color={color.blue2}/>
                <Color color={color.green2}/>
                <Color color={color.orange2}/>
                <Color color={color.purple2}/>
                <Color color={color.red2}/>
                <Color color={color.yellow2}/>
            </GridWrapper>
            <h3>Color 3</h3>
            <GridWrapper columns="7">
                <Color color={color.babyblue3}/>
                <Color color={color.blue3}/>
                <Color color={color.green3}/>
                <Color color={color.orange3}/>
                <Color color={color.purple3}/>
                <Color color={color.red3}/>
                <Color color={color.yellow3}/>
            </GridWrapper>
            <h3>Gradient 2</h3>
            <GridWrapper columns="7">
                <Color color={gradient.babyblue3}/>
                <Color color={gradient.blue3}/>
                <Color color={gradient.green3}/>
                <Color color={gradient.orange3}/>
                <Color color={gradient.purple3}/>
                <Color color={gradient.red3}/>
                <Color color={gradient.yellow3}/>
            </GridWrapper>
            <h3>Gradient 3</h3>
            <GridWrapper columns="7">
                <Color color={gradient.babyblue3}/>
                <Color color={gradient.blue3}/>
                <Color color={gradient.green3}/>
                <Color color={gradient.orange3}/>
                <Color color={gradient.purple3}/>
                <Color color={gradient.red3}/>
                <Color color={gradient.yellow3}/>
            </GridWrapper>
            <h2>Shadows</h2>
            <h3>White</h3>
            <GridWrapper columns="7">
                <Color color={gradient.white} shadow={shadow.white1} />
                <Color color={gradient.white} shadow={shadow.white2} />
            </GridWrapper>
            <h3>Color 1</h3>
            <GridWrapper columns="7">
                <Color color={color.babyblue1} shadow={shadow.babyblue1} />
                <Color color={color.blue1} shadow={shadow.blue1} />
                <Color color={color.green1} shadow={shadow.green1} />
                <Color color={color.orange1} shadow={shadow.orange1} />
                <Color color={color.purple1} shadow={shadow.purple1} />
                <Color color={color.red1} shadow={shadow.red1} />
                <Color color={color.yellow1} shadow={shadow.yellow1} />
            </GridWrapper>
            <h3>Color 2</h3>
            <GridWrapper columns="7">
                <Color color={color.babyblue2} shadow={shadow.babyblue2} />
                <Color color={color.blue2} shadow={shadow.blue2} />
                <Color color={color.green2} shadow={shadow.green2} />
                <Color color={color.orange2} shadow={shadow.orange2} />
                <Color color={color.purple2} shadow={shadow.purple2} />
                <Color color={color.red2} shadow={shadow.red2} />
                <Color color={color.yellow2} shadow={shadow.yellow2} />
            </GridWrapper>
            <h2>Buttons</h2>
            <h3>Primary</h3>
            <FlexWrapper>
                <Button theme="primary40" arrow="yes" margin="0 0 30px 0" marginMD="auto 30px auto 0" >Subscribe</Button>
                <Button theme="primary48" arrow="yes" margin="0 0 30px 0" marginMD="auto 30px auto 0" >Start Now</Button>
                <Button theme="primary56" arrow="yes">Start Now</Button>
            </FlexWrapper>
            <h3>Secondary</h3>
            <FlexWrapper>
                <Button theme="secondary40" arrow="yes" margin="0 0 30px 0" marginMD="auto 30px auto 0" >Subscribe</Button>
                <Button theme="secondary48" arrow="yes" margin="0 0 30px 0" marginMD="auto 30px auto 0" >Start Now</Button>
                <Button theme="secondary56" arrow="yes">Start Now</Button>
            </FlexWrapper>
            <h3>Text</h3>
            <FlexWrapper>
                <ArrowLink>Learn more</ArrowLink>
            </FlexWrapper>
            <h3>Additional</h3>
            <FlexWrapper>
                <ArrowButton />
            </FlexWrapper>
            <h2>Icons</h2>
            <h3>Statuses</h3>
            <GridWrapper columns="7">
                <IconWrapper>
                    <IconCircle transform="scale(-1)" circleColor={color.blue3} iconColor={color.blue1}>
                        <ArrowSVG />
                    </IconCircle>
                </IconWrapper>
                <IconWrapper>
                    <IconCircle transform="rotate(-90deg)" circleColor={color.orange3} iconColor={color.orange1}>
                        <ArrowSVG />
                    </IconCircle>
                </IconWrapper>
                <IconWrapper>
                    <CheckBlueSVG />
                </IconWrapper>
                <IconWrapper>
                    <IconCircle circleColor={color.blue1} iconColor={color.white}>
                        1
                    </IconCircle>
                </IconWrapper>
                <IconWrapper>
                    <IconCircle circleColor={color.grey5} border={color.grey3} />
                </IconWrapper>
                <IconWrapper>
                    <IconCircle theme="empty" circleColor={color.grey3} />
                </IconWrapper>
                <IconWrapper>
                    <IconCircle>
                        Lorem
                    </IconCircle>
                </IconWrapper>
                <IconWrapper>
                    <CheckSVG />
                </IconWrapper>
                <IconWrapper>
                    <ExSVG />
                </IconWrapper>
            </GridWrapper>
            <h3>State</h3>
            <GridWrapper columns="7">
                <IconWrapper>
                    <State />
                </IconWrapper>
            </GridWrapper>
            <h3>Rating</h3>
            <GridWrapper columns="7">
                <IconWrapper>
                    <Rating>icon</Rating>
                </IconWrapper>
                <IconWrapper>
                    <Rating>icon</Rating>
                </IconWrapper>
            </GridWrapper>
            <h2>Sections</h2>
            <h3>Header</h3>
        </Wrapper>
    </Container>

    <Section>
            <Top 
                headline="Starting a nonprofit can truly help make the world better"
                text="Start for $0 + state fee. Learn how forming an LLC, an
                S-Corporation, an C-Corporation, or a Non Profit will impact
                both your liability and taxation."
                imageName="MrsBulbNonprofit"
                imageAlt="Mr Bulb with seedling"
            />
    </Section>

    <Container>
        <Wrapper>
                <h3>Footer</h3>
        </Wrapper>
    </Container>

        <Section>
            <Footer />
        </Section>

    <Container>
        <Wrapper>
            <h3>Navigation Tab</h3>
            <GreyWrapper>
                <NavigationTabs />
            </GreyWrapper>
            <h3>Tab</h3>
            <h4>Column</h4>
            <GreyWrapper>
                <AboutTabs />
            </GreyWrapper>
            <h4>Grid</h4>
            <GreyWrapper>
                <AboutTabs layout="grid" columns="3"/>
            </GreyWrapper>

            <h3>FAQ</h3>
            <GreyWrapper>
                <Accordion />
            </GreyWrapper>

            <h3>Search</h3>
            <GridWrapper columns="2">
                <GreyWrapper>
                    <Searchbox />
                </GreyWrapper>
            </GridWrapper>

            <h3>Form</h3>
            <h4>Input</h4>
            <GridWrapper columns="2">
                <GreyWrapper>
                    <Label>
                        Label
                        <a href="#">Link</a>
                        <Input placeholder="Text"/>
                    </Label>
                </GreyWrapper>
            </GridWrapper>
            <h4>Radio</h4>
            <GridWrapper columns="2">
                <GreyWrapper>
                    <Label align="center" margin="0 16px 0 0">
                        <Radio name="1" checked/>
                        Radio 1
                    </Label>
                    <Label align="center">
                        <Radio name="1"/>
                        Radio 2 
                    </Label>
                </GreyWrapper>
            </GridWrapper>
            <h4>Checkbox</h4>
            <GridWrapper columns="2">
                <GreyWrapper>
                    <Label align="center" margin="0 16px 0 0">
                        <Checkbox checked/>
                        Checkbox
                    </Label>
                    
                    <Label align="center" margin="0 16px 0 0">
                        <Checkbox />
                        Checkbox
                    </Label>
                </GreyWrapper>
            </GridWrapper>
            <h4>Dropdown</h4>
            <GridWrapper columns="2">
                <GreyWrapper>
                    <Dropdown placeholder="text" options={["option1", "option2", "option3"]}/>
                </GreyWrapper>
            </GridWrapper>
            <h3>Static Check</h3>
            <h4>Text only</h4>
            <GridWrapper columns="2">
                <GreyWrapper>
                    <CheckText>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus volutpat nisi sed faucibus. Quisque luctus orci nec nisl vestibulum ultrices.
                        </p>
                    </CheckText>
                </GreyWrapper>
                <DarkGreyWrapper>
                    <CheckText theme="dark">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus volutpat nisi sed faucibus. Quisque luctus orci nec nisl vestibulum ultrices.
                        </p>
                    </CheckText>
                </DarkGreyWrapper>
            </GridWrapper>
            <h4>Text boxed</h4>
            <GridWrapper columns="2">
                <GreyWrapper>
                    <CheckBox>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus volutpat nisi sed faucibus. Quisque luctus orci nec nisl vestibulum ultrices.
                        </p>
                    </CheckBox>
                </GreyWrapper>
                <GreyWrapper>
                    <CheckBox isRed>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus volutpat nisi sed faucibus. Quisque luctus orci nec nisl vestibulum ultrices.
                        </p>
                    </CheckBox>
                </GreyWrapper>
            </GridWrapper>
            <h3>Checklist</h3>
            <GreyWrapper>
                <Checklist />
            </GreyWrapper>
            <h3>Top Image Box</h3>
            <GreyWrapper>
                <TopImageBox image="clock">
                    <h4>How Long does it take to file an Annual Report?</h4>
                    <p>
                        The filing time is dependent on the governing state agency. Filing times vary by state it is therefore important that the report is filed well in advance of the due date in order to avoid any potential late filing fees.
                    </p>
                </TopImageBox>
            </GreyWrapper>
        </Wrapper>
    </Container>
  </Layout>
)

export default ComponentsPage