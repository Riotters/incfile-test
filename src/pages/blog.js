import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Top from "../atomic/partials/blog-top"
import Container from "../atomic/container"
import ArticleCard from "../atomic/organisms/cards/blog-article-card"

const Articles = styled.section`
    display: flex;
    padding: 72px;
`;

const Blog = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top headline="Where Business Begins. Your Resource to Grow." text="The Incfile Blog" />
    <Articles>
        <Container>
            <ArticleCard />
        </Container>
    </Articles>
  </Layout>
);

export default Blog;
