import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import LightBoxVideo from "../../../../components/LightBox";

const About = styled.section`
  position: relative;
  padding-bottom: 48px;

  @media (min-width: 769px) {
    padding-bottom: 120px;
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <ImageContent image="business-license-requirements-about" imageWidth="350">
      <Heading size={3} bottomMargin="48">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="32">
        {content.text}
      </Paragraph>
      <LightBoxVideo thumbnailVideo="do-i-need-a-business-license-6829" videoID="ZHQDyf2-kYk" videoSchema={{
          name: "\"Do I Need A Business License?\" by Incfile",
          description: "\n" +
              "Wondering if you need a business license for your new company? Whether you’re starting a home-based business or running an early-stage startup, it’s important to make sure you fulfill all official licensing requirements in your state. \n" +
              "\n" +
              "Your required business licenses can depend on a variety of factors, including the services you offer, your location, the type of business you’re running and the products you sell. Some businesses require special permits or registrations for serving food, building structures, paying payroll, and more. Use Incfile's Business License Search Tool to narrow down the types of licenses and permits you might need, from sales tax registration to food handling permits. If you need help, you can also use our Business License Research Package to have a professional do the research for you. \n" +
              "\n" +
              "- Incfile's Business License Search Tool: https://www.youtube.com/redirect?redir_token=QUFFLUhqbmxwX0lDdUJqRlc1Y3RzQzdjY0VSZkVLWnA3UXxBQ3Jtc0tubkdBTmN6YWgzVEd0T3VYenZLcm5reFZwM0tXQ0ZkUG1uRHF4Z01wYVVfTi1VT0JDQXBSSkVtM3hzSk1MN0lOUzFBRUNEN3I3aHo1NUNLbFZ3RVNkeVhWSTljMGtiSHB1cHNTU01lSHptZTgxRWt4UQ%3D%3D&v=ZHQDyf2-kYk&q=https%3A%2F%2Fwww.incfile.com%2Fbusiness-license-tool%2F&event=video_description\n" +
              "- Business License Research Package: https://www.youtube.com/redirect?redir_token=QUFFLUhqbVAxRW5OdS1ORVExVDhTX2sydkZCTllocFFsUXxBQ3Jtc0tsOGhqRUEwS0hGbXRqRjlSRVVGNTFpQlNTX2ZrV3JPcUthN2lmYXVuanY5NTVmamhMRHV4UFdCczZVU25GT0MzTU1MRWs4MEhUTTJMVHBNcXh0NVpOdW84bVlBTjNpaFlsQ3MyWi1xMktUVWo0azduOA%3D%3D&v=ZHQDyf2-kYk&q=https%3A%2F%2Fwww.incfile.com%2Fbusiness-license-research-package%2F&event=video_description\n",
          uploadDate: "2020-07-04",
          duration: "1:00",
          interactionCount: "582",
      }} />
    </ImageContent>
  </About>
);

export default AboutSection;
