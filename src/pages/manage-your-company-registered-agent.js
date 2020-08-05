import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../components/button";
import Colorbox from "../components/color-box";
import TextCenterLayout from "../components/partials/blocks/heading-center";
import TextLeftLayout from "../components/partials/blocks/heading-left";
import styled from "styled-components";
import Top from "../components/partials/sections/top";
import ImageContent from "../components/partials/blocks/left-image-right-content";
import Articles from "../components/partials/sections/articles";
import { color, gradient } from "../components/styles/colors";
import Container from "../components/container";
import OkSVG from "../images/icons/ok.inline.svg";
import Help from "../components/partials/blocks/left-object-right-content"
import Benefits from "../components/partials/sections/benefits";
import Card from "../components/certificate-card";
import TopImageBox from "../components/top-image-box";
import { states } from "../components/states"
import Accordion from "../components/accordion";
import Adventages from "../components/adventages"

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

  .colorbox {
    margin-bottom: 48px;
  }
`;

const Service = styled.div`
  background-color: ${color.babyblue3};
  padding: 64px 0;
`;

const RequirementsByState = styled.section`
  padding-top: 100px;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
      width: 100%;
      max-width: 770px;
      text-align: left;
      padding-top: 48px;
    }
  }
`;

const OrangeBackground = styled.div`
  background-image: ${gradient.orange3};
