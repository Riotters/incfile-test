import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import {color} from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/top-left-transparent-babyblue1.inline.svg";

const SettingBusiness = () => (
    <GreenContainer>

        <Oval>
            <GreenOval/>
        </Oval>

        <Container>
            <TextCenterLayout
                headline="How to Become an Influencer as an Instagram Business, YouTube Creator or Social Media Master"
                headlineWidth="700"
                text="If you’re interested in becoming a social media influencer, it’s worth exploring how exactly you’re going to turn your follower count and original content into a money making marketing machine."
            />
            <ImageBoxes>
                <TopImageBox image="measuring-business-success" color={color.babyblue3}>
                    <h4>Research and Track the Posts That Get Interactions to Increase Followers and Fans</h4>
                    <p>
                        Although influencer marketing is all about connecting with people, you’ll also need to rely on data and analysis to make sure you’re spending your time wisely. Experiment with different types of posts, images and interactive content. Track the posts that get you the most attention, shares and followers. Carefully analyze the content that gets you noticed, and build that into your own marketing strategy.
                    </p>
                </TopImageBox>

                <TopImageBox image="marketing-and-advertising-photographer" color={color.blue3}>
                    <h4>Build Your Own Personal Brand and Identity</h4>
                    <p>
                        Being a great social media marketer means building your own personal brand. You should be sharing authentic stories, interesting viewpoints and building connections with your followers. Make sure you have something unique and interesting to say and offer a fresh perspective in your chosen field. Learn about your followers and create content that speaks to their needs, while showing yourself in the best possible light.
                    </p>
                </TopImageBox>

                <TopImageBox image="use-the-right-social-network" color={color.purple3}>
                    <h4>Use the Right Social Networks</h4>
                    <p>
                        You can’t spread yourself too thin as an influencer, so it’s important to focus your attention on the right social networks. Brands and marketing agencies are seeking out influencers on Instagram, YouTube, and Facebook. Other networks like Twitter and Pinterest can also be popular for the right niches. We recommend starting on just one or two social media networks and building up your engagement, reputation and follower count.
                    </p>
                </TopImageBox>

                <TopImageBox image="confirm-that-a-blockchain-application-is-the-best-for-your-need" color={color.orange3}>
                    <h4>Produce Consistently Excellent Content</h4>
                    <p>
                        You’ll be defined by the content you create. Make sure you have a content strategy that shows your talent and viewpoints, while creating content of several different types to engage with your followers. Create a strong visual identity and hashtags so it’s easy to identify you.
                    </p>
                </TopImageBox>

            </ImageBoxes>
        </Container>
    </GreenContainer>
);

const GreenContainer = styled.div`
    background: rgb(255,255,255);
    padding-bottom: 100px;
    position: relative;
`;


const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 112px;
  width: 100%;

  @media(min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 1024px) {
    width: 970px;
    margin: 0 auto;
  }
`;

const GreenCurve = styled.div`
    position: absolute;
    right: -115px;
    bottom: -122px;
    width: 115px;
`;

const Oval = styled.div`
    position: absolute;
    left: 0;
    top: 0px;
    width: 720px;
    display: none;
  
      @media (min-width: 720px) {
        display: block;
      }
`;

export default SettingBusiness;
