import React from "react";
import styled from "styled-components";
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
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

    #disqus_thread {
        padding-top: 48px;
    }
`;

const Sidebar = styled.div`
    width: 100%;
`

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
    }
    return (
        <Layout>
            <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
            <Top headline="Where Business Begins. Your Resource to Grow." text="The Incfile Blog" imageName="business-checklist"/>
            <Wrapper>
                <Container>
                    <Content>
                        <Single>
                            <Path />
                            <ArticleSingle />
                            <Disqus config={disqusConfig} />
                        </Single>
                        <Sidebar>
                            <Sticky>
                                <Searchbar />
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
    )
};

export default Article;
