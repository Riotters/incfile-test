import React from "react"
import styled from "styled-components"
import Container from "../../container"
import TextCenterLayout from "../layouts/text-center"
import Benefit from "../../benefit"

const Wrapper = styled.div`
  padding-top: 75px;
  padding-bottom: 64px;
  position: relative;

  @media (min-width: 768px) {
    padding-top: 250px;
  }
`

const Flex = styled.div`
  display: flex;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  padding-left: 100px;

  h2 {
      text-align: left;
      max-width: 410px;
      padding-bottom: 40px;
  }

  p {
      padding-bottom: 40px;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
`



const Help = () => {

  return (
    <Wrapper>
        <Container>
            <Flex>
                <Icon>
                    Here will be an image some day
                </Icon>
                <Content>
                    <h2>Corporate LLC Kits & Stock Certificates.</h2>
                    <p>
                        All Corporations are required to maintain a "corporate minute book" that holds things like the formation paperwork, licenses, resolutions and meeting minutes.
                        It is one of the first things requested when your company is audited or being sold.
                    </p>
                </Content>
            </Flex>
        </Container>
    </Wrapper>
  )
}

export default Help