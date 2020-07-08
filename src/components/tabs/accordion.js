import React from "react"
import styled from "styled-components"
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs"
import { motion } from "framer-motion"
import ArrowSVG from "../../images/arrow-circle.inline.svg"
import CurveSVG from "../../images/orange-curve.inline.svg"
import VisibilitySensor from "./../VisibilitySensor"

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-top: 80px;

  @media (min-width: 768px) {
    width: auto;
    padding: 25px 29px 0;
  }
`

const Curve = styled.div`
  height: 25px;
  width: 25px;
  position: absolute;
  top: -16px;
  left: -13px;

  @media (min-width: 768px) {
    top: 0;
    left: 0;
  }
`

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 770px;
`

const TabBox = styled.div`
  box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
  margin-bottom: 7px;

  .accordion-panel {
    overflow: hidden;
  }
`

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;

  margin-bottom: 7px;
  padding: 15px;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 24px 40px 40px 80px;
  }

  p {
    color: #4e4e4e;
    font-family: Avenir;
    font-size: 16px;
    line-height: 19px;
    max-width: 650px;
    text-align: left;
  }

  h3 {
    margin-bottom: 48px;
  }
`

const Button = styled.button`
  height: 80px;
  width: 100%;
  line-height: 80px;
  color: #4e4e4e;
  background: #fff;
  display: flex;
  cursor: pointer;

  position: relative;
  border-radius: 5px;
  overflow: hidden;
  border: none;

  &.active {
    border-radius: 5px 5px 0 0;
    font-weight: 600;

    svg {
      transform: rotate(0deg);
    }
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding-right: 40px;

  span {
    color: #4e4e4e;
    font-family: Avenir;
    font-size: 16px;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  opacity: 0.75;

  svg {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }
`

const cn = (...args) => args.filter(Boolean).join(" ")

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <Button
      className={cn("accordion-tab", isActive && "active")}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

const panel = {
  hidden: { height: 0 },
  visible: { height: "auto" },
}

const Panel = ({ children }) => {
  const isActive = usePanelState()

  return (
    <motion.div
      className="accordion-panel"
      animate={isActive ? "visible" : "hidden"}
      transition={{ ease: "easeOut", duration: 0.3 }}
      variants={panel}
    >
      {children}
    </motion.div>
  )
}

const Accordion = () => {
  return (
    <VisibilitySensor partialVisibility once>
      {({ isVisible }) => (
        <Wrapper className={isVisible ? "slideUp enter" : "slideUp"}>
          <Curve>
            <CurveSVG />
          </Curve>
          <Tabs>
            <TabsWrapper>
              <TabBox>
                <Tab>
                  <Icon>
                    <ArrowSVG />
                  </Icon>
                  <Content>
                    <span>
                      What is an Advisory Group and do I need one for my
                      nonprofit?
                    </span>
                  </Content>
                </Tab>
                <Panel>
                  <PanelWrapper className="panel1">
                    <p>
                      In oculis quidem faciunt, ut labore et via procedat oratio
                      quaerimus igitur, quid bonum esse ratione intellegi posse
                      et molestiae non recusandae itaque negat opus esse
                      appetendum, alterum aspernandum sentiamus alii autem,
                      quibus ego assentior, cum a philosophis compluribus
                      permulta dicantur, cur verear, ne ferae.
                    </p>
                  </PanelWrapper>
                </Panel>
              </TabBox>
              <TabBox>
                <Tab>
                  <Icon>
                    <ArrowSVG />
                  </Icon>
                  <Content>
                    <span>How do I create a budget for my nonprofit?</span>
                  </Content>
                </Tab>
                <Panel>
                  <PanelWrapper className="panel2">
                    <p>
                      Donec quis tortor erat. Suspendisse felis nisi, lobortis
                      sit amet enim quis, sodales consequat massa. Morbi
                      pellentesque odio odio, quis lobortis sem tincidunt
                      accumsan. Duis blandit elementum arcu at elementum. Nunc
                      quis leo posuere, accumsan sapien a, accumsan urna.
                      Suspendisse dapibus semper quam, ac consequat nisi egestas
                      sed. Phasellus eget eros ipsum. Phasellus turpis odio,
                      cursus id quam eu, tincidunt varius diam. Cras dictum
                      ornare lacus, et hendrerit odio volutpat a. Fusce sodales
                      malesuada pellentesque. Nullam sit amet velit quis sem
                      volutpat ultricies. Pellentesque tristique neque quis
                      metus aliquam sollicitudin. Fusce tincidunt mollis dolor.
                      Proin vel odio quis justo ultrices lobortis ut sed metus.
                    </p>
                  </PanelWrapper>
                </Panel>
              </TabBox>
              <TabBox>
                <Tab>
                  <Icon>
                    <ArrowSVG />
                  </Icon>
                  <Content>
                    <span>
                      Do I need to have a mission statement for my nonprofit??
                    </span>
                  </Content>
                </Tab>
                <Panel>
                  <PanelWrapper className="panel3">
                    <p>
                      Aliquam sit amet viverra quam. Proin viverra ante ut
                      consectetur molestie. Nunc ut ullamcorper massa. Nunc sed
                      tempus enim. Phasellus non tincidunt eros. Vestibulum nec
                      urna tortor. Morbi sed metus pellentesque, laoreet erat a,
                      dictum ligula. Nulla eu odio mi. Aliquam faucibus ligula
                      vitae dui viverra egestas. Aliquam et nunc urna.
                    </p>
                  </PanelWrapper>
                </Panel>
              </TabBox>
            </TabsWrapper>
          </Tabs>
        </Wrapper>
      )}
    </VisibilitySensor>
  )
}
export default Accordion
