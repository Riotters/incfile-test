import React from "react";
import styled from "styled-components";
import { color } from "../atomic/atoms/styles/colors";
import { followUs } from "../static/blog";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Top from "../atomic/partials/blog-top";
import Container from "../atomic/container";
import NewsletterCard from "../atomic/organisms/cards/blog-newsletter-card";
import FollowUs from "../atomic/organisms/cards/blog-follow-us";
import Path from "../atomic/molecules/blocks/video-lib-path";
import ContentCard from "../atomic/organisms/cards/help-center-content-card";
import Articles from "../components/partials/sections/articles";

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

const Article = () => {
  let disqusConfig = {
    //url: `${config.siteUrl+location.pathname}`,
    url: `https://riotters.github.io/incfile-test/article/`,
    identifier: "1",
    title: "title",
  };
  return (
    <Layout>
      <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
      <Top headline="Help Center" text="Instant answers. What can we help with?" imageName="business-checklist" bgColor="orange" />
      <Wrapper>
        <Container>
          <Content>
            <Single>
              <Path />
              <ContentCard />
            </Single>
            <Sidebar>
              <Sticky>
                <NewsletterCard />
                <FollowUs content={followUs} />
              </Sticky>
            </Sidebar>
          </Content>
          <Related />
          <Articles />
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Article;
