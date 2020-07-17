import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import Colorbox from "../components/color-box";
import TextCenterLayout from "../components/partials/blocks/text-center";
import styled from "styled-components";
import Top from "../components/partials/sections/top";
import ImageContent from "../components/partials/blocks/left-image-right-content";
import Articles from "../components/partials/sections/articles";
import { color, gradient } from "../components/styles/colors";
import Container from "../components/container";
import ArrowsSVG from "../images/icons/arrows.inline.svg";
import Help from "../components/partials/blocks/left-object-right-content"
import Benefits from "../components/partials/sections/benefits";
import Card from "../components/certificate-card";
import TopImageBox from "../components/top-image-box";
import { states } from "../components/states"

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  h3,
  p {
    max-width: 100%;
    padding-bottom: 24px;
  }

  h3 {
    &.pt32 {
      padding-top: 32px;
    }

    &.pt48 {
      padding-top: 48px;
    }
  }

  p {
    &.pb32 {
      padding-bottom: 32px;
    }

    &.pb40 {
      padding-bottom: 40px;
    }
  }

  .purplebox {
    margin-bottom: 48px;
  }
`;

const RequirementsByState = styled.section`
  background-image: ${gradient.blue3};
  padding-top: 100px;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .help {
    padding-bottom: 150px;
  }
`;

const Buttonsbox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Imageboxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 112px;

  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const dropdownOneOptions = [
  'LCC', 'Corporation', 'Nonprofit'
];

const dropdownTwoOptions = states.state.map(state => (state.name))

const CertificateCard = <Card headline="Change of Agent" price="49" dropdownOnePlaceholder="Select Entity Type" dropdownOneOptions={dropdownOneOptions} dropdownTwoPlaceholder="Select State" dropdownTwoOptions={dropdownTwoOptions} />;

const ChangeOfRegisteredAgent = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-change-agent" imageAlt="Mrs Bulb and changing her agent">
      <h1>Registered Agent Services: Change of Registered Agent</h1>
      <p>Incfile is a nationwide registered agent service provider you can trust.</p>
      <Buttonsbox>
        <Button href="#" theme="primary56" width="200px" arrow>
          Order Now
        </Button>
      </Buttonsbox>
    </Top>
    <BusinessOwnerResponsibilities>
      <ImageContent image="calendar" paddingTop="60">
        <p>
          If you have an LLC, then you have a registered agent since it is a requirement when forming your business entity. However, sometimes conflicts arise, 
          life events happen or reorganizing your business structure requires a change of registered agent. 
        </p>
        <Colorbox className="purplebox" theme="icon" Icon={ArrowsSVG} color={color.purple3} curve curveColor={color.babyblue1}>
          <h4>How to change a registered agent?</h4>
          <p>
            The process in changing your registered agent is fairly simple, requiring you to fill out a "Change of Registered Agent" form in your particular state. 
            The form used to process the order, the processing fee and information needed varies by state so be sure to adhere the specific requirements listed by your secretary of state.
          </p>
        </Colorbox>
        <h3>What is a Registered Agent?</h3>
        <p>
          A registered agent is someone who is registered to do business in the same state in which a business entity is established and who is appointed to receive service of process notices, 
          correspondence from the secretary of state and other official government notifications including tax forms or potential lawsuits. 
          All LLCs are required to choose a registered agent when filing with their secretary of state.
        </p>
        <h3 className="pt48">What is Required of a Registered Agent?</h3>
        <p>
          A registered agent receives tax and legal documents for your business and ensures that you don't miss important notifications regarding tax payments, lawsuits or legal activities involving your business. 
          However, a registered agent may or may not have a role in the operation of the business itself.
        </p>
        <h3 className="pt48">What Happens if I Don't Appoint Or Report a Change in Registered Agents?</h3>
        <p>
          All LLCs are required to designate a registered agent when they file with their secretary of state. Failing to do so will cause you to fall out of good standing with the state causing hefty fines. 
          If you change your registered agent without notifying the secretary of state, penalties can include license revocation, fines, and your right to enter into legal contracts and/or gain access to the state 
          court system could be revoked. Reinstatement proceedings could also include additional financial and legal hardships.
        </p>
      </ImageContent>
    </BusinessOwnerResponsibilities>
    <RequirementsByState>
      <Container>
        <div className="wrapper">
          <Help className="help" headlineWidth="450" object={CertificateCard}>
            <h2>Help file my Change of Agent</h2>
            <h4>Save your time. We'll handle the paperwork.</h4>
            <p>
              In order to change Registered Agents, you must first complete and submit a change of Registered Agent filing. This filing will allow you to stop using your current Registered Agent service and elect a new Registered Agent.
            </p>
          </Help>
          <TextCenterLayout headline="Common questions about filing a Change of Registered Agent" headlineWidth="700" />
          <Imageboxes>
            <TopImageBox image="sign" color={color.blue3}>
                <h4>Will filing a change of agent require me to sign any documents?</h4>
                <p>
                  Some states require that a member or director of the entity sign the document required to change the registered agent. If your state requires a signature we will email you a copy of the documents for signature.
                </p>
            </TopImageBox>
            <TopImageBox image="cost" color={color.green3}>
                <h4>How much does it cost to file a Change of Agent?</h4>
                <p>
                  The state fee varies by state. Our service fee to change the agent is $0. To review the fee in your state click on the “order now” button and select the state and entity type.
                </p>
            </TopImageBox>
            <TopImageBox image="needs" color={color.orange3}>
                <h4>Do I need to explain why I am changing registered agents?</h4>
                <p>
                    No. Most states just require the name of the business entity, the current registered agent name and address, the name and address of the new registered agent, and the name and information of the authorized person 
                    filling out the form on behalf of the entity.
                </p>
            </TopImageBox>
            <TopImageBox image="foreign" color={color.blue3}>
                <h4>Can I choose a new registered agent from outside of my state?</h4>
                <p>
                  Most states require that the registered agent be a resident of the state who is authorized to do business in the state. However, most states allow businesses to hire "service companies" (such as an attorney or accountant) 
                  to provide registered agent services on their behalf.
                </p>
            </TopImageBox>
            <TopImageBox image="alarm" color={color.red3}>
                <h4>Is there anyway to expedite the process?</h4>
                <p>
                  The price quickly increases from $100 to $2,000 depending on how fast you need this paperwork filed. In some states, you can complete it in as little as an hour.
                </p>
            </TopImageBox>
            <TopImageBox image="doors" color={color.yellow3}>
                <h4>How do I resign my position as an LLC registered agent?</h4>
                <p>
                  Registered agent may resign by sending notice to the business entity and the secretary of state.
                </p>
            </TopImageBox>
            <TopImageBox image="clock" color={color.orange3}>
                <h4>How Long does it take to file an Annual Report?</h4>
                <p>
                  The filing time is dependent on the governing state agency and varies by state. In general, non-expedited filings takes about two to three weeks.
                </p>
            </TopImageBox>
            <TopImageBox image="receive" color={color.babyblue3}>
                <h4>What will I receive when the Change of Agent is completed?</h4>
                <p>
                  The governing state agency will typically return a copy of the filed document which is then mailed to the client.
                </p>
            </TopImageBox>
          </Imageboxes>
        </div>
      </Container>
    </RequirementsByState>
    <Benefits />
    <Articles />
  </Layout>
);

export default ChangeOfRegisteredAgent;
