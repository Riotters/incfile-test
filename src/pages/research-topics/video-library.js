import React from "react";
import styled from "styled-components";
import { color } from "../../atomic/atoms/styles/colors";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/blog-top";
import Container from "../../atomic/container";
import StartBusinessCard from "../../atomic/organisms/cards/start-business-card";
import Path from "../../atomic/molecules/blocks/video-lib-path";
import ContentCard from "../../atomic/organisms/cards/help-center-content-card";
import Articles from "../../atomic/sections/articles";
import Service from "../../atomic/organisms/cards/research-topics-service-card";
import Tools from "../../atomic/organisms/cards/research-topics-tools-card";
import Tags from "../../atomic/organisms/cards/research-topics-tags-card";

const Wrapper = styled.section`
  padding: 72px 0;
  background-color: ${color.grey5};
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;

  @media (min-width: 769px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const Single = styled.div`
  display: flex;
  flex-direction: column;

  #disqus_thread {
    padding-top: 48px;
  }
`;

const Sidebar = styled.div`
  width: 100%;
  padding-top: 50px;
`;

const Sticky = styled.div`
  position: sticky;
  top: 100px;

  & > div {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

const Related = styled.div``;

const VideoLibrary = () => {
  return (
    <Layout>
      <SEO title="Business Videos & Resources | Incfile Video Library" description="Find helpful videos on a variety of business topics, from starting an LLC to getting a business license." />
      <Top headline="Help Center" text="Instant answers. What can we help with?" imageName="mrs-bulb-main-header-object-business-checklist-8435.png" bgColor="orange" />
      <Wrapper>
        <Container>
          <Content>
            <Single>
              <Path />
              <ContentCard />
            </Single>
            <Sidebar>
              <Sticky>
                <StartBusinessCard />
                <Service />
                <Tools />
                <Tags />
              </Sticky>
            </Sidebar>
          </Content>
          <Related />
        </Container>
        <Articles />
      </Wrapper>
    </Layout>
  );
};

export default VideoLibrary;
