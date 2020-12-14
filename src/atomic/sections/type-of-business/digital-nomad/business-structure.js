import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { color } from "../../../../components/styles/colors";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import ArrowSVG from "../../../../images/arrow.inline.svg";
import IconCircle from "../../../../components/icons/circle";
import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import LimitedIcon from "../../../../images/icons/limited-liability-company-or-llc.inline.svg";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import LLCIcon from "../../../../images/icons/limited-liability-company.inline.svg";
import Button from "../../../molecules/buttons/button";
import OvalSvg from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import { shadow } from "../../../atoms/styles/shadows";
import { gradient } from "../../../atoms/styles/colors";
import RegisteredAgentIcon from "../../../../images/icons/registered-agent-service.inline.svg";
import { Link } from "gatsby";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .colorbox {
    margin-bottom: 48px;
  }
`;

const OrangeContainer = styled.div`
  background: rgb(255, 255, 255);
  background-image: ${gradient.orange3};
  padding-bottom: 100px;
  position: relative;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 211px;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  right: 0;
  top: calc(50% - 285px);
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const CoachBusinessStructure = () => (
  <OrangeContainer>
    <Oval>
      <OvalSvg />
    </Oval>

    <Oval2>
      <OvalSvg />
    </Oval2>

    <BusinessOwnerResponsibilities>
      <ImageContent image="unique-business-green" paddingTop="60">
        <Heading size={2} template={3} left>
          Starting Your Digital Nomad Business
        </Heading>
        <Paragraph big>Now you have all the background information for your digital nomad business, it's time to make it into a reality. That starts by choosing the right structure or "legal entity" for your business. In the US, there are four main business structures. They are:</Paragraph>

        <TextBlockWithImage
          SvgImage={HandsIcon}
          textBackgroundColor="transparent"
          imageBackgroundColor={color.white}
          imageShadowColor={shadow.white2}
          imageShadowOpacity={0.5}
          boxShadow={false}
          paddingLeft={0}
          style={{ marginTop: "40px" }}
          circleShadowY={40}
          circleShadowBlure={80}
          width={100}
          widthUnit="%"
        >
          <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
            Sole Proprietorship
          </Paragraph>

          <Paragraph big>This is the "default" business structure and is what your business will be if you decide not to create a more formal structure. We don't recommend this type of business as it doesn't give you the legal protections you need.</Paragraph>
        </TextBlockWithImage>

        <TextBlockWithImage
          SvgImage={LimitedIcon}
          textBackgroundColor="transparent"
          imageBackgroundColor={color.white}
          imageShadowColor={shadow.white2}
          imageShadowOpacity={0.5}
          boxShadow={false}
          paddingLeft={0}
          style={{ marginTop: "40px" }}
          circleShadowY={40}
          circleShadowBlure={80}
          width={100}
          widthUnit="%"
        >
          <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}>Limited Liability Company or LLC</Link>
            </Paragraph>

          <Paragraph big>The most common type of business entity. An LLC is fast, simple and inexpensive to setup and maintain. It protects your personal finances and assets and is a great way to start your real estate</Paragraph>
        </TextBlockWithImage>

        <TextBlockWithImage
          SvgImage={LLCIcon}
          textBackgroundColor="transparent"
          imageBackgroundColor={color.white}
          imageShadowColor={shadow.white2}
          imageShadowOpacity={0.5}
          boxShadow={false}
          paddingLeft={0}
          style={{ marginTop: "40px" }}
          circleShadowY={40}
          circleShadowBlure={80}
          width={100}
          widthUnit="%"
        >
          <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=LLC"}>Series LLC</Link>
            </Paragraph>
          <Paragraph big>This is a special type of LLC entity that's only available in certain states. It allows you to create "mini" LLCs, each with their own limited liability and separate assets, under the umbrella of a master LLC.</Paragraph>
        </TextBlockWithImage>

        <TextBlockWithImage
          SvgImage={PlaneIcon}
          textBackgroundColor="transparent"
          imageBackgroundColor={color.white}
          imageShadowColor={shadow.white2}
          imageShadowOpacity={0.5}
          boxShadow={false}
          paddingLeft={0}
          style={{ marginTop: "40px" }}
          circleShadowY={40}
          circleShadowBlure={80}
          width={100}
          widthUnit="%"
        >
          <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=S-Corporation"}>S Corporation</Link>
            </Paragraph>

          <Paragraph big>This is a more complex type of business and isn't generally recommended for smaller organization.</Paragraph>
        </TextBlockWithImage>

        <TextBlockWithImage
          SvgImage={RockerIcon}
          textBackgroundColor="transparent"
          imageBackgroundColor={color.white}
          imageShadowColor={shadow.white2}
          imageShadowOpacity={0.5}
          boxShadow={false}
          paddingLeft={0}
          style={{ marginTop: "40px" }}
          circleShadowY={40}
          circleShadowBlure={80}
          width={100}
          widthUnit="%"
        >
          <Paragraph big style={{ color: color.blue1, fontWeight: "bold" }} mixed={true}>
              <Link to={process.env.ORDER_URL + "/form-order-now.php?entityType=C-Corporation"}>C Corporation</Link>
            </Paragraph>

          <Paragraph big>These are the largest and most complex types of businesses and are far more than the average entrepreneur or business owner will need.</Paragraph>
        </TextBlockWithImage>

        <Heading size={3}>Setting up a Business Entity as a Digital Nomad</Heading>

        <Paragraph big mixed style={{ marginBottom: 0 }}>
          As a digital nomad, you will have some unique circumstances for how you're going to setup your business. To start with, we recommend an LLC — the combination of a low administrative overhead and liability protection are great for your peace-of-mind. Secondly, you will probably want to take
          advantage of our <Link to="/manage-your-company/registered-agent">Registered Agent service</Link> - it means there will always be someone available to receive official documents, even if you're out of the country.
        </Paragraph>

        <Paragraph big style={{ marginTop: "48px" }}>
          Next, you have more choice than most entrepreneurs on which state to from your LLC in. If you're going to be in your home state and running your LLC from there for any period, that's the best place to base it. If not, you can choose to form your LLC almost anywhere. In those cases, forming
          it in a business-friendly state like Delaware could be a great idea.
        </Paragraph>
        <Paragraph big>
          Finally, think about the addresses you're going to use in the U.S. for your company. Could you use a parent or relative's house? Do you want to receive documents other than official legal documents (that would go to your registered agent) there? Answering these questions ahead of time will
          make setting up your digital nomad business much easier.
        </Paragraph>

        <Heading size={3} style={{ maxWidth: "100%" }} bottomMargin={0}>
          Taxes when Working Remotely
        </Heading>
        <Paragraph mixed big>
            <p>Living and working outside the U.S. does not exempt you from having to pay U.S. taxes.</p><br/>
            <p>There may be extra filing requirements if you hold more than $10,000 in a non-U.S. bank or investment account.</p><br/>
            <p>If you are out of the U.S. for 330 days a year, you may be able to get tax relief on some or all of your earnings. This includes the "Foreign Earned Income Exclusion," which lets Americans who live abroad exclude the first $100,000 or so that hey earn from U.S. tax liability.</p><br/>
            <p>Foreign housing may also be deductible in certain circumstances.</p><br/>
            <p>Check with the government in the country where you're earning money to see what your tax filing and liability is going to be there, and hire a local accountant</p>
        </Paragraph>


        <Button theme="primary48" width="365px" arrow content={{ url: `${process.env.ORDER_URL}/form-order-now.php`, text: `Start your business with us, today!` }} />
      </ImageContent>
    </BusinessOwnerResponsibilities>
  </OrangeContainer>
);

const SpecialBox = styled.div`
  width: 100%;
  background-color: ${color.blue3};
  margin-bottom: 8px;
  padding: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  ${(props) => props.radiusTop && "border-top-left-radius: 30px;" + "border-top-right-radius: 30px;"}

  ${(props) => props.radiusBottom && "border-bottom-left-radius: 30px;" + "border-bottom-right-radius: 30px;"}
`;

const Icon = styled.div`
  width: 49px;
`;

const Text = styled.div``;

export default CoachBusinessStructure;
