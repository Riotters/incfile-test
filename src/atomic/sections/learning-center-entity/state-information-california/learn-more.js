import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import BoxedButton from "../../../molecules/buttons/boxed-normal-weight";
import ContentCenter from "../../../partials/content-center";
import { learnMore } from '../../../../static/state-corporation/general';

const LearnMore = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  background-color: ${color.green3};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  width: 100%;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const LearnMoreSection = ({ className, data }) => {
    const [learnmores, setLearnMores] = React.useState(learnMore);

    React.useEffect(() => {
        if (data?.prices) {
            let state = data.prices.state;
            let covert = state.toLowerCase().replace(' ', '-');
    
            setLearnMores(prevState => {
                let newState = { ...prevState };
                newState.header = `Learn more about starting a business in ${state}`;
                newState.buttons[0].url = `/${covert}-corporation/how-to-name-your-corporation/`;

                return newState;
            })
        }
    }, [data]);

    return (
        <LearnMore className={className}>
            <HeadingCenter headline={learnmores.header} headlineWidth="670" text={learnmores.text} bottomMargin="80" />
            <ContentCenter>
                <Grid>
                    {learnmores.buttons.map((button, i) => (
                        <BoxedButton key={i} content={button} ellipsis />
                    ))}
                </Grid>
            </ContentCenter>
        </LearnMore>
    );
}

export default LearnMoreSection;
