import React from "react";
import styled from "styled-components";
import { color } from "../atomic/atoms/styles/colors";
import { articles, followUs } from "../static/blog";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Top from "../atomic/partials/blog-top";
import Container from "../atomic/container";
import NewsletterCard from "../atomic/organisms/cards/blog-newsletter-card";
import Searchbar from "../atomic/organisms/forms/blog-search-articles";
import FollowUs from "../atomic/organisms/cards/blog-follow-us";
import Path from "../atomic/molecules/blocks/article-path";
import ArticleSingle from "../atomic/organisms/cards/article-single";
import Articles from "../components/partials/sections/articles";

const Wrapper = styled.section`
    padding: 72px 0;
    background-color: ${color.grey5};
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;

    @media(min-width: 768px) {
        grid-template-columns: 2fr 1fr;
    }
`

const Single = styled.div`
    display: flex;
    flex-direction: column;
`;

const Sidebar = styled.div`
    width: 100%;

    & > div {
        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }
`

//todo components
const Disqus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    border-radius: 5px;
    background-color: ${color.grey3};
    margin-top: 48px;

    h2 {
        color: ${color.grey2};
    }
`;
const Related = styled.div``;


const Article = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top headline="Where Business Begins. Your Resource to Grow." text="The Incfile Blog" imageName="business-checklist"/>
    <Wrapper>
        <Container>
            <Content>
                <Single>
                    <Path />
                    <ArticleSingle />
                    <Disqus>
                        <h2>Disqus</h2>
                    </Disqus>
                </Single>
                <Sidebar>
                    <Searchbar />
                    <NewsletterCard />
                    <FollowUs content={followUs} />
                </Sidebar>
            </Content>
            <Related />
            <Articles />
        </Container>
    </Wrapper>
  </Layout>
);

export default Article;
