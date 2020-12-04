import React from "react";
import styled from "styled-components";
import ArrowLink from "../../../molecules/buttons/text";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/idcard.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";
import LightBoxVideo from "../../../../components/LightBox";

const About = styled.section`
  position: relative;
  padding-bottom: 64px;

  p {
    color: ${color.grey2};
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-28">
      <OvalSVG />
    </Oval>
    <ImageContent image="envelope-ein">
      <Paragraph big bottomMargin="48">
        {content.text}
      </Paragraph>
      <LightBoxVideo thumbnailVideo="how-to-get-tax-id-3437" videoID="8AuLOTqFHQ4" bottomMargin="64" videoSchema={{
        name: "\"How to Get an EIN / Tax ID Number for your Business\" by Incfile",
        description: "\n" +
            "Your EIN or Tax ID number tells the IRS who you are. It’s used for just about everything, including filing taxes, opening a bank account for your business, applying for credit and loans, and properly documenting payroll for your employees.\n" +
            "\n" +
            "Turns out, there are a lot of abbreviations for Tax IDs. You might see people refer to Tax ID numbers as an EIN (\"employer identification number\"). You might also notice people pop an “F” in front of EIN for an FEIN number. In this case, the ‘F’ stands for \"federal.\"\n" +
            "\n" +
            "To get a Tax ID for your business, you can apply online through the EIN application system on the IRS website. Or if you'd rather not go through the hassle of applying directly with the IRS, then Incfile can obtain one on your behalf. \n" +
            "\n" +
            "The service is included for free as part of Incfile's Gold and Platinum business formation packages. And if you need it as a standalone service, Incfile can offer you that as well. We handle all the paperwork and the interaction with the IRS so you can focus on building your business.\n" +
            "\n" +
            "We can even check your Tax ID off of your to-do list in ONE business day. How’s that for simple? \n" +
            "\n" +
            "Additional Resources: \n" +
            "https://www.youtube.com/redirect?v=8AuLOTqFHQ4&event=video_description&redir_token=QUFFLUhqbEFGdUczVWpFR2lzcUkwVVdjYkFZNTVsb3BsUXxBQ3Jtc0trQURUWk1mcjJVdkItVWlvbkF5OG43b0FyUVZST0lyRV9CdXkxYzBuLTJyNWVXam1QaGlGdkF4VjY5Z3VOc19iZUV0c196NWxMTjl3WUpRYVNrYWxvaDlzdGwzTlI3dTI0Slkxb05CNjFCQTFkbGFtdw%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fmanage-your-company%2Ftax-id-ein%2F\n" +
            "https://www.youtube.com/redirect?v=8AuLOTqFHQ4&event=video_description&redir_token=QUFFLUhqbi1UX1pJU2NTczk2RWRYOFA1Mk5KVHhINWJ5UXxBQ3Jtc0ttcUdLN0otUU9KSmtsMGFfdWJxd3IzQlI3WFBlTnJjSDVET0hzdkFGUWV6dkJwTk9SMjNUcXRqRE9JTGlJcElWbDE3Tm9FT0ZPTmZBTzZDdW9lUWhNSkZ0OGtYR3p6cUt0TW1xOTRkVC1Sek9XOVZWZw%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fblog%2Fpost%2Fneed-purchase-ein-incfile-can-file-ein%2F\n" +
            "https://www.youtube.com/redirect?v=8AuLOTqFHQ4&event=video_description&redir_token=QUFFLUhqa0g1NlU2bU4tSW1xNDByMTRLM1FfcXVMUUUwUXxBQ3Jtc0tsNDVlY2lmZG9DNjRjN3B3SlFDRWlpd00xeW90S3R1Tjd2UHNGNVRBMkFBRWxzMzN4NDBZVU9QU1VuVWx5bk8wVlloQmNoOXBITkFWQ3BaeUxacWlMbi1VVG9TWUUwUzlyM2FLV0hYeGJjaVZRT2t3NA%3D%3D&q=https%3A%2F%2Fwww.incfile.com%2Fblog%2Fpost%2Fbehind-scenes-incfile-obtaining-ein%2F\n",
        uploadDate: "2020-07-27",
        duration: "1:11",
        interactionCount: "718",
      }} />
      <IconTextColorBox color={color.blue3} Icon={IconSVG} content={content.box} bottomMargin="72" rounded curve />
      <Heading size={3} bottomMargin="24">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text2}
      </Paragraph>
      <IconListColorBox color={color.orange3} content={content.box2} bottomMargin="56" rounded />
      <Heading size={3} bottomMargin="24">
        {content.header2}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text3}
      </Paragraph>
      <Heading size={3} bottomMargin="24">
        {content.header3}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text4}
      </Paragraph>
      <ArrowLink bottomMargin="0" content={content.link} />
    </ImageContent>
  </About>
);

export default AboutSection;
