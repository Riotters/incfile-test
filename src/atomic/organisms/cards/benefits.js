import React from "react";
import styled from "styled-components";
import Card from "../../molecules/mixed-blocks/top-image-box";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    width: 100%;
    max-width: 970px;
    position: relative;
    margin-top: 96px;

    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      padding: 16px;
      overflow: unset;

      @media (min-width: 576px) {
        padding: 32px;  
      }
    }
`


const BenefitsCards = ({ className, content }) => {
  return (
    <Wrapper className={className} content={content}>
        {/* {content.map(card => (
            <Card content={card}/>
        ))} */}
        <Card color={color.blue3} image="clock">
          <h4>{content[0].header}</h4>
          <p>{content[0].text}</p>
        </Card>
        <Card color={color.purple3} image="clock">
          <h4>{content[1].header}</h4>
          <p>{content[1].text}</p>
        </Card>
        <Card color={color.green3} image="clock">
          <h4>{content[2].header}</h4>
          <p>{content[2].text}</p>
        </Card>
        <Card color={color.yellow3} image="clock">
          <h4>{content[3].header}</h4>
          <p>{content[3].text}</p>
        </Card>
    </Wrapper>
  )
}

export default BenefitsCards;