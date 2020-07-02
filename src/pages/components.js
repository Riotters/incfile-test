import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import styled from "styled-components"
import { color, gradient } from '../components/styles/colors'
import { shadow } from "../components/styles/shadows"
import Button from "../components/button"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    alig-items: center;

    h2 {
        text-align: left;
        margin: 35px 0 25px;
    }

    h3 {
        margin: 25px 0 15px;
    }
`;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-gap: 30px;
`;

const FlexWrapper = styled.div`
    display: flex;
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
            <FlexWrapper>
                <Button theme="primary40" arrow="yes" margin="0 30px auto 0">Subscribe</Button>
                <Button theme="primary48" arrow="yes" margin="0 30px auto 0">Start Now</Button>
                <Button theme="primary56" arrow="yes">Start Now</Button>
            </FlexWrapper>
        </Wrapper>
    </Container>
  </Layout>
)

export default ComponentsPage