`;

const Imageboxes = styled.div`
  padding-top: 112px;
  padding-bottom: 92px;

  & > h4 {
    text-align: center;
  }

  & > p {
    width: 100%;
    max-width: 770px;
    margin: 0 auto;
    padding-bottom: 32px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    width: 100%;
    max-width: 970px;
    padding: 40px 0;
    margin: 0 auto;
  
    @media(min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const FAQ = styled.div`
  padding-top: 75px;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const AdventagesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
  max-width: 970px;
  padding: 140px 0;
  margin: 0 auto;
`;

const adventages = {
  items: [
    {
      headline: "Handling all of Your Documents",
      text: "An always-available Registered Agent who will receive state and IRS mail correspondence, documents and legal proceedings on your LLC’s or corporation’s behalf"
    },
    {
      headline: "Online Dashboard",
      text: "A digital dashboard where you can access, store and retrieve any information we’ve received for your business"
    },
    {
      headline: "Tailored Notifications",
      text: "Email and SMS notification whenever we receive documents for your business"
    },
    {
      headline: "Automatic Mail Forwarding",
      text: "Automatic mail forwarding of all legal correspondence, documentation and information directly to you."
    },
    {
      headline: "First Year Free",
      text: "The first year free ($119 a year after), when you incorporate with Incfile through any of our business packages."
    },
  ]
}

const faqs = {
  items: [
    {
      question: "How will I be notified if service of process is received?",
      answer: "Your service will be managed through the Registered Agent Dashboard any service of process that is received by us will be uploaded to the dashboard and an email notification will sent informing you that the documents have been uploaded to your account.",
    },
    {
      question: "How will I know when it is time to renew my Registered Agent?",
      answer: "The Registered Agent service is renewed annually. An email with renewal instructions will be sent one month prior to the due date. The service may be renewed anytime through the Registered Agent Dashboard.",
    },
    {
      question: "How much will it cost to renew my Registered Agent service?",
      answer: "The annual fee for the Registered Agent service is $119.",
    },
    {
      question: "Who will be responsible for updating the Registered Agent information with the state?",
      answer: "Filing the Change of Agent for your company will be offered within the order process. If you select this option the state fee will be added to the cost of the Registered Agent service. If you elect to not have us update the Registered Agent on file it will be your responsibility to submit the necessary paperwork.",
    },
    {
      question: "What is the name and address of my Registered Agent?",
      answer: "The Registered Agent information will be listed in the confirmation email. It may also be obtained by logging into the Registered Agent Dashboard after the order is placed.",
    },
    {
      question: "What happens if I require the signature of the Registered Agent?",
      answer: "If the signature of the Registered Agent is required please contact our support staff for assistance. We are typically able to return the signed documents to our clients electronically however some states require original signatures on official documents. If an original signature is required we will mail you the signed documents.",
    },
  ],
};

const RegisteredAgent = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-registered-agent" imageAlt="Mrs Bulb register agent service">
      <h1>Registered Agent Service</h1>
      <p>Dependable, Easy, and Free for the First Year When You Incorporate with Incfile. A nationwide Registered Agent service provider you can trust at an affordable price. Available in all U.S. states.</p>
      <Buttonsbox>
        <Button to="#" theme="primary56" width="200px" arrow>
          Order Now
        </Button>
      </Buttonsbox>
    </Top>
    <BusinessOwnerResponsibilities>
      <ImageContent image="chart" paddingTop="60">
        <p>
          Doing business is complicated enough. A Registered Agent service gives you the convenience, reassurance and accountability to help manage your vital legal documents and avoid complications or errors. 
        </p>
        <Colorbox className="colorbox" theme="icon" Icon={OkSVG} color={color.orange3} curve curveColor={color.orange1}>
          <h4>Why Should You Incorporate with Incfile</h4>
          <p>
            Signing up for the Incfile Registered Agent service also gives you access to your own business dashboard, so when you’re ready to form your business, or even just register a DBA, 
            it’s all at your fingertips! We’re making it easy, so you can focus on the important things.
          </p>
        </Colorbox>
        <p>
          And why is your first year free if you incorporate with Incfile? We care about growing entrepreneurship, because we’re entrepreneurs ourselves. We don’t want anything to stop you getting started.
        </p>
        <h3 className="pt48">Does My Business Need a Registered Agent?</h3>
        <p>
          Yes. Every LLC or corporation is required to have an official Registered Agent (sometimes called a statutory agent, resident agent or agent for service of process) in each state where it does business. 
          A Registered Agent serves as a permanent physical presence in the state, and the Registered Agent address is where the state government can contact you with legal and tax correspondence, 
          including franchise tax forms, notices of litigation and required annual report forms.
        </p>
        <h3 className="pt48">Why Use a Registered Agent Service?</h3>
        <p>
          Registered Agent services like the one offered by Incfile help you avoid the hassles and inconvenience of managing all of your own documentation from the state. 
          They also help preserve your privacy by setting up a public-facing address for your business that is separate from your home. When you use a Registered Agent service, 
          any official legal or tax correspondence will be forwarded to your personal, private contact address. Incfile’s Registered Agent service also helps you stay on top 
          of deadlines (such as required annual reports) to keep your business in good standing.
        </p>
      </ImageContent>
    </BusinessOwnerResponsibilities>
    <Service>
      <Container>
        <TextCenterLayout headline="Incfile’s Resident Agent Service Includes" headlineWidth="950" />
        <AdventagesBox>
          {adventages.items.map(item => (
            <Adventages headline={item.headline} text={item.text} />
           ))}
        </AdventagesBox>    
        <TextCenterLayout 
        headline="Registered Agent Service" 
        text='A good Registered Agent service can help you respond quickly in the event of a lawsuit, avoid missed deadlines, 
        fines and penalties for non-compliance, and otherwise manage the details of paperwork so you can focus on running your business. 
        Set yourself up for success with a Registered Agent looking out for you. Join the Incfile community of entrepreneurs.'
        linkText="Learn more" 
        linkUrl="#" 
        headlineWidth="700" />
      </Container>
    </Service>
    <RequirementsByState>
      <Container>
        <div className="wrapper">
          <TextLeftLayout 
          headline="Why Is Incfile Offering a Free Registered Agent?" 
          text="Incfile already offers free LLC and other business formation—why is a free Registered Agent, included, too? Generally brands seek to find ways to charge you more for products and services. 
          Incfile approaches things differently. Why? Because we care greatly about nurturing and supporting entrepreneurship. 
          We believe entrepreneurs are the driving force behind our economy's growth by creating clever solutions to solve the world's problems." 
          headlineWidth="770" 
          />
          <Imageboxes>
            <h4>The Incfile package</h4>
            <div className="wrapper">
              <TopImageBox image="free-business" color={color.orange3}>
                  <h4>Free business formation</h4>
                  <p>
                    We offer forming your LLC or a corporation free of charge. We take care of the paperwork while you can focus on running your business!
                  </p>
              </TopImageBox>
              <TopImageBox image="free-agent" color={color.purple3}>
                  <h4>Free registered agent</h4>
                  <p>
                    Incfile’s registered agent service cover all areas like filing forms to the IRS or receiving government communication.
                  </p>
              </TopImageBox>
            </div>
            <p>
              Our radical offerings like $0 business formation and a free Registered Agent with incorporation are a direct result of client loyalty. 
              Because we have loyal clients like you, we’re able to continue to grow our business and improve efficiencies with our technology. 
              That means we can offer the best value around. Why would we do that? Because entrepreneurship is our M.O.
            </p>
            <p>We’re entrepreneurs for entrepreneurs.</p>
          </Imageboxes>
        </div>
      </Container>
    </RequirementsByState>
    <OrangeBackground>
      <FAQ>
        <Container>
          <div className="wrapper">
            <TextCenterLayout 
              headline="Common questions about establishing Registered Agent service" 
              headlineWidth="750" 
            />
            <Accordion faq={faqs}/>
          </div>
        </Container>
      </FAQ>
      <Benefits />
    </OrangeBackground>
    <Articles />
  </Layout>
);

export default RegisteredAgent;
